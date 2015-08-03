function MainController () {
  var vm = this;
  vm.list = [];
  vm.add = function () {
    vm.list.push(vm.item);
    vm.item = '';
  };
  vm.remove = function (index) {
    vm.list.splice(index, 1);
  };
}

angular.module('shopping', [])

.controller('MainController', MainController);