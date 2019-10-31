pragma solidity 0.5.8;

import "./Ownable.sol";


contract MicroCredit is Ownable {
	mapping (address => uint) requests;
	mapping (address => uint) approves;

    event Request(address indexed _from, uint256 _value);

	function requestCredit(uint amount) public {
        requestCreditWithFacilitator(msg.sender, amount);
	}

    function approveRequest(address borrower, uint amount) public payable onlyOwner {
        require(msg.value == amount);
        approves[borrower] = amount;
    }

    function requestCreditWithFacilitator(address from, uint amount) public {
        requests[from] = amount;
        emit Request(from, amount);
    }

    function rejectRequest(address borrower) public onlyOwner {
        requests[borrower] = 0;
    }

    function getCredit() public {
        getCreditWithFacilitator(msg.sender);
    }

    function getCreditWithFacilitator(address payable from) public {
        address payable _to = from;
        uint _value = approves[_to];

        approves[_to] = 0;
        _to.transfer(_value);
    }

    function cancelCredit() public {
        address _from = msg.sender;
        uint _value = approves[_from];

        approves[_from] = 0;
        owner.transfer(_value);
    }

}
