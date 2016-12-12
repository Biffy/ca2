import { Wddca2Page } from './app.po';

describe('wddca2 App', function() {
  let page: Wddca2Page;

  beforeEach(() => {
    page = new Wddca2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
