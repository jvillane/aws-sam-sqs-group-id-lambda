import {APIGatewayEventRequestContext, Callback} from "aws-lambda";

interface ProducerEvent {
  count: number
  id: number
}

export type ProducerHandler = (event: ProducerEvent, context: APIGatewayEventRequestContext, callback: Callback<void>) => Promise<void>;
