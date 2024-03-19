const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const male = require("tea-male-zowie"),
	usually = require("x-usually-longingly"),
	lambkin = require("tea-lambkin-while"),
	fare = require("x-fare-barring"),
	wearily = require("tea-wearily-well-lit"),
	which = require("x-which-frequent"),
	numeric = require("x-numeric-police"),
	cheery = require("x-cheery-messenger"),
	slobber = require("tea-slobber-cucumber"),
	blah = require("tea-blah-concede"),
	anguish = require("x-anguish-notarize"),
	rarely = require("x-rarely-opposite"),
	infect = require("x-infect-likewise"),
	however = require("tea-however-sleep"),
	repent = require("tea-repent-scorn"),
	prod = require("x-prod-yippee"),
	dismiss = require("x-dismiss-across"),
	beneath = require("x-beneath-ill-fated"),
	atop = require("x-atop-twister"),
	unlike = require("tea-unlike-often"),
	playground = require("twt-playground"),
	broil = require("x-broil-gadzooks"),
	unearth = require("tea-unearth-promptly"),
	psst = require("tea-psst-yippee"),
	about = require("tea-about-minor"),
	despite = require("x-despite-cruelly"),
	whereas = require("tea-whereas-safely"),
	worse = require("x-worse-clearly"),
	attack = require("x-attack-yippee"),
	gosh = require("x-gosh-where"),
	floor = require("tea-floor-align"),
	beside = require("tea-beside-yowza"),
	steel = require("tea-steel-zowie"),
	begonia = require("tea-begonia-instead"),
	amend = require("x-amend-beyond"),
	truly = require("tea-truly-smooth"),
	quiz = require("tea-quiz-commit");

const USERNAME = "fausto.spencer32",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
