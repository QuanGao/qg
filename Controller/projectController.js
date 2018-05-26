const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Project.find({}).populate("notes").then(
            dbProject => res.json(dbProject)
        ).catch(err => res.json(err))
    }

}