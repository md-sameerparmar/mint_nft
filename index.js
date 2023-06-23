let express = require('express');
let app = express();
const aptos = require('aptos');
let bodyParser = require('body-parser');
let urlEncodedParser = bodyParser.urlencoded({ extended: false});

// const client = new aptos.AptosClient("https://fullnode.devnet.aptoslabs.com");
// const tokenClient = new aptos.TokenClient(client);

// address: "7a8058cc82109a168f96241e2d69c63816d8e6af1a37ba665326b93c54e1d9bd"
// privateKeyHex: "0xbd4edd1c22648b5c3a1f721bf06ff870dea1451fb9206a58fe7cad016a05c9ed"

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
})

var server = app.listen(3000, function () {
  var port = server.address().port

  console.log("App listening at http://localhost:%s", port);
})

// app.post('/mint_nft', urlEncodedParser, async (req, res) => {

//   const accountInfo = {
//     address: req.body.account_addr,
//     privateKeyHex: req.body.privet_key
//   };

//   const creatorAc = aptos.AptosAccount.fromAptosAccountObject(accountInfo);
//   console.log("\n=== Creating Collection and Token ===");

//   const collectionName = req.body.collection_name;
//   const tokenName = req.body.token_name;
//   const tokenPropertyVersion = 0;
//   const description = req.body.description;
//   const collectionUri = req.body.collection_uri;
//   const tokenUri = req.body.token_uri;

//   // const tokenId = {
//   //   token_data_id: {
//   //     creator: creatorAc.address().hex(),
//   //     collection: collectionName,
//   //     name: tokenName,
//   //   },
//   //   property_version: `${tokenPropertyVersion}`,
//   // };

//   // Create the collection.
//   const txnHash1 = await tokenClient.createCollection(
//     creatorAc,
//     collectionName,
//     description,
//     collectionUri,
//   ); 
//   await client.waitForTransaction(txnHash1, { checkSuccess: true });

//   // Create a token in that collection.
//   const txnHash2 = await tokenClient.createToken(
//     creatorAc,
//     collectionName,
//     tokenName,
//     description,
//     2,
//     tokenUri,
//   ); 
//   await client.waitForTransaction(txnHash2, { checkSuccess: true });

//   // Print the collection data.
//   const collectionData = await tokenClient.getCollectionData(creatorAc.address(), collectionName);
//   console.log(`Collection: ${JSON.stringify(collectionData, null, 4)}`); 

//   // Get the token balance.
//   const aliceBalance1 = await tokenClient.getToken(
//     creatorAc.address(),
//     collectionName,
//     tokenName,
//     `${tokenPropertyVersion}`,
//   );
//   console.log(`Token balance: ${aliceBalance1["amount"]}`); 

//   // Get the token data.
//   const tokenData = await tokenClient.getTokenData(creatorAc.address(), collectionName, tokenName);
//   console.log(`Token data: ${JSON.stringify(tokenData, null, 4)}`); 

  // // Alice offers one token to Bob.
  // console.log("\n=== Transferring the token to Bob ===");
  // // :!:>section_9
  // const txnHash3 = await tokenClient.offerToken(
  //   alice,
  //   bob.address(),
  //   alice.address(),
  //   collectionName,
  //   tokenName,
  //   1,
  //   tokenPropertyVersion,
  // ); // <:!:section_9
  // await client.waitForTransaction(txnHash3, { checkSuccess: true });

  // // Bob claims the token Alice offered him.
  // // :!:>section_10
  // const txnHash4 = await tokenClient.claimToken(
  //   bob,
  //   alice.address(),
  //   alice.address(),
  //   collectionName,
  //   tokenName,
  //   tokenPropertyVersion,
  // ); // <:!:section_10
  // await client.waitForTransaction(txnHash4, { checkSuccess: true });

  // // Print their balances.
  // const aliceBalance2 = await tokenClient.getToken(
  //   alice.address(),
  //   collectionName,
  //   tokenName,
  //   `${tokenPropertyVersion}`,
  // );
  // const bobBalance2 = await tokenClient.getTokenForAccount(bob.address(), tokenId);
  // console.log(`Alice's token balance: ${aliceBalance2["amount"]}`);
  // console.log(`Bob's token balance: ${bobBalance2["amount"]}`);

  // console.log("\n=== Transferring the token back to Alice using MultiAgent ===");
  // // :!:>section_11
  // let txnHash5 = await tokenClient.directTransferToken(
  //   bob,
  //   alice,
  //   alice.address(),
  //   collectionName,
  //   tokenName,
  //   1,
  //   tokenPropertyVersion,
  // ); // <:!:section_11
  // await client.waitForTransaction(txnHash5, { checkSuccess: true });

  // // Print out their balances one last time.
  // const aliceBalance3 = await tokenClient.getToken(
  //   alice.address(),
  //   collectionName,
  //   tokenName,
  //   `${tokenPropertyVersion}`,
  // );
  // const bobBalance3 = await tokenClient.getTokenForAccount(bob.address(), tokenId);
  // console.log(`Alice's token balance: ${aliceBalance3["amount"]}`);
  // console.log(`Bob's token balance: ${bobBalance3["amount"]}`);

  // const provider = new aptos.Provider(aptos.Network.DEVNET);
  // console.log("\n=== Checking if indexer devnet chainId same as fullnode chainId  ===");
  // const indexerLedgerInfo = await provider.getIndexerLedgerInfo();
  // const fullNodeChainId = await provider.getChainId();

  // console.log(`\n fullnode chain id is: ${fullNodeChainId}, indexer chain id is: ${indexerLedgerInfo}`);

  // if (indexerLedgerInfo.ledger_infos[0].chain_id !== fullNodeChainId) {
  //   console.log(`\n fullnode chain id and indexer chain id are not synced, skipping rest of tests`);
  //   return;
  // }

  // console.log("\n=== Getting Alices's NFTs ===");
  // const aliceNfts = await provider.getAccountNFTs(alice.address().hex());
  // console.log(`Alice current token ownership: ${aliceNfts.current_token_ownerships[0].amount}. Should be 1`);

  // console.log("\n=== Getting Bob's NFTs ===");
  // const bobNfts = await provider.getAccountNFTs(bob.address().hex());
  // console.log(`Bob current token ownership: ${bobNfts.current_token_ownerships.length}. Should be 0`);
//   res.send("Succsess");
// })
