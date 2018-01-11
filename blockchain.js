const sha256 = require('js-sha256').sha256. //this module handles the cryptography part

const blockchain = (function(){
  const blocks = [] //empty array that will hold blockchain's blocks

  const initBlockchain = () => { //starts blockchain and creates the Genesis block
    const data = 'Hello World!'
    const timestamp = new Date()
    const previousHash = 0
    const index = 0
    hashBlock(data, timestamp, previousHash, index)
  }

  const hashBlock = (data, timestamp, prevHash, index) => { //takes all the block's data and creates hash
    let hash = '', nonce = 0

    while( !isHashValid(hash) ){ //checks to see if hash is valid. If first 4 characters are 0000, it is
      let input = `${data}${timestamp}${prevHash}${index}${nonce}`
      hash = sha256(input)
      nonce += 1
    }
    console.log(nonce)
    blocks.push(hash)
  }

  const getLastHash = blocks => blocks.slice(-1)[0] //gets previous hash (we need this to create a new block)

  const isHashValid = hash => hash.startsWith('0000') // "Difficulty". (The problem we must solve to make sure block is part of the blockchain)

  const addNewBlock = data => { //Responsible for creating a new block
    const index = blocks.length
    const previousHash = getLastHash(blocks)
    hashBlock(data, new Date(), previousHash, index) //creates and validates new block
  }

  const getAllBlocks = () => blocks //returns all blocks in blockchain

  return {
    initBlockchain,
    getLastHash,
    blocks,
    getAllBlocks,
    addNewBlock
  }
})()

module.exports = blockchain