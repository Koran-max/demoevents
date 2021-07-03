(function() {
var exports = {};
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; },
/* harmony export */   "NEXT_URL": function() { return /* binding */ NEXT_URL; },
/* harmony export */   "PER_PAGE": function() { return /* binding */ PER_PAGE; }
/* harmony export */ });
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';
const PER_PAGE = 10;

/***/ }),

/***/ "./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user": function() { return /* binding */ user; }
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/index */ "./config/index.js");


const user = async (req, res) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({
        message: 'Not Authorized'
      });
      return;
    }

    const {
      token
    } = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie);
    const strapiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const user = await strapiRes.json();

    if (strapiRes.ok) {
      res.status(200).json({
        user
      });
    } else {
      res.status(403).json({
        message: 'User forbidden'
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({
      message: `Method ${req.method} not allowed`
    });
  }
};

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/user.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vcGFnZXMvYXBpL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kL2V4dGVybmFsIFwiY29va2llXCIiXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiTkVYVF9VUkwiLCJORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwiLCJQRVJfUEFHRSIsInVzZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJoZWFkZXJzIiwiY29va2llIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0b2tlbiIsInN0cmFwaVJlcyIsImZldGNoIiwiQXV0aG9yaXphdGlvbiIsIm9rIiwic2V0SGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsT0FBTyxHQUNsQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUFaLElBQW1DLHVCQUQ5QjtBQUdBLE1BQU1DLFFBQVEsR0FDbkJILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyx3QkFBWixJQUF3Qyx1QkFEbkM7QUFHQSxNQUFNQyxRQUFRLEdBQUcsRUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlA7QUFDQTtBQUVPLE1BQU1DLElBQUksR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDdEMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsUUFBSSxDQUFDRixHQUFHLENBQUNHLE9BQUosQ0FBWUMsTUFBakIsRUFBeUI7QUFDdkJILFNBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDRDs7QUFFRCxVQUFNO0FBQUVDO0FBQUYsUUFBWUosbURBQUEsQ0FBYUosR0FBRyxDQUFDRyxPQUFKLENBQVlDLE1BQXpCLENBQWxCO0FBRUEsVUFBTUssU0FBUyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFbEIsa0RBQVEsV0FBWixFQUF3QjtBQUNuRFUsWUFBTSxFQUFFLEtBRDJDO0FBRW5EQyxhQUFPLEVBQUU7QUFDUFEscUJBQWEsRUFBRyxVQUFTSCxLQUFNO0FBRHhCO0FBRjBDLEtBQXhCLENBQTdCO0FBT0EsVUFBTVQsSUFBSSxHQUFHLE1BQU1VLFNBQVMsQ0FBQ0gsSUFBVixFQUFuQjs7QUFFQSxRQUFJRyxTQUFTLENBQUNHLEVBQWQsRUFBa0I7QUFDaEJYLFNBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVQO0FBQUYsT0FBckI7QUFDRCxLQUZELE1BRU87QUFDTEUsU0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDRDtBQUNGLEdBdEJELE1Bc0JPO0FBQ0xOLE9BQUcsQ0FBQ1ksU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0FaLE9BQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRyxVQUFTUCxHQUFHLENBQUNFLE1BQU87QUFBaEMsS0FBckI7QUFDRDtBQUNGLENBM0JNLEM7Ozs7Ozs7Ozs7O0FDSFAsb0MiLCJmaWxlIjoicGFnZXMvYXBpL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1VSTCA9XHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3J1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FWFRfVVJMID1cclxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcclxuXHJcbmV4cG9ydCBjb25zdCBQRVJfUEFHRSA9IDEwXHJcbiIsImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnQC9jb25maWcvaW5kZXgnXHJcblxyXG5leHBvcnQgY29uc3QgdXNlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgaWYgKCFyZXEuaGVhZGVycy5jb29raWUpIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBtZXNzYWdlOiAnTm90IEF1dGhvcml6ZWQnIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUpXHJcblxyXG4gICAgY29uc3Qgc3RyYXBpUmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHN0cmFwaVJlcy5qc29uKClcclxuXHJcbiAgICBpZiAoc3RyYXBpUmVzLm9rKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdXNlciB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBtZXNzYWdlOiAnVXNlciBmb3JiaWRkZW4nIH0pXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnXSlcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYCB9KVxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=