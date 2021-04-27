
function initVue() {

    new Vue({

        el: "#app",
        data: {

            "navbarLinks" : [

                "Home",
                "Elements",
                "Features",
                "Pages",
                "Portfolio",
                "Blog",
                "Shop"
            ]
        }
    })
}

function init() {

    console.log("Hello world!")
    initVue();
}

document.addEventListener("DOMContentLoaded", init);