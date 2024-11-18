import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true, //Remove whitespaces from beginning and ending of the string
        maxlength: 280
    },
    image: {
        type: String,
        default: null  
    }
}, { timestamps: true });

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;