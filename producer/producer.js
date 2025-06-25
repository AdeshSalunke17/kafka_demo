const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["<localIP>:9092"],
});

const init = async () => {
    const producer = kafka.producer();
    await producer.connect();
    setInterval(async () => {
        await producer.send({
    topic: 'num-storage',
    messages: [
        { key: 'num', value: Math.random() + '', partition : Math.ceil(Math.random() * 10) <= 5 ? 0 : 1 }
    ],
});
console.log("number successfully generated");
    }, 1000);
}

init();