console.log(`iniciando o servidor..... rodrigo.11111......`);

const { app } = require("./app.js");
const { env } = require("./config");

//const PORT = env.PORT || 3000;
//const PORT = env.PORT;
const PORT = 5000;
const DB = env.DATABASE_URL;

console.log(`Starting server database string ${DB}`);
console.log(`Starting server on port ${PORT}`);

console.log(`iniciando o servidor..... rodrigo 22222..`);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});