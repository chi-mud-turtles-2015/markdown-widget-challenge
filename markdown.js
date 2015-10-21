function Markdown() {
  this.content = "";
}

Markdown.prototype.parseInput = function(input) {
  function replaceItalic(match, p1) {
    return "<span class='italic'>" + p1 + "</span>"
  }
  function replaceBold(match, p1) {
    return "<span class='bold'>" + p1 + "</span>"
  }
  input = input.replace(/\*\*(.*)\*\*/, replaceBold)
  input = input.replace(/\*(.*)\*/, replaceItalic)
  return input
}