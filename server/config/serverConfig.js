const express = require('express');
const removeHTTPHeader = require('../middleware/removeHTTPHeader');
const addHTTPHeader = require('../middleware/addHTTPHeader');

const serverConfig = (app) => {
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(removeHTTPHeader);
    app.use(addHTTPHeader);
}

module.exports = serverConfig;