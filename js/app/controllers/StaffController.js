function StaffController () {
  this.name = "Bill Gates";
  this.email = "bill@microsoft.com";
  this.phone = "1234567890";
}

angular.module('app').controller('StaffController', StaffController);