const Ownable = artifacts.require("Ownable");

contract('Ownable tests', (accounts) => {

    beforeEach(async function () {
        OwnableC = await Ownable.deployed();
    });

    it('check owner function', async function() {
        let owner = await OwnableC.owner();

        assert.equal(owner, accounts[0]);
    });

    it('check transferOwnership function', async function() {
        let newOwner = accounts[5];
        await OwnableC.transferOwnership(newOwner);
        let owner = await OwnableC.owner();
        assert.equal(owner, newOwner);
    });

    it('check transferOwnership function from not owner', async function() {
        let newOwner = accounts[0];
        let err;
        try {
            await OwnableC.transferOwnership(newOwner);
        } catch (error) {
            err = error;
        }
        assert.ok(err instanceof Error);

        await OwnableC.transferOwnership(newOwner, {from: accounts[5]});
        let owner = await OwnableC.owner();
        assert.equal(owner, newOwner);
    });

    it('check transferOwnership function with zero address', async function() {
        let newOwner = 0x0;
        let err;
        try {
            await OwnableC.transferOwnership(newOwner);
        } catch (error) {
            err = error;
        }
        assert.ok(err instanceof Error);
    });
});