process.on("nfts", nfts=> {
  const jsonResponse = getNFT(nfts);
  process.send()
});

const puppeteer = require('puppeteer');

async function getNFT() {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let foundationLink = "https://foundation.app/artworks?refinementList%5Bavailability%5D%5B0%5D=LIVE_AUCTION&sortBy=artworks_sort_date_sold_asc"

  await page.goto(foundationLink, {waitUntil: 'networkidle2'} );

  await page.setViewport({
    width: 1200,
    height: 800
});

await autoScroll(page);

    const grabConent = await page.evaluate( ()=>{

       const fnd_nft_holder = document.querySelectorAll(".st--c-PJLV.st--c-dhzjXW.st--c-hxIVtg.artwork-card");
        
       let all = {}

       fnd_nft_holder.forEach((tag, i)=> {

            const title = tag.querySelector(".st--c-fjYRBI").innerHTML;
            const price = tag.querySelector(".st--c-PJLV.st--c-eHbONH:nth-of-type(2)").innerHTML;
            const creator = tag.querySelector(".css-4cffwv > div").innerText;
            const link = tag.querySelector(".st--c-feUMsw").href;
            const img = tag.querySelector(".css-zgakko").innerHTML; 

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

module.exports = getNFT;
//getNFT();


