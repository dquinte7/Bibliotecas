import { BibliotecasPage } from './app.po';

describe('bibliotecas App', function() {
  let page: BibliotecasPage;

  beforeEach(() => {
    page = new BibliotecasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
