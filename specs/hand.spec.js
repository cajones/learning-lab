var should = require('should');

describe('A game of blackjack', function () {
	var blackjack = require('../blackjack.js');

	describe("The player's hand", function (){
		hand = new blackjack.Hand();

		it('should have two cards', function () {
		hand.cards.length.should.equal(2);
		});
	})

	describe("The dealer's hand", function (){
		
		it('should have only one card showing');

	})

});