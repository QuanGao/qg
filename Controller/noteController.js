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
            }).then(dbProject => 
                res.json(dbProject)
            ).catch(err => res.json(err)
        )
    }
}
