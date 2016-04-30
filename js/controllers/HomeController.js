app.controller('HomeController', ['$scope', function($scope) {
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
    { 
      title:	'Blue Streak', 
      iscore:	6.3,
      rating:	'PG-13',
      runtime:	93,
      released:	new Date('1993', '09', '17'),
      country:	'USA',
      posters:	['img/blue1.jpg','img/blue2.jpg','img/blue3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0181316',
      website:	'http://www.rottentomatoes.com/m/blue_streak',
      likes:	416,
      dislikes:	220,
      posterindex: 0
	},
    { 
      title:	'Next Friday', 
      iscore:	6.1,
      rating:	'R',
      runtime:	98,
      released:	new Date('2000', '01', '12'),
      country:	'USA',
      posters:	['img/next1.jpg','img/next2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0195945',
      website:	'https://en.wikipedia.org/wiki/Next_Friday',
      likes:	978,
      dislikes:	356,
      posterindex: 0
	},
    { 
      title:	'How High', 
      iscore:	6.2,
      rating:	'R',
      runtime:	93,
      released:	new Date('2001', '12', '21'),
      country:	'USA',
      posters:	['img/how1.jpg','img/how2.jpg','img/how3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0195945',
      website:	'https://www.uphe.com/movies/how-high',
      likes:	636,
      dislikes:	299,
      posterindex: 0
	}
	
	
  ];
	
	

	
	/* ADD VARIABLES FOR STEP 3 HERE */
	
	$scope.owner = "Dominic";
	$scope.title = "IMDB " + $scope.owner + " \'s Top 8 Movies";
	$scope.github = "https://github.com/gangstapancake/is219s16mckenzie-p3";
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
		
	$scope.like = function(number) 
	{ 
		$scope.movies[number].likes++;
		console.log("Like clicked");
	};
	
	$scope.dislike = function(number) 
	{ 
		$scope.movies[number].dislikes++;
		console.log("Dislike clicked");
	};
	
	$scope.posterClick = function(number) 
	{ 
		if(number <= $scope.movies[number].posterindex.length)
		{
			$scope.movies[number].posterindex++; 
		}
		else
		{	
			$scope.movies[number].posterindex = 0;
		}
		
		console.log("Poster clicked");
	};
	
	$scope.timeText = function(number) 
	{ 
		var hours = number / 60;
		var min = number % 60;
		var time = parseInt(hours) + "H " + min + "M";
		return time;
		
	};
	
	
	
	
	
	
}]);
