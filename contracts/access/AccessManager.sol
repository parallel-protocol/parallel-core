// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import { AccessManager as OZAccessManager } from "@openzeppelin/contracts/access/manager/AccessManager.sol";

import { Roles } from "contracts/libraries/RolesLib.sol";

/// @title AccessManager
/// @author Parallel Labs
/// @custom:contact security@cooperlabs.xyz
/// @notice Contract inheriting from OpenZeppelin's AccessManager contract.
contract AccessManager is OZAccessManager {
    constructor(address owner) OZAccessManager(owner) { }
}
