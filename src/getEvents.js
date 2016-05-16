import has from 'lodash/has';

/*
 * Returns the relevant events while prefixing them properly based on the command.
 *
 * Note: this is a recursive function and can go as deep as needed
 */
const getEvents = (command, availableCommands, prefix = '') => {
  const commandPart = command[0];
  if (has(availableCommands, commandPart)) {
    const commandDetails = availableCommands[commandPart];
    if (command.length === 1) {
      const events = [];
      commandDetails.lifeCycleEvents.forEach((event) => {
        events.push(`${prefix}${commandPart}:${event}Pre`);
        events.push(`${prefix}${commandPart}:${event}`);
        events.push(`${prefix}${commandPart}:${event}Post`);
      });
      return events;
    }
    if (has(commandDetails, 'commands')) {
      return getEvents(command.slice(1, command.length), commandDetails.commands, `${commandPart}:`);
    }
  }

  return [];
};

export default getEvents;
