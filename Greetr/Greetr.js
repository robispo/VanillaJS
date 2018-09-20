(function(global, $) {
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  var supportLangs = ["en", "es"];

  var greetings = {
    en: "Hello",
    es: "Hola"
  };

  var formalgreetings = {
    en: "Greetings",
    es: "Saludos"
  };

  var logMessages = {
    en: "Logged in",
    es: "Inicio sesion"
  };

  Greetr.prototype = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    validate: function() {
      if (supportLangs.indexOf(this.language) === -1) {
        throw "Invalid Language";
      }
    },
    greeting: function() {
      return greetings[this.language] + " " + this.firstName + "!";
    },
    formalgreeting: function() {
      return formalgreetings[this.language] + ", " + this.fullName();
    },
    greet: function(formal) {
      var msg;

      if (formal) {
        msg = this.formalgreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      return this;
    },
    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }
      return this;
    },
    setLang: function(language) {
      this.language = language;
      this.validate();
      return this;
    },
    sayHi: function(selector, formal) {
      $(selector).html(formal ? this.formalgreeting() : this.greeting());
      return this;
    }
  };

  Greetr.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || supportLangs[0];

    self.validate();
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
