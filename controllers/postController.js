const Post = require('../models/Post');
const fs = require('fs');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort('-dateCreated');
  res.render('index', {
    posts,
  });
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
};

exports.createPost = async (req, res) => {
  if (req.body.title == '' && req.body.detail == '') {
    res.redirect('/');
    return;
  }
  await Post.create(req.body);
  res.redirect('/');
};

exports.updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();

  //Below you can also get id like ${post.id} or ${post._id}
  res.redirect(`/posts/${req.params.id}`);
};

exports.deletPost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
