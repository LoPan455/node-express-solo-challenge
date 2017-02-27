//start
var myName = ''; //stores user input for name
var myJoke = ''; //stores user input for the joke
var myPunchline =''; // stores user input for the punchline

$(document).ready(function() {
  writeJokesToDom();
  //listener for the new joke submission form
  $('#submitButton').on('click',function(){
    //picks up user input and stores them as variables
    myName = $('#myName').val();
    myJoke = $('#myJoke').val();
    myPunchline = $('#myPunchline').val();
    //creates the the object to send to the server
    var newJoke = {
      whoseJoke: myName,
      jokeQuestion: myJoke,
      punchLine: myPunchline
    };
    //sends the object off to the server
    $.ajax({
      type: 'POST',
      url: 'jokes/submit',
      data: newJoke,
      success: function(response){
        console.log(response);
      }
    })//end POST

    //refresh the DOM with all the jokes
    writeJokesToDom();
    //clears out the input fields and variables to prepare for a new joke submission
    clearOutFieldsAndVariables();
  });//end Listener

}); // end document. ready

function writeJokesToDom(){
  $('#jokesDisplay').empty();
  $.ajax({
    type: "GET",
    url: "/jokes",
    success: function(response){
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
}// end function codeblock

function clearOutFieldsAndVariables(){
  $('#myName').val('');
  $('#myJoke').val('');
  $('#myPunchline').val('');
  myName = '';
  myJoke = '';
  myPunchline ='';
}//end function codeblock


// end script
