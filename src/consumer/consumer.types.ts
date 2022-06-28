import {APIGatewayEventRequestContext, Callback, SQSEvent} from "aws-lambda";

export interface ConsumerEvent {
  groupId: string
  value: number
}

export type ConsumerHandler = (event: SQSEvent, context: APIGatewayEventRequestContext, callback: Callback<void>) => void;
