import puppeteer from "puppeteer";

const convertPageToPDF = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle0"
  });

  const pdf = await page.pdf({
    format: "a4"
  });

  await browser.close();

  return pdf;
};

export { convertPageToPDF };
