const express = require("express");
const app = express();

const db = require("./models");

db.sequelize.sync().then(() => {  // Use db.sequelize instead of db.Sequelize
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
}).catch((err) => {
    console.error("Error syncing database:", err);
});
