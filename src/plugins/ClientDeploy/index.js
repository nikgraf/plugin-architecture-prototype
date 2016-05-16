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
    return true;
  };

  buildClient = () => {
    console.log('Hook: Building client');
    return true;
  };

  zipFiles = () => {
    console.log('Hook: Zipping up files with gzip');
    return true;
  };

  uploadToS3 = () => {
    console.log('Hook: Upload stuff to the S3 bucket');
    return true;
  };

  cleanUp = () => {
    console.log('Hook: Cleaning up stuff');
    return true;
  };

}
