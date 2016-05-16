/* eslint-disable no-console */

export default class MyCustomDeployPlugin {
  constructor() {
    this.hooks = {
      'deploy:aws:functions': this.logOutSomeInfo,
    };
  }

  logOutSomeInfo = () => {
    console.log('Hook: AWS Functions in my custom deploy plugin');
  }
}
