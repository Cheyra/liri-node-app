# liri-node-app
A node.js app with four main functions which are entered into the command terminal.
1. concert-this
2. spotify-this-song
3. movie-this
4. do-what-it-says

To get the code working you first need to do an npm init -y in the terminal and then enter npm install.
 You will also need to create a .env file with following code substituting your spotify API keys
           
           # Spotify API keys

           SPOTIFY_ID=your-spotify-id
           SPOTIFY_SECRET=your-spotify-secret
           
Once this is done you can start using the four functions.     
________________________________________________________________________________________________________________________________________

## concert-this
This utilizes the bands in town api and outputs the following
   - The name of the venue
   - The venue location
   - The event Date
   
#### To utilize this in the command terminal enter node liri-node-app concert-this "Your artist choice here"
See example below

![Alt text](/relative/path/to/img.jpg?raw=true "concert-this"


## spotify-this-song
This utilizes the Spotify API and outputs the following
   - Artist(s)
   - The song name
   - A preview link of the song from Spotify
   - The song album

#### To utilize this in the command terminal enter node liri-node-app spotify-this-song "Your song choice here"

## movie-this
This utilizes the OMDB API and outputs the following
   - The Movie Title
   - The Year the movie came out
   - The Movie's IMDB Rating
   - The Movie's Rotten Tomatoes Rating
   - The Country where the movie was produced.
   - The Language of the movie.
   - The Plot of the movie.
   - The Actors in the movie.
 
#### To utilize this in the command terminal enter node liri-node-app movie-this "Your movie choice here"
  
  ## do-what-it-says
  This shows song information for song "I want it that way"
  
 #### To utilize this in the command terminal enter node liri-node-app do-what-it-says
 
 

 
 
 
