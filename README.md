# Generalised-Multichain-FolderStructure
---------------------------------------------------

Note: The current version is compatible with Multichain 1.0.2. For previous versions of Multichain that may be incompatible, see [Releases](https://github.com/scoin/multichain-node/releases).

All methods from the [Multichain API spec](http://www.multichain.com/developers/json-rpc-api/) are available. This library does not currently contain all bitcoind commands that are not part of the Multichain API spec, and as such is not really suitable for use with bitcoind. If you would like to add these commands, please submit a pull request with tests.

See [commands.js](https://github.com/scoin/multichain-node/blob/development/lib/commands.js) for all methods and their required / optional parameters. 

### Usage
To use in your project:

git clone <the repo>

npm install

### Configurations
make sure that multichain-blockchain is installed in your system and it should be connected to atleast one node.
 
To find multichain user and pass parameters refer multichain documentation. 

Configure multichain 'user' and 'pass' paramters as per your system multichain node in config.json file.
  
### Server Start

run 'node app.js' command inside the cloned folder.

### Test:

For Testing From any rest client:
For Adding Data into Blockchain:
 url:http://localhost:3000/addData,
 method:POST,
 body:{
  "key": "testing",
  "value": "12345"
}

For Reading Data into Blockchain:
url:http://localhost:3000/readData,
method:POST,
body:{
  "key": "testing"
} 
