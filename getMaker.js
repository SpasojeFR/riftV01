

const puppeteer = require('puppeteer');
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function getMaker() {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let foundationLink = "https://makersplace.com/marketplace/";

  await page.goto(foundationLink, {waitUntil: 'networkidle2'} );

  await page.setViewport({
    width: 1440,
    height: 900
});

await autoScroll(page);

await delay(6000);

    const grabConent = await page.evaluate( ()=>{

       const fnd_nft_holder = document.querySelectorAll(".item.muuri-item.muuri-item-shown");
        
       let all = {}

       fnd_nft_holder.forEach((tag, i)=> {

            const title = tag.querySelector(".TextMediumBold__StyledTextMediumBold-sc-1jfznkr-0.fAGzKS").innerText;
            const price = tag.querySelector(".ArtworkDetails__StyledArtworkDetails-sc-vxxlx0-0.frXzQh").lastElementChild.innerText;
            const creator = tag.querySelector(".TextMediumRegular__StyledTextMediumRegular-sc-15sa7i4-0.liiGdv").innerText;
            const link = tag.querySelector("a").href;
            const img = tag.querySelector(".CardContentPreview__StyledCardContentPreview-sc-a76e9g-1").innerHTML; 

            all[i] = {title, price, img, creator, link};
           
        });
        return all;

    });

  await browser.close();
  //console.log(grabConent);
  return grabConent;

  

  //return grabConent;
};


async function autoScroll(page){
  await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
          var totalHeight = 0;
          var distance = 100;
          var timer = setInterval(() => {
              var scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;

              if(totalHeight >= scrollHeight){
                  clearInterval(timer);
                  resolve();
              }
          }, 1);
      });
  });
}

module.exports = getMaker;
//getMaker();


