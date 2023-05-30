const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

const { Sequelize, DataTypes } = require("sequelize");

// const path = 'mysql://root:Digient@123@localhost:3306/testdb';
// const sequelize = new Sequelize(path);

const sequelize = new Sequelize("testdb", "root", "Digient@123", {
  host: "localhost",
  dialect: "mysql",
});

// console.log(sequelize);

const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("message", (message) => {
    console.log(message);
    // io.emit("message", `${socket.id} said ${message}`);
    sequelize
      .authenticate()
      .then(async () => {
        console.log("Connection established successfully.");
        const { count, rows } = await Movie.findAndCountAll({
          attributes: ["title", "rating"],
          where: {
            rating: message,
          },
        });
        for (let i = 0; i < count; i++) {
          console.log(rows[i].title);
          io.emit("message", `${rows[i].title}`);
        }
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });
  });
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// io.on("connection", (socket) => {
//   console.log("A user connected");
//   socket.on("message", (message) => {
//     console.log(message);
//     io.emit("message", `${socket.id} said ${message}`);
//   });
//   socket.on("disconnect", () => {
//     console.log("A user disconnected");
//   });
// });

http.listen(8080, () => console.log("Server listening on 8080.."));
