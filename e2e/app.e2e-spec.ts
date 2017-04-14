import { Formula1ResultsPage } from './app.po';

describe('formula1-results App', () => {
  let page: Formula1ResultsPage;

  beforeEach(() => {
    page = new Formula1ResultsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
