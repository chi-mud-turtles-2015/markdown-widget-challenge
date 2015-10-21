//View
var View = function(){
  this.replace = function(phrase){
      $('#output').html(phrase);
    };
};

var view = new View();

//Controller
$('#input').keyup(function(event){
    var phrase = ($(this).val());
    phrase = Parser.parse(phrase,"*","<i>","</i>");
    phrase = Parser.parse(phrase,"-","<b>","</b>");

    view.replace(phrase);
});

//Helpers
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+1);
};

var Parser = {
  indicesOf: function(string,target){
      var indices = [];
      var i = string.indexOf(target);

      if (i >= 0) indices.push(i);

      while(i >= 0){
          i = string.indexOf(target, i+1);
          if (i >=0) indices.push(i);
        }

      if (indices.length % 2 == 1) {
          indices = indices.slice(0,-1);
        }
      return indices;
    },

  parse: function(string, target, opening_tag, closing_tag) {
    //Get indices of all targets
    //Replace all targets with sub by iterating over index
    var index = Parser.indicesOf(string,target);
    for (var i = index.length-1; i >= 0; i--){
      if (i % 2 === 0){
        string = string.replaceAt(index[i],opening_tag);
      }
      else{
        string = string.replaceAt(index[i],closing_tag);
      }
    }
    return string;
  }
};


