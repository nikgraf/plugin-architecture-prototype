/* eslint-disable no-console */

import forEach from 'lodash/forEach';
import has from 'lodash/has';

const getEvents = (command, availableCommands) => {
  if (has(availableCommands, command[0])) {
    const commandDetails = availableCommands[command[0]];
    if (command.length === 1) {
      return commandDetails.lifeCycleEvents;
    }
    if (has(commandDetails, 'commands')) {
      return getEvents(command.slice(1, command.length), commandDetails.commands);
    }
  }

  return [];
};

export default class Serverless {

  constructor(config) {
    this.config = config;
    const plugins = config.plugins.map((Plugin) => new Plugin(config));
    const commandsList = plugins.map((plugin) => plugin.commands);

    // Note: here duplicates are overwritten by the last one
    this.commands = {};
    forEach(commandsList, (commands) => {
      forEach(commands, (commandDetails, command) => {
        this.commands[command] = commandDetails;
      });
    });
  }

  runCommand(command) {
    console.log(`\ncommand: ${command}`);
    const events = getEvents(command.split(' '), this.commands);
    console.log('events', events);
  }
}
