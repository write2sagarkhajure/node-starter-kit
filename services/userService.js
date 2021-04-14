const User = require('../models/user');

const getUser = (email) => {
    return new Promise(async(resolve, reject) => {
        try{
            let user = await User.findOne({email:email});
            resolve(user);
        } catch(error) {
            console.error(`Error in fetching the user: ${error}`);
            reject(error);
        }
    });
}

module.exports = { getUser };