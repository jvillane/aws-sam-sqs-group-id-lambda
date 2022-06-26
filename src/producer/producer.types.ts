import {APIGatewayEventRequestContext, Callback} from "aws-lambda";

export type ProducerHandler = (event: { count: number }, context: APIGatewayEventRequestContext, callback: Callback<void>) => Promise<void>;
