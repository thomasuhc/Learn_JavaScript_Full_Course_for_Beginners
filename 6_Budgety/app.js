var budgetController = (function(){



})();

//////////////////////////////////////////////////////////////

var UIController = (function(){


})


//////////////////////////////////////////////////////////////

var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function() {


    }

    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

document.addEventListener("keypress", function(event){

    if(event.keycode === 13 || event.button === 13) {
        ctrlAddItem();
    };

});


})(budgetController, UIController);


   
