// INIT
const express = require("express");
const random_name = require("node-random-name");
const People = require("./peoples");

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});

// DB

const create = async () => {
  await People.create({
    Name: random_name(),
  });
};

const find = async () => {
  return await People.findAll({
    attributes: ["Name"],
  });
};

// ROUTES
app.get("/", async (req, res) => {
  await create();

  list = "<ul>";

  await find().then((data) => {
    data.forEach((value) => {
      const name = value.dataValues.Name;
      list += `<li>${name}</li>`;
    });
  });

  list += "</ul>";

  html = `
    <h1>Full Cycle Rocks!</h1>
    <br>
    ${list}
  `;

  res.send(html);
});
