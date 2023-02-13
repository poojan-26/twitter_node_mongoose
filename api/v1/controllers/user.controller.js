const responseHelper = require('../../utils/responseHelper');
const usersHelper = require('../helper/usersHelper');
const { count } = require('../models/user');

class twitter {

    async createUser(req, res) {
        try {
            let users = await usersHelper.createUser(req.body)
            responseHelper.success(res, 'ADD_USER_SUCCESS', req.headers.language, users)
        } catch (error) {
            console.log(error)
            responseHelper.error(res, error, req.headers.language)
        }
    }

    async PostTweet(error, tweet, response) {
        try {
            console.log(tweet); 
            // responseHelper.success(res, 'ADD_USER_SUCCESS', data)
        } catch (error) {
            console.log(error)
            // responseHelper.error(res, error, req.headers.language)
        }
    }

    async getdata(error, tweet, response) {
        try {
            console.log(tweet); 
            // responseHelper.success(res, 'ADD_USER_SUCCESS', data)
        } catch (error) {
            console.log(error)
            // responseHelper.error(res, error, req.headers.language)
        }
    }

    async getFollowers(error, tweet, res) {
        try {
            console.log(tweet); 
            console.log("you get somethig")
            // responseHelper.success(res, 'ADD_USER_SUCCESS', data)
        } catch (error) {
            console.log(error)
            // responseHelper.error(res, error, req.headers.language)
        }
    }

    async getTrend(error, tweet, res) {
        try {
            console.log(tweet); 
            console.log("you get somethig")
            // responseHelper.success(res, 'ADD_USER_SUCCESS', data)
        } catch (error) {
            console.log(error)
            // responseHelper.error(res, error, req.headers.language)
        }
    }



}
module.exports = new twitter()
