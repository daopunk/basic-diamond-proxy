import { time, loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { anyValue } from '@nomicfoundation/hardhat-chai-matchers/withArgs';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Diamond Contract', function () {
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Diamond = await ethers.getContractFactory('Diamond');
    const diamond = await Diamond.deploy();
    await diamond.deployed();
  }

  // describe('Deployment', function () {
  //   it('do something', async function () {
  //     expect(await lock.unlockTime()).to.equal(unlockTime);
  //   });

  //   it('Should set the right owner', async function () {
  //     const { lock, owner } = await loadFixture(deployOneYearLockFixture);

  //     expect(await lock.owner()).to.equal(owner.address);
  //   });
  // });

  // describe('Deployment', function () {
  //   it('do something', async function () {
  //     expect(await lock.unlockTime()).to.equal(unlockTime);
  //   });

  //   it('Should set the right owner', async function () {
  //     const { lock, owner } = await loadFixture(deployOneYearLockFixture);

  //     expect(await lock.owner()).to.equal(owner.address);
  //   });
  // });
});
