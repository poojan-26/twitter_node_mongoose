const User = require('../models/user');
const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const jwt = require('jsonwebtoken');


class hospitalHelper {

    async createUser(body){
        try{
                const user = {
                    firstName : body.firstName,
                    lastName : body.lastName,
                    username : body.username,
                    address : body.address,
                    city : body.city,
                    gender : body.gender,
                    email : body.email,
                    password : body.password
                }
                const response =await new User(user).save();
                return response;   
        }catch (err){
                console.log(`there was an error ${err}`) 
                }
    }

    async PostTweet(err, data, res){
        try{
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }







}
module.exports = new hospitalHelper()