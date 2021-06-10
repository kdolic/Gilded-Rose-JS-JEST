class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }

  // Subtract 1 from the sellIn days if: 
  sellInDecrease(i) {
    // If item name is not 'Sulfuras, Hand of Ragnaros'
    this.items[i].name != 'Sulfuras, Hand of Ragnaros' 
    // Subtract 1 from the sellIn days value
    ? this.items[i].sellIn = this.items[i].sellIn - 1 
    // Otherwise empty or undefined
    : null;
  }

  // Subtract 1 from the quality of an item if:
  qualityDecrease(i) {
    // If the quality is greater than 0 AND If the item isn't 'Sulfuras, Hand of Ragnaros'
    this.items[i].quality > 0 && this.items[i].name != 'Sulfuras, Hand of Ragnaros' 
    // Subtract 1 from the quality
    ? this.items[i].quality = this.items[i].quality - 1
    // Otherwise empty or undefined
    : null;
    // If the quality is greater than 0 AND If the item isn't 'Conjured Mana Cake'
    this.items[i].quality > 0 && this.items[i].name == 'Conjured Mana Cake' 
    // Subtract 1 from the quality
    ? this.items[i].quality = this.items[i].quality - 1
    // Otherwise empty or undefined
    : null;
 }
}

module.exports = {
  Item,
  Shop
}
