const { find } = require('../models/tweet');
const Tweet = require('../models/tweet');



class hospitalHelper {

    async createtweet(body){
        try{
                const user = {
                    username : body.username,
                    tweet : body.tweet
                }
                const response =await new Tweet(user).save();
                return response;   
        }catch (err){
                console.log(`there was an error ${err}`) 
                }
    }

    // async findOne(body){
    //     try{
    //         // const tweet = body.tweet;
    //         // if (tweet == " "){
    //         //     return ("Empty data supplied")
    //         // }
    //         const user = await Tweet.find({tweet: {$regex:"#joyful"}})
    //         // if (user.length<1){
    //         //     return ("tweet not exist")
    //         // }
    //         return user
    //             // console.log(id)
    //     }catch (err){
    //             console.log(`there was an error ${err}`) 
    //             }
    // }







}
module.exports = new hospitalHelper()