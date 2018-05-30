const db = require("../models")

module.exports = {
    findAll: (req, res) => {
        db.Note.find({}).then(
            dbNote => res.json(dbNote)
        ).catch(err => res.json(err))
    },
    add: (req, res) => {
        db.Note.create(req.body).then(
            dbNote => {
                return db.Project.findOneAndUpdate({
                    _id: req.params.projectId
                }, {
                    $push: {
                        notes: dbNote._id
                    }
                }, {
                    new: true
                })
            }).then(
            dbProject => {
                return db.Project.findById(req.params.projectId).populate("notes")
                .then(WithNote => res.json(WithNote))
                
            }).catch(err => res.json(err)
        )
    }
}
