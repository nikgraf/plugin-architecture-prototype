/* eslint-disable no-console */

import forEach from 'lodash/forEach';
import getEvents from './getEvents';

export default class Serverless {

  constructor(config) {
    this.config = config;
    this.plugins = config.plugins.map((Plugin) => new Plugin(config));
    const commandsList = this.plugins.map((plugin) => plugin.commands);

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

    let hooks = [];
    events.forEach((event) => {
      const hooksForEvent = [];
      this.plugins.forEach((plugin) => {
        forEach(plugin.hooks, (hook, hookKey) => {
          if (hookKey === event) {
            hooksForEvent.push(hook);
          }
        });
      });
      hooks = hooks.concat(hooksForEvent);
    });

    console.log('hooks', hooks);
    hooks.forEach((hook) => {
      hook();
    });
  }
}
