const mongoose = require('mongoose');

const FilmSchema = mongoose.Schema({
    film_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),  // Génère automatiquement un ObjectId
        required: true
    },
    title:{ 
        type: String,
        required: true
    },
    description:{ 
        type: String,
        required: true
    },
    release_year:{ 
        type: Date,
        required: true
    },
    rental_duration:{ 
        type: String,
        required: true
    },
    rental_rate:{ 
        type: String,
        required: true
    },
    length:{ 
        type: String,
        required: true
    },
    replacement_cost:{ 
        type: String,
        required: true
    },
    rating:{ 
        type: String,
        required: true
    },
    special_features:{ 
        type: String,
        required: true
    },
    fulltext:{ 
        type: String,
        required: true
    },
    last_update:{ 
        type: Date,
        default: Date.now
    }
});   

module.exports = mongoose.model('Films', FilmSchema)
