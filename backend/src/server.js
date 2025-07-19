console.log(`iniciando o servidor..... `);

const { app } = require("./app.js");
const { env } = require("./config");

//const PORT = env.PORT || 3000;
const PORT = 5000;
//const DB = env.DATABASE_URL;

console.log(`Starting server database string ${env.DATABASE_URL}`);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});