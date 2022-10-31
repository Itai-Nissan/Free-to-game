import { userService } from '../../services/user.service'
// import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from '../services/socket.service'

export const userModule = {
    state: {
        loggedInUser: userService.getLoggedInUser(),
        user: null,
        orders: [],
        watchedUser: null
    },
    getters: {
        users({ users }) { return users },
        loggedInUser({ loggedInUser }) { return loggedInUser },
        watchedUser({ watchedUser }) { return watchedUser }
    },
    mutations: {
        addGameToList(state, { updatedOrders }) {
            state.orders = updatedOrders
        },
        removeGameFromList(state, { updatedOrders }) {
            state.orders = updatedOrders
        },
        setLoggedInUser(state, { user }) {
            state.loggedInUser = (user) ? { ...user } : null
        },
        setWatchedUser(state, { user }) {
            state.watchedUser = user
        },
        setUser(state, { user }) {
            state.user = user
        },
        removeUser(state, { userId }) {
            state.users = state.users.filter(user => user._id !== userId)
        },
    },
    actions: {
        async addToList({ commit }, game) {
            try {
                const user = await userService.saveToList(game)
                    .then((user) => {
                        commit({ type: 'setLoggedInUser', user })
                    })
                return user
            } catch (err) {
                console.log('userStore: Error in login', err)
                throw err
            }
        },
        async removeFromList({ commit }, game) {
            try {
                const user = await userService.removeFromList(game)
                    .then((user) => {
                        commit({ type: 'setLoggedInUser', user })
                    })
                return user
            } catch (err) {
                console.log('userStore: Error in login', err)
                throw err
            }
        },
        async login({ commit }, { userCred }) {
            try {
                const user = await userService.login(userCred)
                commit({ type: 'setLoggedInUser', user })
                return user
            } catch (err) {
                console.log('userStore: Error in login', err)
                throw err
            }
        },
        async signup({ commit }, { userCred }) {
            try {
                const user = await userService.signup(userCred)
                commit({ type: 'setLoggedInUser', user })
                return user
            } catch (err) {
                console.log('userStore: Error in signup', err)
                throw err
            }
        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'setLoggedInUser', user: null })
                commit({ type: 'setWatchedUser', user: null })

            } catch (err) {
                console.log('userStore: Error in logout', err)
                throw err
            }
        },
        async setUserPersonal({ commit }, { user }) {
            console.log(user.personal)
            await userService.update(user)
            // commit({ type: 'setWatchedUser', user })
            commit({ type: 'setLoggedInUser', user })

        },
        async loadAndWatchUser({ commit }, { userId }) {
            try {
                const user = await userService.getById(userId)
                commit({ type: 'setWatchedUser', user })
                commit({ type: 'setLoggedInUser', user })
                // socketService.emit(SOCKET_EMIT_USER_WATCH, userId) 
                // socketService.off(SOCKET_EVENT_USER_UPDATED)
                // socketService.on(SOCKET_EVENT_USER_UPDATED, user => {
                // })
            } catch (err) {
                console.log('userStore: Error in loadAndWatchUser', err)
                throw err
            }
        },
    }
}