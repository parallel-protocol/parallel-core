// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "./Base.s.sol";

contract GrantRole is BaseScript {
    address dao = 0xC5201FFE258a95Af986E7cD1fcaD54f3f63f2C95;
    address keeper = 0xc351C917a7f7b267e86a5f5368Be40FD1788c32b;

    function run() public broadcast {
        accessManager.grantRole(ADMIN_ROLE, dao, 0);
        accessManager.grantRole(Roles.GOVERNOR_ROLE, dao, 0);
        accessManager.grantRole(Roles.GOVERNOR_ROLE_TIMELOCK, dao, 0);
        accessManager.grantRole(Roles.GUARDIAN_ROLE, dao, 0);
        accessManager.grantRole(Roles.GUARDIAN_ROLE_TIMELOCK, dao, 0);
        accessManager.grantRole(Roles.KEEPER_ROLE, dao, 0);
        accessManager.grantRole(Roles.KEEPER_ROLE_TIMELOCK, dao, 0);
        accessManager.grantRole(Roles.KEEPER_ROLE, keeper, 0);
        accessManager.grantRole(Roles.KEEPER_ROLE_TIMELOCK, keeper, 0);
    }
}
