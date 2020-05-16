class Form{
    constructor(){
        this.button = createButton('Save');
        this.button.style('width','100px');
        this.button.style('height','40px');
        this.button.style('font-size','20px');
        this.button.style('background-color','green');

       this.button2= createButton('Clear');
        this.button2.style('width','100px');
        this.button2.style('height','40px');
        this.button2.style('font-size','20px');
        this.button2.style('background-color','red');
    }

    display(){
        this.button.position(400,725);
        this.button2.position(600,725);
    }
}