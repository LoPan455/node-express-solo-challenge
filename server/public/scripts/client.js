$(document).ready(function() {
  console.log('jquery loaded');
  $.ajax({
    type: "GET",
    url: "/jokes",
    success: function(response){
      console.log('server response is: ',response);
      console.log('the length of the response is: ',response.length);
      for (var i = 0; i < response.length; i++) {
        var whoseName = response[i].whoseJoke;
        var jokeQuestion = response[i].jokeQuestion;
        var punchLine = response[i].punchLine;
        $('#jokesDisplay').append('<p>Joke Author: '+whoseName+'</p>');
        $('#jokesDisplay').append('<p>The Joke : '+jokeQuestion+'</p>');
        $('#jokesDisplay').append('<p>Joke Punchline: '+punchLine+'</p>');
      } // end FOR loop
    }//end suxcess function
  });//end ajax




}); // end document. ready
