exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 1140:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "button_btn__67w_R"
};


/***/ }),

/***/ 7591:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "event-item_item__3OJ6o",
	"event_img": "event-item_event_img__cO4MV",
	"content": "event-item_content__2adw1",
	"date": "event-item_date__z6_XG",
	"address": "event-item_address__wNuum",
	"actions": "event-item_actions__IK6pT",
	"icon": "event-item_icon__S4J1f"
};


/***/ }),

/***/ 5955:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "event-list_list__NcHE5"
};


/***/ }),

/***/ 2573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ events_EventList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/event-item.module.css
var event_item_module = __webpack_require__(7591);
var event_item_module_default = /*#__PURE__*/__webpack_require__.n(event_item_module);
// EXTERNAL MODULE: ./components/icons/DateIcon.js
var DateIcon = __webpack_require__(8346);
// EXTERNAL MODULE: ./components/icons/AddressIcon.js
var AddressIcon = __webpack_require__(2369);
;// CONCATENATED MODULE: ./components/icons/ArrowIcon.js


function ArrowIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-6 h-6",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        })
    });
}
/* harmony default export */ const icons_ArrowIcon = (ArrowIcon);

// EXTERNAL MODULE: ./components/ui/button.js
var ui_button = __webpack_require__(5368);
;// CONCATENATED MODULE: ./components/events/EventItem.js







function EventItem({ title , date , image , address , id  }) {
    const readableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric"
    });
    const formattedAddress = address.replace(", ", "\n");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (event_item_module_default()).item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: `/${image}`,
                className: (event_item_module_default()).event_img,
                alt: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (event_item_module_default()).content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (event_item_module_default()).summary,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (event_item_module_default()).date,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(DateIcon/* default */.Z, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                        children: readableDate
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (event_item_module_default()).address,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(AddressIcon/* default */.Z, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("address", {
                                        children: formattedAddress
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (event_item_module_default()).actions,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* default */.Z, {
                            link: `/events/${id}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Explore Events"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (event_item_module_default()).icon,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons_ArrowIcon, {})
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const events_EventItem = (EventItem);

// EXTERNAL MODULE: ./styles/event-list.module.css
var event_list_module = __webpack_require__(5955);
var event_list_module_default = /*#__PURE__*/__webpack_require__.n(event_list_module);
;// CONCATENATED MODULE: ./components/events/EventList.js




function EventList({ items  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (event_list_module_default()).list,
        children: items.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(events_EventItem, {
                id: item.id,
                title: item.title,
                image: item.image,
                address: item.address,
                date: item.date
            }, item.id);
        })
    });
}
/* harmony default export */ const events_EventList = (EventList);


/***/ }),

/***/ 5368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1140);
/* harmony import */ var _styles_button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_button_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




function Button({ children , link , onClick  }) {
    if (!link) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_styles_button_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn),
            onClick: onClick,
            children: children
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: link,
            className: (_styles_button_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn),
            children: children
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;