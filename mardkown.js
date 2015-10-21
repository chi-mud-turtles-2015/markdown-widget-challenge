function MarkdownView(){
  console.log("HELLO");
  this.getInputBox = function (){
    return $("input");
  }
  this.getInputContent = function (){
    return $("input").val();
  }
  this.transformOutput = function(output){
    $("p").text(output);
  }
}

function MarkdownController(){
  var view = new MarkdownView();
  var text = new Text();
  view.getInputBox().on("keyup", function(){
    text.rawText = view.getInputContent();
    view.transformOutput(text.transformedText());
  });
}


function Text(){
  this.rawText = "";
  this.transformedText = function(){
    return this.rawText + "****";
  }
}
