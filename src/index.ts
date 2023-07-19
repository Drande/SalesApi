import server from "./server";
import sequelize from "./connection";

const port = process.env.PORT || '8000';

server.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to database");
    return console.log(`Server is listening on ${port}`);
  } catch(error) {
    console.error(error);
  }
});
