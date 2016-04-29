
The API has some complexity, but overall seems to strike a reasonable balance between helpful "magical" behavior and explicit, verbose boilerplate.

Since it leverages the actual DOM, there are some [strange behaviors around variable naming](https://vuejs.org/guide/components.html#camelCase-vs-kebab-case) (camelCase in javscript and kebab-case in HTML). I dislike this because it makes searching for variable references more difficult.

There are also a fair number of other somewhat 'magical' shortcuts that we should be careful about, such as some shorthand properties and the `v-model` directive.

Vue includes functionality for implementing [state transitions](http://vuejs.org/guide/transitions.html) out of the box, which simplifies what is a somewhat tricky task in other frameworks (like Riot and Backbone).
