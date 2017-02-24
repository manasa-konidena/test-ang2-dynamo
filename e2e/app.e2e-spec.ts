import { TestAng2DynamoPage } from './app.po';

describe('test-ang2-dynamo App', function() {
  let page: TestAng2DynamoPage;

  beforeEach(() => {
    page = new TestAng2DynamoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
