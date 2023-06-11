const express = require("express");
const app = express();
const redis = require("redis");
let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

app.use(express.json());

app.post("/store-data", async (req, res) => {
  const data = req.body;
  try {
    await redisClient.set(data.key, JSON.stringify(data.value));
    let data2 = await redisClient.get(data.key);
    res.send({
      status: "success",
      result: JSON.parse(data2),
    });
  } catch (error) {
    console.error(error);
    res.status(404).send("Error Storing data");
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// app.get("/get-data", (req, res) => {
//   redisClient.get("dataKey", (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Error retrieving data from Redis");
//     } else {
//       res.send(JSON.parse(data));
//     }
//   });
// });
