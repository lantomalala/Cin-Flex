const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    payment_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        default: () => new mongoose.Types.ObjectId(),
        required: true
    },
    customer_id: { 
        type: String, 
        ref: 'Customers', // Référence au modèle 'Customers'
        required: true
    },
    staff_id: { 
        type: String, 
        ref: 'Staff', // Référence au modèle 'Staff'
        required: true
    },
    rental_id: { 
        type: String, 
        ref: 'Rental', // Référence au modèle 'Rental'
        required: true
    },
    amount: { 
        type: Number,
        required: true
    },
    payment_date: { 
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('Payment', PaymentSchema);
