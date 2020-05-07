'use strict';

var parentElement = document.getElementById('table');
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var form = document.getElementById('form');
var allPeople = [];

function Store(name, minCustomer, maxCustomer, avgCookiePerCustomer){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.randomCustomerPerHour = [];
  this.cookieSalesPerHour = [];
  this.totalCookieForTheDay = 0;
  allStores.push(this);
  allPeople.push(this);
}

Store.prototype.getRandomNumber = function() {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
}

Store.prototype.randomCustomer = function() {
  for (var i = 0; i < hoursOfOperation.length; i++){
    var customersThisHour = this.getRandomNumber();

    this.randomCustomerPerHour.push(customersThisHour);
  }
}


// Calculate number of cookies sold per hour
Store.prototype.cookieSalesHour = function() {
  for (var i = 0; i < this.randomCustomerPerHour.length; i++){
    var totalCookie = Math.ceil(this.avgCookiePerCustomer * this.randomCustomerPerHour[i]);
    this.cookieSalesPerHour.push(totalCookie);
    this.totalCookieForTheDay += totalCookie;
  }
}

Store.prototype.render = function() {
  this.randomCustomer();
  this.cookieSalesHour();

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

function handleFormSubmit(event){
  event.preventDefault();
  var name = event.target.name.value;
  var minCustomer = event.target.minCustomer.value;
  var maxCustomer = event.target.maxCustomer.value;
  var avgCookiePerCustomer = event.target.avgCookiePerCustomer.value;

  new Store(name, minCustomer, maxCustomer, avgCookiePerCustomer);
}


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


function renderFootRow() {
  console.log('we have entered the function');
  var totalOfAllTotals = 0;

  var tableRow = document.createElement('tr');
  var tableData = document.createElement('th');
  tableData.textContent = 'Hourly Total';
  tableRow.appendChild(tableData);

  for (var i=0; i < hoursOfOperation.length; i++){
    var sum = 0;
    for (var j=0; j<allStores.length; j++){
      sum += allStores[j].cookieSalesPerHour[i];
    }
    totalOfAllTotals += sum;
    tableData = document.createElement('td');
    tableData.textContent = sum;
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = totalOfAllTotals;
  tableRow.appendChild(tableData);

  parentElement.appendChild(tableRow);
}


tableHeader();

var seattle = new Store ('Seattle', 23, 65, 6.3);
var tokyo = new Store ('Tokyo', 3, 24, 1.2);
var dubai = new Store ('Dubai', 11, 38, 3.7);
var paris = new Store ('Paris', 20, 38, 2.3);
var lima = new Store ('Lima', 2, 16, 4.6);


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

renderFootRow();

form.addEventListener('submit', handleFormSubmit);
