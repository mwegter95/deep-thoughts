const { Thought } = require('../models')

const thoughtController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // get one thought by id
    getThoughtById({ params }, res) {
        console.log('getThoughtById route called')
    },

    createThought(req, res) {
        console.log('createThought route called')
    },

    updateThought(req, res) {
        console.log('updateThought route called')
    },

    deleteThought(req, res) {
        console.log('deleteThought route called')
    },

    createReaction(req, res) {
        console.log('createReaction route called')
    },

    deleteReaction(req, res) {
        console.log('deleteReaction route called')
    }
}


    
module.exports = thoughtController;