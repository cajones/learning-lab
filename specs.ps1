ls specs/*.js |% {
	. mocha --ui bdd --require should --reporter spec $_	
}
