const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    customer_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),  // Génère automatiquement un ObjectId
        required: true
    },
    store_id:{ 
        type: String,
        required: true
    },
    first_name:{ 
        type: String,
        required: true
    },
    last_name:{ 
        type: String,
        required: true
    },
    email:{ 
        type: String,
        required: true
    },
    address_id:{ 
        type: String,
        required: true
    },
    activebool:{ 
        type: Boolean ,
        required: true
    },
    create_date:{ 
        type: Date,
        default: Date.now
    },
    last_update:{ 
        type: Date,
        default: Date.now
    },
    active:{ 
        type: Boolean,
        required: true
    }
});   

module.exports = mongoose.model('Customers', CustomerSchema)
