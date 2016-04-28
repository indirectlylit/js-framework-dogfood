Mike
-------

More boilerplate than Riot, but as a result more explicit.
For example, only a few properties are consistently bound to a Backbone.View on
instantiation (and the rest must be explicitly bound in a constructor), whereas 
with Riot what's bound to a tag depends also on *how* arguments are passed to 
a tag.

Marionette does cut away some boilerplate, and I think there's more to leverage in
the library that we're just not familiar with, like [Behaviors](http://marionettejs.com/docs/v2.4.5/marionette.behaviors.html).

Backbone+Marionette is more of a library than a framework, and the implication
is that we'll have to do more work ourselves but I think it affords us the possibility
of being noncommittal about some parts of the tech stack.

For example, it would be possible (though not trivial) to gut BB+MN's rendering 
system and replace it with a virtual DOM implementation. With other frameworks 
it would probably be much harder to tinker with the rendering internals, which 
could make our lives harder if we want to e.g. create a sandboxed view for 
rendering 3rd party exercises a la Khan Academy's Perseus framework.

That said, it's impossible for me to accurately evaluate the difficulty of integrating 
Perseus exercises with any framework at this point -- it's all guesswork.
 
 