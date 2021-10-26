import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

var container2 = document.getElementById('logo_loader');
var state = 'play';

var animation = lottieWeb.loadAnimation({
  container: container2,
  path: 'img/logo/data.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Demo Animation",
});


let preloader = document.querySelector(".preloader");
let body = document.querySelector("body");
let nft_holder = document.querySelector(".nft_holder");

let nft_title = document.querySelectorAll(".nft_title p");
let nft_creator = document.querySelectorAll(".nft_creator p");
let nft_price = document.querySelectorAll(".nft_price_holder p");
let nft_link = document.querySelectorAll(".nft_link");
let nft_img = document.querySelectorAll(".nft_inside");


let nft_title_known = document.querySelectorAll(".nft_title_known p");
let nft_creator_known = document.querySelectorAll(".nft_creator_known p");
let nft_price_holder_known = document.querySelectorAll(".nft_price_holder_known p");
let nft_link_known = document.querySelectorAll(".nft_link_known");
let nft_img_known = document.querySelectorAll(".nft_inside_known");


let nft_title_maker = document.querySelectorAll(".nft_title_maker p");
let nft_creator_maker = document.querySelectorAll(".nft_creator_maker p");
let nft_price_holder_maker = document.querySelectorAll(".nft_price_holder_maker p");
let nft_link_maker = document.querySelectorAll(".nft_link_maker");
let nft_img_maker = document.querySelectorAll(".nft_inside_maker");

async function getAllNfts() {

    console.log("fnd");
    const response = await fetch('/api/nfts')
    const nfts = await response.json();

        for(let i=0; i<46; ++i) { 
          
           nft_title[i].innerHTML = nfts[i].title;
           nft_creator[i].innerHTML = nfts[i].creator;
           nft_price[i].innerHTML = nfts[i].price;
           nft_link[i].href = nfts[i].link;
           nft_img[i].innerHTML = nfts[i].img;
         
       }

       setTimeout(function(){ 
        
            let all_videos  =  document.querySelectorAll("video");

            for ( let i=0; i < all_videos.length; i++) {
                    all_videos[i].muted= true;

            }

        }, 500);

        setTimeout(function(){ 

            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0;
        
            preloader.classList.add("hide");
            body.classList.remove("loading");
            nft_holder.classList.add("loaded");

        }, 3000);
    
    };


getAllNfts();

async function getAllNftsMaker() {

    console.log("maker");
    const response = await fetch('/api/maker')
    const nfts = await response.json();

        for( let i=0; i<20; ++i) { 
          
           nft_title_maker[i].innerHTML = nfts[i].title;
           nft_creator_maker[i].innerHTML = nfts[i].creator;
           nft_price_holder_maker[i].innerHTML = nfts[i].price;
           nft_link_maker[i].href = nfts[i].link;
           nft_img_maker[i].innerHTML = nfts[i].img;
         
       }

       setTimeout(function(){ 
    
        let all_videos  =  document.querySelectorAll("video");

        for (let i=0; i < all_videos.length; i++) {
                all_videos[i].muted= true;
        }

    }, 1000);

    };

getAllNftsMaker();

async function getAllNftsKnown() {

    console.log("knwon");

    const response = await fetch('api/open')
    const nfts = await response.json();

        for(let i=0; i<12; ++i) { 
          
           nft_title_known[i].innerHTML = nfts[i].title;
           nft_creator_known[i].innerHTML = nfts[i].creator;
           nft_price_holder_known[i].innerHTML = nfts[i].price;
           nft_link_known[i].href = nfts[i].link;
           nft_img_known[i].innerHTML = nfts[i].img;
           
       }  

       setTimeout(function(){ 
    
            let all_videos  =  document.querySelectorAll("video");

            for (let i=0; i < all_videos.length; i++) {
                    all_videos[i].muted= true;
            }

            $(".card-image-cover").each(function() {
                //console.log($(this).attr("data-src"));
                let s = $(this).attr("data-src");

                $(this).attr("src", `${s}`);
            });    
    
        }, 1000);

      
    };



    setTimeout(function(){ 
    
        getAllNftsKnown();
    
    }, 2000);





