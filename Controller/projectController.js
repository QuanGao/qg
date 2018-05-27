const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Project.find({}).populate("notes").then(
            dbProject => res.json(dbProject)
        ).catch(err => res.json(err))
    },
    addLike: (req, res) => {
        db.Project.update({
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
                    res.json("liked project")
                } else {
                    res.json("project doesn't exist")
                }
            }
        ).catch(err => res.json(err))  
    },
    unLike: (req, res) => {
        db.Project.update({
            _id:req.params.projectId,
            likes: { $gte: 1} 
        }, {
            $inc:{
                likes:-1
            }
        }, {
            new: true
        }).then(
            (dbProject) => {
                if(dbProject) {
                    res.json("unliked project")
                } else {
                    res.json("project doesn't exist")
                }
            }
        ).catch(err => res.json(err))  
    },
    addStar: (req, res) => {
        db.Project.update({
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
                    res.json("stared project")
                } else {
                    res.json("project doesn't exist")
                }
            }
        ).catch(err => res.json(err))  
    },
    unStar: (req, res) => {
        db.Project.update({
            _id:req.params.projectId,
            stars: { $gte: 1} 
        }, {
            $inc:{
                stars:-1
            }
        }, {
            new: true
        }).then(
            (dbProject) => {
                if(dbProject) {
                    res.json("unstared project")
                } else {
                    res.json("project doesn't exist")
                }
            }
        ).catch(err => res.json(err))  
    }
}