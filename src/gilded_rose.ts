class Item {
  name: string;
  sell_in: number;
  quality: number;
  constructor(name: string, sell_in: number, quality: number) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  }
}

export class GenericItem extends Item {
  type: string;
  constructor(
    name: string,
    sell_in: number,
    quality: number,
    type = "Generic"
  ) {
    super(name, sell_in, quality);
    this.type = type;
  }
  updateQuality() {}
}

export class LegendaryItem extends GenericItem {
  constructor(
    name: string,
    sell_in: number,
    quality: number = 80,
    type: string = "Legendary"
  ) {
    super(name, sell_in, quality, type);
  }
}

export class ConjuredItem extends GenericItem {
  constructor(
    name: string,
    sell_in: number,
    quality: number,
    type: string = "Conjured"
  ) {
    super(name, sell_in, quality, type);
  }
}

export class BackstageItem extends GenericItem {
  constructor(
    name: string,
    sell_in: number,
    quality: number,
    type: string = "BackStage"
  ) {
    super(name, sell_in, quality, type);
  }
}

export class AgedItem extends GenericItem {
  constructor(
    name: string,
    sell_in: number,
    quality: number,
    type: string = "Aged"
  ) {
    super(name, sell_in, quality, type);
  }
}

export var items: Item[] = [];

items.push(new GenericItem("+5 Dexterity Vest", 10, 20));
items.push(new AgedItem("Aged Brie", 2, 0));
items.push(new GenericItem("Elixir of the Mongoose", 5, 7));
items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0));
items.push(
  new BackstageItem("Backstage passes to a TAFKAL80ETC concert", 15, 20)
);
items.push(new ConjuredItem("Conjured Mana Cake", 3, 6));

export function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (
      items[i].name != "Aged Brie" &&
      items[i].name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (items[i].quality > 0) {
        if (items[i].name != "Sulfuras, Hand of Ragnaros") {
          items[i].quality = items[i].quality - 1;
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1;
        if (items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1;
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1;
            }
          }
        }
      }
    }
    if (items[i].name != "Sulfuras, Hand of Ragnaros") {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != "Aged Brie") {
        if (items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
          if (items[i].quality > 0) {
            if (items[i].name != "Sulfuras, Hand of Ragnaros") {
              items[i].quality = items[i].quality - 1;
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality;
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1;
        }
      }
    }
  }
}
