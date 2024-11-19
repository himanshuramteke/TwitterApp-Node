import express from 'express';
import { deleteTweet, updateTweet, getTweetById, getTweets, createTweet } from "../../controllers/tweetControllers.js";
import { validate } from '../../validators/zodValidator.js'
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';
import { s3Uploader } from '../../config/multerConfig.js';
import { getTweetByIdManualValidator } from "../../validators/tweetManualValidators.js"

const router = express.Router(); //create a new router object;

router.get('/', getTweets)

router.get('/:id', getTweetByIdManualValidator, getTweetById);

router.post('/', s3Uploader.single('tweetImage'),validate(tweetZodSchema), createTweet);

router.delete('/:id', getTweetByIdManualValidator, deleteTweet);

router.put('/:id', getTweetByIdManualValidator, updateTweet);

export default router; //Export default router object