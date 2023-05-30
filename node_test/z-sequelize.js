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

sequelize
  .authenticate()
  .then(async () => {
    console.log("Connection established successfully.");
    const { count, rows } = await Movie.findAndCountAll({
      attributes: ["title", "rating"],
      where: {
        rating: 2,
      },
    });
    for (let i = 0; i < count; i++) {
      console.log(rows[i].title);
    }
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  })
  .finally(() => {
    sequelize.close();
  });
