
Traditionally, DOM re-rendering has been a huge performance bottleneck in front-end frameworks. React was the first major framework to address this bottlneck systematically using a "virtual" DOM layer. This serves as a proxy to determine when the real DOM should be updated.

The virtual DOM is a huge improvement, but still comes with some disadvantages:

* analyzing the virtual dom for differences can still be slow
* the virtual dom can take up a fair amount of memory
* improving performance requires careful use of `shouldComponentUpdate` to give the framework more information

