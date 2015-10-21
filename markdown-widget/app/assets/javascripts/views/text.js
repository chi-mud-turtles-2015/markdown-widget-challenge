var TextView = function(model){
  this.model = model;
  that = this;
};

TextView.prototype = {
  setKeyUpListener: function() {
    $('#text-input').on("keyup", function(event){
      var charCode = event.which;
      var shift = event.shiftKey;
      that.checkChar(charCode, shift);
    });
  },

  checkChar: function(char, shift) {
    str = this.model.checkSpecialChar(char,shift);
    var selector = $('.markdown');
    console.log(this.model.bold);
    console.log(this.model.italics);
    if (this.model.special === false) {
      if (this.model.bold === true) {
        selector = $('.markdown em:last-child');
      }
      else if (this.model.italics === true) {
        selector = $('.markdown span:last-child');
      }
    }
    if (str == 'backspace') {
      this.removeMarkdown();
    }
    else {
      this.addMarkdown(selector,str);
    }
  },

  addMarkdown: function(selector,str) {
    $(selector).append(str);
  },

  removeMarkdown: function() {
    var str = $('.markdown').text().slice(0, -1);
    $('.markdown').empty().html(str);
  },
};

