(function () {
  "use strict";
  APP.Models.NoteModel = Backbone.Model.extend({
    // you can set any defaults you would like here
    defaults: {
      title: "",
      description: "",
      author: ""
    }
  });

  APP.Collections.NoteCollection = Backbone.Collection.extend({
    // Reference to this collection's model.
    model: APP.Models.NoteModel
  });
}());
