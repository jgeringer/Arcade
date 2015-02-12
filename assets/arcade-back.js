//arcade js (revealing module pattern)

(function(){

	$(function(){

		$('.fa-navicon').off('click menu-control').on('click menu-control', function(e){
			e.preventDefault();
			$('header').toggleClass('active');
			$('.controls-container').toggleClass('active');
		});

		$('.game-grid li').off('click').on('click', function(e){
			e.preventDefault();
			var $this =  $(this);
			$('.game-grid li').removeClass('active');
			$(this).addClass('active');

			$('.lines > div').removeClass('active');

			var game = $this.find('>a').data('game'),
				path =  "controls/" + game + ".json";
			console.log('game:', game);
			console.log('path:', path);

			$.ajax({
				url: "controls/" + game + ".json",
				success: function(data){				
					console.log('data:', data);

					for(key in data) {
						if(data.hasOwnProperty(key)) {
							var value = data[key];
							console.log('key/value', key + ':' + value);
							$('.'+ key).addClass('active').find('>span').text(value);
						}
					}

					$(document).find('.fa-navicon').trigger('menu-control');

				},
				error: function (data) {
	                alert('My Bad! Something went wrong and Joe is looking into it asap. In the mean time, get yourself a beer. Get Joe one too, he deserves it. Isnt he a great guy?');
	            }

			});

		});

	});


	var createArcade = function(){

		var task1 =  function(){
			console.log('inside task 1');
		}

		var task2 =  function(){
			console.log('inside task 2');
		}

		return{
			job1: task1,
			job2: task2
		};

	};

		var arcade = createArcade();

		arcade.job1();
		arcade.job2();
	}

());



//Angular: http://www.pluralsight.com/courses/angularjs-get-started

(function(){

	var app = angular.module("githubViewer", []);



	//Controller
	var MainController = function($scope, $http){

		var onUserComplete = function(response){
			$scope.user = response.data;
		}

		var onError = function(response){
			$scope.error = "Error!";
		}

		$http.get("https://api.github.com/users/robconery").then(onUserComplete, onError);

		var person = {
			firstName: "Joe",
			lastName: "Geringer",
			imageSrc: "http://odetocode.com/images/scott_allen_2.jpg"
		}

		$scope.message = "Hello, Angular!"; //Model
		$scope.person = person;

	};

	app.controller("MainController", ["$scope", "$http", MainController]); //stuff in brackets is to not break it if it gets minified. 

}());



// sample json

// name-of-game
// button-p1-coin
// button-p1-start
// button-admin1
// button-admin2
// button-admin3
// button-1
// button-2
// button-3
// button-4
// button-5
// button-6


//same of nba jam te game controls
// nba-jam-te.json
// {
// 	"button-p1-coin" : "Insert Coin",
// 	"button-p1-start" : "Start",
// 	"button-admin1"	: "Escape",
// 	"button-admin2"	: "Arcade Game Admin Menu",
// 	"button-admin3"	: "Select (Admin Menu)",
// 	"button-1" : "High Punch",
// 	"button-2" : "High Kick",
// 	"button-3" : "Block",
// 	"button-4" : "Low Punch",
// 	"button-5" : "High Punch"
// }

// click button, store name of data-game value (nba-jam-te).
// make an ajax call to /games/nba-jam-te.json
// controls = data
// loop through key and values of data and add an 'active' class for each key.
// also assign it's value to that control.