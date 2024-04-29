const express = require('express');
const app = express();
app.get("/",(req,res,next) => {
res.send("hello");
})
app.listen(Process.env.PORT);
console.log("The server is running on port:",Process.env.PORT);