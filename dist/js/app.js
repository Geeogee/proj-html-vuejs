/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function initVue() {
  new Vue({
    el: "#app",
    data: {
      "navbarLinks": [{
        "name": "Home",
        "url": "#",
        "hasDropdown": true,
        "dropdownType": "small",
        "dropdown": [{
          "name": "Landing Page",
          "url": "#",
          "hasDropdown": false
        }, {
          "name": "Demos",
          "url": "#",
          "hasDropdown": false
        }, {
          "name": "Classic",
          "url": "#",
          "hasDropdown": true,
          "dropdown": [{
            "name": "Classic 1",
            "url": "#",
            "hasDropdown": false
          }, {
            "name": "Classic 2",
            "url": "#",
            "hasDropdown": false
          }, {
            "name": "Classic 3",
            "url": "#",
            "hasDropdown": false
          }]
        }]
      }, {
        "name": "Elements",
        "url": "#",
        "hasDropdown": true,
        "dropdownType": "big",
        "dropdown": [{
          "name": "Elements1",
          "url": "",
          "hasDropdown": true,
          "dropdown": [{
            "name": "Accordions",
            "url": "#",
            "hasDropdown": false
          }, {
            "name": "Toggles",
            "url": "#",
            "hasDropdown": false
          }, {
            "name": "Tabs",
            "url": "#",
            "hasDropdown": false
          }]
        }, {
          "name": "Elements2",
          "url": "",
          "hasDropdown": true,
          "dropdown": [{
            "name": "Buttons",
            "url": "#",
            "hasDropdown": false
          }, {
            "name": "Badges",
            "url": "#",
            "hasDropdown": false
          }, {
            "name": "Lists",
            "url": "#",
            "hasDropdown": false
          }]
        }, {
          "name": "Elements3",
          "url": "",
          "hasDropdown": true,
          "dropdown": [{
            "name": "Typography",
            "url": "#",
            "hasDropdown": false
          }, {
            "name": "Call to actions",
            "url": "#",
            "hasDropdown": false
          }, {
            "name": "Pricing Tables",
            "url": "#",
            "hasDropdown": false
          }]
        }, {
          "name": "Elements4",
          "url": "",
          "hasDropdown": true,
          "dropdown": [{
            "name": "Headings",
            "url": "#",
            "hasDropdown": false
          }, {
            "name": "Dividers",
            "url": "#",
            "hasDropdown": false
          }, {
            "name": "Animations",
            "url": "#",
            "hasDropdown": false
          }]
        }]
      }, {
        "name": "Features",
        "url": "#",
        "hasDropdown": true,
        "dropdownType": "small",
        "dropdown": [{
          "name": "Headers",
          "url": "#",
          "hasDropdown": true,
          "dropdown": [{
            "name": "Overview",
            "url": "#",
            "hasDropdown": true,
            "dropdown": [{
              "name": "Overview1",
              "url": "#",
              "hasDropdown": false
            }]
          }]
        }, {
          "name": "Navigations",
          "url": "#",
          "hasDropdown": true,
          "dropdown": [{
            "name": "Navigation1",
            "url": "#",
            "hasDropdown": false
          }]
        }]
      }],
      // End Navbar
      "previews": [{
        "id": "post0",
        "img": "img/blog-46.jpg",
        "label": "Photography",
        "title": "How to Better Concert Pictures in 30 Seconds",
        "descr": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, corporis. Cum quisquam, temporibus delectus quas veritatis eveniet, recusandae ipsa perspiciatis ab eaque dolore eum voluptatibus id iusto maxime voluptate minus!"
      }, {
        "id": "post1",
        "img": "img/blog-47.jpg",
        "label": "Gadgets",
        "title": "Gadgets that make your smartphone even smarter",
        "descr": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, corporis. Cum quisquam, temporibus delectus quas veritatis eveniet, recusandae ipsa perspiciatis ab eaque dolore eum voluptatibus id iusto maxime voluptate minus!"
      }, {
        "id": "post2",
        "img": "img/blog-48.jpg",
        "label": "Travel",
        "title": "20 Top-rated tourist attractions in manhattan",
        "descr": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, corporis. Cum quisquam, temporibus delectus quas veritatis eveniet, recusandae ipsa perspiciatis ab eaque dolore eum voluptatibus id iusto maxime voluptate minus!"
      }, {
        "id": "post3",
        "img": "img/blog-49.jpg",
        "label": "Lifestyle",
        "title": "The best way to ride a motorcycle",
        "descr": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, corporis. Cum quisquam, temporibus delectus quas veritatis eveniet, recusandae ipsa perspiciatis ab eaque dolore eum voluptatibus id iusto maxime voluptate minus!"
      }, {
        "id": "post4",
        "img": "img/blog-50.jpg",
        "label": "Travel",
        "title": "5 fun things to do at the beach",
        "descr": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, corporis. Cum quisquam, temporibus delectus quas veritatis eveniet, recusandae ipsa perspiciatis ab eaque dolore eum voluptatibus id iusto maxime voluptate minus!"
      }, {
        "id": "post5",
        "img": "img/blog-51.jpg",
        "label": "Recipes",
        "title": "Amazingly fresh fruit and herb drinks for summer",
        "descr": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, corporis. Cum quisquam, temporibus delectus quas veritatis eveniet, recusandae ipsa perspiciatis ab eaque dolore eum voluptatibus id iusto maxime voluptate minus!"
      }],
      "popularPosts": [{
        "id": "popular0",
        "icon": "img/blog-55.jpg",
        "title": "Simple Ways to Have a Pretty Face",
        "date": "January 12, 2019"
      }, {
        "id": "popular1",
        "icon": "img/blog-56.jpg",
        "title": "Ranking the greates players in basketball",
        "date": "January 12, 2019"
      }, {
        "id": "popular2",
        "icon": "img/blog-57.jpg",
        "title": "4 ways to Look Cool in Glasses",
        "date": "January 12, 2019"
      }, {
        "id": "popular3",
        "icon": "img/blog-58.jpg",
        "title": "Top Camper Trailer Towing Tips",
        "date": "January 12, 2019"
      }, {
        "id": "popular4",
        "icon": "img/blog-59.jpg",
        "title": "5 Lovely Walks in New York",
        "date": "January 12, 2019"
      }],
      "recentPosts": [{
        "id": "recent0",
        "icon": "img/blog-65.jpg",
        "title": "Main Reasons To Stop Texting And Driving",
        "date": "January 12, 2019"
      }, {
        "id": "recent1",
        "icon": "img/blog-66 (1).jpg",
        "title": "Tips To Help You Quickly Prepare your lunch",
        "date": "January 12, 2019"
      }, {
        "id": "recent2",
        "icon": "img/blog-67.jpg",
        "title": "Why should I buy a smartwatch?",
        "date": "January 12, 2019"
      }, {
        "id": "recent3",
        "icon": "img/blog-68.jpg",
        "title": "The best augmented reality smartglasses",
        "date": "January 12, 2019"
      }, {
        "id": "recent4",
        "icon": "img/blog-69.jpg",
        "title": "12 Healties Foods to eat for breakfast",
        "date": "January 12, 2019"
      }],
      "slider": [{
        "id": "slider0",
        "img": "img/blog-65 (1).jpg",
        "label": "technology",
        "title": "Main reasons to stop texting and driving",
        "descr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }, {
        "id": "slider1",
        "img": "img/blog-66.jpg",
        "label": "recipes",
        "title": "Tips to help you quickly prepare your lunch",
        "descr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }, {
        "id": "slider2",
        "img": "img/blog-67 (1).jpg",
        "label": "gadgets",
        "title": "Why should I buy a smartwatch?",
        "descr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }],
      "featAuthor": {
        "name": "John Doe",
        "icon": "img/avatar.jpg",
        "descr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pelle, consectetur adipiscing elit. "
      },
      "categories": ["Gadgets", "Photography", "Lifestyle", "Fashion", "Recipes", "Travel", "Business", "Architecture", "Reviews", "Sports", "Videos", "Technology", "Design"],
      "allPosts": [{
        "id": "allpost0",
        "img": "img/blog-54.jpg",
        "title": "How to Make Friends as a Grown-Up",
        "descr": "Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. ",
        "date": {
          "day": "12",
          "month": "Jan"
        },
        "author": "John Doe",
        "categories": ["Lifestyle", "Travel"],
        "comments": 12
      }, {
        "id": "allpost1",
        "img": "img/blog-55 (1).jpg",
        "title": "Simple Ways to Have a Pretty Face",
        "descr": "Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. ",
        "date": {
          "day": "12",
          "month": "Jan"
        },
        "author": "John Doe",
        "categories": ["Photograpy", "Travel"],
        "comments": 12
      }, {
        "id": "allpost2",
        "img": "img/blog-56 (1).jpg",
        "title": "Ranking the greatest players in basketball",
        "descr": "Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. ",
        "date": {
          "day": "12",
          "month": "Jan"
        },
        "author": "John Doe",
        "categories": ["Sports", "Business"],
        "comments": 12
      }, {
        "id": "allpost3",
        "img": "img/blog-58 (1).jpg",
        "title": "Top Camper Trailer Towing Tips",
        "descr": "Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. ",
        "date": {
          "day": "12",
          "month": "Jan"
        },
        "author": "John Doe",
        "categories": ["Travel", "Lifestyle"],
        "comments": 12
      }, {
        "id": "allpost4",
        "img": "",
        "title": "10 Best Travel Tips After 5 Years Traveling The World",
        "descr": "Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. ",
        "date": {
          "day": "8",
          "month": "Jan"
        },
        "author": "John Doe",
        "categories": ["Travel", "Lifestyle"],
        "comments": 12
      }],
      "footer": [{
        "name": "About the Blog",
        "descr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar magna semper scelerisque."
      }, {
        "name": "Recent Posts",
        "posts": [{
          "id": "footerRecent0",
          "img": "img/our-office-4-square.jpg",
          "text": "Lorem ipsum dolor sit, consectetur adipiscing elit.",
          "date": "12:53 AM Dec 19th"
        }, {
          "id": "footerRecent1",
          "img": "img/office-5-square.jpg",
          "text": "Lorem ipsum dolor sit, consectetur adipiscing elit.",
          "date": "12:53 AM Dec 19th"
        }]
      }, {
        "name": "Recent comments",
        "comments": [{
          "id": "footerComment0",
          "author": "John Doe",
          "postTitle": "Lorem ipsum dolor sit amet",
          "date": "12:53 AM Dec 19th"
        }, {
          "id": "footerComment1",
          "author": "John Doe",
          "postTitle": "Lorem ipsum dolor sit amet",
          "date": "12:53 AM Dec 19th"
        }]
      }, {
        "name": "Categories",
        "categories": ["Gadgets", "Photography", "Lifestyle", "Fashion", "Recipes", "Travel", "Business", "Architecture", "Reviews", "Sports", "Videos", "Technology", "Design"]
      }],
      "showDescr": false,
      "activePreview": "",
      "activeImageSlider": 0
    },
    methods: {
      showDescription: function showDescription(id) {
        this.activePreview = id;
        this.showDescr = true;
      },
      nextImage: function nextImage() {
        var max = this.slider.length - 1;
        this.activeImageSlider == max ? this.activeImageSlider = 0 : this.activeImageSlider++;
      },
      scrollLeft: function scrollLeft() {
        var content = document.querySelector("#carousel > .container");
        var boxWidth = document.querySelector(".category").clientWidth;
        content.scrollLeft -= boxWidth + 19;
      },
      scrollRight: function scrollRight() {
        var content = document.querySelector("#carousel > .container");
        var boxWidth = document.querySelector(".category").clientWidth;
        content.scrollLeft += boxWidth + 20;
      }
    },
    mounted: function mounted() {
      setInterval(this.nextImage, 2000);
    }
  });
}

function init() {
  console.log("Hello world!");
  initVue();
}

document.addEventListener("DOMContentLoaded", init);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;