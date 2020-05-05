
'use strict';

// var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var seattle = {
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerCustomer: 6.3,
  cookieSales: [],
  randomCustomer: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  avgCookiePerHour: function() {
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      this.cookieSales.push(Math.floor(this.avgCookiePerCustomer * this.randomCustomer()));
    }
  },
  render: function() {
    var parent = document.getElementById('seattle');
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = `${this.hoursOfOperation[i]}: ${this.cookieSales[i]}`;
      parent.appendChild(listItem);
    }
    var totalCookies = 0;
    for (var j = 0; j < this.cookieSales.length; j++) {
      totalCookies += this.cookieSales[j];
    }
    var totalItem = document.createElement('li');
    totalItem.textContent = `Total: ${totalCookies}`;
    parent.appendChild(totalItem);
  }
};

seattle.randomCustomer();
seattle.avgCookiePerHour();
seattle.render();


var tokyo = {
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiePerCustomer: 1.2,
  cookieSales: [],
  randomCustomer: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  avgCookiePerHour: function() {
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      this.cookieSales.push(Math.floor(this.avgCookiePerCustomer * this.randomCustomer()));
    }
  },
  render: function() {
    var parent = document.getElementById('tokyo');
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = `${this.hoursOfOperation[i]}: ${this.cookieSales[i]}`;
      parent.appendChild(listItem);
    }
    var totalCookies = 0;
    for (var j = 0; j < this.cookieSales.length; j++) {
      totalCookies += this.cookieSales[j];
    }
    var totalItem = document.createElement('li');
    totalItem.textContent = `Total: ${totalCookies}`;
    parent.appendChild(totalItem);
  }
};

tokyo.randomCustomer();
tokyo.avgCookiePerHour();
tokyo.render();


var dubai = {
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiePerCustomer: 3.7,
  cookieSales: [],
  randomCustomer: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  avgCookiePerHour: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      this.cookieSales.push(Math.floor(this.avgCookiePerCustomer * this.randomCustomer()));
    }
  },
  render: function(){
    var parent = document.getElementById('dubai');
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = `${this.hoursOfOperation[i]}: ${this.cookieSales[i]}`;
      parent.appendChild(listItem);
    }
    var totalCookies = 0;
    for (var j =0; j < this.cookieSales.length; j++) {
      totalCookies += this.cookieSales[j];
    }
    var totalItem = document.createElement('li');
    totalItem.textContent = `Total: ${totalCookies}`;
    parent.appendChild(totalItem);
  }
};

dubai.randomCustomer();
dubai.avgCookiePerHour();
dubai.render();

var paris = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3
};

var lima = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6
};

//   randomCustomer: function() {
//     for (var i = 0; i < this.hoursOfOperation.length; i++) {
//       return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
//     }
//     var avgCustomer = [],
//     avgCustomer.push(seattle.randomCustomer),
//   },
//   avgCookiePerHour: function() {
//     for (var i = 0; i < this.hoursOfOperation.length; i++) {
//       return this.randomCustomer[i] * this.avgCookiePerCustomer;
//     }
//   }
//   }
// };


// generateRandomCustPerHour: function() {
//   for(var i = 0; i < this.hoursOfOps.length; i++) {
//     var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//     this.custPerHour.push(randomCust);
// }