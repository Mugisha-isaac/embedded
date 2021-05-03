const express = require('express');
const router = express.Router();

const {CreateData,readData} = require('./data.controller');

router.route('/').post(CreateData).get(readData);
