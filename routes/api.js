const express = require('express');
const router = express.Router();
const Issue = require('../model/issues.js');

// GET route for getting info from database
router.get('/techissues', (req,res) => {
    Issue.find().sort({_id: -1}).then(issues => res.json(issues)).catch(err => console.log(err));
});

// POST route for saving info to database
router.post('/techissues', (req,res) => {
    
    let userIssue = new Issue({
        name: req.body.name,
        subject: req.body.subject,
        email: req.body.email,
        status: req.body.status,
        issue: req.body.issue,
        created: req.body.created,
        updated: req.body.updated
    });

    userIssue.save().then(data => res.json(data)).catch(err => res.status(500).json(err));
});

// PUT route to update issue in database
router.put('/techissues:id', (req,res) => {
   
    Issue.findByIdAndUpdate({_id: req.params.id},{status: req.body.status, updated: req.body.updated}).then(r => console.log(r)).catch(err => res.status(400).json(err));
});

// DELETE route to delete issue from database
router.delete('/techissues:id', (req,res) => {
    
    Issue.deleteOne({_id: req.params.id}, err => console.log(err));
});

module.exports = router;