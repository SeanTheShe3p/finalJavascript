//wouldn't have been possible without these guys
//https://www.smashingmagazine.com/2021/10/building-amazon-product-scraper-nodejs/
//https://www.youtube.com/watch?v=z9t7qOSqZB8

//packages or dependencies

// function getSearch(){
//     const usersearch = document.getElementById("search").text().replace(/[" "]/g, "+");
// };




async function scrape(){
    // const usersearch = document.getElementById("search").text().replace(/[" "]/g, "+");
    // const url = "https://www.amazon.com/s?k=" + usersearch;

    const usersearch = "toothbrush";
    usersearch.replace(/[" "]/g, "+");

    const url = "https://www.amazon.com/s?k=" + usersearch + "&s=exact-aware-popularity-rank";
    //get data
    const {data} = await axios.get(url);
    //load up the html
    const website = $.get(data);

    const list = [];
    
    const items = $("div.sg-col-inner");

$(items).each((idx, el)=>{

    const result = $(el)
        const name = result.find("span.a-size-base-plus.a-color-base.a-text-normal").text().slice(0,50);
        const link = "www.amazon.com" + result.find('a.a-link-normal.a-text-normal').attr('href');
        const price = parseFloat(result.find("span.a-offscreen").text().replace(/[$,]/g, ""));
        
        // if(price>=10000){
        //     price = 0;
        // };

        const product = {name:'', price:'', link:''};

        product.name = name;
        product.link = link;
        product.price = price;

        list.push(product);
    });
    console.log(list);

};
scrape();







    //product.name = $(items).find("span.a-size-base-plus.a-color-base.a-text-normal").text().slice(0,15);
    
    //console.log(product.name);

    // const item = $("div.sg-col-inner").each((_idx, el)=>{
    //     const item = $(el)
    //     product.name = item.find("span.a-size-base-plus.a-color-base.a-text-normal").text();
    // });
    // //extract the data
    //console.log(data)

    //product.name = $(item).find("span.a-size-base-plus.a-color-base.a-text-normal").text();

    //product.link = url;
    //product.price = $(item).find("span .a-offscreen").first().text().replace(/[$,]/g, "");
    //let intPrice = parseInt(product.price)
