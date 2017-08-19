import { SocialAppAngularPage } from './app.po';

describe('social-app-angular App', () => {
  let page: SocialAppAngularPage;

  beforeEach(() => {
    page = new SocialAppAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
