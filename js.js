let arrImages = Array.from(document.querySelectorAll(".sild_image img"));
let imgLength = arrImages.length;
let counter = 1;

let previmg = document.getElementById("prev");
let nextimg = document.getElementById("next");

let numSlide = document.getElementById("index_current");
let totalImg = document.getElementById("total_img");

previmg.onclick = function () {
    if(previmg.classList.contains("disabeld")) {
        //
    }else {
        counter--;
        theChecker();
    }

}
nextimg.onclick = function () {
    if(nextimg.classList.contains("disabeld")) {
        //
    }else {
        counter++;
        theChecker();
    }
}


let paginationElement = document.querySelector("ul");
paginationElement.setAttribute("id","Pagination-ul");

for (let i = 1; i <= imgLength; i++) {
    let paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index",i);

    let paginationSpan = document.createElement("span");
    paginationSpan.appendChild(document.createTextNode(i))

    paginationItem.appendChild(paginationSpan);

    paginationElement.appendChild(paginationItem);
}


let paginationNewUl = document.getElementById("Pagination-ul");
let paginationNewSpan = Array.from(document.querySelectorAll("#Pagination-ul span"));
let paginationBullets = Array.from(document.querySelectorAll("#Pagination-ul li"));
theChecker();


function theChecker() {

    numSlide.textContent = counter;
    totalImg.textContent = imgLength;

    removeAllActive();

    arrImages[counter - 1].classList.add("active");
    paginationNewSpan[counter - 1].classList.add("check");

    if (counter == 1) {
        previmg.classList.add("disabeld")
    }else {
        previmg.classList.remove("disabeld")
    }

    if(counter == imgLength) {
        nextimg.classList.add("disabeld");
    }else {
        nextimg.classList.remove("disabeld");
    }

}

function removeAllActive () {
    arrImages.forEach((img) => {
        img.classList.remove("active");
    })

    paginationNewSpan.forEach((span) => {
        span.classList.remove("check");
    })
}
