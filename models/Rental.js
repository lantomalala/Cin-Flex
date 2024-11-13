const mongoose = require('mongoose');

const RentalSchema = mongoose.Schema({
    rental_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        default: () => new mongoose.Types.ObjectId(),
        required: true
    },
    rental_date: { 
        type: Date,
        required: true
    },
    inventory_id: { 
        type: String, 
        ref: 'Inventory',  // Référence à un autre modèle 'Inventory'
        required: true
    },
    customer_id: { 
        type: String, 
        ref: 'Customers',  // Référence au modèle 'Customers'
        required: true
    },
    return_date: { 
        type: Date, 
        required: true
    },
    staff_id: { 
        type: String, 
        ref: 'Staff',  // Référence au modèle 'Staff'
        required: true
    },
    last_update: { 
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Rental', RentalSchema);
