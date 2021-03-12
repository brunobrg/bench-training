const express = require('express');
const { list, add, get, update, delete: myDelete  } = require('./controllers')
const router = express.Router();

router.get('/', list);
router.post('/', add);
router.get('/:id', get);
router.patch('/:id', update);
router.delete('/:id', myDelete);

module.exports = router;