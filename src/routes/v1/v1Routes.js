import expess from 'express';
import tweetRouter from './tweet.js'
import commentRouter from './comment.js'

const router = expess.Router();

router.use('/tweets', tweetRouter);

router.use('/comments', commentRouter);  

export default router;
