const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Project.find({}).populate("notes").then(
            dbProject => res.json(dbProject)
        ).catch(err => res.json(err))
    },

    findOne: (req, res) => {
        db.Project.findOne({_id: req.params.projectId}).populate("notes").then(
            dbProject => res.json(dbProject)
        ).catch(err => res.json(err))
    },

    findSolo: (req, res) => {
        db.Project.find({category:"solo"}).populate("notes").then(
            dbProject => res.json(dbProject)
        ).catch(err => res.json(err))
    },
    findTeam: (req, res) => {
        db.Project.find({category:"team"}).populate("notes").then(
            dbProject => res.json(dbProject)
        ).catch(err => res.json(err))
    },

    add: (req, res) => {
        db.Project.create(req.body).then(
            dbProject => res.json(dbProject)
        ).catch(err => res.json(err))
    },

    addLike: (req, res) => {
        db.Project.findOneAndUpdate({
            _id:req.params.projectId
        }, {
            $inc:{
                likes:1
            }
        }, {
            new: true
        }).then(
            (dbProject) => {
                if(dbProject) {
                    res.json(dbProject)
                } else {
                    res.json("project doesn't exist")
                }
            }
        ).catch(err => res.json(err))  
    },
    unLike: (req, res) => {
        db.Project.findOneAndUpdate({
            _id:req.params.projectId,
            likes: { $gt: 0} 
        }, {
            $inc:{
                likes:-1
            }
        }, {
            new: true
        }).then(
            (dbProject) => {
                if(dbProject) {
                    res.json(dbProject)
                } else {
                    res.json("project doesn't exist")
                }
            }
        ).catch(err => res.json(err))  
    },
    addStar: (req, res) => {
        db.Project.findOneAndUpdate({
            _id:req.params.projectId
        }, {
            $inc:{
                stars:1
            }
        }, {
            new: true
        }).then(
            (dbProject) => {
                if(dbProject) {
                    res.json(dbProject)
                } else {
                    res.json("project doesn't exist")
                }
            }
        ).catch(err => res.json(err))  
    },
    unStar: (req, res) => {
        db.Project.findOneAndUpdate({
            _id:req.params.projectId,
            stars: { $gt: 0} 
        }, {
            $inc:{
                stars:-1
            }
        }, {
            new: true
        }).then(
            (dbProject) => {
                if(dbProject) {
                    res.json(dbProject)
                } else {
                    res.json("project doesn't exist")
                }
            }
        ).catch(err => res.json(err))  
    }
}