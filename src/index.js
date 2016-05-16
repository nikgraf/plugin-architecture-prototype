import Serverless from './Serverless';

import DeployPlugin from './plugins/Deploy';
import ProjectInitializePlugin from './plugins/ProjectInitialize';

const plugins = [ProjectInitializePlugin, DeployPlugin];

const config = {
  plugins,
};

const serverless = new Serverless(config);

serverless.runCommand('deploy'); // execute a command
serverless.runCommand('deploy aws'); // execute a subcommand
serverless.runCommand('deploy aws aws'); // execute the subcommand and is not confused by the aws parameter
