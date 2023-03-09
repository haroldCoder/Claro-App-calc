Page({
  data: {
    pantalla:'',  
    valor1:'',
    signo:''           
  },  
  cero(){       
    this.setData({
      pantalla: this.data.pantalla+0,        
    });   
  },
  one(){      
    this.setData({
      pantalla: this.data.pantalla+1,
    });
  },
  two(){ 
    this.setData({
      pantalla: this.data.pantalla+2,
    });
  },
  three(){ 
    this.setData({
      pantalla: this.data.pantalla+3,
    });
  },
  four(){ 
    this.setData({
      pantalla: this.data.pantalla+4,
    });
  },
  five(){ 
    this.setData({
      pantalla: this.data.pantalla+5,
    });
  },
  six(){ 
    this.setData({
      pantalla: this.data.pantalla+6,
    });
  },
  seven(){ 
    this.setData({
      pantalla: this.data.pantalla+7,
    });
  },
  eight(){ 
    this.setData({
      pantalla: this.data.pantalla+8,
    });
  },
  nine(){
    this.setData({
      pantalla: this.data.pantalla+9,
    });
  },
  decimal(){
    this.setData({
      pantalla: this.data.pantalla+".",
    });
  },
  delete(){   
    this.setData({
      pantalla: "",
    });
  },
  suma(){  
    this.setData({
      pantalla: "",
      valor1: this.data.pantalla,
      signo:"+"
    });
  },
  resta(){    
    this.setData({
      pantalla: "",
      valor1: this.data.pantalla,
      signo:"-"
    });
  },
  multiplicar(){   
    this.setData({
      pantalla: "",
      valor1: this.data.pantalla,
      signo:"*"
    });
  },
  dividir(){   
    this.setData({
      pantalla: "",
      valor1: this.data.pantalla,
      signo:"/",
    });
  },
  potencia(){   
    this.setData({
      pantalla: "",
      valor1: this.data.pantalla,
      signo:"^",
    });
  },
  porcentaje(){   
    let percent = parseFloat(this.data.pantalla)/100;
    this.setData({
      pantalla: percent,
    });
  },
  raizCuadrada(){   
    let raiz = Math.sqrt(parseFloat(this.data.pantalla));
    this.setData({
      pantalla: raiz,
    });
  },
  total(){ 
    let total = 0;
    switch(this.data.signo){
      case "+":
        total = parseFloat(this.data.valor1)+parseFloat(this.data.pantalla); 
        break;
      case "-":
        total = parseFloat(this.data.valor1)-parseFloat(this.data.pantalla);  
        break;
      case "*":
        total = parseFloat(this.data.valor1)*parseFloat(this.data.pantalla);  
        break;
      case "/":
        total = parseFloat(this.data.valor1)/parseFloat(this.data.pantalla);  
        break;
      case "^":
        total = Math.pow(parseFloat(this.data.valor1), parseFloat(this.data.pantalla));
        break;
    }
    this.setData({
      pantalla: total,    
    });
  },
});