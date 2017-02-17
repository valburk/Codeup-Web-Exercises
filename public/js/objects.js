// (function(){
    "use strict";

    // TODO: Create person object
    var person = {}
    	person.firstName = "Hannah"
    	person.lastName = "Montanna" 
    // TODO: Create firstName and lastName properties in your person object; assign your name to them

    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties
person.sayHello = function () {
    console.log('Well Hello ' + this.firstName + ' ' + this.lastName);
};

    // Say hello from the person object.
    person.sayHello();
// })();