//const express = require('express');
//const router = express.Router();
const Animals = require('../models/animals.model');
const Users = require('../models/users.model');
const Favorites = require('../models/favorites.model');

module.exports = (app) => {

    //trouve
    app.get('/api/animals',async(req,res) =>{
        let animals = await Schemas.Animals.find();
        return res.status(200).send(animals);
    });

    //cree
    app.post(`/api/animals`, async (req, res) => {
        let animal = await Schemas.Animals.create(req.body);
        return res.status(201).send({
            error: false,
            animal
        })
    })

    //modifie
    app.put(`/api/animals/:id`, async (req, res) => {
        const {id} = req.params;

        let animal = await Schemas.Animals.findByIdAndUpdate(id, req.body);

        return res.status(202).send({
            error: false,
            animal
        })

    });

    //supprime
    app.delete(`/api/animals/:id`, async (req, res) => {
        const {id} = req.params;

        let animal = await Schemas.Animals.findByIdAndDelete(id);

        return res.status(202).send({
            error: false,
            animal
        })

    })


}

/*
router.get('/api/listAnimals',async(req,res) => {

    const animals = Schemas.Animals;
    const id = req.params.id;

    animals.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Animal with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Animal with id=" + id });
        });

});

 */