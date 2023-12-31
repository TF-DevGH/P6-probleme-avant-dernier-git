/*const Sauce = require('../models/Sauce');*/
/*
const fs = require('fs');

// Fonction pour créer une nouvelle sauce
exports.createSauce = (req, res, next) => {
  // À implémenter
  // Utilisez Multer pour gérer les images, autorisez le middleware, etc.
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  });
  sauce.save()
    .then(() => res.status(201).json({ message: 'Sauce enregistrée' }))
    .catch(error => res.status(420).json({ error }));
};

// Fonction pour récupérer une sauce par son ID
exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
      .then(sauce => {
        if (!sauce) {
          return res.status(404).json({ error: 'Sauce not found' });
        }
        res.status(200).json(sauce);
      })
      .catch(error => res.status(500).json({ error }));
  };

// Fonction pour mettre à jour une sauce par son ID
exports.modifySauce = (req, res, next) => {
  // À implémenter
  // Assurez-vous d'avoir le middleware d'autorisation avant cette fonction
  const sauceObject = req.file
    ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
      }
    : { ...req.body };

  Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(401).json({ error }));
};

// Fonction pour supprimer une sauce par son ID
exports.deleteSauce = (req, res, next) => {
  // À implémenter
  Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
      const filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Sauce.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Deleted!' }))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};

// Fonction pour récupérer toutes les sauces
exports.getAllSauces = (req, res, next) => {
  // À implémenter
  Sauce.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({ error }));
};
*/