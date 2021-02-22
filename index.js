import puppeteer from 'puppeteer';

const crawlSomething = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.setViewport({
      width: 1920,
      height: 1080,
    });
    await page.goto('https://example.com');
    await page.screenshot({
      path: 'example.png',
    });
    await browser.close();
  } catch (e) {
    console.error(e);
  }
};

crawlSomething();
