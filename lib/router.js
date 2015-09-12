Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'bookmarksList',
  waitOn: function () {
    return [
      Meteor.subscribe('bookmarks')
    ];
  },
  data: function () {
    return {
      bookmarks: Bookmarks.find()
    }
  }
});
