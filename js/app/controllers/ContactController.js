function ContactController () {
  var vm = this;
  vm.name = "Steve Jobs";
  vm.email = "steve@apple.com";
  vm.phone = "0987654321";

  this.changeName = function () {
    vm.name = (vm.name === "Steve Jobs") ? "Tim Cook" : "Steve Jobs";
  }
}

angular.module('app').controller('ContactController', ContactController);