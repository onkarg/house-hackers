const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.json());


app.get('/api/properties', getListingController.getListing)
// app.post('/api/properties', createNewConroller.createNew)
// app.delete('/api/properties/:id', deleteListController.deleteList)
// app.get('/api/properties/filter', filterListingController.filterList)

app.use( (req, res, next) => createInitialSession ( req, res, next ));


  const port = 3000;
  app.listen( port, () => { console.log("Server listening on port " + 3000)})