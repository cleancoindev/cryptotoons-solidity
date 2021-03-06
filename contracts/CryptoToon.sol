pragma solidity ^0.4.24;

import "./ToonInterface.sol";
import "./ToonAuction.sol";

contract CryptoToon is ToonAuction {

    //TODO should all the toons have the same symbol??
    constructor(string _name, string _symbol, uint _maxSupply, uint32 _maxPromoToons, address _author)
    public
    ToonAuction(_name, _symbol, _maxSupply, _maxPromoToons, _author) {
    }

    function getToonInfo(uint _id) external view returns (
        uint genes,
        uint birthTime,
        address owner
    ) {
        Toon memory _toon = _getToon(_id);
        return (_toon.genes, _toon.birthTime, ownerOf(_id));
    }

}
