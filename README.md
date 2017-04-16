# Chat

## Running 

* Run `node-dev index.js` in the root repository directory to start the node websocket server. 
* If doing simultaneous development in core, run `tsc -w` in the **stereograph-core**; In order for node to access @stereograph/core as a module, core needs an index.js file in the core root directory. Typescript compilation generates this file.
* Run `ng serve` in chat repository root to serve up the chat client.