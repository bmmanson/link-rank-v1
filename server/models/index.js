var db = require('./_db');
var Post = require('./post');
var User = require('./user');
var Comment = require('./comment');
var PostPoint = require('./post-point');
var CommentPoint = require('./comment-point');

//a reference to user table on post table
User.hasMany(Post, {as: "user", foreignKey: "userId"});
Post.belongsTo(User, {as: "user", foreignKey: "userId"});

//references to user, comment and url table on comment table
//rows in this table to refer to themselves
//make it possible to comment on comments and to represent it as a tree
User.hasMany(Comment, {as: "author", foreignKey: "authorId"});
Comment.belongsTo(User, {as: "author", foreignKey: "authorId"});
Post.hasMany(Comment, {as: "comment", foreignKey: "postId"});
Comment.belongsTo(Post, {as: "comment", foreignKey: "postId"});
Comment.hasMany(Comment, {as: "parent", foreignKey: "parentId"});
Comment.belongsTo(Comment, {as: "parent", foreignKey: "parentId"});


//points of links table -- link to user and post table
User.belongsToMany(Post, {as: "user", through: 'postpoint', foreignKey: 'userId'});
Post.belongsToMany(User, {as: "post", through: 'postpoint', foreignKey: 'postId'});

//points of comments table -- link to user and link table
User.belongsToMany(Comment, {as: "user", through: 'commentpoint', foreignKey: 'userId'});
Comment.belongsToMany(User, {as: "comment", through: 'commentpoint', foreignKey: 'commentId'});

module.exports = db;