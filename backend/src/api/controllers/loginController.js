const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Doctor = require("../models/Doctor")
const User = require("../models/User")

// compare Passwords async
const comapreAsync = async (password, hash) => {
    try {
        return await bcrypt.compare(password, hash);
    } catch (err) {
        console.log(err);
    }

    return false;
} 

const passwordCheck = async (id, password, entity) => {
    const response = await comapreAsync(password, entity.password);

    if (response) {
        const token = jwt.sign({id}, process.env.JWT_SECRET, {
            expiresIn: 300
        });
        return token;
    }
    else {
        return false;
        
    }
    
}


const handleLogin = async (req, res) => {
    const { id, password } = req.body;
    
    const user = await User.findOne({id: id}).exec();

    if ( user ) {
               
        const token = await passwordCheck(id, password, user);

        if (token) {
            return res.json({isAuth: true, type:"user", token: token, result: user});
        }
        else {
            return res.json({isAuth: false});
        }
    }

    const doctor = await Doctor.findOne({id: id}).exec();

    if ( doctor ) {
        const token = await passwordCheck(id, password, doctor);
        if (token) {
            return res.json({isAuth: true, type: "doctor", token: token, result: doctor});
        }
        else {
            return res.json({isAuth: false});
        }

    }

    return res.send("Enter correct mail and password");



    

};

module.exports = { handleLogin }