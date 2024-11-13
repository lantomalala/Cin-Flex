const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');  // Import du modèle Payment

// Route GET pour récupérer tous les paiements
router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find().populate('customer_id staff_id rental_id');
        res.json(payments);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route POST pour ajouter un nouveau paiement
router.post('/', async (req, res) => {
    const newPayment = new Payment({
        customer_id: req.body.customer_id,
        staff_id: req.body.staff_id,
        rental_id: req.body.rental_id,
        amount: req.body.amount,
        payment_date: req.body.payment_date
    });

    try {
        const savedPayment = await newPayment.save();
        res.json(savedPayment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route GET pour récupérer un paiement spécifique par `payment_id`
router.get('/:paymentId', async (req, res) => {
    try {
        const payment = await Payment.findOne({ payment_id: req.params.paymentId }).populate('customer_id staff_id rental_id');
        res.json(payment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route DELETE pour supprimer un paiement spécifique par `payment_id`
router.delete('/:paymentId', async (req, res) => {
    try {
        const removedPayment = await Payment.deleteOne({ payment_id: req.params.paymentId });
        res.json(removedPayment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Route PATCH pour mettre à jour un paiement spécifique par `payment_id`
router.patch('/:paymentId', async (req, res) => {
    try {
        const updatedPayment = await Payment.updateOne(
            { payment_id: req.params.paymentId },
            { $set: req.body }  // Met à jour les champs passés dans `req.body`
        );
        res.json(updatedPayment);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
