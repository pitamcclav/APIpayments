const express = require('express');
const router = express.Router();

// Import controller
const {getContacts} = require('../controllers/contactController');
const {createContact} = require('../controllers/contactController');
const {updateContact} = require('../controllers/contactController');
const {deleteContact} = require('../controllers/contactController');
const {getContact} = require('../controllers/contactController');

router.get('/', getContacts);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);
router.get('/:id', getContact);


module.exports = router;