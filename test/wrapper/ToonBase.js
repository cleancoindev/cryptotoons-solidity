const BigNumber = require('bignumber.js');

export class ToonBase {

    constructor(instance) {
        this.wrapped = instance;
    }

    /**
     * @returns {Promise<BigNumber>}
     */
    maxSupply = async () => await this.wrapped.maxSupply();

    /**
     * @returns {Promise<BigNumber>}
     */
    totalSupply = async () => await this.wrapped.totalSupply();

    /**
     * @returns {Promise<string>}
     */
    tokenURI = async (id) => await this.wrapped.tokenURI(id);

    /**
     * @returns {Promise<string>}
     */
    authorAddress = async () => await this.wrapped.authorAddress();

    get address() {
        return this.wrapped.address;
    }

}