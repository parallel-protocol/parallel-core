// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

/// @title RolesLib
/// @author Parallel Labs
/// @custom:contact security@cooperlabs.xyz
/// @notice Library exposing base roles for Parallel Access Manager contracts.
library Roles {
    uint64 constant GOVERNOR_ROLE = 10;
    uint64 constant GOVERNOR_ROLE_TIMELOCK = 11;
    uint64 constant GUARDIAN_ROLE = 20;
    uint64 constant GUARDIAN_ROLE_TIMELOCK = 21;
    uint64 constant EURp_MINTER_ROLE = 100;
    uint64 constant EURp_MINTER_ROLE_TIMELOCK = 105;
    uint64 constant USDp_MINTER_ROLE = 110;
    uint64 constant USDp_MINTER_ROLE_TIMELOCK = 115;
}
