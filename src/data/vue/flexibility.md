
Vue seems fairly flexible in that it operates directly on the DOM, and cedes control when necessary. This should allow libraries that require direct DOM access (like d3.js and JQuery) to continue to operate.

Vue does seem to modify state objects with getter/setter properties [in order to track changes](https://vuejs.org/guide/reactivity.html#How-Changes-Are-Tracked). This seems potentially like a risk, because it's not clear how this might interact with a chosen model or state object.
