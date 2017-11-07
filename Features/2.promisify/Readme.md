# `util.promisify()`

Node.js 8 has a new utility function: util.promisify(). It converts a callback-based function to a Promise-based one.

You can see it in action, cd into this folder and make sure you're on node LTS (if you have nvm run `nvm use`)

```
node promisify-example.js example.txt

    CONTENT: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis libero sit amet pretium ultricies. Cras bibendum a magna et porttitor.

node promisify-example.js

    ERROR: TypeError: path must be a string or Buffer
```

Promisify supports async/await as well, so you can port callback based code to async/await!

```
node promisify-async-example.js example.txt
    CONTENT: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis libero sit amet pretium ultricies.

node promisify-async-example.js
    ERROR: TypeError: path must be a string or Buffer
```