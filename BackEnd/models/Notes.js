const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        default: "General",
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    lastEdited: {
        type: Date,
        default: Date.now,
    },
    isArchived: {
        type: Boolean,
        default: false,
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium',
    }
}, {
    timestamps: true
});


notesSchema.pre('save', function (next) {
    this.lastEdited = Date.now();
    next();
});

module.exports = mongoose.model('Note', notesSchema);
