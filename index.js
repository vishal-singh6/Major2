const express = require('express');
const app = express();
const port = 8080;


app.listen(port,function(err){
    if(err){
        console.log(`Error in running server : ${err}`);
    }
    console.log(`Server is running  succesfully on port : ${port}`);
});