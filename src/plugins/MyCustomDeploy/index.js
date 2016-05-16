/* eslint-disable no-console */

export default class MyCustomDeployPlugin {
  constructor() {
    this.hooks = {
      'deploy:aws:functionsPre': this.addCustomAuthFunction,
      'deploy:aws:functions': this.logOutSomeInfo,
    };
  }

  addCustomAuthFunction = () => {
    console.log('Hook Pre: AWS Functions in my custom deploy plugin');
  }

  logOutSomeInfo = () => {
    console.log('Hook: AWS Functions in my custom deploy plugin');
  }
}
