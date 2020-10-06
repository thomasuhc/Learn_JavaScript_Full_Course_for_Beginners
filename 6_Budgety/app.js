var budgetController = (function(){

    var Expense = function(id, description, value) {

        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id, description, value) {

        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {

        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {

        addItem: function(type, des, val) {
        
            var newItem, ID;
    
            if(data.allItems[type].length > 0) {
    
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0;
            }
           
    
            if(type === "exp") {
    
                newItem = new Expense(ID, des, val);
    
            } else if(type === "inc") {
    
                newItem = new Income(ID, des, val);
            }
    
            data.allItems[type].push(newItem);
    
            return newItem;
        }

    } 
})();

//////////////////////////////////////////////////////////////

var UIController = (function(){
    
    var DOMStrings = {

        inputType: ".add__type",
        inputDescription:".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list"
        

    }
        return {

            getinput: function() {

                return {

                    type: document.querySelector(DOMStrings.inputType).value,

                    description: document.querySelector(DOMStrings.inputDescription).value,
            
                    value: document.querySelector(DOMStrings.inputValue).value
        
                };
            },


            addListItem: function(obj, type) {

                var html, newHtml;

                if(type === "inc") {

                    element = DOMStrings.incomeContainer;

                    html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                
                } else if (type === "exp") {

                    element = DOMStrings.expensesContainer;
                    
                    html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

                }

                newHtml = html.replace("%id%", obj.id);
                newHtml = newHtml.replace("%description%", obj.description);
                newHtml = newHtml.replace("%value%", obj.value);
                document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
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

        var input, newItem;

        input = UICtrl.getinput();

        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        UICtrl.addListItem(newItem, input.type);
    };

    return{
        init: function(){
            console.log("App start");
            setupEventListerners();
        }
    }


})(budgetController, UIController);

controller.init();
