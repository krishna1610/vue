const express = require('express');
const router = express.Router();

const tvMaze = require('tvmaze');

router.get('/search/:people', async (req, res) => {
    
const people=req.params.people
    try {
        const deck = await tvMaze.peopleSearch(people)
       

        res.json(deck);
    } catch (err) {
        res.json({ err });
    }
})

router.get('/fetch/:id', async (req, res) => {
    
    const id=req.params.id
        try {
            const deck = await tvMaze.fetch(id)
           
    
            res.json(deck);
        } catch (err) {
            res.json({ err });
        }
    });

module.exports = router;