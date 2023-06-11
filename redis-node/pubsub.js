const redis = require("redis");

(async () => {
  const subscriber = redis.createClient();
  //   redisClient.on("error", (error) => console.error(`Error : ${error}`));
  await subscriber.connect();
  await subscriber.subscribe("article", (message) => {
    console.log(message);
  });
})();

(async () => {
  const article = {
    id: "123456",
    name: "Using Redis Pub/Sub with Node.js",
    blog: "Logrocket Blog",
  };

  const publisher = redis.createClient();
  //   redisClient.on("error", (error) => console.error(`Error : ${error}`));
  await publisher.connect();
  await publisher.publish("article", JSON.stringify(article));
})();
