const express = require('express');
const router = express.Router();
const { getAllStores, addStore } = require('../controllers/storeControllers');

router.route("/")
.get(getAllStores)
.post(addStore);

module.exports = router;
