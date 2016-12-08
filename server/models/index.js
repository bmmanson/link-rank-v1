var db = require('./_db');
var Post = require('./post');
var User = require('./user');
var Comment = require('./comment');
var PostPoint = require('./post-point');
var CommentPoint = require('./comment-point');

//a reference to user table on post table
User.hasMany(Post, {as: "author", foreignKey: "userId"});
Post.belongsTo(User, {as: "author", foreignKey: "userId"});

//references to user and url table on comment table
User.hasMany(Comment, {as: "author", foreignKey: "authorId"});
Comment.belongsTo(User, {as: "author", foreignKey: "authorId"});
Post.hasMany(Comment, {as: "comment", foreignKey: "postId"});
Comment.belongsTo(Post, {as: "comment", foreignKey: "postId"});
//still need rows in this table to refer to themselves
//will make it possible to comment on comments and to represent it as a tree

//points of links table -- link to user and post table
User.belongsToMany(Post, {as: "user", through: 'postpoint', foreignKey: 'userId'});
Post.belongsToMany(User, {as: "post", through: 'postpoint', foreignKey: 'postId'});

//points of comments table -- link to user and link table
User.belongsToMany(Comment, {as: "user", through: 'commentpoint', foreignKey: 'userId'});
Comment.belongsToMany(User, {as: "comment", through: 'commentpoint', foreignKey: 'commentId'});

module.exports = db;