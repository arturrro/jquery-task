(function(){
    "use strict";

    var JQuery = function(selector) {
        if(!selector){
            throw new Error("Selector cannot be empty");
        }
        this.elements = Sizzle(selector);
        console.log(this.elements);
    };

    JQuery.prototype.addClass = function (clsName) {
        // debugger;
      this.elements.forEach(function(elem){
          console.log("Addedc class name");
          elem.classList.add(clsName);
      });
      return this;
    };

    window.$ = function(selector){


       return new JQuery(selector);
    };
}());