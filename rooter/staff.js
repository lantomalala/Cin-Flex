const express = require('express');
const router = express.Router();
const Staff = require('../models/Staff');  // Import du modèle Staff

// Route GET pour récupérer tous les employés
router.get('/', async (req, res) => {
    try {
        const staff = await Staff.find()
        res.json(staff);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route POST pour ajouter un nouvel employé
router.post('/', async (req, res) => {
    const newStaff = new Staff({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address_id: req.body.address_id,
        email: req.body.email,
        store_id: req.body.store_id,
        active: req.body.active,
        username: req.body.username,
        password: req.body.password,
        last_update: req.body.last_update,
        picture: req.body.picture
    });

    try {
        const savedStaff = await newStaff.save();
        res.json(savedStaff);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route GET pour récupérer un employé spécifique par `staff_id`
router.get('/:staffId', async (req, res) => {
    try {
        const staff = await Staff.findOne({ staff_id: req.params.staffId }).populate('store_id');
        res.json(staff);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route DELETE pour supprimer un employé spécifique par `staff_id`
router.delete('/:staffId', async (req, res) => {
    try {
        const removedStaff = await Staff.deleteOne({ staff_id: req.params.staffId });
        res.json(removedStaff);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route PATCH pour mettre à jour un employé spécifique par `staff_id`
router.patch('/:staffId', async (req, res) => {
    try {
        const updatedStaff = await Staff.updateOne(
            { staff_id: req.params.staffId },
            { $set: req.body }  // Met à jour les champs passés dans `req.body`
        );
        res.json(updatedStaff);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
