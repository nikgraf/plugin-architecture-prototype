/* eslint-disable no-console */

export default class ClientDeployPlugin {
  constructor() {
    this.commands = {
      client: {
        commands: {
          deploy: {
            usage: 'Upload the client to an S3 bucket',
            lifeCycleEvents: [
              'compileAssets',
              'buildClient',
              'zipFiles',
              'uploadToS3',
              'cleanUp'
            ],
          },
        },
      },
    };

    this.hooks = {
      'client:deploy:compileAssets': this.compileAssets,
      'client:deploy:compileAssetsPost': this.buildClient,

      'client:deploy:uploadToS3Pre': this.zipFiles,
      'client:deploy:uploadToS3': this.uploadToS3,
      'client:deploy:uploadToS3Post': this.cleanUp,
    };
  }

  compileAssets = () => {
    console.log('Hook: Precompiling assets');
  };

  buildClient = () => {
    console.log('Hook: Building client');
  };

  zipFiles = () => {
    console.log('Hook: Zipping up files with gzip');
  };

  uploadToS3 = () => {
    console.log('Hook: Upload stuff to the S3 bucket');
  };

  cleanUp = () => {
    console.log('Hook: Cleaning up stuff');
  };

}
