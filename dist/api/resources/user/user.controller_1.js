"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require("./user.service");

var _user2 = _interopRequireDefault(_user);

var _user3 = require("./user.model");

var _user4 = _interopRequireDefault(_user3);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  signup: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var _userService$validate, value, _error, user;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _userService$validate = _user2.default.validateSignupSchema(req.body), value = _userService$validate.value, _error = _userService$validate.error;

              if (!(_error && _error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(_error.message));

            case 4:
              _context.next = 6;
              return _user4.default.create(value);

            case 6:
              user = _context.sent;
              return _context.abrupt("return", res.json({ success: true, message: "user created successfully" }));

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(error.message));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 10]]);
    }));

    function signup(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return signup;
  }(),
  login: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var _userService$validate2, value, _error2, user, matched;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _userService$validate2 = _user2.default.validateSignupSchema(req.body), value = _userService$validate2.value, _error2 = _userService$validate2.error;

              if (!(_error2 && _error2.details)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(_error2.message));

            case 4:
              _context2.next = 6;
              return _user4.default.findOne({ email: value.email });

            case 6:
              user = _context2.sent;

              if (user) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: "invalid email or password" }));

            case 9:
              _context2.next = 11;
              return _bcryptjs2.default.compare(value.password, user.password);

            case 11:
              matched = _context2.sent;

              console.log(matched);

              if (matched) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.UNAUTHORIZED).json({ err: "invalid credentials" }));

            case 15:
              return _context2.abrupt("return", res.json({ success: true, message: "logged in successfully" }));

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(error.message));

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 18]]);
    }));

    function login(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return login;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyXzEuanMiXSwibmFtZXMiOlsic2lnbnVwIiwicmVxIiwicmVzIiwidXNlclNlcnZpY2UiLCJ2YWxpZGF0ZVNpZ251cFNjaGVtYSIsImJvZHkiLCJ2YWx1ZSIsImVycm9yIiwiZGV0YWlscyIsInN0YXR1cyIsIkh0dHBTdGF0dXMiLCJCQURfUkVRVUVTVCIsImpzb24iLCJtZXNzYWdlIiwiVXNlciIsImNyZWF0ZSIsInVzZXIiLCJzdWNjZXNzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwibG9naW4iLCJmaW5kT25lIiwiZW1haWwiLCJlcnIiLCJiY3J5cHRqcyIsImNvbXBhcmUiLCJwYXNzd29yZCIsIm1hdGNoZWQiLCJjb25zb2xlIiwibG9nIiwiVU5BVVRIT1JJWkVEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWU7QUFDUEEsUUFETztBQUFBLHdGQUNBQyxHQURBLEVBQ0tDLEdBREw7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBR2dCQyxlQUFZQyxvQkFBWixDQUFpQ0gsSUFBSUksSUFBckMsQ0FIaEIsRUFHREMsS0FIQyx5QkFHREEsS0FIQyxFQUdNQyxNQUhOLHlCQUdNQSxLQUhOOztBQUFBLG9CQUlMQSxVQUFTQSxPQUFNQyxPQUpWO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUtBTixJQUFJTyxNQUFKLENBQVdDLDBCQUFXQyxXQUF0QixFQUFtQ0MsSUFBbkMsQ0FBd0NMLE9BQU1NLE9BQTlDLENBTEE7O0FBQUE7QUFBQTtBQUFBLHFCQU9VQyxlQUFLQyxNQUFMLENBQVlULEtBQVosQ0FQVjs7QUFBQTtBQU9IVSxrQkFQRztBQUFBLCtDQVFGZCxJQUFJVSxJQUFKLENBQVMsRUFBRUssU0FBUyxJQUFYLEVBQWlCSixTQUFTLDJCQUExQixFQUFULENBUkU7O0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBVUZYLElBQUlPLE1BQUosQ0FBV0MsMEJBQVdRLHFCQUF0QixFQUE2Q04sSUFBN0MsQ0FBa0RMLE1BQU1NLE9BQXhELENBVkU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFhUE0sT0FiTztBQUFBLDBGQWFEbEIsR0FiQyxFQWFJQyxHQWJKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQWVnQkMsZUFBWUMsb0JBQVosQ0FBaUNILElBQUlJLElBQXJDLENBZmhCLEVBZURDLEtBZkMsMEJBZURBLEtBZkMsRUFlTUMsT0FmTiwwQkFlTUEsS0FmTjs7QUFBQSxvQkFnQkxBLFdBQVNBLFFBQU1DLE9BaEJWO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQWlCQU4sSUFBSU8sTUFBSixDQUFXQywwQkFBV0MsV0FBdEIsRUFBbUNDLElBQW5DLENBQXdDTCxRQUFNTSxPQUE5QyxDQWpCQTs7QUFBQTtBQUFBO0FBQUEscUJBbUJVQyxlQUFLTSxPQUFMLENBQWEsRUFBRUMsT0FBT2YsTUFBTWUsS0FBZixFQUFiLENBbkJWOztBQUFBO0FBbUJITCxrQkFuQkc7O0FBQUEsa0JBb0JKQSxJQXBCSTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFxQkFkLElBQ0pPLE1BREksQ0FDR0MsMEJBQVdDLFdBRGQsRUFFSkMsSUFGSSxDQUVDLEVBQUVVLEtBQUssMkJBQVAsRUFGRCxDQXJCQTs7QUFBQTtBQUFBO0FBQUEscUJBeUJhQyxtQkFBU0MsT0FBVCxDQUFpQmxCLE1BQU1tQixRQUF2QixFQUFpQ1QsS0FBS1MsUUFBdEMsQ0F6QmI7O0FBQUE7QUF5QkhDLHFCQXpCRzs7QUEwQlRDLHNCQUFRQyxHQUFSLENBQVlGLE9BQVo7O0FBMUJTLGtCQTJCSkEsT0EzQkk7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0RBNEJBeEIsSUFDSk8sTUFESSxDQUNHQywwQkFBV21CLFlBRGQsRUFFSmpCLElBRkksQ0FFQyxFQUFFVSxLQUFLLHFCQUFQLEVBRkQsQ0E1QkE7O0FBQUE7QUFBQSxnREFnQ0ZwQixJQUFJVSxJQUFKLENBQVMsRUFBRUssU0FBUyxJQUFYLEVBQWlCSixTQUFTLHdCQUExQixFQUFULENBaENFOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQWtDRlgsSUFBSU8sTUFBSixDQUFXQywwQkFBV1EscUJBQXRCLEVBQTZDTixJQUE3QyxDQUFrREwsTUFBTU0sT0FBeEQsQ0FsQ0U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6InVzZXIuY29udHJvbGxlcl8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCBIdHRwU3RhdHVzIGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xyXG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYXN5bmMgc2lnbnVwKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gdXNlclNlcnZpY2UudmFsaWRhdGVTaWdudXBTY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHZhbHVlKTtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJ1c2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhc3luYyBsb2dpbihyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRlU2lnbnVwU2NoZW1hKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogdmFsdWUuZW1haWwgfSk7XHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVClcclxuICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludmFsaWQgZW1haWwgb3IgcGFzc3dvcmRcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtYXRjaGVkID0gYXdhaXQgYmNyeXB0anMuY29tcGFyZSh2YWx1ZS5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1hdGNoZWQpO1xyXG4gICAgICBpZiAoIW1hdGNoZWQpIHtcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuVU5BVVRIT1JJWkVEKVxyXG4gICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52YWxpZCBjcmVkZW50aWFsc1wiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwibG9nZ2VkIGluIHN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIl19