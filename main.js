$(document).ready(function(){
  var $main = $('.mainbox');
  function showTweets(person) {
    var index = streams.home.length -1;
    if (person !== undefined) {
      index = streams.users[person].length -1;
    }

    while(index >= 0){
      var tweet = streams.home[index];
      if (person !== undefined) {
        tweet = streams.users[person][index];
      }
      var $tweet = $('<div class="tweet"></div>');
      var $tweetLink = $('<a href="#">@' + tweet.user + '</a>');
      var $message = $('<p class="message">' + tweet.message + '</p>');
      var $date = $('<p class="date">' + tweet.created_at + '</p>');

      $tweetLink.appendTo($tweet);
      $message.appendTo($tweet);
      $date.appendTo($tweet);
      $tweet.appendTo($main);
      index -= 1;
    }
  };

  showTweets();

  $(document).on('click', 'a', function(event) {
    var person = event.target.text.slice(1);
    $main.html('');
    showTweets(person);
  });

  $('button').on('click', function(event) {
    $main.html('');
    showTweets();
  });
});

