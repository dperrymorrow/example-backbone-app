(function () {
  APP.helpers = {
    debug: function (collection) {
      collection.on('all', function () {
        $('#output').text(JSON.stringify(collection.toJSON(), null, 4));
      });
      collection.trigger('reset');
    }
  };
}());