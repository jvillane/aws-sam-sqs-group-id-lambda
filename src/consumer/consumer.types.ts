import {APIGatewayEventRequestContext, Callback} from "aws-lambda";

interface ConsumerEvent {
  groupId: string
  value: number
}

export type ConsumerHandler = (event: ConsumerEvent, context: APIGatewayEventRequestContext, callback: Callback<void>) => void;
