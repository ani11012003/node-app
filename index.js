const express = require('express');
const app = express();
app.get("/",(req,res,next) => {
res.send("hello");
})
const port=process.env.PORT||5000;
app.listen(port);
console.log("The server is running on port:",port);