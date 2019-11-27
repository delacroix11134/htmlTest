;(function(global, $){
    
    //建立一個函數回傳 另一個函數建構式建構的物件(未來可以用constructor改寫?)
    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }
    
    //以下幾個物件只能在這裡被取用 不會被外界程式所干擾
    //但是因為閉包可以在函數中被取用
    const suportedLangs = ['en' , 'es'];

    const greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    const formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    const logMsgs = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };
    
    //利用原型鏈 把在Greetr.init裡需要的方法寫在Greetr的prototype裡
    //寫在Greetr.prototype裡的方法不會被建構式建構的物件複製 可以有較好的效能
    Greetr.prototype = {
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        },
        validate: function(){
            //這裡的this會指向取用他的物件
            //如果language可用 會回傳0或1
            if (suportedLangs.indexOf(this.language) === -1){
                throw 'Invalid languages';
            }
        },
        greeting: function(){
            //使用中括號取用"物件"的屬性 括號內可以是字串、變數、或運算式
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        formalGreeting: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        greet: function(formal){
            var msg;

            if (formal){
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            //因為ie沒有console 所以多一行作確認
            if(console){
                console.log(msg);
            }
            //加入return this 讓此函式可以被鏈結
            return this;
        },
        log: function(){
            if (console){
                console.log(this.logMsgs[this.language] + ' ' + this.fullName());
            };
            return this;
        },
        setLang: function(lang){
            this.language = lang;
            this.validate();
            return this;
        },
        //增加jQuery支援(學完jQuery再回來看)
        HTMLGreeting: function( selector, formal){
            //檢查jQuery和jQuery選擇器是否存在
            if(!$){
                throw 'jQuery not loaded';
            }
            if(!selector){
                throw 'Missing jQuery selector'
            }
            //同上
            var msg;
            if(formal){
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            //用jQuery選擇器更新DOM物件
            $(selector).html(msg);

            return this;
        }

    };

    //建構函式
    //Greetr.init應該是設定為Greetr function的一個屬性 而這個屬性是一個建構函數(?)
    Greetr.init = function(firstName, lastName, language){
        var self = this;
    	self.firstName = firstName || '';
    	self.lastName = lastName || '';
    	self.language = language || 'en';
        //檢查language是否支援
        self.validate();
    }

    //把物件的原型和上層函數原型相等
    Greetr.init.prototype = Greetr.prototype;
    //把Greetr暴露到全域中以取用
    //把G$作為簡寫
    global.Greetr = global.G$ = Greetr;


	
}(window,jQuery));