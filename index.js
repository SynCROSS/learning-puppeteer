import puppeteer from 'puppeteer';

const crawlSomething = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto('https://news.ycombinator.com', {
      waitUntil: 'networkidle2',
    });
    await page.pdf({
      path: 'example.pdf',
      format: 'a4',
    });
    await browser.close();
  } catch (e) {
    console.error(e);
  }
};

crawlSomething();
