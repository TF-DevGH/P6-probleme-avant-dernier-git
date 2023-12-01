const express = require('express');
const router = express.Router();
const multer = require('../config/multer-config');

const authorize = require('../middleware/authorize');
const authMiddleware = require('../middleware/auth');
const sauceCtrl = require('../controllers/sauce'); // Utilisez un nom plus approprié, comme "sauceCtrl"

// Assurez-vous que le chemin statique est correct
router.use('/images', express.static('backend/images'));

router.get('/', authMiddleware, authorize, sauceCtrl.getAllSauces);

// Utilisez multer.single('image') ici pour la route POST
router.post('/', authMiddleware, authorize, multer, sauceCtrl.createSauce);

router.get('/:id', authMiddleware, authorize, sauceCtrl.getOneSauce);

// Utilisez multer.single('image') ici pour la route PUT
router.put('/:id', authMiddleware, authorize, multer, sauceCtrl.modifySauce);

router.delete('/:id', authMiddleware, authorize, sauceCtrl.deleteSauce);

// Exemple de route pour le like
router.post('/:id/like', authMiddleware, authorize, sauceCtrl.likeSauce);

module.exports = router;
