// crée et sauvegarder un animal

exports.create = (req, res) => {

    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const animal = new Animal({
        name: req.body.name,
        image: req.body.image,
        note: req.body.note
    });

    animal
        .save(animal)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};
//trouver un animal par son id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Animal.findById(id)
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
};

//modifier un animal par son id

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Animal.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Animal with id=${id}.`
                });
            } else res.send({ message: "Animal was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Animal with id=" + id
            });
        });
};

//supprimer un animal

exports.delete = (req, res) => {
    const id = req.params.id;

    Animal.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};