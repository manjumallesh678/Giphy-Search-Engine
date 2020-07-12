let pre = false;
document.querySelector(".js-go").addEventListener("click",function(event){
     let input1 = document.querySelector("input").value;
        rerender(input1);
});

document.querySelector(".js-userinput").addEventListener("keyup",function(event){
   if(event.which === 13){
        let input1 = document.querySelector("input").value;
        rerender(input1);
   }
});
function rerender(input1){
    if(pre){
        document.querySelector(".js-container").innerHTML = "";
    }
    let url = `https://api.giphy.com/v1/gifs/search?q=${input1}&api_key=dc6zaTOxFJmzC`;
    let giphy = new XMLHttpRequest();
    giphy.open("GET",url);
    giphy.send();
    giphy.addEventListener("load",function(e){
        let data = JSON.parse(e.target.response);
        let imgurl = data.data;
        pushToDom(imgurl);
    });
}
function pushToDom(imgurl){
    for(let i = 0; i < imgurl.length; i++){
        let img = document.createElement("img");
        img.className = "container-image";
        img.src = imgurl[i].images.fixed_height.url;
        document.querySelector(".js-container").appendChild(img);
    }
    pre = true;
}