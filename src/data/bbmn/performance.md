
Backbone and Marionette were designed before the current wave of "modern" web frameworks, and generally uses a naive rendering strategy where large amounts of the DOM are rendered for each update.

This is mitigated to some degree by the use of Marionette's [collection and child views](http://marionettejs.com/docs/v3.0.0-pre.2/marionette.collectionview.html), but it's still far from optimal.

