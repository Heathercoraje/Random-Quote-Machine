document.addEventListener('DOMContentLoaded',function(){
  alert('Plato once said "Music is a moral law. It gives a soul to universe, wings to the mind, flights to the imagination, a charm to sadness and life to everything." I hope these quotes have you find yourself with stronger resilience and new passion. Enjoy!');
  var randomQuote, randomNum, randomAuthor;
  getQuote();

  function getQuote(){

    var quotes = ['"Drama makes for the best content. Everthing got a bad side, even a conscious."', '"Loving you is like a food to my soul."','"I know God is working, so I smile."','"My momma said a lady ain’t what she wears but what she knows."',
    '"Que a saúde do povo daqui, É o medo dos homens de lá. A consciência do povo daqui, É o medo dos homens de lá. Sabedoria do povo daqui, É o medo dos homens de lá"','"If you never try you will never know, Just what you are worth"','"You keep on giving me a reason to see love through your eyes"',
    '"Some say the blacker the berry, the sweeter the juice, I say the darker the flesh then the deeper the roots"','"Did you get what you need? Let me know before you leave. Did you get what you came for?"'];


    var authors = ["I Don't Fuck with you - Big Sean","A Song For Mama - Boyz2men","I Smile - Kirk Franklin","Video - India arie", "Deixa o Menino Jogar - Natiruts","Fix You - Coldplay", "Two Out of One - Breakbot","Keep Ya Head Up - 2PAC","Get What You Came For - Kav Verhouzer"];
    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNum];
    randomAuthor = authors[randomNum];

    document.getElementById("text").innerHTML = randomQuote;
    document.getElementById("author").innerHTML = randomAuthor;

  }

      var button = document.querySelector("#new-quote");
      button.addEventListener("click", function(){
        getQuote();
      });

      var tweet = document.querySelector("#tweet-quote");
      tweet.addEventListener("click", function(){
        window.open("https://twitter.com/intent/tweet?text="+ randomQuote +" by " + randomAuthor);
      });

      var facebook = document.querySelector("#facebook-quote");
      facebook.addEventListener("click",function () {
        window.open("https://facebook.com/");
      });



});
