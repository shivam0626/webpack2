import {navbar} from "../components/navbar.js";
import {searchImages,append} from "./fetch.js";

import "../styles/navbar.css";

import "../styles/index.css";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let search =(e) =>{
    if(e.key==="Enter"){
        let value = document.getElementById("query").value;
        searchImages(value).then((data)=>{
            console.log(data);
            let container = document.getElementById("container");
            container.innerHTML = null;
            append(data.results,container);
        });
        
    }
};
document.getElementById("query").addEventListener("keydown",search);

let categories = document.getElementById("categories").children;

function cSearch(){
    console.log(this.id);
    searchImages(this.id).then((data)=>{
        console.log(data);
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results,container);
    });
}

for(let el of categories){
    el.addEventListener("click",cSearch);
}
