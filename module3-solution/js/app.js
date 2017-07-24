(function () {
'use strict';

angular.module('NarrowItDownApp', [])

.controller('NarrowItDownController',NarrowItDownController)
.constant('baseUrl','https://davids-restaurant.herokuapp.com')
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItemsDirective);

function FoundItemsDirective(){
 var ddo={
  templateUrl: 'foundItems.html',
  scope:{
    items: '<',
    onRemove: '&'
  },
  controller: FoundItemsDirectiveController,
  controllerAs: 'found',
  bindToController: true,
  link: FoundItemsDirectiveLink
 };
 return ddo;
};

function FoundItemsDirectiveController(){
  var found=this;

  found.nothingFound=function(){
    return found.items && found.items.length===0;
  };

};


function FoundItemsDirectiveLink(scope, element, attrs, controller){


    scope.$watch('found.nothingFound()', function (newValue, oldValue) {
    console.log("Old value: ", oldValue);
    console.log("New value: ", newValue);

    if (newValue === true) {
      displayNothingFound();
    }
    else {
      removeNothingFound();
    }

  });

    function displayNothingFound() {
    // Using Angluar jqLite
    // var warningElem = element.find("div");
    // console.log(warningElem);
    // warningElem.css('display', 'block');

    // If jQuery included before Angluar
    var warningElem = element.find("div.error");
    warningElem.slideDown(900);
  }


  function removeNothingFound() {
    // Using Angluar jqLite
    // var warningElem = element.find("div");
    // warningElem.css('display', 'none');

    // If jQuery included before Angluar
    var warningElem = element.find("div.error");
    warningElem.slideUp(900);
  }

};


NarrowItDownController.$inject=['MenuSearchService'];

function NarrowItDownController(MenuSearchService){
	var menu=this;
  menu.found=[];
  

	menu.search=function(searchTerm){
     var promise=MenuSearchService.getMatchedMenuItems(searchTerm);
     promise.then(function(response){
      menu.found=response;
      console.log(JSON.stringify(menu.found));
     })
     .catch(function (error) {
          console.log("error ",error);
    });;
  };


  menu.removeItem=function(itemIndex){
      menu.found.splice(itemIndex,1);
  };





};

MenuSearchService.$inject=['$http','baseUrl'];
function MenuSearchService($http, baseUrl){
  var service = this;

  service.getMatchedMenuItems=function(searchTerm){
    return $http.get(baseUrl +"/menu_items.json")
           .then(function (result) {
            // process result and only keep items that match
            if (!searchTerm){
              return [];
            }

            var items= result.data.menu_items;
            var foundItems=[];
            for (var i = items.length - 1; i >= 0; i--) {
              if (items[i].description.indexOf(searchTerm)!=-1){
                foundItems.push(items[i]);
              }
            }
            // return processed items
            return foundItems;
        })
  }

};

})();
