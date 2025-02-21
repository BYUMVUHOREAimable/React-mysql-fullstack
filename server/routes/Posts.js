const express = require("express");
const app = express();

const router = express.Router();
const {Posts} = require("../models");

router.get("/", async (req, res) => {
    const posts = await Posts.findAll();
    res.json(posts);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

module.exports = router;