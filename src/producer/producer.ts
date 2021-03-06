import { SQS } from "aws-sdk";
import { ProducerHandler } from "./producer.types";

const GROUP_IDS = ['A', 'B', 'C', 'D'];
const SQS_QUEUE_URL = process.env.SQS_QUEUE_URL as string;;

const sqs = new SQS();

export const produce: ProducerHandler = async ({ count, id }, context, callback) => {
  for(let value = 1; value <= count; value++) {
    for(const groupId of GROUP_IDS) {
      const messageRequest: SQS.Types.SendMessageRequest = {
        QueueUrl: SQS_QUEUE_URL,
        MessageGroupId: groupId,
        MessageBody: JSON.stringify({ groupId, value }),
        MessageDeduplicationId: `${groupId}_${id}_${value}`
      };
      try {
        await sqs.sendMessage(messageRequest).promise();
      } catch (err) {
        console.log('err', JSON.stringify(err));
      }
      //await new Promise(
      //  () => setTimeout(() => { }, 1000)
      //);
    }
  }
  callback(null);
};
