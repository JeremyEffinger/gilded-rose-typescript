import {
  GenericItem,
  LegendaryItem,
  AgedItem,
  BackstageItem,
  update_quality,
  items,
} from "../src/gilded_rose";

describe("update_quality", () => {
  it("degrades an item twice as fast, when sell_in days is less than zero", () => {
    const testItem = new GenericItem("+5 Dexterity Vest", -1, 4);
    items.push(testItem);
    update_quality();
    expect(testItem.quality).toEqual(2);
    expect(testItem.sell_in).toEqual(-2);
  });
});
