export const storageService = {
  load,
  store,
  get,
  query,
}

function query(entityType) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || []
  return Promise.resolve(entities);
}

function load(key) {
  var val = localStorage.getItem(key)
  return (val) ? JSON.parse(val) : null
}

function store(key, val) {
  localStorage[key] = JSON.stringify(val)
}

function get(entityType, entityId) {
  return query(entityType)
    .then(entities => entities.find(entity => entity._id === entityId))
}
