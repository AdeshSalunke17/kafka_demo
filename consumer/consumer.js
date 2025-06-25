const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["<localIP>:9092"],
});

const init = async () => {
    const consumer = kafka.consumer({ groupId: 'group1' });
    await consumer.connect();
    await consumer.subscribe({ topics: ['num-storage'], fromBeginning : true });
    await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
        console.log({
            key: message.key.toString(),
            value: message.value.toString(),
            partition: partition.toString(),
        })
    },
})

}

init();