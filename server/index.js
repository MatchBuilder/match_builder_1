const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.MLAB_PW}`);