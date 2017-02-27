//start
var myName = '';
var myJoke = '';
var myPunchline ='';

$(document).ready(function() {
  console.log('jquery loaded');

  //loads all the jokes upon page load
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
  });//end ajax for /jokes

  //listener for the new joke submission form
  $('#submitButton').on('click',function(){
    console.log('submit button clicked!');
    var myName = $('#myName').val();
    var myJoke = $('#myJoke').val();
    var myPunchline = $('#myPunchline').val();
    console.log('myName: ', myName, 'myJoke: ', myJoke,'myPunchline:',myPunchline);
    var newJoke = {
      whoseJoke: myName,
      jokeQuestion: myJoke,
      punchLine: myPunchline
    };
    console.log('newJoke is now: ',newJoke);



    // $.ajax({
    //   type: "POST"
    // })//end POST
  });//end Listener




}); // end document. ready


// end script
