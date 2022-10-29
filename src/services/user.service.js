import { storageService } from './user.async.storage.service'
// import { userServiceServer } from '../../services/user.service'
// import { httpService } from './http.service'
// import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedInUser'
var gWatchedUser = null
import axios from 'axios'

export const userService = {
    login,
    logout,
    signup,
    getLoggedInUser,
    getById,
    saveToList,
    removeFromList,
}

async function getById(userId) {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)) || 'null'
}

// function remove(userId) {
//     return storageService.remove('user', userId)
//     // return httpService.delete(`user/${userId}`)
// }

async function update(user) {
    await storageService.put(STORAGE_KEY_LOGGEDIN_USER, user)
    // if (getLoggedInUser()._id === user._id) _saveLocalUser(user)
    return user
}

async function login(userCred) {
    const users = await storageService.query(STORAGE_KEY_LOGGEDIN_USER)
    const user = users.find(user => user.username === userCred.username && user.password === userCred.password)
    if (!user) return
    return storageService.put(STORAGE_KEY_LOGGEDIN_USER, user)
    // socketService.emit('set-user-socket', user._id)
}

async function signup({username, email, password}) {
    console.log(username);
    const user = {
        username,
        email,
        // password,
        orders: [],
    }
    // socketService.emit('set-user-socket', user._id)
    return storageService.put(STORAGE_KEY_LOGGEDIN_USER, user)
}
async function logout() {
    localStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.emit('unset-user-socket')
    return
}

function _saveLocalUser(user) {
    console.log(user);
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedInUser() {
    const loggedUser = JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)) || null
    if (loggedUser === null) return
    else return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)) || 'null'
}

/////////////////////////////////////////////////////////////////

//ORDERS

async function saveToList(order) {
    const user = getLoggedInUser()
    user.orders.unshift(order)
    if (user) return storageService.put(STORAGE_KEY_LOGGEDIN_USER, user)
    // socketService.emit('set-user-socket', user._id)
    return user
}

function removeFromList({ order }) {
    const user = getLoggedInUser()
    const orderId = order.id
    const idx = user.orders.findIndex((order) => order.id === orderId)
    user.orders.splice(idx, 1)
    // socketService.emit('set-user-socket', user._id)
    if (user) return storageService.put(STORAGE_KEY_LOGGEDIN_USER, user)
    return Promise.resolve(user)
}



