(function($) {
  Drupal.behaviors.backbone_node_edit_in_place = {
    attach: function() {

        var AppView = Drupal.Backbone.View.extend({

        // #### AppView.templateSelector
        //
        // This property functions the same way as NodeView.templateSelector.
        templateSelector: '#backbone-node-edit-in-place-app-template',

        // #### AppView.events
        //
        // We use the events property to map jquery event selectors with methods
        // of our view object.  In this case, we will call the function
        // doLoadNode when the form is submitted.
        //
        // Note that our form tag is set to return false on submit, so the form
        // does not actually submit.  In the real world we'd likely do that with
        // jQuery so it would degrade nicely.
        //
        // TODO integrate Backbone forms with the Drupal Form API.
        events: {
          'submit form[name=backbone-example-form]': 'doLoadNode'
        },

        // #### AppView.initialize()
        //
        // The main view's initialize function sets up the view first (via the
        // call to the parent's initialize method, same as NodeView), then binds
        // the new doLoadNode function to the correct object (see the FAQ in the
        // Backbone docs for more on this).
        //
        // Once that's all done, we can create our child view and it's attendant
        // model, then render the main app itself and attach it to the correct
        // location on the page.
        initialize: function() {
          Drupal.Backbone.View.prototype.initialize.apply(this);
          _.bindAll(this, 'doLoadNode');
          this.nodeModel = new Drupal.Backbone.NodeModel();
          $('#backbone-node-edit-in-place-app').append(this.render().el);

                  //Set Token to avoid Error: 'CSRF validation failed'.
          var session_token = '';
          $.ajax({
            url:"/services/session/token",
            type:"get",
            dataType:"text",
            error:function (jqXHR, textStatus, errorThrown) {
              alert(errorThrown);
            },
            success: function (token) {
                $.ajaxSetup({
                  beforeSend: function (request) {
                    request.setRequestHeader("X-CSRF-Token", token);
                  },
                });
            }
          });
        },

        // #### AppView.doLoadNode()
        //
        // This is the method that is called whenever the form is submitted.  It
        // gets the value of the nid input field, sets the model to have the new
        // nid property, then fetches the rest of the node data from the server.
        //
        // We don't need to worry about doing anything when the results come
        // back (whew!), because Backbone will automatically update the model
        // when it receives new data.  Once the model has been updated, a change
        // event will be called, triggering a re-render of the node view thanks
        // to our earlier binding of the view render function to change.
        doLoadNode: function() {
          var nid = this.$('#nid').val();
          this.nodeModel.set('nid', nid);
          this.nodeModel.fetch();

          new EditInPlaceView({
              el: $("#node-title"),
              model: this.nodeModel,
              attribute: "title"
          }).render();

          new EditInPlaceView({
              el: $("#node-body"),
              model: this.nodeModel,
              attribute: "body",
              language: 'und',
              delta: 0,
              property: 'safe_value',
              EditType: 'textarea'
          }).render();
        }
      });

      // ### Start the app!
      //
      // Then all we need to do is create an instance of our app view!
      var app = new AppView();
    },
  };
})(jQuery);
