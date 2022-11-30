import { storageService } from './user.async.storage.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedInUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedInUser,
    getById,
    saveToList,
    removeFromList,
    update,
}

async function getById() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)) || 'null'
}

async function update(user) {
    await storageService.put(STORAGE_KEY_LOGGEDIN_USER, user)
    return user
}

async function login(userCred) {
    const users = await storageService.query(STORAGE_KEY_LOGGEDIN_USER)
    const user = users.find(user => user.username === userCred.username && user.password === userCred.password)
    if (!user) return
    return storageService.put(STORAGE_KEY_LOGGEDIN_USER, user)
}

async function signup({username, email}) {
    console.log(username)
    const user = {
        username,
        email,
        orders: [],
        personal: 'All',
    }
    return storageService.put(STORAGE_KEY_LOGGEDIN_USER, user)
}
async function logout() {
    localStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return
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



