/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}

var currentDate = new Date();

var previousDate = new Date();
previousDate.setDate(currentDate.getDate() - 7);

var beforePreviousDate = new Date();
beforePreviousDate.setDate(currentDate.getDate() - 14);

var tradings = [
      { date : currentDate, quantity : 1, value : 150},
      { date : currentDate, quantity : 2, value : 250},
      { date : currentDate, quantity : 3, value : 350},
      { date : previousDate, quantity : 1, value : 450},
      { date : previousDate, quantity : 2, value : 550},
      { date : previousDate, quantity : 3, value : 650},
      { date : beforePreviousDate, quantity : 1, value : 750},
      { date : beforePreviousDate, quantity : 2, value : 950},
      { date : beforePreviousDate, quantity : 3, value : 950}
    ];

api.listWeek = function(req, res) {
    var currentTradings = tradings.filter(function(trading) {
        return trading.date > previousDate;
    });

    res.json(currentTradings);
};

api.listPrevious = function(req, res) {
   var previousTradings = tradings.filter(function(trading) {
        return trading.date < currentDate && trading.date > beforePreviousDate;
    });

	setTimeout(function() {
		res.json(previousTradings);	
	}, 500);
};

api.listBeforePrevious = function(req, res) {
   var beforePreviousTradings = tradings.filter(function(trading) {
        return trading.date < previousDate;
    });

    res.json(beforePreviousTradings);
};

api.addTrading = function(req, res) {
   console.log(req.body);

   req.body.date = new Date(req.body._date);
   tradings.push(req.body);
   res.status(200).json("Trading received");
};

module.exports = api;
