const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["<localIP>:9092"],
});

const init = async () => {
   const admin = kafka.admin();
   console.log("Admin connecting...");
   await admin.connect();
   console.log("Adming Connection Success...");

   console.log("Creating Topic [num-storage]");
   await admin.createTopics({
    topics : [{
        topic : "num-storage",
        numPartitions : 2
    }]
   });
   console.log("Topic Created Success [num-storage]");

   console.log("Disconnecting Admin..");
   await admin.disconnect();
   console.log("Adming Discnnection Success...");
}

init();