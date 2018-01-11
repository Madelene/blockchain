const blockchain = require('./blockchain')

blockchain.initBlockchain() //initializes blockchain
blockchain.addNewBlock('First new block') //creates 3 new blocks
blockchain.addNewBlock('I love blockchains')
blockchain.addNewBlock('Make me a new hash!!')

console.log(blockchain.getAllBlocks())

// When you run this:

//Initializing the blockchain
// 139355  the first one ran this many times until it was valid (the "nonce")
// 30720
// 68789
// 51486
// [ '0000d87875f12e8c00d60cdfc8c21c4867eb1e732d3bb0e4d60bd0febcfafbaf',  4 valid blocks
//   '0000331d80f4e83461bad846e082baa08c5e739edfa19a4880c1dcbe4eed1984',
//   '00000dcab247410050e357158edc20555cc0110429023fdadb1d8cda3e06da5e',
//   '0000a16968811cf75c33d877e99f460d396c46b5485f669c8e55b193b862106d' ]