
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

let gUsers = [
    {
        _id: "gr2Y0",
        fullname: "Administrator",
        username: "admin",
        password: "admin",
        isAdmin: true
    },
    {
        _id: "gr2Y1",
        username: "uzi",
        email: "uzi@gmail.com",
        password: "nis",
        isAdmin: false,
        orders: [
            {
                _id: 1,
                orderDate: new Date,
                game: {
                    id: 540,
                    title: "Overwatch 2",
                    thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
                    genre: "Shooter",
                },
            },
            {
                _id: 2,
                orderDate: new Date,
                game: {
                    id: 517,
                    title: "Lost Ark",
                    thumbnail: "https://www.freetogame.com/g/517/thumbnail.jpg",
                    genre: "ARPG",
                },
            },
        ]
    },
]

function query(entityType) {
    // var entities = []
    var entities = gUsers || []
    // var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return Promise.resolve(entities)
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}
function post(entityType, newEntity) {
    newEntity._id = _makeId()
    console.log(newEntity);
    return query(entityType)
        .then(entities => {
            entities.unshift(newEntity)
            _save(entityType, entities)
            console.log(entities);
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    console.log(updatedEntity);
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            console.log(entities);
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            if (idx < 0) throw new Error(`Unknown Entity ${entityId}`)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}