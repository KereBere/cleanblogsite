const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const PostScheme = new Scheme({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostScheme);

module.exports = Post;
