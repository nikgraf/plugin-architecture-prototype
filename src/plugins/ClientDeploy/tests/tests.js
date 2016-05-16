'use strict';

import chai from 'chai';
import dirtyChai from 'dirty-chai';

process.env.NODE_ENV = 'test';

chai.use(dirtyChai);


import ClientDeploy from '../index';
import { expect } from 'chai';

describe('ClientDeploy', () => {

  let clientDeploy;

  beforeEach(() => {
    clientDeploy = new ClientDeploy();
  });

  describe('#constructor()', () => {

    it('should have commands', () => {
      expect(clientDeploy.commands).to.not.deep.equal({});
    });

    it('should have hooks', () => {
      expect(clientDeploy.hooks).to.not.deep.equal({});
    });

  });

  describe('#compileAssets()', () => {
    it('should compile assets', () => {
      const result = clientDeploy.compileAssets();
      expect(result).to.equal(true);
    });
  });

  describe('#buildClient()', () => {
    it('should build the client', () => {
      const result = clientDeploy.buildClient();
      expect(result).to.equal(true);
    });
  });

  describe('#zipFiles()', () => {
    it('should zip files with gzip', () => {
      const result = clientDeploy.zipFiles();
      expect(result).to.equal(true);
    });
  });

  describe('#uploadToS3', () => {
    it('should upload the files to S3', () => {
      const result = clientDeploy.uploadToS3();
      expect(result).to.equal(true);
    });
  });

  describe('#cleanUp()', () => {
    it('should clean up afterwards', () => {
      const result = clientDeploy.cleanUp();
      expect(result).to.equal(true);
    });
  });

});
