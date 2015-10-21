function MyText(input) {
  this.input = input
};

MyText.prototype.translate = function() {
  this.input = this.input.replace(/\*\*(.*?)\*\*/gi, function($0, $1){
    return "<b>"+$1+"</b>"
  });
  this.input = this.input.replace(/\*(.*?)\*/gi, function($0, $1){
    return "<b><i>"+$1+"</i></b>"
  });
  this.input = this.input.replace(/\_(.*?)\_/gi, function($0, $1){
    return "<i>"+$1+"</i>"
  });
};

$(document).ready(function () {
  $('#input').keyup(function () {
    myInput = new MyText($(this).val());
    myInput.translate();
    $('#display').html(myInput.input);
  });
});
