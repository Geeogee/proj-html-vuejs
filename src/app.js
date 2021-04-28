
function initVue() {

    new Vue({

        el: "#app",
        data: {

            "navbarLinks" : [

                // lavorare con oggetti
                // esempio:
                // {

                //     "name" : "Home",
                //     "url" : "#",
                //     "title" : "alt",
                //     "dropdown" : [
                //         {
                //             "dropdown1" : "testo"
                //         }
                //     ]
                // }

                // "Elements",
                // "Features",
                // "Pages",
                // "Portfolio",
                // "Blog",
                // "Shop"

                {
                    "name" : "Home",
                    "url" : "#",
                    "hasDropdown" : true,
                    "dropdownType" : "small",
                    "dropdown" : [

                        {
                            "name" : "Landing Page",
                            "url" : "#",
                            "hasDropdown" : false
                        },

                        {
                            "name" : "Demos",
                            "url" : "#",
                            "hasDropdown" : false
                        },

                        {
                            "name" : "Classic",
                            "url" : "#",
                            "hasDropdown" : true,
                            "dropdown" : [

                                {
                                    "name" : "Classic 1",
                                    "url" : "#",
                                    "hasDropdown" : false

                                },

                                {
                                    "name" : "Classic 2",
                                    "url" : "#",
                                    "hasDropdown" : false
                                },
                                {

                                    "name" : "Classic 3",
                                    "url" : "#",
                                    "hasDropdown" : false
                                }
                            ]
                        }
                    ]
                },

                {

                    "name" : "Elements",
                    "url" : "#",
                    "hasDropdown" : true,
                    "dropdownType" : "big",
                    "dropdown" : [

                        {
                            "name" : "Elements1",
                            "url" : "",
                            "hasDropdown" : true,
                            "dropdown" : [

                                {
                                    "name" : "Accordions",
                                    "url" : "#",
                                    "hasDropdown" : false
                                },

                                {
                                    "name" : "Toggles",
                                    "url" : "#",
                                    "hasDropdown" : false
                                },

                                {
                                    "name" : "Tabs",
                                    "url" : "#",
                                    "hasDropdown" : false
                                }
                            ]
                        },
                        {
                            "name" : "Elements2",
                            "url" : "",
                            "hasDropdown" : true,
                            "dropdown" : [

                                {
                                    "name" : "Buttons",
                                    "url" : "#",
                                    "hasDropdown" : false
                                },

                                {
                                    "name" : "Badges",
                                    "url" : "#",
                                    "hasDropdown" : false
                                },

                                {
                                    "name" : "Lists",
                                    "url" : "#",
                                    "hasDropdown" : false
                                }
                            ]
                        },

                        {
                            "name" : "Elements3",
                            "url" : "",
                            "hasDropdown" : true,
                            "dropdown" : [

                                {
                                    "name" : "Typography",
                                    "url" : "#",
                                    "hasDropdown" : false
                                },

                                {
                                    "name" : "Call to actions",
                                    "url" : "#",
                                    "hasDropdown" : false
                                },

                                {
                                    "name" : "Pricing Tables",
                                    "url" : "#",
                                    "hasDropdown" : false
                                }
                            ]
                        },

                        {
                            "name" : "Elements4",
                            "url" : "",
                            "hasDropdown" : true,
                            "dropdown" : [

                                {
                                    "name" : "Headings",
                                    "url" : "#",
                                    "hasDropdown" : false
                                },

                                {
                                    "name" : "Dividers",
                                    "url" : "#",
                                    "hasDropdown" : false
                                },

                                {
                                    "name" : "Animations",
                                    "url" : "#",
                                    "hasDropdown" : false
                                }
                            ]
                        }
                    ]
                },

                {

                    "name" : "Features",
                    "url" : "#",
                    "hasDropdown" : true,
                    "dropdownType" : "small",
                    "dropdown" : [

                        {
                            "name" : "Headers",
                            "url" : "#",
                            "hasDropdown" : true,
                            "dropdown" : [

                                {
                                    "name" : "Overview",
                                    "url" : "#",
                                    "hasDropdown" : true,
                                    "dropdown" : [

                                        {
                                            "name" : "Overview1",
                                            "url" : "#",
                                            "hasDropdown" : false
                                        }
                                    ]
                                }
                            ]
                        },

                        {

                            "name" : "Navigations",
                            "url" : "#",
                            "hasDropdown" : true,
                            "dropdown" : [

                                {
                                    "name" : "Navigation1",
                                    "url" : "#",
                                    "hasDropdown" : false
                                }
                            ]
                        }
                    ]
                }

            ],
            // End Navbar

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

            "popularPosts" : [

                {
                    "id" : "popular0",
                    "icon" : "img/blog-55.jpg",
                    "title" : "Simple Ways to Have a Pretty Face",
                    "date" : "January 12, 2019"
                },

                {
                    "id" : "popular1",
                    "icon" : "img/blog-56.jpg",
                    "title" : "Ranking the greates players in basketball",
                    "date" : "January 12, 2019"
                },

                {
                    "id" : "popular2",
                    "icon" : "img/blog-57.jpg",
                    "title" : "4 ways to Look Cool in Glasses",
                    "date" : "January 12, 2019"
                },

                {
                    "id" : "popular3",
                    "icon" : "img/blog-58.jpg",
                    "title" : "Top Camper Trailer Towing Tips",
                    "date" : "January 12, 2019"
                },

                {
                    "id" : "popular4",
                    "icon" : "img/blog-59.jpg",
                    "title" : "5 Lovely Walks in New York",
                    "date" : "January 12, 2019"
                }
            ],

            "recentPosts" : [

                {
                    "id" : "recent0",
                    "icon" : "img/blog-65.jpg",
                    "title" : "Main Reasons To Stop Texting And Driving",
                    "date" : "January 12, 2019"
                },

                {
                    "id" : "recent1",
                    "icon" : "img/blog-66 (1).jpg",
                    "title" : "Tips To Help You Quickly Prepare your lunch",
                    "date" : "January 12, 2019"
                },

                {
                    "id" : "recent2",
                    "icon" : "img/blog-67.jpg",
                    "title" : "Why should I buy a smartwatch?",
                    "date" : "January 12, 2019"
                },

                {
                    "id" : "recent3",
                    "icon" : "img/blog-68.jpg",
                    "title" : "The best augmented reality smartglasses",
                    "date" : "January 12, 2019"
                },

                {
                    "id" : "recent4",
                    "icon" : "img/blog-69.jpg",
                    "title" : "12 Healties Foods to eat for breakfast",
                    "date" : "January 12, 2019"
                }
            ],

            "slider" : [
                {
                    "id" : "slider0",
                    "img" : "img/blog-65 (1).jpg",
                    "label" : "technology",
                    "title" : "Main reasons to stop texting and driving",
                    "descr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },

                {
                    "id" : "slider1",
                    "img" : "img/blog-66.jpg",
                    "label" : "recipes",
                    "title" : "Tips to help you quickly prepare your lunch",
                    "descr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }, 

                {
                    "id" : "slider2",
                    "img" : "img/blog-67 (1).jpg",
                    "label" : "gadgets",
                    "title" : "Why should I buy a smartwatch?",
                    "descr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
            ],

            "featAuthor" : {

                "name" : "John Doe",
                "icon" : "img/avatar.jpg",
                "descr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pelle, consectetur adipiscing elit. "
            },

            "categories" : [
                "Gadgets",
                "Photography",
                "Lifestyle",
                "Fashion",
                "Recipes",
                "Travel",
                "Business",
                "Architecture",
                "Reviews",
                "Sports",
                "Videos",
                "Technology",
                "Design"
            ],
                
            "showDescr" : false,
            "activePreview" : "",
            "activeImageSlider" : 0
        },

        methods: {

            showDescription: function(id) {

                this.activePreview = id;
                this.showDescr = true;
            },

            nextImage: function() {

                const max = this.slider.length - 1;
                (this.activeImageSlider == max) ? this.activeImageSlider = 0 : this.activeImageSlider++
            },

            scrollLeft: function() {

                let content = document.querySelector("#carousel > .container");
                let boxWidth = document.querySelector(".category").clientWidth;
                content.scrollLeft -= boxWidth + 19;
            },

            scrollRight: function() {

                let content = document.querySelector("#carousel > .container");
                let boxWidth = document.querySelector(".category").clientWidth;
                content.scrollLeft += boxWidth + 20;
            }
        },

        mounted: function() {

            setInterval(this.nextImage, 2000);
        }
    })
}

function init() {

    console.log("Hello world!")
    initVue();
}

document.addEventListener("DOMContentLoaded", init);