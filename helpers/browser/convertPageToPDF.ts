import puppeteer from "puppeteer";

const convertPageToPDF = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle0"
  });

  await page.emulateMediaType("screen");

  const pdf = await page.pdf({
    format: "a4",
    printBackground: true
  });

  await browser.close();

  return pdf;
};

export { convertPageToPDF };
