const doSomethingCard = require("./adaptiveCards/doSomethingCommandResponse.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");
const eligCard = require('./adaptiveCards/eligCard.json')

class DoSomethingCommandHandler {
    triggerPatterns = "doSomething";

    async handleCommandReceived(context, message) {
        // verify the command arguments which are received from the client if needed.

        const cardJson = AdaptiveCards.declare(eligCard).render();
        return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
    }    
}

module.exports = {
    DoSomethingCommandHandler,
}