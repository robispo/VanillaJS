(function() {
  /*
  var g = G$("Rabel", "Obispo");
  console.log(g);
  g.greet()
    .setLang("en")
    .greet(true)
    .log();
  
  g.sayHi("#greeting", true);
  */
  $("#login").on("click", function() {
    var lang = $("#lang").val();
    var g = G$("Rabel", "Obispo", lang);
    g.sayHi("#greeting", true);
  });
})();
