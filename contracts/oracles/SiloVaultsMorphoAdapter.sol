// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import { IERC4626 } from "@openzeppelin/contracts/interfaces/IERC4626.sol";

/// @title SiloVaultsMorphoAdapter
/// @author Cooper Labs
/// @custom:contact security@cooperlabs.xyz
/// @notice Adapter of Silo Vaults for MorphoChainlinkOracleV2.
/// @dev Silo Vaults v2 is a ERC4626 that do not have an initial 1:1 shares-to-assets rate with underlying markets but
/// 1e18 shares = 1 underlying asset.
/// @dev This adapter is used to allow MorphoChainlinkOracleV2 to get the assets value of Silo Vaults v2 rounded down.
contract SiloVaultsMorphoAdapter {
    uint256 public immutable SILO_DECIMALS_OFFSET;

    IERC4626 public immutable siloVault;

    constructor(IERC4626 _vault, uint256 _siloDecimalsOffset) {
        require(address(_vault) != address(0), "Invalid vault address");
        require(_siloDecimalsOffset > 0, "Invalid silo decimals offset");
        siloVault = _vault;
        SILO_DECIMALS_OFFSET = _siloDecimalsOffset;
    }

    /// @notice Convert shares to assets and apply the silo decimals offset.
    /// @param shares The number of shares to convert in 1e18.
    /// @return The number of assets in 1e18 from silo vault.
    function convertToAssets(uint256 shares) external view returns (uint256) {
        return siloVault.convertToAssets(shares * 10 ** SILO_DECIMALS_OFFSET);
    }
}
