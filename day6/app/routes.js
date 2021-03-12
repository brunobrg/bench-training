const express = require('express');
const { ProductController } = require('./controllers')
const router = express.Router();

router.get('/', ProductController.list);
router.post('/', ProductController.add);
router.get('/:id', ProductController.get);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

module.exports = router;