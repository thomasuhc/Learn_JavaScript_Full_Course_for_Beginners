var budgetController = (function(){



})();

//////////////////////////////////////////////////////////////

var UIController = (function(){
    
    var DOMStrings = {

        inputType: ".add__type",
        inputDescription:".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn"

    }
        return {

            getinput: function() {

                return {

                    type: document.querySelector(DOMStrings.inputType).value,

                    description: document.querySelector(DOMStrings.inputDescription).value,
            
                    value: document.querySelector(DOMStrings.inputValue).value
        
                };
            },
            getDOMStrings: function(){
                return DOMStrings;
            }
        }
})();


//////////////////////////////////////////////////////////////

var controller = (function(budgetCtrl, UICtrl){

    var setupEventListerners = function(){

        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

        document.addEventListener("keypress", function(event){
    
        if(event.keycode === 13 || event.button === 13) {
            ctrlAddItem();
        };
    
    });

    }

   

    var ctrlAddItem = function() {

        var input = UICtrl.getinput();
    };

    return{
        init: function(){
            console.log("App start");
            setupEventListerners();
        }
    }


})(budgetController, UIController);

controller.init();
