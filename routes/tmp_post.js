const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');
const PostsAforo = require('../models/PostsAforo');
const BlackAndWhite = require('../models/BlackAndWhite');

router.get('/', async (req,res) => {
        try {
                const posts = await Post.find();
                res.json(posts);
        } catch (err) {
                res.json({message:err});
        }
});

router.post('/', async (req,res) => {
        const post = new Posts({
                deepStreamId: req.body.deepStreamId,
                direction: req.body.direction,
                cameraId: req.body.cameraId
        });

        try {
                const savedPost = await post.save();
                res.json(savedPost);
        } catch (err) {
                res.json({ message: "Original err:"+err});
        }
});

router.post('/aforo', async (req,res) => {
	const post = new PostsAforo({
                deepStreamId: req.body.deepStreamId,
                direction: req.body.direction,
                cameraId: req.body.cameraId
        });

       try {
                const savedPost = await post.save();
                res.json(savedPost);
        } catch (err) {
                res.json({ message: "Original err:"+err});
        }
});

router.post('/blackAndWhite', async (req,res) => {
	const post = new BlackAndWhite({
                clientId: req.body.clientId,
                cameraId: req.body.cameraId,
                listType: req.body.listType,
                matchedId: req.body.matchedId,
                matchedName: req.body.matchedName
        });

       try {
                const savedPost = await post.save();
                res.json(savedPost);
        } catch (err) {
                res.json({ message: "Original err:"+err});
        }
});


router.get('/specific', (req,res) => { res.send('at specific'); });
router.get('/Notspecific', (req,res) => { res.send('at Notspecific'); });
module.exports = router;

