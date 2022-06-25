const bycrypt = require("bcrypt")

const User = require("../models/User")

const handleNewUser = async (req, res) => {
    const duplicate = await User.findOne({id: req.id}).exec();

    // raise conflict
    if (duplicate) return res.sendStatus(409);

    try {
        const hashedPwd = await bycrypt.hash(req.password, 10);

        const result = await User.create({
            id: req.id,
            password: req.password,
            firstname: req.firstname,
            lastname: req.lastname
        });

        cons

        console.log(result);
        
        res.sendStatus(201).json({"success": "new user created"});
    } catch (e) {
        res.sendStatus(500).json({"message": e.message});
    }
};