var VRCoin=artifacts.require("VRCoin")

contract("VRCoin", (accounts) =>{
 before(async() =>{
     VRCoin= await VRCoin.deployed()
     console.log("VRCoin address: ", VRCoin.address)
 })

 it("gives an account 1Trillion  tokens" , async() => {
    let balance= await VRCoin.balanceOf(accounts[0])
    balance= web3.utils.fromWei(balance,'ether')
    assert.equal(balance,'10000000000000', 'balance should be 10000000000000 for account 1')
    console.log(balance)
})

it("can transfer tokeens between accounts" , async() => {
    let amount= web3.utils.toWei('1000')
    await VRCoin.transfer(accounts[1], amount,{from: accounts[0]})

    let balance= await VRCoin.balanceOf(accounts[1])
    balance= web3.utils.fromWei(balance,'ether')
   assert.equal(balance,'1000', 'balance should be 1000 for account 1')
})
})
