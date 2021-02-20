const Sequelize = require("sequelize");

const database = new Sequelize("app", "root", "root", {
  dialect: "mysql",
  host: "mysql",
});

(async () => {
  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
})();

const Peoples = database.define(
  "Peoples",
  {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Peoples;
