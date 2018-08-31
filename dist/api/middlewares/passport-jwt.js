"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureJWTStrategy = undefined;

var _passportJwt = require("passport-jwt");

var _passportJwt2 = _interopRequireDefault(_passportJwt);

var _development = require("../../config/env/development");

var _user = require("../resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureJWTStrategy = exports.configureJWTStrategy = function configureJWTStrategy() {
  var opts = {};
  opts.jwtFromRequest = _passportJwt2.default.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = _development.devConfig.secret;
  _passport2.default.use(new _passportJwt2.default.Strategy(opts, function (payload, done) {
    _user2.default.findOne({ _id: payload.id }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtand0LmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUpXVFN0cmF0ZWd5Iiwib3B0cyIsImp3dEZyb21SZXF1ZXN0IiwiUGFzc3BvcnRKV1QiLCJFeHRyYWN0Snd0IiwiZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuIiwic2VjcmV0T3JLZXkiLCJkZXZDb25maWciLCJzZWNyZXQiLCJwYXNzcG9ydCIsInVzZSIsIlN0cmF0ZWd5IiwicGF5bG9hZCIsImRvbmUiLCJVc2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwiZXJyIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsc0RBQXVCLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUN4QyxNQUFJQyxPQUFPLEVBQVg7QUFDQUEsT0FBS0MsY0FBTCxHQUFzQkMsc0JBQVlDLFVBQVosQ0FBdUJDLDJCQUF2QixFQUF0QjtBQUNBSixPQUFLSyxXQUFMLEdBQW1CQyx1QkFBVUMsTUFBN0I7QUFDQUMscUJBQVNDLEdBQVQsQ0FDRSxJQUFJUCxzQkFBWVEsUUFBaEIsQ0FBeUJWLElBQXpCLEVBQStCLFVBQVNXLE9BQVQsRUFBa0JDLElBQWxCLEVBQXdCO0FBQ3JEQyxtQkFBS0MsT0FBTCxDQUFhLEVBQUVDLEtBQUtKLFFBQVFLLEVBQWYsRUFBYixFQUFrQyxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDcEQsVUFBSUQsR0FBSixFQUFTO0FBQ1AsZUFBT0wsS0FBS0ssR0FBTCxFQUFVLEtBQVYsQ0FBUDtBQUNEO0FBQ0QsVUFBSUMsSUFBSixFQUFVO0FBQ1IsZUFBT04sS0FBSyxJQUFMLEVBQVdNLElBQVgsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU9OLEtBQUssSUFBTCxFQUFXLEtBQVgsQ0FBUDtBQUNEO0FBQ0YsS0FURDtBQVVELEdBWEQsQ0FERjtBQWNELENBbEJNIiwiZmlsZSI6InBhc3Nwb3J0LWp3dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXNzcG9ydEpXVCBmcm9tIFwicGFzc3BvcnQtand0XCI7XHJcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWcvZW52L2RldmVsb3BtZW50XCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9yZXNvdXJjZXMvdXNlci91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCBwYXNzcG9ydCBmcm9tIFwicGFzc3BvcnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWd1cmVKV1RTdHJhdGVneSA9ICgpID0+IHtcclxuICB2YXIgb3B0cyA9IHt9O1xyXG4gIG9wdHMuand0RnJvbVJlcXVlc3QgPSBQYXNzcG9ydEpXVC5FeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpO1xyXG4gIG9wdHMuc2VjcmV0T3JLZXkgPSBkZXZDb25maWcuc2VjcmV0O1xyXG4gIHBhc3Nwb3J0LnVzZShcclxuICAgIG5ldyBQYXNzcG9ydEpXVC5TdHJhdGVneShvcHRzLCBmdW5jdGlvbihwYXlsb2FkLCBkb25lKSB7XHJcbiAgICAgIFVzZXIuZmluZE9uZSh7IF9pZDogcGF5bG9hZC5pZCB9LCBmdW5jdGlvbihlcnIsIHVzZXIpIHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICByZXR1cm4gZG9uZShlcnIsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgKTtcclxufTtcclxuIl19