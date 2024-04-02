const express = require('express')
const router = express.Router()
const {Login, Register, Logout, Bookmark, getMyProfile, getOtherUser, Follow, UnFollow, profileUpdate} = require('../controller/user_controller')
const { Post, DeletePost, MyPost, likeOrDislike, getAllTwitt, getFollowingTweets, retweets,  } = require('../controller/post_controller')
const prodectRoute = require('../middleware/protect')
router.route("/login").post(Login)
router.route("/register").post(Register)
router.route("/profileupdate").put(prodectRoute,profileUpdate)
router.route("/logout").get(Logout)
router.route("/post").post( prodectRoute,Post)
router.route("/mypost/:id").get( prodectRoute,MyPost)
router.route("/retweet/:id").post(prodectRoute,retweets)
router.route("/getmyprofile/:id").get(prodectRoute,getMyProfile)
router.route("/getotheruser").get(prodectRoute,getOtherUser)
router.route("/like/:id").put(prodectRoute,likeOrDislike)
router.route("/bookmark/:id").put(prodectRoute,Bookmark)
router.route("/follow/:id").post(prodectRoute,Follow)
router.route("/unfollow/:id").post(prodectRoute,UnFollow)
router.route("/getalltweet").get(prodectRoute,getAllTwitt)
router.route("/getfollowingtweets").get(prodectRoute,getFollowingTweets)
router.route("/deletetweet/:id").delete(prodectRoute,DeletePost)
module.exports = router;