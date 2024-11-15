import express from 'express';
import { getTweetById, getTweets, createTweet } from "../../controllers/tweetControllers.js";
import { validate } from '../../validators/zodValidator.js'
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';

const router = express.Router(); //create a new router object;

router.get('/', getTweets)

router.get('/:id', getTweetById);

router.post('/', validate(tweetZodSchema), createTweet);

export default router; //Export default router object
