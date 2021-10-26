const puppeteerOpen = require('puppeteer');
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


async function getOpen() {

  const browserOpen = await puppeteerOpen.launch();
  const pageOpen = await browserOpen.newPage();
  let openLink = "https://knownorigin.io/gallery";

  await pageOpen.goto(openLink, {waitUntil: 'networkidle2'} );

  await pageOpen.setViewport({
    width: 1440,
    height: 900
});

await autoScroll(pageOpen);

await delay(6000);


    const grabConentOpen = await pageOpen.evaluate( ()=>{

       const open_nft_holder = document.querySelectorAll(".card.has-margin-bottom-4");
        
       let all_open = {}


       open_nft_holder.forEach((tag, i)=> {

            const title = tag.querySelector(".has-text-left.is-family-primary").innerHTML;
            const price = tag.querySelector(".has-text-weight-semibold.has-text-left:nth-of-type(2) a span span").innerText;
            const creator = tag.querySelector(".level.is-mobile.is-vcentered h6").innerText;
            const link = tag.querySelector(".asset-card-wrapped-link.hand-pointer a" ).href;
            const img = tag.querySelector(".asset-card-wrapped-link.hand-pointer > a > section").innerHTML; 

            all_open[i] = {title, price, img, creator, link};

        });
         
        return all_open;

       

    });

   
  await browserOpen.close();
  //console.log(grabConentOpen);
  return grabConentOpen;

  

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

module.exports = getOpen;
//getOpen();


