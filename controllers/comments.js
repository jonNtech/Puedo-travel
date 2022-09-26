const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        createdById: req.user.id,
        createdBy: req.user.userName,
      });
      console.log("Comment has been added!");
      res.redirect(`/menu`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      let comment = await Comment.findById(req.params.id)
      // Delete post from db
      await Comment.findOneAndDelete({_id: req.params.id});
      console.log("Deleted Comment");
      console.log(req.params.id);
      res.redirect(`/menu`);
    } catch (err) {
      res.redirect(`/menu`);
    }
  },
}