import express from 'express';

const router = express.Router(); //create a new router object;

router.get('/', (req, res) => {
    return res.json({
        message: 'Welcome to the comment route'
    });
});

router.get('/:id', (req, res) => {
    return res.json({
        message: 'Welcome to the comment route',
        id: req.params.id
    });
})

export default router; //Export default router object

