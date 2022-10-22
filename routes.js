const express = require('express');
const controllers=require('./controllers');

const router = express.Router();

router.get('/users/:user/following/:target_user', controllers.checkFollow)

router.get('/users/:username/followers', controllers.getFollowers)

module.exports = router;