const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  cardspage: function(req, res) {
    if(!req.session.deck){
      req.session.deck = [];
    }
    knex('cards').then((allcards)=>{
      res.render("create", {allcards, deck: req.session.deck});
    })
  },
  createcard: function(req, res){
    knex('cards').insert({
      mana: req.body.mana,
      attack: req.body.attack,
      health: req.body.health,
      description: req.body.description
    })
    .then((newcardresults)=>{
      res.redirect('/cards')
    })
  },
  addcard: function(req, res) {
    if(!req.session.deck){
      req.session.deck = [];
    }
    knex('cards')
      .where('id', req.params.id)
      .then((result)=>{
        req.session.deck.push(result[0]);
        res.redirect('/cards');
      })
  },
  removecard: function(req, res) {
    if(!req.session.deck){
      req.session.deck = [];
    }
    if(req.session.deck.length == 1){
      req.session.deck = []; 
    }
    knex('cards')
      .where('id', req.params.id)
      .then((result)=>{
        req.session.deck.slice(result[0], 1);
        res.redirect('/cards');
      })
  }
}
