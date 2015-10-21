function MarkdownView(){
  console.log("HELLO");
  this.getInputBox = function (){
    console.log($("input").val());
    return $("input");
  }
  this.getInputContent = function (){
    return $("input").val();
  }
  this.transformOutput = function(){

  }
}

function MarkdownController(){
  var view = new MarkdownView();
  var textToTransform = new TransformedText();
  view.getInputBox().on("keyup", function(){
    console.log(textToTransform.transform());
  });
}


function TransformedText(){
  this.text = "";
  this.transform = function(){
    return "WE TYPED HERE";
  }
}
