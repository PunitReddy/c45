class Form {

    constructor() {
      //this.input = createInput("Name");
      //this.button = createButton('Start');
      //this.greeting = createElement('h2');
      //this.title = createElement('h2');
    }
    //hide(){
      //this.greeting.hide();
      //this.button.hide();
      //this.input.hide();
      //this.title.hide();
    //}

    display(){
      var title = createElement('h2')
      title.html("Drivers Test");
      title.position(displayWidth/2 - 50, 0);
  
      var input = createInput("Name");
      var button = createButton("Start")

      input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      button.position(displayWidth/2 + 30, displayHeight/2);
      var name
      name = input.value()
      button.mousePressed(()=>{
      //input.hide();
      //button.hide();
      
      });
  
    }
}