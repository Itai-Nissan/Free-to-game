import { storageService } from './async-storage-service.js';
// import { storageService } from './storage-service.js'
import axios from 'axios';


import { utilService } from './util-service.js';

const KEY = 'gamesDB';

export default {
  query,
  getById,
  remove,
  save,
};

// var gGames = _createGames();

// const axios = require("axios");



function query(filterBy) {
  return storageService.query(KEY, filterBy);
}

function getById(id) {
  // return axios.get(_getUrl(id)).then((res) => res.data);
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

function _add(game) {
  return storageService.post(KEY, game);
}

function _update(game) {
  return storageService.put(KEY, game);
}

function _createGame(name, price, labels, reviews) {
  return {
    _id: utilService.makeId(),
    name,
    price,
    labels,
    inStock: true,
    createdAt: new Date(Date.now()).toLocaleString(),
    reviews: reviews,
  };
}
