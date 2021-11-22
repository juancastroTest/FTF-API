const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config({ path: "./.env" })

app.set('port', process.env.PORT || 4000)


//settings
const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000",
                    credentials: true
                }
            ]
        } 
    }
}


app.use(cors(
    config.application.cors.server
  ));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('trust proxy', true);


// middleware 
app.use(morgan('dev'));

// starting the server
app.listen( app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})