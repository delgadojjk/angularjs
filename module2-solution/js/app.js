(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
	var buy=this;
	buy.items=ShoppingListCheckOffService.getItemsToBuy();	

	buy.markAsBought=function(index){
		ShoppingListCheckOffService.buyItem(index);
	};

};

function AlreadyBoughtController(ShoppingListCheckOffService){
	var bought=this;
	
    bought.items= ShoppingListCheckOffService.getItemsBought();
};



function ShoppingListCheckOffService(){
   var service = this;
   var toBuyItems = [
      { name: "cookies", quantity: 20 },
      { name: "milk", quantity: 1 },
      { name: "chips", quantity: 2},
      { name: "sugary drinks", quantity: 2 },
      { name: "chocolate", quantity: 3 }
    ];

    var boughtItems=[];
    service.getItemsToBuy=function(){
    	return toBuyItems;
    };

    service.getItemsBought=function(){
    	return boughtItems;
    };

    service.buyItem=function(index){
    	boughtItems.push(toBuyItems[index]);
    	toBuyItems.splice(index,1);

    };

};



})();
