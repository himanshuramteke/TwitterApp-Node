import express from 'express';
import { getTweetById, getTweets, createTweet } from "../../controllers/tweetControllers.js";

const router = express.Router(); //create a new router object;

router.get('/', getTweets)

router.get('/:id', getTweetById);

router.post('/', createTweet);

export default router; //Export default router object
