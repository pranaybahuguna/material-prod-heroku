"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEncryptedPassword = exports.getJWTToken = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _development = require("../../config/env/development");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getJWTToken = exports.getJWTToken = function getJWTToken(payload) {
  var token = _jsonwebtoken2.default.sign(payload, _development.devConfig.secret, {
    expiresIn: "1d"
  });
  return token;
};
var getEncryptedPassword = exports.getEncryptedPassword = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(password) {
    var salt, hash;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bcryptjs2.default.genSalt();

          case 2:
            salt = _context.sent;
            _context.next = 5;
            return _bcryptjs2.default.hash(password, salt);

          case 5:
            hash = _context.sent;
            return _context.abrupt("return", hash);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getEncryptedPassword(_x) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kdWxlcy91dGlsLmpzIl0sIm5hbWVzIjpbImdldEpXVFRva2VuIiwidG9rZW4iLCJqd3QiLCJzaWduIiwicGF5bG9hZCIsImRldkNvbmZpZyIsInNlY3JldCIsImV4cGlyZXNJbiIsImdldEVuY3J5cHRlZFBhc3N3b3JkIiwicGFzc3dvcmQiLCJiY3J5cHRqcyIsImdlblNhbHQiLCJzYWx0IiwiaGFzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRU8sSUFBTUEsb0NBQWMsU0FBZEEsV0FBYyxVQUFXO0FBQ3BDLE1BQU1DLFFBQVFDLHVCQUFJQyxJQUFKLENBQVNDLE9BQVQsRUFBa0JDLHVCQUFVQyxNQUE1QixFQUFvQztBQUNoREMsZUFBVztBQURxQyxHQUFwQyxDQUFkO0FBR0EsU0FBT04sS0FBUDtBQUNELENBTE07QUFNQSxJQUFNTztBQUFBLHNGQUF1QixpQkFBTUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNmQyxtQkFBU0MsT0FBVCxFQURlOztBQUFBO0FBQzVCQyxnQkFENEI7QUFBQTtBQUFBLG1CQUVmRixtQkFBU0csSUFBVCxDQUFjSixRQUFkLEVBQXdCRyxJQUF4QixDQUZlOztBQUFBO0FBRTVCQyxnQkFGNEI7QUFBQSw2Q0FHM0JBLElBSDJCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU4iLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWcvZW52L2RldmVsb3BtZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SldUVG9rZW4gPSBwYXlsb2FkID0+IHtcclxuICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHBheWxvYWQsIGRldkNvbmZpZy5zZWNyZXQsIHtcclxuICAgIGV4cGlyZXNJbjogXCIxZFwiXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHRva2VuO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0RW5jcnlwdGVkUGFzc3dvcmQgPSBhc3luYyBwYXNzd29yZCA9PiB7XHJcbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdGpzLmdlblNhbHQoKTtcclxuICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0anMuaGFzaChwYXNzd29yZCwgc2FsdCk7XHJcbiAgcmV0dXJuIGhhc2g7XHJcbn07XHJcbiJdfQ==