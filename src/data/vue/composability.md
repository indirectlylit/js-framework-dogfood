
Vue has excellent [support for composition](https://vuejs.org/guide/components.html) and [building large applications](https://vuejs.org/guide/application.html). It tries to roughly follow the pattern of the draft [web components spec](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md), which would be useful if that were to become native at some point. Vue also allows scoped javascript, html, and css to be defined in a single .vue file using webpack loaders.

One nice feature is that all options passed to a component must be declared upfront, giving each component an explicit API.

By default, vue uses two-way data binding *within* a component, and one-way data binding when composing a tree of components.
