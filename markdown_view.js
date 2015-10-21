function MarkdownView() {
}

MarkdownView.prototype.appendNewLine = function() {
  $("#preview").append("<p></p>");
}

MarkdownView.prototype.lastLineText = function(element) {
  return $(element).val().split(/\n/).pop();
}

MarkdownView.prototype.appendText = function(text) {
  $("#preview p").last().html(text);
}