const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Récupérer tous les clients
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.json({ message: err });
    }
});

// Créer un nouveau client
router.post('/', async (req, res) => {
    const newCustomer = new Customer({
        customer_id: req.body.customer_id,
        store_id: req.body.store_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        address_id: req.body.address_id, 
        activebool: req.body.activebool,
        create_date: req.body.create_date,
        active: req.body.active
    });
    
    try {
        const savedCustomer = await newCustomer.save();
        res.json(savedCustomer);
    } catch (err) {
        res.json({ message: err });
    }
});

// Récupérer un client spécifique par `customer_id`
router.get('/:customerId', async (req, res) => {
    try {
        const customer = await Customer.findOne({ customer_id: req.params.customerId });
        res.json(customer);
    } catch (err) {
        res.json({ message: err });
    }
});

// Supprimer un client spécifique par `customer_id`
router.delete('/:customerId', async (req, res) => {
    try {
        const removedCustomer = await Customer.deleteOne({ customer_id: req.params.customerId });
        res.json(removedCustomer);
    } catch (err) {
        res.json({ message: err });
    }
});

// Mettre à jour un client spécifique par `customer_id`
router.patch('/:customerId', async (req, res) => {
    try {
        const updatedCustomer = await Customer.updateOne(
            { customer_id: req.params.customerId }, 
            { $set: req.body }  // Utilisation de `req.body` pour mettre à jour les champs spécifiés
        );
        res.json(updatedCustomer);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
