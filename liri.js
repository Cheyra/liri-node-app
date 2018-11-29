require("dotenv").config();
var keys = require("./keys.js")
var moment = require('moment');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(
  keys.spotify
  // {id: "2362d00fb85b438bbae07e4b684d2497",
  // secret: "aaa96806874b44c39bb3e9390b457039"}
);
var axios = require('axios')
var command = process.argv[2];



////////bands in town request////////////////
//require('bandsintown-events');
 
//var Events = new BandsInTownEvents(id: "codingbootcamp");
if (command === "concert-this") {
  var artist = process.argv[3]
  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
  

  axios.get(queryUrl).then(
    function (response) {
      console.log("\n" + "Artist Events:" + "\n\n")
for (i=0; i<response.data.length; i++) {
  var date =moment(response.data[i].datetime).format( "MM.DD.YYYY")
      console.log("Venue Name: " + response.data[i].venue.name +"\n" + "Location: " + response.data[i].venue.city + "\n" + "Date of event: " + date+"\n") 
    }
    
    }
    
    
  )
};
//////Spotify request////////////////////////
if (command === "spotify-this-song") {
  var songName = process.argv[3]
  if (process.argv[3] === undefined) {
    songName = "Call me maybe"
  }

  spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    else {
      output =
        "\n " + "Song Name: " + "'" + songName.toUpperCase() + "'" +
        " \n" + "Album Name: " + data.tracks.items[0].album.name +
        "\n " + "Artist Name: " + data.tracks.items[0].album.artists[0].name +
        "\n " + "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n\n\n";
      console.log(output);
    }
  });
};
///////////////omdb request///////////////////////
if (command === "movie-this") {

  var movieName = process.argv[3];
  if (process.argv[3] === undefined) {
    movieName = "Mr. Nobody"
  }

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=3616e9bd";


  console.log(queryUrl);


  axios.get(queryUrl).then(
    function (response) {
      var movieInfo = " Title: " + response.data.Title + "\n" + " Year: " + response.data.Year + "\n" + " IMDBRating: " + response.data.imdbRating + "\n" + " Rotton Tomatoes Score: " + response.data.Ratings[1].Value + "\n" + " Country Produced: " + response.data.Country + "\n" + " Language of Movie: " + response.data.Language + "\n" + " Plot: " + response.data.Plot + "\n" + " Actors: " + response.data.Actors
      console.log(movieInfo)
    }
  )
}
////////random command///////////////////////
if (command === "do-what-it-says") {
  var fs = require("fs") //library included with node
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      console.log(error)
    }

    console.log(data)
    var song = data.split(",")[1]


    spotify.search({ type: 'track', query: song }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      else {
        output =
          " \n" + "Song Name: " + "'" + song + "'" + "\n" +
          "Album Name: " + data.tracks.items[0].album.name +
          " \n" + "Artist Name: " + data.tracks.items[0].album.artists[0].name +
          " \n" + "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n\n\n";
        console.log(output);
      }

    })

  })
};
