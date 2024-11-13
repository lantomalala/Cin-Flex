const express = require('express');
const router = express.Router();
const Film = require('../models/Film');  // Import du modèle Film

// Route GET pour récupérer tous les films
router.get('/', async (req, res) => {
    try {
        const films = await Film.find();
        res.json(films);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route POST pour ajouter un nouveau film
router.post('/', async (req, res) => {
    const newFilm = new Film({
        film_id: req.body.film_id,
        title: req.body.title,
        description: req.body.description,
        release_year: req.body.release_year,
        rental_duration: req.body.rental_duration,
        rental_rate: req.body.rental_rate,
        length: req.body.length,
        replacement_cost: req.body.replacement_cost,
        rating: req.body.rating,
        special_features: req.body.special_features,
        fulltext: req.body.fulltext,
        last_update: req.body.last_update
    });
    
    try {
        const savedFilm = await newFilm.save();
        res.json(savedFilm);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route GET pour récupérer un film spécifique par `film_id`
router.get('/:filmId', async (req, res) => {
    try {
        const film = await Film.findOne({ film_id: req.params.filmId });
        res.json(film);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route DELETE pour supprimer un film spécifique par `film_id` exemple: http://localhost:3030/customer/673498ba916866318da08161
router.delete('/:filmId', async (req, res) => {
    try {
        const removedFilm = await Film.deleteOne({ film_id: req.params.filmId });
        res.json(removedFilm);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route PATCH pour mettre à jour un film spécifique par `film_id`
router.patch('/:filmId', async (req, res) => {
    try {
        const updatedFilm = await Film.updateOne(
            { film_id: req.params.filmId },
            { $set: req.body }  // Mise à jour des champs fournis dans `req.body`
        );
        res.json(updatedFilm);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
