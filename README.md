# Unhandled Server Startup Errors in Node.js

This repository demonstrates a common issue in Node.js applications where server startup errors are not properly handled, leading to silent crashes.

## Bug
The `bug.js` file contains a simple HTTP server.  However, it lacks error handling for situations where the server cannot start (e.g., port already in use).

## Solution
The `bugSolution.js` file shows how to implement proper error handling using the `'error'` event listener on the `http.Server` object. This will catch the errors and log an informative message to the console, helping developers understand and debug the issue.