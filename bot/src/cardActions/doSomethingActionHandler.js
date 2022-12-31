const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { AdaptiveCardResponse, InvokeResponseFactory } = require("@microsoft/teamsfx");
const helloWorldCard = require('./../adaptiveCards/helloworldCommand.json');

    class DoSomethingActionHandler { 
    triggerVerb = "eligSubmit";

    adaptiveCardResponse = AdaptiveCardResponse.NewForAll;
        async handleActionInvoked(context, message) { 
            // const responseCardJson = AdaptiveCards.declare(helloWorldCard).render();
            return InvokeResponseFactory.textMessage(message.inputTime);
        }
    }

     module.exports = {
       DoSomethingActionHandler,
    }