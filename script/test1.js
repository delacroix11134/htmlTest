var greet = function(name){
    return new greet.init(name);
};

greet.prototype = {
    sayHi: function(){
    	console.log('hi!' + this.name);
    }
}

greet.init = function(name){
    var self = this;
    self.name = name;
};

greet.init.prototype = greet.prototype;

greet('victor').sayHi()

