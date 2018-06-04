const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema ({
    title: {
        type: String,
        unique: true,
        trim: true,
        requied: [true,"project title required"]
    },
    date: {
        type: Date
    },
    codeLink: {
        type: String
    },
    pageLink: {
        type: String
    },
    description: {
        type: String
    },
    likes: {
        type: Number
    },
    stars: {
        type: Number
    },
    keywords: [String],
    imgSrc: {
        type: String
    },
    content: {
        type: String
    },
    category: {
        type: String
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
})

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;