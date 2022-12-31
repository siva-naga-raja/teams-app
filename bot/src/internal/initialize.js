const { ConversationBot } = require("@microsoft/teamsfx");
const { HelloWorldCommandHandler } = require("../helloworldCommandHandler");
const { DoSomethingCommandHandler} = require("../doSomethingCommandHandler");
const { DoSomethingActionHandler } = require('./../cardActions/doSomethingActionHandler')
const { EligibilityCommandHandler } = require('./../eligibilityCommandHandler');
const { EligibilityActionHandler } = require('./../cardActions/eligibilityActionHandler');

const config = require("./config");

// Create the command bot and register the command handlers for your app.
// You can also use the commandBot.command.registerCommands to register other commands
// if you don't want to register all of them in the constructor
const commandBot = new ConversationBot({
  // The bot id and password to create BotFrameworkAdapter.
  // See https://aka.ms/about-bot-adapter to learn more about adapters.
  adapterConfig: {
    appId: config.botId,
    appPassword: config.botPassword,
  },
  command: {
    enabled: true,
    commands: [
      new HelloWorldCommandHandler(),
      new DoSomethingCommandHandler(), 
      new EligibilityCommandHandler()
    ],
  },
  cardAction: { 
    enabled: true, 
    actions: [ 
      new DoSomethingActionHandler(),
      new EligibilityActionHandler()
    ], 
  } 
});

module.exports = {
  commandBot,
};
