# Async/Await
For those who have never heard of this topic before, here’s a quick intro

-  it's a new way to write asynchronous code. Previous options for asynchronous code are callbacks and promises.
-  it's actually built on top of promises. It cannot be used with plain callbacks or node callbacks.
-  it's, like promises, non blocking the event loop
-  makes asynchronous code look and behave a little more like synchronous code. This is where all its power lies.

You can see it in action, cd into this folder and make sure you're on node LTS (if you have nvm run `nvm use`)

```
node async-await-example.js
hello world

node promise-example.js
hello world
```