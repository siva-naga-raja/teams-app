const eligibilityCard = require("./adaptiveCards/eligibilityCard.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");

class EligibilityCommandHandler {
    triggerPatterns = "eligibility";

    async handleCommandReceived(context, message) {
        const cardJson = AdaptiveCards.declare(eligibilityCard).render();
        return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
    }    
}

module.exports = {
    EligibilityCommandHandler,
}