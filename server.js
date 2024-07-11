const app = require('./app.js');

const startApp = () => {
  app.listen(process.env.PORT, console.log(`Server listening in port: ${process.env.PORT}`));
};

startApp();
