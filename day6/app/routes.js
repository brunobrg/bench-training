const express = require('express');
const productController = require('./')
const router = express.Router();

router.get('/', productController.findAll);
router.post('/', productController.add);

module.exports = router;