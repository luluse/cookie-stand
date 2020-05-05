
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
      listItem.textContent = `${this.hoursOfOperation[i]} ${this.cookieSales[i]}`;
      parent.appendChild(listItem);
    }
  }
};

seattle.randomCustomer();
seattle.avgCookiePerHour();
seattle.render();


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

// console.log(seattle.randomCustomer[i]);


// generateRandomCustPerHour: function() {
//   for(var i = 0; i < this.hoursOfOps.length; i++) {
//     var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//     this.custPerHour.push(randomCust);
//   }

var tokyo = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2
};

var dubai = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7
};

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