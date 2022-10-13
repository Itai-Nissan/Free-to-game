
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
        fullname: "Uzi Nissan",
        username: "uzi",
        password: "nis",
        isAdmin: true
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
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
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
    console.log(entities);
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