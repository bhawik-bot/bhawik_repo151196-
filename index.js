

const checkMetamask = async () => {
	if (window.ethereum) {
		window.web3 = new Web3(window.ethereum);
		window.ethereum.enable();
		return true;
	}
	return false;
}
if (!checkMetamask()) {
	alert("Please install MetaMask to use this dApp!");
} else {

	alert("connect");
	checkRunningNetwork();
}

//checking current running network
function checkRunningNetwork() {
	try{
		web3.eth.net.getId(function (err, data) {
            if(err) throw err;
            console.log(data);
			if (data != 97) {
				confirm("Please connect to the Binance smart chain network");
			}
		});
	}
	catch(err){
		console.log(err);
	}
};

//contract address
var contractAddress = '0x4322697694c1976D75f35b34c94850766A2dF895';

//contract ABI
var abi = [

	
	
	
	
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_symbol",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_initialSupply",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				}
			],
			"name": "burn",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "subtractedValue",
					"type": "uint256"
				}
			],
			"name": "decreaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "addedValue",
					"type": "uint256"
				}
			],
			"name": "increaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				}
			],
			"name": "mint",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}
			],
			"name": "allowance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "decimals",
			"outputs": [
				{
					"internalType": "uint8",
					"name": "",
					"type": "uint8"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	
	

];

//contract instance
var contract = new window.web3.eth.Contract(abi, contractAddress);
console.log(contract);
// Accounts
var account;

function fetchAccount(){
	web3.eth.getAccounts(function (err, accounts) {
		if (err != null) {
			alert("Error");
			return;
		}
		if (accounts.length == 0) {
			alert("No account found");
			return;
		}
		console.log(accounts);
		account = accounts[0];
		console.log('Account: ' + account);
		web3.eth.defaultAccount = account;
		
	});
	
};

fetchAccount();

//mint token
function tokenMint(){

	console.log("hello");
	alert("Please wait..... transaction is in processing state");
	$('#mintLoader').show();
	var _amount = document.getElementById('mintAmount').value;
	console.log(_amount);
	_amount = window.web3.utils.toWei(_amount, "ether");

     contract.methods.mint(_amount).send({
		from: account,
	
	}).then(function (tx) {
		 
		if(tx){
		alert("Tansaction done successfully");
		$('#mintAmount').val("");
		$('#mintLoader').hide();
		}
		else{
			alert("Tansaction failed");
		}
		console.log("Transaction: ", tx);
		
	});
};

//transfer token
function transferToken(){


	console.log("hello");
	alert("Please wait..... transaction is in processing state");
	$('#transferLoader').show();
	var _address = $('#transferAddress').val();
	var _amount = $('#transferAmount').val();
	_amount = window.web3.utils.toWei(_amount, "ether");
	contract.methods.transfer(_address,_amount).send({
		from: account
	
	}).then(function (tx) {
		if(tx){
			alert("Tansaction done successfully");
			$('#transferAddress').val("");
			$('#transferAmount').val("");
			$('#transferLoader').hide();
		}
		else{
			alert("Tansaction failed");
		}
		console.log("Transaction: ", tx);
		
	});

};

//burn token
function burnToken(){

	console.log("hello");
	alert("Please wait..... transaction is in processing state");
	$('#burnLoader').show();
	var _amount = $('#burnAmount').val();
	_amount = window.web3.utils.toWei(_amount, "ether");
	contract.methods.burn(_amount).send({
		from: account
	
	}).then(function (tx) {
		if(tx){
			alert("Tansaction done successfully");
			$('#burnAmount').val("");
			$('#burnLoader').hide();
			
		}
		else{
			alert("Tansaction failed");
		}
		console.log("Transaction: ", tx);
		
	});
};

//balance
function checkBalance(){

	var address = document.getElementById('balanceAddress').value
	console.log(address);
	contract.methods.balanceOf(address).call().then(function (data) {
		console.log("Result: ", data);
		var toEth = window.web3.utils.fromWei(data,'ether');
		$("#show").html(toEth+" GELT");
	});
	$('#balanceAddress').val("");
}

window.ethereum.on('accountsChanged', function (accounts) {
fetchAccount();
  })

  function loader(){
	$(".loader").hide();
  }

  $(document).ready(function() {
    loader();
});

