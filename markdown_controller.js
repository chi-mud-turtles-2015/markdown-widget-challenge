$(document).ready(function() {
  var carraige_return_button = 13;

  var markdownView = new MarkdownView();
  var markdown = new Markdown();

  $("#input-text").on("keyup", function(event) {
    if (event.which === carraige_return_button) {
      markdownView.appendNewLine();
    }
    else {
      var markdownText = markdownView.lastLineText(this);
      var displayText = markdown.parseInput(markdownText)
      markdownView.appendText(displayText);
    }
  });
});