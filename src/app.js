const { tsMethodSignature } = require("@babel/types");

function initVue() {

    new Vue({

        el: "#app",
        data: {


            "navbarLinks" : [

                {
                    "name" : "Home",
                    "url" : "#",
                    "hasDropdown" : true,
                    "dropdownOpen" : false,
                    "dropdownType" : "small" ,
                    "dropdown" : [

                        {
                            "name" : "Landing Page",
                            "url" : "#"
                        },

                        {
                            "name" : "Demos",
                            "url" : "#"
                        },

                        {
                            "name" : "Classic",
                            "url" : "#"
                        }
                    ]
                },

                {
                    "name" : "Elements",
                    "url" : "#",
                    "hasDropdown" : true,
                    "dropdownOpen" : false,
                    "dropdownType" : "big",
                    "dropdown" : [

                        {
                            "name" : "Elements1",
                            "url" : "#"
                        },

                        {
                            "name" : "Elements2",
                            "url" : "#"
                        },

                        {
                            "name" : "Elements3",
                            "url" : "#"
                        },

                        {
                            "name" : "Elements4",
                            "url" : "#"
                        }
                    ]
                },

                {
                    "name" : "Features",
                    "url" : "#",
                    "hasDropdown" : true,
                    "dropdownOpen" : false,
                    "dropdownType" : "small",
                    "dropdown" : [

                        {
                            "name" : "Features1",
                            "url" : "#"
                        },

                        {
                            "name" : "Features2",
                            "url" : "#"
                        },

                        {
                            "name" : "Features3",
                            "url" : "#"
                        }
                    ]
                } 
            ],// End Navbar

            

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

            "allPosts" : [

                {
                    "id" : "allpost0",
                    "imgType" : "default",
                    "img" : "img/blog-54.jpg",
                    "title" : "How to Make Friends as a Grown-Up",
                    "descr" : "Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. ",
                    "date" : {
                        
                        "day" : "12",
                        "month" : "Jan"
                    },
                    "author" : "John Doe",
                    "categories" : [
                        "Lifestyle",
                        "Travel"
                    ],
                    "comments" : 12
                },

        
                {
                    "id" : "allpost1",
                    "imgType" : "default",
                    "img" : "img/blog-55 (1).jpg",
                    "title" : "Simple Ways to Have a Pretty Face",
                    "descr" : "Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. ",
                    "date" : {
                        
                        "day" : "12",
                        "month" : "Jan"
                    },
                    "author" : "John Doe",
                    "categories" : [
                        "Photograpy",
                        "Travel"
                    ],
                    "comments" : 12
                },

                {
                    "id" : "allpost2",
                    "imgType" : "default",
                    "img" : "img/blog-56 (1).jpg",
                    "title" : "Ranking the greatest players in basketball",
                    "descr" : "Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. ",
                    "date" : {
                        
                        "day" : "12",
                        "month" : "Jan"
                    },
                    "author" : "John Doe",
                    "categories" : [
                        "Sports",
                        "Business"
                    ],
                    "comments" : 12
                },

                {
                    "id" : "allpost3",
                    "imgType" : "default",
                    "img" : "img/blog-58 (1).jpg",
                    "title" : "Top Camper Trailer Towing Tips",
                    "descr" : "Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. ",
                    "date" : {
                        
                        "day" : "12",
                        "month" : "Jan"
                    },
                    "author" : "John Doe",
                    "categories" : [
                        "Travel",
                        "Lifestyle"
                    ],
                    "comments" : 12
                },

                {
                    "id" : "allpost4",
                    "imgType" : "gallery",
                    "img" : [

                       "img/blog-13.jpg",
                       "img/blog-16.jpg",
                       "img/blog-20.jpg",
                       "img/blog-23.jpg",
                       "img/blog-29.jpg",
                       "img/blog-40.jpg" 

                    ],
                    "title" : "10 Best Travel Tips After 5 Years Traveling The World",
                    "descr" : "Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. ",
                    "date" : {
                        
                        "day" : "8",
                        "month" : "Jan"
                    },
                    "author" : "John Doe",
                    "categories" : [
                        "Travel",
                        "Lifestyle"
                    ],
                    "comments" : 12
                },

            ],

            "footerAboutUs" : {

                "name" : "About the blog",
                "items" : [

                    {
                        "descr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar magna semper scelerisque."
                    },

                    {
                        "descr" : "Praesent venenatis turpis vitae purus semper, eget sagittis velit venenatis ptent taciti sociosqu ad litora..."
                    }
                ]
            },

            "footerRecentPosts" : {

                "name" : "Recent Posts",
                "items" : [
                    {
                        "id" : "footerRecent0",
                        "img" : "img/our-office-4-square.jpg",
                        "text" : "Lorem ipsum dolor sit, consectetur adipiscing elit.",
                        "date" : "12:53 AM Dec 19th"
                    },

                    {
                        "id" : "footerRecent1",
                        "img" : "img/our-office-5-square.jpg",
                        "text" : "Lorem ipsum dolor sit, consectetur adipiscing elit.",
                        "date" : "12:53 AM Dec 19th"
                    }
                ]
            },

            "footerRecentComments" : {

                "name" : "Recent comments",
                "items" : [
                    {
                        "id" : "footerComment0",
                        "author" : "John Doe",
                        "postTitle" : "Lorem ipsum dolor sit amet",
                        "url" : "#",
                        "date" : "12:53 AM Dec 19th"
                    },

                    {
                        "id" : "footerComment1",
                        "author" : "John Doe",
                        "postTitle" : "Lorem ipsum dolor sit amet",
                        "url" : "#",
                        "date" : "12:53 AM Dec 19th"
                    }
                ]
            },

            "footerCategories" : {

                "name" : "Categories",
                "items" : [
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
                ]
            },

            "showDescr" : false,
            "activePreview" : "",
            "activeImageSlider" : 0,
            "showLightbox" : false,
            "activeImage" : "",
            "activeIndex" : "",
            "activeGallery" : ""
        }, 

        methods: {

            showDropdown: function(link) {

                link.dropdownOpen = true;
            },

            closeDropdown: function(link) {

                link.dropdownOpen = false;
            },

            showDescription: function(id) {

                this.activePreview = id;
                this.showDescr = true;
            },

            openLightbox: function(image,index,gallery) {

                this.showLightbox = true;
                this.activeGallery = gallery;
                this.activeIndex = index;
                this.activeImage = image;  
            },

            closeLightbox: function() {

                this.showLightbox = false;
            },

            prevLightbox: function() {

                const max = this.activeGallery.length - 1;
                this.activeIndex--;

                if (this.activeIndex < 0) {
                    this.activeIndex = max;
                }
                
                this.activeImage = this.activeGallery[this.activeIndex];
            },

            nextLightbox: function() {

                const max = this.activeGallery.length - 1;
                this.activeIndex++;

                if (this.activeIndex > max) {
                    this.activeIndex = 0;
                }

                this.activeImage = this.activeGallery[this.activeIndex];
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

        filters: {

            commentNotification: function(post) {

                let chevron = `<i class="fas fa-chevron-right"></i>`;
                let string = `
                                <span class="text">
                                    <span class="icon">
                                        ${chevron}
                                    </span> 
                                    <span class="author">
                                        ${post.author}
                                    </span> 
                                    commented on 
                                    <a href="${post.url}">
                                        ${post.postTitle}
                                    </a>
                                    <div class="date">
                                        ${post.date}
                                    </div>
                                </span>
                            `;

                return string;
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