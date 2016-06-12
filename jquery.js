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
      this.elements.forEach(function(elem){
          elem.classList.add(clsName);
      });
      return this;
    };

    JQuery.prototype.append = function (content) {
        this.elements.forEach(function(elem){
            elem.innerHTML += content;
        });
        return this;
    };

    JQuery.prototype.html = function (newValue) {
        var firstElem = this.elements[0];
        if(newValue != undefined){
            firstElem.innerHTML = newValue;
            return this;
        }
        else{
            return firstElem.innerHTML;
        }
    };

    JQuery.prototype.attr = function (attrName,attrValue) {
        if(attrValue != undefined) {
            this.elements.forEach(function (elem) {
                elem.setAttribute(attrName, attrValue);
            });
            return this;
        }else{
            return this.elements[0].getAttribute(attrName);
        }
    };

    JQuery.prototype.css = function (name,value) {
        if(value != undefined) {
            this.elements.forEach(function (elem) {
                elem.style[name] = value;
            });
            return this;
        }else{
            return this.elements[0].style[name];
        }
    };


    window.$ = function(selector){
       return new JQuery(selector);
    };
}());