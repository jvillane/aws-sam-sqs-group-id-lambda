import { ConsumerHandler } from "./consumer.types";

export const consume: ConsumerHandler = (event, context, callback) => {
  console.log('event', JSON.stringify(event));
  console.log('context', JSON.stringify(context));
  callback(null);
}
