/* eslint-disable no-console */

import forEach from 'lodash/forEach';
import getEvents from './getEvents';

export default class Serverless {

  constructor(config) {
    this.config = config;
    this.plugins = config.plugins.map((Plugin) => new Plugin(config));
    const commandsList = this.plugins.map((plugin) => plugin.commands);

    // Collect all base level commands.
    // Note: here duplicates are overwritten by the last one and that's maybe not the desired behaviour
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

    // collect all relevant hooks
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

    // run all relevant hooks one after another
    // Note: this code needs to be a bit more complex to support async hooks using Promises
    console.log('hooks', hooks);
    hooks.forEach((hook) => {
      hook();
    });
  }
}
