"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"abi\": function() { return /* binding */ abi; },\n/* harmony export */   \"WHITELIST_CONTRACT_ADDRESS\": function() { return /* binding */ WHITELIST_CONTRACT_ADDRESS; }\n/* harmony export */ });\nvar abi = [\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"uint8\",\n                \"name\": \"_maxWhitelistedAddresses\",\n                \"type\": \"uint8\"\n            }\n        ],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"constructor\"\n    },\n    {\n        \"inputs\": [],\n        \"name\": \"addAddressToWhitelist\",\n        \"outputs\": [],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [],\n        \"name\": \"maxWhitelistedAddresses\",\n        \"outputs\": [\n            {\n                \"internalType\": \"uint8\",\n                \"name\": \"\",\n                \"type\": \"uint8\"\n            }\n        ],\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [],\n        \"name\": \"numAddressesWhitelisted\",\n        \"outputs\": [\n            {\n                \"internalType\": \"uint8\",\n                \"name\": \"\",\n                \"type\": \"uint8\"\n            }\n        ],\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"address\",\n                \"name\": \"\",\n                \"type\": \"address\"\n            }\n        ],\n        \"name\": \"whitelistedAddresses\",\n        \"outputs\": [\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"\",\n                \"type\": \"bool\"\n            }\n        ],\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    }\n];\nvar WHITELIST_CONTRACT_ADDRESS = \"0xDEF4F942553937CD99b2ea4e4615CC84EC7Ea058\";\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxHQUFLLENBQUNBLEdBQUcsR0FBSSxDQUFDO0lBQ2pCLENBQUM7UUFDQyxDQUFRLFNBQUUsQ0FBQztZQUNULENBQUM7Z0JBQ0MsQ0FBYyxlQUFFLENBQU87Z0JBQ3ZCLENBQU0sT0FBRSxDQUEwQjtnQkFDbEMsQ0FBTSxPQUFFLENBQU87WUFDakIsQ0FBQztRQUNILENBQUM7UUFDRCxDQUFpQixrQkFBRSxDQUFZO1FBQy9CLENBQU0sT0FBRSxDQUFhO0lBQ3ZCLENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBUSxTQUFFLENBQUMsQ0FBQztRQUNaLENBQU0sT0FBRSxDQUF1QjtRQUMvQixDQUFTLFVBQUUsQ0FBQyxDQUFDO1FBQ2IsQ0FBaUIsa0JBQUUsQ0FBWTtRQUMvQixDQUFNLE9BQUUsQ0FBVTtJQUNwQixDQUFDO0lBQ0QsQ0FBQztRQUNDLENBQVEsU0FBRSxDQUFDLENBQUM7UUFDWixDQUFNLE9BQUUsQ0FBeUI7UUFDakMsQ0FBUyxVQUFFLENBQUM7WUFDVixDQUFDO2dCQUNDLENBQWMsZUFBRSxDQUFPO2dCQUN2QixDQUFNLE9BQUUsQ0FBRTtnQkFDVixDQUFNLE9BQUUsQ0FBTztZQUNqQixDQUFDO1FBQ0gsQ0FBQztRQUNELENBQWlCLGtCQUFFLENBQU07UUFDekIsQ0FBTSxPQUFFLENBQVU7SUFDcEIsQ0FBQztJQUNELENBQUM7UUFDQyxDQUFRLFNBQUUsQ0FBQyxDQUFDO1FBQ1osQ0FBTSxPQUFFLENBQXlCO1FBQ2pDLENBQVMsVUFBRSxDQUFDO1lBQ1YsQ0FBQztnQkFDQyxDQUFjLGVBQUUsQ0FBTztnQkFDdkIsQ0FBTSxPQUFFLENBQUU7Z0JBQ1YsQ0FBTSxPQUFFLENBQU87WUFDakIsQ0FBQztRQUNILENBQUM7UUFDRCxDQUFpQixrQkFBRSxDQUFNO1FBQ3pCLENBQU0sT0FBRSxDQUFVO0lBQ3BCLENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBUSxTQUFFLENBQUM7WUFDVCxDQUFDO2dCQUNDLENBQWMsZUFBRSxDQUFTO2dCQUN6QixDQUFNLE9BQUUsQ0FBRTtnQkFDVixDQUFNLE9BQUUsQ0FBUztZQUNuQixDQUFDO1FBQ0gsQ0FBQztRQUNELENBQU0sT0FBRSxDQUFzQjtRQUM5QixDQUFTLFVBQUUsQ0FBQztZQUNWLENBQUM7Z0JBQ0MsQ0FBYyxlQUFFLENBQU07Z0JBQ3RCLENBQU0sT0FBRSxDQUFFO2dCQUNWLENBQU0sT0FBRSxDQUFNO1lBQ2hCLENBQUM7UUFDSCxDQUFDO1FBQ0QsQ0FBaUIsa0JBQUUsQ0FBTTtRQUN6QixDQUFNLE9BQUUsQ0FBVTtJQUNwQixDQUFDO0FBQ0gsQ0FBQztBQUVJLEdBQUssQ0FBQ0MsMEJBQTBCLEdBQUcsQ0FBNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2luZGV4LmpzPzM3MzciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFiaSA9ICBbXG4gICAge1xuICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50OFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIl9tYXhXaGl0ZWxpc3RlZEFkZHJlc3Nlc1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQ4XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY29uc3RydWN0b3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpbnB1dHNcIjogW10sXG4gICAgICBcIm5hbWVcIjogXCJhZGRBZGRyZXNzVG9XaGl0ZWxpc3RcIixcbiAgICAgIFwib3V0cHV0c1wiOiBbXSxcbiAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpbnB1dHNcIjogW10sXG4gICAgICBcIm5hbWVcIjogXCJtYXhXaGl0ZWxpc3RlZEFkZHJlc3Nlc1wiLFxuICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJ1aW50OFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcbiAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaW5wdXRzXCI6IFtdLFxuICAgICAgXCJuYW1lXCI6IFwibnVtQWRkcmVzc2VzV2hpdGVsaXN0ZWRcIixcbiAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQ4XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwidWludDhcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXG4gICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIndoaXRlbGlzdGVkQWRkcmVzc2VzXCIsXG4gICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcbiAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgICB9XG4gIF1cblxuZXhwb3J0IGNvbnN0IFdISVRFTElTVF9DT05UUkFDVF9BRERSRVNTID0gXCIweERFRjRGOTQyNTUzOTM3Q0Q5OWIyZWE0ZTQ2MTVDQzg0RUM3RWEwNThcIjsiXSwibmFtZXMiOlsiYWJpIiwiV0hJVEVMSVNUX0NPTlRSQUNUX0FERFJFU1MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/index.js\n");

/***/ })

});