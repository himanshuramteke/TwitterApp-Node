import express from "express";

//Create a new express app/server object
const app = express();

app.get('/ping', (req, res) => {
    return res.json({
        message: 'pong'
    });
}); //what to do if someone makes a GET request to /ping

app.post('/hello', (req, res) => {
    console.log("query params", req.query);
    console.log("req body", req.body);
    return res.json({
        message: 'world'
    });
});

app.get('/tweets/:tweet_id/comments_id', (req, res) => {
    console.log(req.params); //url params
    return res.json({
        message: 'tweet details'
    });
});

//Define a PORT and attach it to the express app
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});