import { InventoryappPage } from './app.po';

describe('inventoryapp App', function() {
  let page: InventoryappPage;

  beforeEach(() => {
    page = new InventoryappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
