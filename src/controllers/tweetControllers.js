import { StatusCodes } from "http-status-codes";
import {
    createTweet as createTweetService,
    getTweets as getTweetsService,
    getTweetById as getTweetByIdService,
    deleteTweet as deleteTweetService,
    updateTweet as updateTweetService,
} from "../services/tweetService.js";
import { errorResponse, successResponse } from "../utils/responses.js";

export const createTweet = async (req, res) => {
    console.log(req.file);
    try {
       const response = await createTweetService({
          body: req.body.body,
          image: req.file?.location
       });
       return successResponse(response, StatusCodes.CREATED, 'Tweet created successfully', res);
    } catch (error) {
        return errorResponse(error, res);
    }
}

export const getTweets = async (req, res) => {
    try {
        const response = await getTweetsService();

        return successResponse(response, StatusCodes.OK, 'Tweet Fetched successfully', res);
    } catch (error) {
        return errorResponse(error, res);
    }
}

export const getTweetById = async (req, res) => {
    try {
        const response = await getTweetByIdService(req.params.id);

        return successResponse(response, StatusCodes.OK, 'Tweet Fetched successfully', res);
    } catch (error) {
        return errorResponse(error, res);
    }
}

export const deleteTweet = async (req, res) => {
    try {
        const response = await deleteTweetService(req.params.id);
        return successResponse(response, StatusCodes.OK, 'Tweet deleted successfully', res);
    } catch (error) {
        return errorResponse(error, res);
    }
}

export const updateTweet = async (req, res) => {
    try {
        const response = await updateTweetService(req.params.id);

        return successResponse(response, StatusCodes.OK, 'Tweet updated successfully', res);
    } catch (error) {
        return errorResponse(error, res);
    }
}