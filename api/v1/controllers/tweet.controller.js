const responseHelper = require('../../utils/responseHelper');
const tweetHelper = require('../helper/tweetHelper');
const Tweet = require('../models/tweet');
const countWord = require('../models/countWord');

class twitter {

    async createtweet(req, res) {
        try {
            let users = await tweetHelper.createtweet(req.body)
            responseHelper.success(res, 'ADD_USER_SUCCESS', req.headers.language, users)
        } catch (error) {
            console.log(error)
            responseHelper.error(res, error, req.headers.language)
        }
    }

    async findOne(req, res) {
        try {
            // let q = req.params.q;
            // let users = await tweetHelper.findOne(q)
            const searchedField = req.query.tweet;
            const us =  await Tweet.find({tweet: {$regex:searchedField}})
            // console.log(us)
            responseHelper.success(res, 'GET_USER_SUCCESS', req.headers.language, us)
        } catch (error) {
            console.log(error)
            responseHelper.error(res, error, req.headers.language)
        }
    }

    async wordCount(req, res) {
        try {
            // let q = req.params.q;
            // let users = await tweetHelper.findOne(q)
            const searchedField = req.query.tweet;
            const user =  await Tweet.find({tweet: {$regex:searchedField}})
            const count = await Tweet.find({tweet: {$regex:searchedField}}).countDocuments()
            // console.log(us)
            responseHelper.success(res, 'GET_USER_SUCCESS', req.headers.language, {user,count})
        } catch (error) {
            console.log(error)
            responseHelper.error(res, error, req.headers.language)
        }
    }


    async findWord(req, res) {
        try {
            // let q = req.params.q;
            // let users = await tweetHelper.findOne(q)
            const searchedField = req.query.tweet;
            const us =  await Tweet.find({tweet: {$regex:searchedField}}).countDocuments()
            if (us){
            //    const tw = await Tweet.updateOne({tweet: {$exists: true}}, {$push: {count: {$each: [{searchedField:us}]}}})
            //    console.log(tw)
            const tw = await Tweet.aggregate([{$group: {_id: {username:"$username", tweet:"$tweet" }}}, {$match: {"_id.tweet": searchedField}}])
               
            responseHelper.success(res, 'GET_USER_SUCCESS', req.headers.language, {us,tw})
            }
            // console.log(us)
        } catch (error) {
            console.log(error)
            responseHelper.error(res, error, req.headers.language)
        }
    }




    
}
module.exports = new twitter()
