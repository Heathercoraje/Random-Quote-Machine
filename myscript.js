document.addEventListener('DOMContentLoaded',function(){
  alert('Plato once said "Music is a moral law. It gives a soul to universe, wings to the mind, flights to the imagination, a charm to sadness and life to everything." I hope these quotes have you find yourself with stronger resilience and new passion. Enjoy!');
  var randomQuote, randomNum, randomAuthor, randomColor;
  getQuote();

  function getQuote(){

    var quotes = ['"Drama makes for the best content. Everthing got a bad side, even a conscious."', '"Loving you is like a food to my soul."','"I know God is working, so I smile."','"My momma said a lady ain’t what she wears but what she knows."',
    '"Que a saúde do povo daqui, É o medo dos homens de lá. A consciência do povo daqui, É o medo dos homens de lá. Sabedoria do povo daqui, É o medo dos homens de lá"','"If you never try you will never know, Just what you are worth"','"You keep on giving me a reason to see love through your eyes"',
    '"Some say the blacker the berry, the sweeter the juice, I say the darker the flesh then the deeper the roots"','"Did you get what you need? Let me know before you leave. Did you get what you came for?"'];

    var authors = ["I Don't Fuck with you - Big Sean","A Song For Mama - Boyz2men","I Smile - Kirk Franklin","Video - India arie", "Deixa o Menino Jogar - Natiruts","Fix You - Coldplay", "Two Out of One - Breakbot","Keep Ya Head Up - 2PAC","Get What You Came For - Kav Verhouzer"];
    var colors =['#edafe6','#ef709b','#b99aef','#6cd6cb','#97dad4','#71d876','#f7d05c','#f38a68', '#9e9e9e'];

    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNum];
    randomAuthor = authors[randomNum];
    randomColor = colors[randomNum];


    document.getElementById("text").innerHTML = randomQuote;
    document.getElementById("author").innerHTML = randomAuthor;
    document.body.style.backgroundColor = randomColor;
    document.body.style.color = randomColor;
    document.getElementById("tweet-quote").style.backgroundColor = randomColor;
    document.getElementById("facebook-quote").style.backgroundColor = randomColor;
    document.getElementById("new-quote").style.backgroundColor = randomColor;


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
