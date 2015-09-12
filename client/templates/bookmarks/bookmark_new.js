Template.bookmarkNew.events({
  'submit form': function (e) {
    e.preventDefault();

    var bookmark = {
      url: $(e.target).find('[name=url]').val()
    };

    // Clear the url input field.
    $(e.target).find('[name=url]').val('');

    Meteor.call('bookmarkInsert', bookmark);
  }
});
