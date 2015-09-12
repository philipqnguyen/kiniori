Meteor.publish('bookmarks', function () {
  return Bookmarks.find();
});
