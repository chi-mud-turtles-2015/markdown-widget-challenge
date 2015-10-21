function MarkdownView(options) {
  this.input = $('input');
  this.display = $('p');
}

MarkdownView.prototype.bindKeypress = function(callback) {
  this.input.on('keypress', callback);
}

MarkdownView.prototype.getInputContent = function (){
  return this.input.val();
}

MarkdownView.prototype.transformOutput = function(output){
  this.display.html(output);
}
// MarkdownView.prototype.getInputBox = function (){
//   return this.input;
// }
MarkdownController.prototype.onKeypress = function( ) {
  this.text.rawText = this.view.getInputContent();
  this.text.alteredText = this.text.rawText;
  this.text.transformedText("**", "strong");
  this.text.transformedText("*", "em");
  this.text.transformedText("_", "em");
  this.view.transformOutput(this.text.alteredText);
}

function MarkdownController(){
  this.view = new MarkdownView();
  this.text = new Text();
  this.view.bindKeypress(this.onKeypress.bind(this))
}

function Text(){
  this.rawText = "";
  this.alteredText = "";
}

Text.prototype.transformedText = function(character, element){
  var splitString = this.alteredText.split(character);
  var reformattedString = [];
  var  i = 1;
  while (splitString.length > 0) {
    reformattedString.push(splitString.shift());
    if (i % 2 != 0) {
      reformattedString.push("<" + element + ">");
      i++;
    } else {
      reformattedString.push("</" + element + ">");
      i++;
    }
  }
  // console.log(reformattedString);
  this.alteredText = reformattedString.join("");
  return reformattedString.join("");
}

$(function(){
  var controller = new MarkdownController();
});
