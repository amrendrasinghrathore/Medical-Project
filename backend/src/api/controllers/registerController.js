const bycrypt = require("bcrypt")

const User = require("../models/User")

const handleNewUser = async (req, res) => {
    const {id, password} = req.body;
    const duplicate = await User.findOne({id: id}).exec();
    
    // raise conflict
    if (duplicate) return res.sendStatus(409);
    
    try {
        const hashedPwd = await bycrypt.hash(password, 10);
           
        // create a new user in the database
        const result = await User.create({
            id: id,
            password: hashedPwd,
            firstname: "Prites",
            lastname: "Kulshreshta"
        });

        console.log(result);
        
        res.status(201).json({"success": "new user created"});
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { handleNewUser };