const bycrypt = require('bcrypt');

const User = require('../models/User');
const Doctor = require('../models/Doctor');

const handleNewUser = async (req, res) => {
  const { id, password, firstname, lastname } = req.body;

  const duplicateDoctor = await Doctor.findOne({ id: id }).exec();
  const duplicateUser = await User.findOne({ id: id }).exec();

  // raise conflict
  if (duplicateDoctor || duplicateUser)
    return res.status(201).json({ success: false });

  try {
    const hashedPwd = await bycrypt.hash(password, 10);

    // create a new user in the database
    const result = await User.create({
      id: id,
      password: hashedPwd,
      firstname: firstname,
      lastname: lastname,
    });

    res.status(201).json({ success: true });
  } catch (err) {
    console.log(err.message);
    console.log('mss');
    res.status(500).json({ success: false, error: err.message });
  }
};

const handleNewDoctor = async (req, res) => {
  const { id, password, firstname, lastname, specialization } = req.body;
  const duplicateDoctor = await Doctor.findOne({ id: id }).exec();
  const duplicateUser = await User.findOne({ id: id }).exec();

  // raise conflict
  if (duplicateDoctor || duplicateUser)
    return res.status(201).json({ success: false });

  try {
    const hashedPwd = await bycrypt.hash(password, 10);

    // create a new user in the database
    const result = await Doctor.create({
      id: id,
      password: hashedPwd,
      firstname: firstname,
      lastname: lastname,
      specialization: specialization,
    });

    console.log(result);

    res.status(201).json({ success: 'new user created' });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { handleNewUser, handleNewDoctor };
