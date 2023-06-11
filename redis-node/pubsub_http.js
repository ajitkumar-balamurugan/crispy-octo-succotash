const express = require("express");
const app = express();
const redis = require("redis");

(async () => {
  const subscriber = redis.createClient();
  subscriber.on("error", (error) => console.error(`Error : ${error}`));
  await subscriber.connect();
  await subscriber.subscribe("site", (message) => {
    console.log(message);
  });
})();

app.use(express.json());

app.post("/store-data", async (req, res) => {
  const data = req.body;
  try {
    (async () => {
      const publisher = redis.createClient();
      publisher.on("error", (error) => console.error(`Error : ${error}`));
      await publisher.connect();
      const pubMsg = await publisher.publish("site", JSON.stringify(data));
      res.send({
        status: "success",
        result: JSON.parse(pubMsg),
      });
    })();
  } catch (error) {
    console.error(error);
    res.status(404).send("Error Storing data");
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
