import Serverless from './src/Serverless';

import DeployPlugin from './src/plugins/Deploy';
import ClientDeployPlugin from './src/plugins/ClientDeploy';
import MyCustomDeployPlugin from './src/plugins/MyCustomDeploy';
import ProjectInitializePlugin from './src/plugins/ProjectInitialize';

const plugins = [ProjectInitializePlugin, DeployPlugin, ClientDeployPlugin, MyCustomDeployPlugin];

const config = {
  plugins,
};

const serverless = new Serverless(config);

serverless.runCommand('deploy'); // execute a command
serverless.runCommand('deploy aws'); // execute a subcommand
serverless.runCommand('deploy aws aws'); // execute the subcommand and is not confused by the aws parameter

serverless.runCommand('client deploy');
