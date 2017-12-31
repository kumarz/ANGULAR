import { SortPipePage } from './app.po';

describe('sort-pipe App', () => {
  let page: SortPipePage;

  beforeEach(() => {
    page = new SortPipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
