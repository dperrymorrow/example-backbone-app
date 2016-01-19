(function () {
  APP.helpers = {

    debug: function (collection) {
      collection.on('all', function () {
        $('#output').text(JSON.stringify(collection.toJSON(), null, 4));
      });
      collection.trigger('reset');
    },

    showErrors: function (note, errors) {
      $('.error').removeClass('error');
      $('.alert').html(_.values(errors).join('<br>')).show();

      // highlight the fields with errors
      _.each(_.keys(errors), function (key) {
        $('*[name=' + key + ']').parent().addClass('error');
      });
    }
  };
}());