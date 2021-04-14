const User = require('../models/user');
const { getUser } = require('../services/userService');

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    let user = await getUser(email);
    if (user) {
      res.send('user is already registered').end();
    } else {
      var newUser = new User({
        name: name,
        email: email,
        password: password
      });

      User.createUser(newUser, function (err, user) {
        if (err) throw err;
        const userDetails = {
          _id: user._id,
          name: user.name,
          email: user.email
        }
        res.json({ status: 'success', user: userDetails });
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { register };