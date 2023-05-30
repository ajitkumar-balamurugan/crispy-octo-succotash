const EventEmitter = require("events");
const Sequelize = require("sequelize");

class IndependentLobby extends EventEmitter {
  constructor() {
    super();
    this.db = IndependentLobby.getDBConnection();
  }

  async getUserIdAndBalance(username, cb) {
    //debug function goes here
    try {
      const userResult = await this.db.model("user").findOne({
        where: {
          USERNAME: username,
        },
      });
      const userId = userResult.USER_ID;
      const userPointsResult = await this.db.model("user_points").findOne({
        where: {
          USER_ID: userId,
        },
      });
      const {
        USER_DEPOSIT_BALANCE: userDepositBalance,
        USER_PROMO_BALANCE: userPromoBalance,
        USER_WIN_BALANCE: userWinBalance,
        USER_TOT_BALANCE: userTotBalance,
      } = userPointsResult;

      const resp = {
        status: "SUCCESS",
        data: {
          userId,
          userDepositBalance,
          userPromoBalance,
          userWinBalance,
          userTotBalance,
        },
      };
      if (cb) cb(resp);
      return resp;
    } catch (err) {
      const resp = { status: "ERROR", data: err.message };
      if (cb) cb(resp);
      return resp;
    }
  }

  //DB Connection in this class itself
  static getDBConnection() {
    if (!IndependentLobby.db) {
      IndependentLobby.db = new Sequelize("testdb", "root", "Digient@123", {
        host: "localhost",
        dialect: "mysql",
      });
    }
    return IndependentLobby.db;
  }
}

module.exports = IndependentLobby;
