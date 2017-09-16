const basketModule = (function() {

  var basket = [];

  function getItemName(itemIndex) {
    return basket[itemIndex].name;
  };

  function getItemPrice(itemIndex) {
    return basket[itemIndex].price;
  }

  function getBasketLength() {
    return basket.length;
  }

  return {

    addItem: function(name, price) {
      basket.push({
        name,
        price
      });
    },

    // returns an array of basket item names
    getItemList: function() {
      return basket.map((item) => {
        return item.name;
      });
    },

    getBasketTotal: function() {
      return basket.reduce((sum, item, index) => {
        return sum + getItemPrice(index);
      }, 0);
    },

    getItemAverage: function() {
      return this.getBasketTotal() / getBasketLength();
    }

  }

})();

basketModule.addItem('spinach', 4);
basketModule.addItem('leaves', 2);

console.log(basketModule.getItemList());

console.log(basketModule.getBasketTotal());

console.log(basketModule.getItemAverage());
