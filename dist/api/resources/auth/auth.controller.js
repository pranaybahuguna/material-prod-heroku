"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _development = require("../../../config/env/development");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  sendJWTToken: function sendJWTToken(req, res) {
    var token = _jsonwebtoken2.default.sign({ id: req.currentUser._id }, _development.devConfig.secret, { expiresIn: "1d"
      //function(err, token) {
      // return res.json({ success: true, token });
      //}
    });
    res.redirect(_development.devConfig.frontendURL + "/dashboard/invoices/?token=" + token);
  },
  authenticate: function authenticate(req, res) {
    return res.send(true);
  },
  logout: function logout(req, res) {
    req.logout();
    return res.json({ success: true });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNlbmRKV1RUb2tlbiIsInJlcSIsInJlcyIsInRva2VuIiwiand0Iiwic2lnbiIsImlkIiwiY3VycmVudFVzZXIiLCJfaWQiLCJkZXZDb25maWciLCJzZWNyZXQiLCJleHBpcmVzSW4iLCJyZWRpcmVjdCIsImZyb250ZW5kVVJMIiwiYXV0aGVudGljYXRlIiwic2VuZCIsImxvZ291dCIsImpzb24iLCJzdWNjZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O2tCQUVlO0FBQ2JBLGNBRGEsd0JBQ0FDLEdBREEsRUFDS0MsR0FETCxFQUNVO0FBQ3JCLFFBQU1DLFFBQVFDLHVCQUFJQyxJQUFKLENBQ1osRUFBRUMsSUFBSUwsSUFBSU0sV0FBSixDQUFnQkMsR0FBdEIsRUFEWSxFQUVaQyx1QkFBVUMsTUFGRSxFQUdaLEVBQUVDLFdBQVc7QUFDYjtBQUNBO0FBQ0E7QUFIQSxLQUhZLENBQWQ7QUFRQVQsUUFBSVUsUUFBSixDQUFnQkgsdUJBQVVJLFdBQTFCLG1DQUFtRVYsS0FBbkU7QUFDRCxHQVhZO0FBYWJXLGNBYmEsd0JBYUFiLEdBYkEsRUFhS0MsR0FiTCxFQWFVO0FBQ3JCLFdBQU9BLElBQUlhLElBQUosQ0FBUyxJQUFULENBQVA7QUFDRCxHQWZZO0FBZ0JiQyxRQWhCYSxrQkFnQk5mLEdBaEJNLEVBZ0JEQyxHQWhCQyxFQWdCSTtBQUNmRCxRQUFJZSxNQUFKO0FBQ0EsV0FBT2QsSUFBSWUsSUFBSixDQUFTLEVBQUVDLFNBQVMsSUFBWCxFQUFULENBQVA7QUFDRDtBQW5CWSxDIiwiZmlsZSI6ImF1dGguY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNlbmRKV1RUb2tlbihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcclxuICAgICAgeyBpZDogcmVxLmN1cnJlbnRVc2VyLl9pZCB9LFxyXG4gICAgICBkZXZDb25maWcuc2VjcmV0LFxyXG4gICAgICB7IGV4cGlyZXNJbjogXCIxZFwiIH1cclxuICAgICAgLy9mdW5jdGlvbihlcnIsIHRva2VuKSB7XHJcbiAgICAgIC8vIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHRva2VuIH0pO1xyXG4gICAgICAvL31cclxuICAgICk7XHJcbiAgICByZXMucmVkaXJlY3QoYCR7ZGV2Q29uZmlnLmZyb250ZW5kVVJMfS9kYXNoYm9hcmQvaW52b2ljZXMvP3Rva2VuPSR7dG9rZW59YCk7XHJcbiAgfSxcclxuXHJcbiAgYXV0aGVudGljYXRlKHJlcSwgcmVzKSB7XHJcbiAgICByZXR1cm4gcmVzLnNlbmQodHJ1ZSk7XHJcbiAgfSxcclxuICBsb2dvdXQocmVxLCByZXMpIHtcclxuICAgIHJlcS5sb2dvdXQoKTtcclxuICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgfVxyXG59O1xyXG4iXX0=