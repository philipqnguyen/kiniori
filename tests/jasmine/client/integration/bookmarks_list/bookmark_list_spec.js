describe('Bookmark List', function () {
  beforeEach(function (done) {
    Router.go('/');
    Tracker.afterFlush(done);
  });

  beforeEach(waitForRouter);

  it('should enter a new url and appear in the list', function () {
    var oldBookmarkCount = $('.bookmark-item').size();
    $('#input-url').val('cnn.com');
    $('form').submit();

    var newBookmarkCount = $('.bookmark-item').size();

    expect(newBookmarkCount).toEqual(oldBookmarkCount + 1);
  });
});

// describe('My Spec', function () {
//   beforeEach(function (done) {
//     Router.go('/myPage');
//     Tracker.afterFlush(done);
//   });

//   beforeEach(waitForRouter);

//   it('should do something', function () {
//     // Your test
//   });
// })
