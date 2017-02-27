//start
var myName = '';
var myJoke = '';
var myPunchline ='';

$(document).ready(function() {
  console.log('jquery loaded');

  writeJokesToDom();


  //listener for the new joke submission form
  $('#submitButton').on('click',function(){
    console.log('submit button clicked!');
    myName = $('#myName').val();
    myJoke = $('#myJoke').val();
    myPunchline = $('#myPunchline').val();
    console.log('myName: ', myName, 'myJoke: ', myJoke,'myPunchline:',myPunchline);
    var newJoke = {
      whoseJoke: myName,
      jokeQuestion: myJoke,
      punchLine: myPunchline
    };
    console.log('newJoke is now: ',newJoke);
    $.ajax({
      type: 'POST',
      url: '/submit',
      data: newJoke,
      success: function(response){
        console.log(response);
      }
    })//end POST
    //re-write to the DOM

    writeJokesToDom();
    clearOutFieldsAndVariables();




  });//end Listener




}); // end document. ready

function writeJokesToDom(){
  $('#jokesDisplay').empty();
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
