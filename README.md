# Demo of bug

Typechecking in the HTML template is incorrect when using `SetOptional` from type-fest.

In the typescript file, the type is correct and all properties are available:

![image showing correct automcomplete suggestions in a typescript context](./screenshot-1.png)

In the html file, only the optional properties are recognised by the IDE:

![image showing only the ID property in the automcomplete suggestions in an html context](./screenshot-2.png)

And valid properties are highlighted as erroneous:

![image showing use of the valid displayName property being incorrectly highlighted as invalid](./screenshot-3.png)
