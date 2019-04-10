const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    files: []
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON  : { virtuals: true },
});

File.virtual('url').get(function() {
    const url = process.env.URL || 'http://localhost:3003'
    return `http://localhost:3003/files/${encodeURIComponent(this.path)}`;
})

module.exports = mongoose.model("File", File);