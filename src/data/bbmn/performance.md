
Backbone by default uses a rendering strategy where large amounts of the DOM are rendered for each update. This is mitigated to some degree by the use of Marionette's [collection and child views](http://marionettejs.com/docs/v3.0.0-pre.2/marionette.collectionview.html).

However even with collection views, some effort on the part of the developer is required to maintain good performance - events and updates should be targetted rather than global.

