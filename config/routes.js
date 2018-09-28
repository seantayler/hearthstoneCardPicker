//Update the name of the controller below and rename the file.
const cards = require("../controllers/cards.js")
module.exports = function(app){

  app.get('/cards', cards.cardspage);
  app.post('/cards', cards.createcard);

  app.get('/cards/add/:id', cards.addcard);
  app.get('/cards/remove/:id', cards.removecard);


}
