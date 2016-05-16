'use strict';

import Serverless from '../../../src/Serverless';
import { expect } from 'chai';

describe('Serverless', () => {

  let serverless;

  beforeEach(() => {
    class mockPlugin {
      constructor() {
        this.commands = {
          deploy: {
            usage: 'Please pick one command',
            lifeCycleEvents: [
              'resources',
            ]
          },
        };

        this.hooks = {
          'deploy:resourcesPre': this.deployResourcesPre,
        };
      }

      deployResourcesPre = () => {
        return { function: 'deployResourcesPre' }
      }
    }

    const mockConfig = {
      plugins: [mockPlugin]
    };

    serverless = new Serverless(mockConfig);
  });

  describe('#constructor()', () => {

    it('should load a plugin', () => {
      expect(serverless.plugins.length).to.equal(1);
    });

    it('should extract a commandList from the loaded plugin', () => {
      expect(serverless.commands).to.not.deep.equal({});
    });

  });

  describe('#runCommand()', () => {

    it('should run a given command');

  });

});
