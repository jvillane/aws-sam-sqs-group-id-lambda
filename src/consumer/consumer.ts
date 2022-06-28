import { ConsumerEvent, ConsumerHandler } from "./consumer.types";

export const consume: ConsumerHandler = (event, context, callback) => {
  try {
    const consumerEvents: ConsumerEvent[] = event.Records.map(r => JSON.parse(r.body) as ConsumerEvent);
    console.log(`START ${consumerEvents.length} consumerEvents`, JSON.stringify(consumerEvents));
    if (consumerEvents.length > 0) {
      let ms = 100;
      if (consumerEvents[0].groupId === 'A') {
        ms = 2000;
      }
      setTimeout(() => {
        console.log(`END ${consumerEvents.length} consumerEvents`, JSON.stringify(consumerEvents));
        callback(null);
      }, ms);
    }
  } catch (err) {
    console.log('err', JSON.stringify(event), err);
  }
}
