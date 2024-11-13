const express = require('express');
const router = express.Router();
const Rental = require('../models/Rental');  // Import du modèle Rental

// Route GET pour récupérer tous les rentals (locations)
router.get('/', async (req, res) => {
    try {
        const rentals = await Rental.find()
        res.json(rentals);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route POST pour ajouter un nouveau rental (location)
router.post('/', async (req, res) => {
    const newRental = new Rental({
        rental_date: req.body.rental_date,
        inventory_id: req.body.inventory_id,
        customer_id: req.body.customer_id,
        return_date: req.body.return_date,
        staff_id: req.body.staff_id,
        last_update: req.body.last_update
    });

    try {
        const savedRental = await newRental.save();
        res.json(savedRental);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route GET pour récupérer un rental spécifique par `rental_id`
router.get('/:rentalId', async (req, res) => {
    try {
        const rental = await Rental.findOne({ rental_id: req.params.rentalId }).populate('inventory_id customer_id staff_id');
        res.json(rental);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route DELETE pour supprimer un rental spécifique par `rental_id`
router.delete('/:rentalId', async (req, res) => {
    try {
        const removedRental = await Rental.deleteOne({ rental_id: req.params.rentalId });
        res.json(removedRental);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route PATCH pour mettre à jour un rental spécifique par `rental_id`
router.patch('/:rentalId', async (req, res) => {
    try {
        const updatedRental = await Rental.updateOne(
            { rental_id: req.params.rentalId },
            { $set: req.body }  // Mettre à jour les champs passés dans `req.body`
        );
        res.json(updatedRental);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
