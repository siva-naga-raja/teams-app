const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { AdaptiveCardResponse, InvokeResponseFactory } = require("@microsoft/teamsfx");
const x12ResposneCard = require('./../adaptiveCards/helloworldCommand.json');
const { chatbotAPIServiceClient } = require('./../apiConnections/chatbotAPIService');

class EligibilityActionHandler {
    triggerVerb = "eligibilityTriggerVerb";

    async handleActionInvoked(context, message) {
        console.log("details entered: " + JSON.stringify(message));

        const response = await chatbotAPIServiceClient.post("rasa/core/v2", {
            "intent": "eligibiity",
            "message": message.x12Data,
            "env": message.env
        })

        console.log("response body: " + response.body)
        const options = {
            "responseText": JSON.stringify(response.body)
        }

        const responseCardJson = AdaptiveCards.declare(x12ResposneCard).render(options);
        return InvokeResponseFactory.adaptiveCard(responseCardJson);
    }
}

module.exports = {
    EligibilityActionHandler,
}