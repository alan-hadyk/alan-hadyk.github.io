import puppeteer from "puppeteer";

const convertPageToPDF = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle2"
  });

  await page.emulateMediaType("screen");

  const pdf = await page.pdf({
    height: "11650px",
    pageRanges: "1",
    printBackground: true,
    width: "210mm"
  });

  await browser.close();

  return pdf;
};

export { convertPageToPDF };
