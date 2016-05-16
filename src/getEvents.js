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
      return commandDetails.lifeCycleEvents.map((event) => `${prefix}${commandPart}:${event}`);
    }
    if (has(commandDetails, 'commands')) {
      return getEvents(command.slice(1, command.length), commandDetails.commands, `${commandPart}:`);
    }
  }

  return [];
};

export default getEvents;
