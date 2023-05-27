// import in app,port form app.js.....

const {app,port} = require('./app');

// server run .....

app.listen(port,()=>{
    console.log(`serer run successfully http://localhost:${port}`);
});