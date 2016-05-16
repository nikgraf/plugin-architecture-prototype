/* eslint-disable no-console */

export default class DeployPlugin {
  constructor() {
    this.commands = {
      deploy: {
        usage: 'Please pick one of the sub commands deploy offers',
        lifeCycleEvents: [
          'resources',
          'functions',
        ],
        options: {
          stage: {
            usage: 'This may be whatever you setup in your serverless.yaml e.g dev, stating, prod',
          },
        },
        commands: {
          aws: {
            usage: 'Deploys only the AWS functions & resources',
            lifeCycleEvents: [
              'resources',
              'functions',
            ],
            options: {
              stage: {
                usage: 'This may be whatever you setup in your serverless.yaml e.g dev, stating, prod',
              },
            },
          },
        },
      },
    };

    this.hooks = {
      'deploy:resources': this.deployResources,
      'deploy:aws:functions': this.deployAwsFunctions,
    };
  }

  deployResources = () => {
    console.log('Hook: Resources in Deploy');
  }

  deployAwsFunctions = () => {
    console.log('Hook: AWS Functions in Deploy');
  }
}
