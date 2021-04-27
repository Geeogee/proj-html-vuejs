
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
            ],

            "previews" : [
                {   
                    "id" : "post0",
                    "img" : "img/blog-46.jpg",
                    "label" : "Photography",
                    "title" : "How to Better Concert Pictures in 30 Seconds",
                    "descr" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, corporis. Cum quisquam, temporibus delectus quas veritatis eveniet, recusandae ipsa perspiciatis ab eaque dolore eum voluptatibus id iusto maxime voluptate minus!"
                },

                {   
                    "id" : "post1",
                    "img" : "img/blog-47.jpg",
                    "label" : "Gadgets",
                    "title" : "Gadgets that make your smartphone even smarter",
                    "descr" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, corporis. Cum quisquam, temporibus delectus quas veritatis eveniet, recusandae ipsa perspiciatis ab eaque dolore eum voluptatibus id iusto maxime voluptate minus!"
                },

                {   
                    "id" : "post2",
                    "img" : "img/blog-48.jpg",
                    "label" : "Travel",
                    "title" : "20 Top-rated tourist attractions in manhattan",
                    "descr" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, corporis. Cum quisquam, temporibus delectus quas veritatis eveniet, recusandae ipsa perspiciatis ab eaque dolore eum voluptatibus id iusto maxime voluptate minus!"
                },

                {   
                    "id" : "post3",
                    "img" : "img/blog-49.jpg",
                    "label" : "Lifestyle",
                    "title" : "The best way to ride a motorcycle",
                    "descr" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, corporis. Cum quisquam, temporibus delectus quas veritatis eveniet, recusandae ipsa perspiciatis ab eaque dolore eum voluptatibus id iusto maxime voluptate minus!"
                },

                {   
                    "id" : "post4",
                    "img" : "img/blog-50.jpg",
                    "label" : "Travel",
                    "title" : "5 fun things to do at the beach",
                    "descr" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, corporis. Cum quisquam, temporibus delectus quas veritatis eveniet, recusandae ipsa perspiciatis ab eaque dolore eum voluptatibus id iusto maxime voluptate minus!"
                },

                {   
                    "id" : "post5",
                    "img" : "img/blog-51.jpg",
                    "label" : "Recipes",
                    "title" : "Amazingly fresh fruit and herb drinks for summer",
                    "descr" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, corporis. Cum quisquam, temporibus delectus quas veritatis eveniet, recusandae ipsa perspiciatis ab eaque dolore eum voluptatibus id iusto maxime voluptate minus!"
                },
            ],

            "showDescr" : false,
            "activePreview" : ""
        },

        methods: {

            showDescription: function(id) {

                this.activePreview = id;
                this.showDescr = true;
            }
        }
    })
}

function init() {

    console.log("Hello world!")
    initVue();
}

document.addEventListener("DOMContentLoaded", init);