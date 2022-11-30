import { storageService } from './async-storage-service.js';

const KEY = 'gamesDB';

export default {
  query,
  getById,
  remove,
  save,
}

function query(filterBy, pageIdx) {
  return storageService.query(KEY, filterBy, pageIdx);
}

function getById(id) {
  return storageService.get(KEY, id);
}

function remove(id) {
  return storageService.remove(KEY, id);
}

function save(game) {
  const savedGame = game._id
    ? storageService.put(KEY, game)
    : storageService.post(KEY, game);
  return savedGame;
}