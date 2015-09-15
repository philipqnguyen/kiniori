// Purposely not use 'var'. In Meteor, var is scoped to a single file.
// We want Posts to be accessible to all of your app, so we leave out var.
Bookmarks = new Mongo.Collection('bookmarks');

var validateUrl = function (bookmark) {
  var validUrl = Meteor.npmRequire('valid-url');

  if (validUrl.isWebUri(bookmark.url)){
    return bookmark.url;
  } else if (validUrl.isWebUri('http://' + bookmark.url)) {
    return 'http://' + bookmark.url;
  } else {
    return false;
  }
};

Meteor.methods({
  bookmarkInsert: function (bookmarkAttributes) {
    check(bookmarkAttributes, {
      url: String
    });

    if (Meteor.isServer) {
      if (validateUrl(bookmarkAttributes)) {
        bookmarkAttributes.url = validateUrl(bookmarkAttributes);
      } else {
        throw new Meteor.Error('invalid-url', 'You entered an improper URL');
      }
    }

    // _.extend is part of Underscore library. Extends one object
    // with the properties of another.
    var bookmark = _.extend(bookmarkAttributes, {
      createdAt: new Date()
    });

    var bookmarkId = Bookmarks.insert(bookmark);

    return bookmarkId;
  }
});
