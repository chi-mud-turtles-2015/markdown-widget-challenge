var Text = function() {
  this.bold = false;
  this.italics = false;
  this.starCount = 0;
  this.special = false;
};

Text.prototype = {
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
      if (char == 56) {
        this.special = true;
        if (this.starCount == 1) {
          this.bold = !this.bold;
          this.italics = false;
          this.starCount = 0;
          if (this.bold === true) {
            char = '<span class="bold">';
          }
          else {
            char = '';
          }
        }
        else if (this.starCount === 0) {
          this.italics = !this.italics;
          this.starCount += 1;
          if (this.italics === true) {
            char = '<em>';
          }
          else {
            char = '';
          }
        }
      }
      else if (char == 189) {
        this.starCount = 0;
        this.special = true;
        this.italics = !this.italics;
        if (this.italics === true) {
          char = '<em>';
        }
        else {
          char = '';
        }
      }
      else {
        this.starCount = 0;
        char = String.fromCharCode(char);
      }
      return char;
    }
    else {
      this.starCount = 0;
      this.special = false;
      if (char == 56 || char == 189) {
        return null;
      }
      else {
        return String.fromCharCode(char);
      }
    }
  }
};