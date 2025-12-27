// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@fhenixprotocol/contracts/FHE.sol";

contract PrivateVoting {
    // Voting logic will go here
    euint32 private totalVotes;

    constructor() {
        totalVotes = FHE.asEuint32(0);
    }

    function submitVote(euint32 encryptedVote) public {
        totalVotes = FHE.add(totalVotes, encryptedVote);
    }
}
