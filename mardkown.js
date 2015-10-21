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
  this.view.transformOutput(this.text.transformedText());
}

function MarkdownController(){
  this.view = new MarkdownView();
  this.text = new Text();
  this.view.bindKeypress(this.onKeypress.bind(this))
}

function Text(){
  this.rawText = "";
}
Text.prototype.transformedText = function(){
  var splitString = this.rawText.split("**");
  var reformattedString = [];
  var  i = 1;
  while (splitString.length > 0) {
    reformattedString.push(splitString.shift());
    if (i % 2 == 0) {
      reformattedString.push("</em>");
      i++;
    } else {
      reformattedString.push("<em>");
      i++;
    }
  }
  console.log(reformattedString);
  return reformattedString.join("");
}

$(function(){
  var controller = new MarkdownController();
});
