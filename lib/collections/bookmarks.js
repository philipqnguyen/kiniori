// Purposely not use 'var'. In Meteor, var is scoped to a single file.
// We want Posts to be accessible to all of your app, so we leave out var.
Bookmarks = new Mongo.Collection('bookmarks');

Meteor.methods({
  bookmarkInsert: function (bookmarkAttributes) {
    check(bookmarkAttributes, {
      url: String
    });

    // _.extend is part of Underscore library. Extends one object
    // with the properties of another.
    var bookmark = _.extend(bookmarkAttributes, {
      createdAt: new Date()
    });

    var bookmarkId = Bookmarks.insert(bookmark);

    return bookmarkId;
  }
});
