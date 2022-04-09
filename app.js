const colors = document.querySelectorAll(".colors div");
const shoepic = document.querySelector(".showimage img");
const select = document.querySelector("select");

let sizes = [0, 34, 35.5, 38, 42, 44, 47];

sizes.forEach(size => {
    select.add(new Option(size));
});

colors.forEach((item) => {
    item.style.background = item.getAttribute("data-color");

    item.addEventListener("click", (e) => {
        colors.forEach(itm => {
            itm.classList.remove("mark-color")
        })
        e.target.classList.add("mark-color");
        shoepic.style.animation = "fadeout 0.5s ease";

        shoepic.addEventListener("adnimationend", () => {
            if (item.getAttribute("data-color") === "yellow") {
                shoepic.style.transform = "scale(1)";
                shoepic.style.margin = "-5px";
            } else {
                shoepic.style.transform = "scale(1)";
                shoepic.style.margin = "0px";
            }
            shoepic.style.animation = "";

            shoepic.style.animation = "fadein 0.5s ease";
            shoepic.src = "./image" + item.getAttribute("data-color") + ".png";
            shoepic.addEventListener("adnimationend", () => {
                shoepic.style.animation = "";
            })
        })
    });
});