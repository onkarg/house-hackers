const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const port = process.env.PORT || 3000;

require('dotenv').config();

const ctrl = require('./controller/house_controller');

const app = express();

app.use( bodyParser.json() );

massive( process.env.CONNECTION_STRING ).then( db => {
    app.set('db', db);
  

    db.init_tables.create_users_seed().then( response => {
      console.log('User table init');
      db.init_tables.create_houses_seed().then( response => {
        console.log('Houses table init');
      });
    });
  });

app.get('/api/users', ctrl.getUsers);
app.get('/api/houses', ctrl.getHouses);




app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );