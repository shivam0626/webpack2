let searchImages = async(value) =>{
    try{
        let res = await fetch(
            `https://api.unsplash.com/search/photos/?query=${value}&per_page=30&client_id=Z7iotrd4vAqzOdG5oAfO_jDdnUXVBWdy7DneHIU_1AI`
            );
        let data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
};
let append  = (data,container) =>{
    data.forEach(({alt_description,urls:{small}}) =>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h4 = document.createElement("h4");
        div.setAttribute("id","box");
        img.src = small;
        h4.innerText = alt_description;
        div.append(img,h4);
        container.append(div);

    });
}
export {searchImages,append};