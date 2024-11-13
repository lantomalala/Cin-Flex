const mongoose = require('mongoose');

const StaffSchema = mongoose.Schema({
    staff_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        default: () => new mongoose.Types.ObjectId(),
        required: true
    },
    first_name: { 
        type: String, 
        required: true 
    },
    last_name: { 
        type: String, 
        required: true 
    },
    address_id: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    store_id: { 
        type: String, 
        ref: 'Store',  // Référence au modèle Store (magasin)
        required: true 
    },
    active: { 
        type: Boolean, 
        required: true 
    },
    username: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    last_update: { 
        type: Date, 
        default: Date.now
    },
    picture: { 
        type: String, // URL de l'image
        required: false 
    }
});

module.exports = mongoose.model('Staff', StaffSchema);
