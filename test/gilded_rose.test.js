const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  describe("Majority of Items", function() {
    it("should degrade quality of item twice as fast, after sellIn date passed", function() {
      const gildedRose = new Shop([new Item("+5 Dexterity Vest", 0, 4)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(2);
    });

    it("Quality of item is never negative", function() {
      const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(0);
    });

    it("Quality of item is never more than 50", function() {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(50);
    });
  });

  describe("Aged Brie", function() {
    it("increases in Quality the older it gets", function() {
      const gildedRose = new Shop([new Item("Aged Brie", 20, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(19);
      expect(items[0].quality).toBe(1);
    });
  });
});
