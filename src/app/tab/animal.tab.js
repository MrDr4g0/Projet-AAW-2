module.exports = mongoose => {

    var schema = mongoose.Schema(
        {
            name: String,
            image: String,
            note: String
        },
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Animal = mongoose.model("animal", schema);
    return Animal;
};