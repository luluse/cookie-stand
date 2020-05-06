'use strict';

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Location(name, minCustomer, maxCustomer, avgCookiePerCustomer){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.randomCustomerPerHour = [];
  this.cookieSalesPerHour = [];
  this.totalCookieForTheDay = 0;
}

// Calculate random customer per hour
// Location.prototype.randomCustomer = function() {
//   for (var i = 0; i < hoursOfOperation.length; i++){
//     var customersThisHour = getRandomNumber(this.minCustomer, this.maxCustomer);

//     this.randomCustomerPerHour.push(customersThisHour);
//   }
// };
Location.prototype.getRandomNumber = function() {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
};

Location.prototype.randomCustomer = function() {
  for (var i = 0; i < hoursOfOperation.length; i++){
    var customersThisHour = this.getRandomNumber();

    this.randomCustomerPerHour.push(customersThisHour);
  }
};


// Calculate number of cookies sold per hour
Location.prototype.cookieSalesHour = function() {
  for (var i = 0; i < this.randomCustomerPerHour.length; i++){
    var totalCookie = Math.ceil(this.avgCookiePerCustomer * this.randomCustomerPerHour[i]);
    this.cookieSalesPerHour.push(totalCookie);
    this.totalCookieForTheDay += totalCookie;
  }
};

Location.prototype.render = function() {
  this.randomCustomer();
  this.cookieSalesHour();

  var parentElement = document.getElementById('table');
  //render hours of opeartion

  var tableRow = document.createElement('tr');

  var tableHead = document.createElement('th');
  tableHead.textContent = this.name;
  tableRow.appendChild(tableHead);

  for (var i = 0; i < this.cookieSalesPerHour.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.cookieSalesPerHour[i];
    tableRow.appendChild(tableData);
  }

  var totalItem = document.createElement('td');
  totalItem.textContent = this.totalCookieForTheDay;
  tableRow.appendChild(totalItem);

  parentElement.appendChild(tableRow);
};

function tableHeader(){
  //  hours header
  var parentElement = document.getElementById('table');
  var tableRow = document.createElement('tr');
  var tableHead = document.createElement('th');
  tableHead.textContent = ' ';
  tableRow.appendChild(tableHead);

  for (var i = 0; i < hoursOfOperation.length; i++){
    var tableHeader1 = document.createElement('th');
    tableHeader1.textContent = hoursOfOperation[i];
    tableRow.appendChild(tableHeader1);
  }
  // total header
  var tableHeader2 = document.createElement('th');
  tableHeader2.textContent = 'Daily location total';
  tableRow.appendChild(tableHeader2);
  parentElement.appendChild(tableRow);
}
tableHeader();

var seattle = new Location ('Seattle', 23, 65, 6.3);

var tokyo = new Location ('Tokyo', 3, 24, 1.2);
var dubai = new Location ('Dubai', 11, 38, 3.7);
var paris = new Location ('Paris', 20, 38, 2.3);
var lima = new Location ('Lima', 2, 16, 4.6);


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();



// function from MDN Math.random
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
//}
