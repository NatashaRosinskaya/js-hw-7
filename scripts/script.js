//Калькулятор
let Calculator = function () {

    this.get = function (){
        this.a = +prompt ('Введите значение a');
        this.b = +prompt ('Введите значение b');
        this.oper = prompt ('Введите операцию. Например: +, -, *, /');

        this.operation ();
    }
    this.operation = function(){
        switch (this.oper){
            case '+':
                this.res = this.a + this.b;
                break;
            case '-':
                this.res = this.a - this.b;
                break;
            case '*':
                this.res = this.a * this.b;
                break;
            case '/':
                this.res = this.a / this.b;
                break;
            default: this.res = 0;
        }
        this.result();
       
    };
    this.result = function(){
        console.log(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.res);
    };
}

let calc = new Calculator ();
calc.get ();

//Лампочка
let Light = function (){
    this.get = function (){
        this.power = +prompt ('Введите мощность лампочки, Вт');
        this.cost = +prompt ('Введите стоимость электроэнергии за 1квт');
        

        if (confirm ('Лампочка включена?')){
            this.workTime = +prompt ('Введите время работы лампочки, ч');
        } else{
            this.workTime = 0;
        };

        this.ex();
    }
    this.ex = function(){
        this.res = (this.power / 1000) * this.cost * this.workTime;
       
        this.result ();
    };
    this.result = function(){

        if (this.workTime == 0 || this.workTime == undefined){
            console.log ('Лампочка не включена');
        } else {
            console.log ('Лампочка проработала ' + this.workTime + ' часов. Стоимость потраченной электроэнергии составит = ' + this.res + ' рублей.')
        }
    };
}

let lightbulb = new Light ();
lightbulb.get();

//Чайник
let Kettle = function (){
    this.get = function (){
        this.power = +prompt ('Введите мощность чайника, кВт');
        this.volume = +prompt ('Введите объём чайника, л');
        this.tempColdWater = 10;
        this.tempHotWatter = 60;
        

        if (confirm ('В чайнике есть вода?')){
            this.volumeWater = +prompt ('Введите количесто воды в чайнике, л');
        } else{
            this.volumeWater = 0;
        };

        this.heatingTime();
    }
    this.heatingTime = function(){
        this.res = (this.volume - this.volumeWater) * (this.tempHotWatter - this.tempColdWater) / this.power;
       
        this.result ();
    };
    this.result = function(){

        if (this.volumeWater == 0 || this.volumeWater == undefined){
            console.log ('Чайник не включен');
        } else {
            console.log ('Чайник нагреется за ' + this.res + ' минуты.')
        }
    };
}

let electricKettle = new Kettle ();
electricKettle.get();

//Контакты
let Contact = function (){
    this.get = function(){
    this.firstName = prompt ('Введите ваше имя');
    this.lastName = prompt ('Введите вашу фамилию');
    this.age = +prompt ('Введите ваш возраст');
    this.phone = +prompt ('Введите ваш контактный номер телефона, например: 375291234567');
    this.email = prompt ('Введите вашу электронную почту, например: post@gmail.com');
   

    if (this.age > 18){
        alert(this.firstName + ' ' + this.lastName + ', ' + 'добро пожаловать на сайт нашей компании! В ближайшее время мы свяжемся с вами по вашим контактным данным.');
    }else {
        alert (this.firstName + ' ' + this.lastName + ', ' + 'к сожалению, вход на сайт нашей компании вам запрещён!');
    }
}
}

let custContact = new Contact ();
custContact.get ();

