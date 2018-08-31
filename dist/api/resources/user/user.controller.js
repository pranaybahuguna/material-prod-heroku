"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user = require("./user.service");

var _user2 = _interopRequireDefault(_user);

var _user3 = require("./user.model");

var _user4 = _interopRequireDefault(_user3);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _development = require("../../../config/env/development");

var _util = require("../../modules/util");

var _mail = require("../../modules/mail");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  signup: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _userService$validate, value, error, existingUser, user, salt, hash;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _userService$validate = _user2.default.validateSignupSchema(req.body), value = _userService$validate.value, error = _userService$validate.error;

              if (error && error.details) {
                res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message);
              }
              _context.next = 5;
              return _user4.default.findOne({ "local.email": value.email });

            case 5:
              existingUser = _context.sent;

              if (existingUser) {
                res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: "Account Exists" });
              }
              _context.next = 9;
              return new _user4.default();

            case 9:
              user = _context.sent;

              user.local.email = value.email;
              user.local.name = value.name;
              _context.next = 14;
              return _bcryptjs2.default.genSalt();

            case 14:
              salt = _context.sent;
              _context.next = 17;
              return _bcryptjs2.default.hash(value.password, salt);

            case 17:
              hash = _context.sent;

              user.local.password = hash;
              _context.next = 21;
              return user.save();

            case 21:
              return _context.abrupt("return", res.json({
                success: true,
                message: "user created successfully"
              }));

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_context.t0.message));

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 24]]);
    }));

    function signup(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return signup;
  }(),
  login: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var _userService$validate2, value, error, user, matched;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _userService$validate2 = _user2.default.validateLoginSchema(req.body), value = _userService$validate2.value, error = _userService$validate2.error;

              if (!(error && error.details)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message));

            case 4:
              _context2.next = 6;
              return _user4.default.findOne({ "local.email": value.email });

            case 6:
              user = _context2.sent;

              if (user) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: "invalid email or password" }));

            case 9:
              _context2.next = 11;
              return _bcryptjs2.default.compare(value.password, user.local.password);

            case 11:
              matched = _context2.sent;

              if (matched) {
                _context2.next = 14;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.UNAUTHORIZED).json({ err: "invalid credentials" }));

            case 14:
              _jsonwebtoken2.default.sign({ id: user._id }, _development.devConfig.secret, { expiresIn: "1d" }, function (err, token) {
                return res.json({ success: true, token: token });
              });
              _context2.next = 20;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR, _context2.t0.message));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 17]]);
    }));

    function login(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return login;
  }(),
  test: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", res.json(req.user));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function test(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return test;
  }(),
  forgotPassword: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var _userService$validate3, value, error, criteria, user, token, resetLink, sanitizedUser, results;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _userService$validate3 = _user2.default.validateForgotSchema(req.body), value = _userService$validate3.value, error = _userService$validate3.error;

              if (!(error && error.details)) {
                _context4.next = 4;
                break;
              }

              return _context4.abrupt("return", res.status(BAD_REQUEST).json(error));

            case 4:
              criteria = {
                $or: [{ "google.email": value.email }, { "github.email": value.email }, { "twitter.email": value.email }, { "local.email": value.email }]
              };
              _context4.next = 7;
              return _user4.default.findOne(criteria);

            case 7:
              user = _context4.sent;

              if (user) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt("return", res.status(NOT_FOUND).json({ err: "could not find user" }));

            case 10:
              token = (0, _util.getJWTToken)({ id: user._id });
              resetLink = "\n       <h4> Please click on the link to reset the password </h4>\n       <a href ='" + _development.devConfig.frontendURL + "/reset-password/" + token + "'>Reset Password</a>\n      ";
              sanitizedUser = _user2.default.getUser(user);
              _context4.next = 15;
              return (0, _mail.sendEmail)({
                html: resetLink,
                subject: "Forgot Password",
                email: sanitizedUser.email
              });

            case 15:
              results = _context4.sent;
              return _context4.abrupt("return", res.json(results));

            case 19:
              _context4.prev = 19;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR, _context4.t0.message));

            case 22:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 19]]);
    }));

    function forgotPassword(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return forgotPassword;
  }(),
  resetPassword: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
      var password, user, sanitizedUser, hash;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              password = req.body.password;

              if (password) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return", res.status(BAD_REQUEST).json({ err: "password is required" }));

            case 4:
              _context5.next = 6;
              return _user4.default.findById(req.currentUser._id);

            case 6:
              user = _context5.sent;
              sanitizedUser = _user2.default.getUser(user);

              if (!user.local.email) {
                user.local.email = sanitizedUser.email;
                user.local.name = sanitizedUser.name;
              }
              _context5.next = 11;
              return (0, _util.getEncryptedPassword)(password);

            case 11:
              hash = _context5.sent;

              user.local.password = hash;
              _context5.next = 15;
              return user.save();

            case 15:
              return _context5.abrupt("return", res.json({ success: true }));

            case 18:
              _context5.prev = 18;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR, _context5.t0.message));

            case 21:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[0, 18]]);
    }));

    function resetPassword(_x9, _x10) {
      return _ref5.apply(this, arguments);
    }

    return resetPassword;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGVTaWdudXBTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwibWVzc2FnZSIsIlVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJleGlzdGluZ1VzZXIiLCJlcnIiLCJ1c2VyIiwibG9jYWwiLCJuYW1lIiwiYmNyeXB0anMiLCJnZW5TYWx0Iiwic2FsdCIsImhhc2giLCJwYXNzd29yZCIsInNhdmUiLCJzdWNjZXNzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwibG9naW4iLCJ2YWxpZGF0ZUxvZ2luU2NoZW1hIiwiY29tcGFyZSIsIm1hdGNoZWQiLCJVTkFVVEhPUklaRUQiLCJqd3QiLCJzaWduIiwiaWQiLCJfaWQiLCJkZXZDb25maWciLCJzZWNyZXQiLCJleHBpcmVzSW4iLCJ0b2tlbiIsInRlc3QiLCJmb3Jnb3RQYXNzd29yZCIsInZhbGlkYXRlRm9yZ290U2NoZW1hIiwiY3JpdGVyaWEiLCIkb3IiLCJOT1RfRk9VTkQiLCJyZXNldExpbmsiLCJmcm9udGVuZFVSTCIsInNhbml0aXplZFVzZXIiLCJnZXRVc2VyIiwiaHRtbCIsInN1YmplY3QiLCJyZXN1bHRzIiwicmVzZXRQYXNzd29yZCIsImZpbmRCeUlkIiwiY3VycmVudFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O2tCQUVlO0FBQ1BBLFFBRE87QUFBQSx5R0FDQUMsR0FEQSxFQUNLQyxHQURMO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUdnQkMsZUFBWUMsb0JB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c2VyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlclNlcnZpY2UgZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCBIdHRwU3RhdHVzIGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xyXG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9jb25maWcvZW52L2RldmVsb3BtZW50XCI7XHJcbmltcG9ydCB7IGdldEpXVFRva2VuLCBnZXRFbmNyeXB0ZWRQYXNzd29yZCB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3V0aWxcIjtcclxuaW1wb3J0IHsgc2VuZEVtYWlsIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvbWFpbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGFzeW5jIHNpZ251cChyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRlU2lnbnVwU2NoZW1hKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgICByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgXCJsb2NhbC5lbWFpbFwiOiB2YWx1ZS5lbWFpbCB9KTtcclxuICAgICAgaWYgKGV4aXN0aW5nVXNlcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbih7IGVycjogXCJBY2NvdW50IEV4aXN0c1wiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBuZXcgVXNlcigpO1xyXG4gICAgICB1c2VyLmxvY2FsLmVtYWlsID0gdmFsdWUuZW1haWw7XHJcbiAgICAgIHVzZXIubG9jYWwubmFtZSA9IHZhbHVlLm5hbWU7XHJcbiAgICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHRqcy5nZW5TYWx0KCk7XHJcbiAgICAgIGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHRqcy5oYXNoKHZhbHVlLnBhc3N3b3JkLCBzYWx0KTtcclxuICAgICAgdXNlci5sb2NhbC5wYXNzd29yZCA9IGhhc2g7XHJcbiAgICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgbWVzc2FnZTogXCJ1c2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCJcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgbG9naW4ocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZUxvZ2luU2NoZW1hKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBcImxvY2FsLmVtYWlsXCI6IHZhbHVlLmVtYWlsIH0pO1xyXG4gICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpXHJcbiAgICAgICAgICAuanNvbih7IGVycjogXCJpbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkXCIgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWF0Y2hlZCA9IGF3YWl0IGJjcnlwdGpzLmNvbXBhcmUoXHJcbiAgICAgICAgdmFsdWUucGFzc3dvcmQsXHJcbiAgICAgICAgdXNlci5sb2NhbC5wYXNzd29yZFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIW1hdGNoZWQpIHtcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuVU5BVVRIT1JJWkVEKVxyXG4gICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52YWxpZCBjcmVkZW50aWFsc1wiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGp3dC5zaWduKFxyXG4gICAgICAgIHsgaWQ6IHVzZXIuX2lkIH0sXHJcbiAgICAgICAgZGV2Q29uZmlnLnNlY3JldCxcclxuICAgICAgICB7IGV4cGlyZXNJbjogXCIxZFwiIH0sXHJcbiAgICAgICAgZnVuY3Rpb24oZXJyLCB0b2tlbikge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdG9rZW4gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXNcclxuICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKVxyXG4gICAgICAgIC5qc29uKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhc3luYyB0ZXN0KHJlcSwgcmVzKSB7XHJcbiAgICByZXR1cm4gcmVzLmpzb24ocmVxLnVzZXIpO1xyXG4gIH0sXHJcbiAgYXN5bmMgZm9yZ290UGFzc3dvcmQocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZUZvcmdvdFNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGNyaXRlcmlhID0ge1xyXG4gICAgICAgICRvcjogW1xyXG4gICAgICAgICAgeyBcImdvb2dsZS5lbWFpbFwiOiB2YWx1ZS5lbWFpbCB9LFxyXG4gICAgICAgICAgeyBcImdpdGh1Yi5lbWFpbFwiOiB2YWx1ZS5lbWFpbCB9LFxyXG4gICAgICAgICAgeyBcInR3aXR0ZXIuZW1haWxcIjogdmFsdWUuZW1haWwgfSxcclxuICAgICAgICAgIHsgXCJsb2NhbC5lbWFpbFwiOiB2YWx1ZS5lbWFpbCB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKGNyaXRlcmlhKTtcclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoTk9UX0ZPVU5EKS5qc29uKHsgZXJyOiBcImNvdWxkIG5vdCBmaW5kIHVzZXJcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0b2tlbiA9IGdldEpXVFRva2VuKHsgaWQ6IHVzZXIuX2lkIH0pO1xyXG5cclxuICAgICAgY29uc3QgcmVzZXRMaW5rID0gYFxyXG4gICAgICAgPGg0PiBQbGVhc2UgY2xpY2sgb24gdGhlIGxpbmsgdG8gcmVzZXQgdGhlIHBhc3N3b3JkIDwvaDQ+XHJcbiAgICAgICA8YSBocmVmID0nJHtcclxuICAgICAgICAgZGV2Q29uZmlnLmZyb250ZW5kVVJMXHJcbiAgICAgICB9L3Jlc2V0LXBhc3N3b3JkLyR7dG9rZW59Jz5SZXNldCBQYXNzd29yZDwvYT5cclxuICAgICAgYDtcclxuICAgICAgY29uc3Qgc2FuaXRpemVkVXNlciA9IHVzZXJTZXJ2aWNlLmdldFVzZXIodXNlcik7XHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBzZW5kRW1haWwoe1xyXG4gICAgICAgIGh0bWw6IHJlc2V0TGluayxcclxuICAgICAgICBzdWJqZWN0OiBcIkZvcmdvdCBQYXNzd29yZFwiLFxyXG4gICAgICAgIGVtYWlsOiBzYW5pdGl6ZWRVc2VyLmVtYWlsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24ocmVzdWx0cyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpXHJcbiAgICAgICAgLmpzb24oSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIHJlc2V0UGFzc3dvcmQocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gICAgICBpZiAoIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoQkFEX1JFUVVFU1QpLmpzb24oeyBlcnI6IFwicGFzc3dvcmQgaXMgcmVxdWlyZWRcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChyZXEuY3VycmVudFVzZXIuX2lkKTtcclxuICAgICAgY29uc3Qgc2FuaXRpemVkVXNlciA9IHVzZXJTZXJ2aWNlLmdldFVzZXIodXNlcik7XHJcbiAgICAgIGlmICghdXNlci5sb2NhbC5lbWFpbCkge1xyXG4gICAgICAgIHVzZXIubG9jYWwuZW1haWwgPSBzYW5pdGl6ZWRVc2VyLmVtYWlsO1xyXG4gICAgICAgIHVzZXIubG9jYWwubmFtZSA9IHNhbml0aXplZFVzZXIubmFtZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoYXNoID0gYXdhaXQgZ2V0RW5jcnlwdGVkUGFzc3dvcmQocGFzc3dvcmQpO1xyXG4gICAgICB1c2VyLmxvY2FsLnBhc3N3b3JkID0gaGFzaDtcclxuICAgICAgYXdhaXQgdXNlci5zYXZlKCk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpXHJcbiAgICAgICAgLmpzb24oSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==