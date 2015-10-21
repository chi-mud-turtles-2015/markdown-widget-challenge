var TextView = function(model){
  this.model = model;
  that = this;
};

TextView.prototype = {
  setKeyUpListener: function() {
    $('#text-input').on("keypress", function(event){
      console.log(event);
      var charCode = event.which;
      var shift = event.shiftKey;
      that.checkChar(charCode, shift);
      // that.checkText();
    });
  },

  checkChar: function(char, shift) {
    str = this.checkSpecialChar(char,shift);
    var selector = $('.markdown');
    if (this.model.special === false) {
      if (this.model.bold === true) {
        selector = $('.markdown span:last-child');
      }
      else if (this.model.italics === true) {
        selector = $('.markdown em:last-child');
      }
      else if (this.model.undy_italics === true) {
        selector = $('.markdown em:last-child');
      }
    }
    if (str == 'backspace') {
      this.removeMarkdown();
    }
    else {
      this.addMarkdown(selector,str);
    }
  },

  checkSpecialChar: function(char,shift){
    if (char == 16) {
      return '';
    }
    if (char == 32) {
      return ' ';
    }
    if (char == 8) {
      return 'backspace';
    }
    if (char == 13) {
      return '<br>';
    }
    if (shift === true) {
      if (char == 42) {
        char = this.doStar(char);
      }
      else if (char == 95) {
        char = this.doUnderscore(char);
      }
      else {
        this.starCount = 0;
        char = String.fromCharCode(char);
      }
      return char;
    }
    else {
      this.model.starCount = 0;
      this.model.special = false;
      if (char == 42 || char == 95) {
        return null;
      }
      else {
        return String.fromCharCode(char);
      }
    }
  },

  doUnderscore: function(char) {
    this.model.starCount = 0;
    this.model.special = true;
    this.model.undy_italics = !this.model.undy_italics;
    if (this.model.undy_italics === true) {
      return '<em>';
    }
    else {
      return '';
    }
  },

  doStar: function(char) {
    this.model.special = true;
    if (this.model.starCount == 1) {
      this.model.bold = !this.model.bold;
      this.model.italics = false;
      this.model.starCount = 0;
      if (this.model.bold === true) {
        return '<span class="bold">';
      }
      else {
        return '';
      }
    }
    else if (this.model.starCount === 0) {
      this.model.italics = !this.model.italics;
      this.model.starCount += 1;
      if (this.model.italics === true) {
        return '<em>';
      }
      else {
        return '';
      }
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

