function MarkdownView(options) {
  this.input = $('input');
  this.display = $('p');
  // console.log(this.display);
}

MarkdownView.prototype.bindKeypress = function(callback) {
  this.input.on('keypress', callback);
}

MarkdownView.prototype.getInputContent = function (){
  return this.input.val();
}

MarkdownView.prototype.transformOutput = function(output){
  this.display.text(output);
}
// MarkdownView.prototype.getInputBox = function (){
//   console.log("HELLO");
//   return this.input;
// }
MarkdownController.prototype.onKeypress = function(event) {
  console.log(this);
  console.log(event.target);
  this.text.rawText = this.view.getInputContent();
  console.log("HELLLLLOO");
  this.view.transformOutput(this.text.transformedText());
}

function MarkdownController(){
  // console.log("HELLO");
  this.view = new MarkdownView();
  this.text = new Text();
  this.view.bindKeypress(this.onKeypress.bind(this))
}

function Text(){
  this.rawText = "";
}
Text.prototype.transformedText = function(){
  return "****" + this.rawText + "****"
}

$(function(){
  var controller = new MarkdownController();
});
