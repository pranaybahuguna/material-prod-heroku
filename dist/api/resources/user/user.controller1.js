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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  signup: function signup(req, res) {
    var _userService$validate = _user2.default.validateSignupSchema(req.body),
        value = _userService$validate.value,
        error = _userService$validate.error;

    if (error && error.details) {
      res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message);
    }
    _user4.default.create(value).then(function (data) {
      res.json({
        success: true,
        message: "user created successfully"
      });
    }).catch(function (err) {
      res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err.message);
    });
  },
  login: function login(req, res) {
    var _userService$validate2 = _user2.default.validateSignupSchema(req.body),
        value = _userService$validate2.value,
        error = _userService$validate2.error;

    if (error && error.details) {
      res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message);
    }
    findOne({ email: value.email }).then(function (user) {
      if (!user) {
        res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: "invalid email or password" });
      }
      _bcryptjs2.default.compare(value.password, user.password, function (err, matched) {
        if (!matched) {
          res.status(_httpStatusCodes2.default.UNAUTHORIZED).json({ err: "invalid credentials" });
        }
        _jsonwebtoken2.default.sign({ id: user._id }, _development.devConfig.secret, { expiresIn: "1d" }, function (err, token) {
          res.json({ success: true, token: token });
        });
      });
    }).catch(function (err) {
      res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  test: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", res.json(req.user));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function test(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return test;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyMS5qcyJdLCJuYW1lcyI6WyJzaWdudXAiLCJyZXEiLCJyZXMiLCJ1c2VyU2VydmljZSIsInZhbGlkYXRlU2lnbnVwU2NoZW1hIiwiYm9keSIsInZhbHVlIiwiZXJyb3IiLCJkZXRhaWxzIiwic3RhdHVzIiwiSHR0cFN0YXR1cyIsIkJBRF9SRVFVRVNUIiwianNvbiIsIm1lc3NhZ2UiLCJVc2VyIiwiY3JlYXRlIiwidGhlbiIsInN1Y2Nlc3MiLCJjYXRjaCIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImVyciIsImxvZ2luIiwiZmluZE9uZSIsImVtYWlsIiwidXNlciIsImJjcnlwdGpzIiwiY29tcGFyZSIsInBhc3N3b3JkIiwibWF0Y2hlZCIsIlVOQVVUSE9SSVpFRCIsImp3dCIsInNpZ24iLCJpZCIsIl9pZCIsImRldkNvbmZpZyIsInNlY3JldCIsImV4cGlyZXNJbiIsInRva2VuIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7a0JBRWU7QUFDYkEsUUFEYSxrQkFDTkMsR0FETSxFQUNEQyxHQURDLEVBQ0k7QUFBQSxnQ0FDVUMsZUFBWUMsb0JBQVosQ0FBaUNILElBQUlJLElBQXJDLENBRFY7QUFBQSxRQUNQQyxLQURPLHlCQUNQQSxLQURPO0FBQUEsUUFDQUMsS0FEQSx5QkFDQUEsS0FEQTs7QUFFZixRQUFJQSxTQUFTQSxNQUFNQyxPQUFuQixFQUE0QjtBQUMxQk4sVUFBSU8sTUFBSixDQUFXQywwQkFBV0MsV0FBdEIsRUFBbUNDLElBQW5DLENBQXdDTCxNQUFNTSxPQUE5QztBQUNEO0FBQ0RDLG1CQUFLQyxNQUFMLENBQVlULEtBQVosRUFDR1UsSUFESCxDQUNRLGdCQUFRO0FBQ1pkLFVBQUlVLElBQUosQ0FBUztBQUNQSyxpQkFBUyxJQURGO0FBRVBKLGlCQUFTO0FBRkYsT0FBVDtBQUlELEtBTkgsRUFPR0ssS0FQSCxDQU9TLGVBQU87QUFDWmhCLFVBQUlPLE1BQUosQ0FBV0MsMEJBQVdTLHFCQUF0QixFQUE2Q1AsSUFBN0MsQ0FBa0RRLElBQUlQLE9BQXREO0FBQ0QsS0FUSDtBQVVELEdBaEJZO0FBaUJiUSxPQWpCYSxpQkFpQlBwQixHQWpCTyxFQWlCRkMsR0FqQkUsRUFpQkc7QUFBQSxpQ0FDV0MsZUFBWUMsb0JBQVosQ0FBaUNILElBQUlJLElBQXJDLENBRFg7QUFBQSxRQUNOQyxLQURNLDBCQUNOQSxLQURNO0FBQUEsUUFDQ0MsS0FERCwwQkFDQ0EsS0FERDs7QUFFZCxRQUFJQSxTQUFTQSxNQUFNQyxPQUFuQixFQUE0QjtBQUMxQk4sVUFBSU8sTUFBSixDQUFXQywwQkFBV0MsV0FBdEIsRUFBbUNDLElBQW5DLENBQXdDTCxNQUFNTSxPQUE5QztBQUNEO0FBQ0RTLFlBQVEsRUFBRUMsT0FBT2pCLE1BQU1pQixLQUFmLEVBQVIsRUFDR1AsSUFESCxDQUNRLGdCQUFRO0FBQ1osVUFBSSxDQUFDUSxJQUFMLEVBQVc7QUFDVHRCLFlBQ0dPLE1BREgsQ0FDVUMsMEJBQVdDLFdBRHJCLEVBRUdDLElBRkgsQ0FFUSxFQUFFUSxLQUFLLDJCQUFQLEVBRlI7QUFHRDtBQUNESyx5QkFBU0MsT0FBVCxDQUFpQnBCLE1BQU1xQixRQUF2QixFQUFpQ0gsS0FBS0csUUFBdEMsRUFBZ0QsVUFBQ1AsR0FBRCxFQUFNUSxPQUFOLEVBQWtCO0FBQ2hFLFlBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1oxQixjQUNHTyxNQURILENBQ1VDLDBCQUFXbUIsWUFEckIsRUFFR2pCLElBRkgsQ0FFUSxFQUFFUSxLQUFLLHFCQUFQLEVBRlI7QUFHRDtBQUNEVSwrQkFBSUMsSUFBSixDQUNFLEVBQUVDLElBQUlSLEtBQUtTLEdBQVgsRUFERixFQUVFQyx1QkFBVUMsTUFGWixFQUdFLEVBQUVDLFdBQVcsSUFBYixFQUhGLEVBSUUsVUFBU2hCLEdBQVQsRUFBY2lCLEtBQWQsRUFBcUI7QUFDbkJuQyxjQUFJVSxJQUFKLENBQVMsRUFBRUssU0FBUyxJQUFYLEVBQWlCb0IsWUFBakIsRUFBVDtBQUNELFNBTkg7QUFRRCxPQWREO0FBZUQsS0F0QkgsRUF1QkduQixLQXZCSCxDQXVCUyxlQUFPO0FBQ1poQixVQUFJTyxNQUFKLENBQVdDLDBCQUFXUyxxQkFBdEIsRUFBNkNQLElBQTdDLENBQWtEUSxHQUFsRDtBQUNELEtBekJIO0FBMEJELEdBaERZO0FBaURQa0IsTUFqRE87QUFBQSx5R0FpREZyQyxHQWpERSxFQWlER0MsR0FqREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQWtESkEsSUFBSVUsSUFBSixDQUFTWCxJQUFJdUIsSUFBYixDQWxESTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEMiLCJmaWxlIjoidXNlci5jb250cm9sbGVyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VyU2VydmljZSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IEh0dHBTdGF0dXMgZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XHJcbmltcG9ydCBiY3J5cHRqcyBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgZGV2Q29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzaWdudXAocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZVNpZ251cFNjaGVtYShyZXEuYm9keSk7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBVc2VyLmNyZWF0ZSh2YWx1ZSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgIG1lc3NhZ2U6IFwidXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIGxvZ2luKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gdXNlclNlcnZpY2UudmFsaWRhdGVTaWdudXBTY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgZmluZE9uZSh7IGVtYWlsOiB2YWx1ZS5lbWFpbCB9KVxyXG4gICAgICAudGhlbih1c2VyID0+IHtcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIHJlc1xyXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpXHJcbiAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludmFsaWQgZW1haWwgb3IgcGFzc3dvcmRcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmNyeXB0anMuY29tcGFyZSh2YWx1ZS5wYXNzd29yZCwgdXNlci5wYXNzd29yZCwgKGVyciwgbWF0Y2hlZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFtYXRjaGVkKSB7XHJcbiAgICAgICAgICAgIHJlc1xyXG4gICAgICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5VTkFVVEhPUklaRUQpXHJcbiAgICAgICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52YWxpZCBjcmVkZW50aWFsc1wiIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgand0LnNpZ24oXHJcbiAgICAgICAgICAgIHsgaWQ6IHVzZXIuX2lkIH0sXHJcbiAgICAgICAgICAgIGRldkNvbmZpZy5zZWNyZXQsXHJcbiAgICAgICAgICAgIHsgZXhwaXJlc0luOiBcIjFkXCIgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyLCB0b2tlbikge1xyXG4gICAgICAgICAgICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdG9rZW4gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBhc3luYyB0ZXN0KHJlcSwgcmVzKSB7XHJcbiAgICByZXR1cm4gcmVzLmpzb24ocmVxLnVzZXIpO1xyXG4gIH1cclxufTtcclxuIl19