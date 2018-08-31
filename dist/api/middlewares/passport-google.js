"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureGoogleStrategy = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportGoogleOauth = require("passport-google-oauth");

var _passportGoogleOauth2 = _interopRequireDefault(_passportGoogleOauth);

var _development = require("./../../config/env/development");

var _user = require("../resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureGoogleStrategy = exports.configureGoogleStrategy = function configureGoogleStrategy() {
  _passport2.default.use(new _passportGoogleOauth2.default.OAuth2Strategy({
    clientID: _development.devConfig.google.clientId,
    clientSecret: _development.devConfig.google.clientSecret,
    callbackURL: _development.devConfig.google.callbackURL
  }, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(accessToken, refreshToken, profile, done) {
      var user, newUser;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.log("accessToken: ", accessToken);
              console.log("tokenSecret: ", refreshToken);
              console.log("profile: ", profile);
              _context.next = 6;
              return _user2.default.findOne({ "google.id": profile.id });

            case 6:
              user = _context.sent;

              if (!user) {
                _context.next = 11;
                break;
              }

              done(null, user);
              _context.next = 19;
              break;

            case 11:
              newUser = new _user2.default({});

              newUser.google.id = profile.id;
              newUser.google.token = accessToken;
              newUser.google.displayName = profile.displayName;
              newUser.google.email = profile.emails[0].value;
              _context.next = 18;
              return newUser.save();

            case 18:
              done(null, newUser);

            case 19:
              _context.next = 25;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](0);

              console.error(_context.t0);
              return _context.abrupt("return", done(_context.t0));

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 21]]);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }()));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtZ29vZ2xlLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUdvb2dsZVN0cmF0ZWd5IiwicGFzc3BvcnQiLCJ1c2UiLCJHb29nbGVTdHJhdGVneSIsIk9BdXRoMlN0cmF0ZWd5IiwiY2xpZW50SUQiLCJkZXZDb25maWciLCJnb29nbGUiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImNhbGxiYWNrVVJMIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJwcm9maWxlIiwiZG9uZSIsImNvbnNvbGUiLCJsb2ciLCJVc2VyIiwiZmluZE9uZSIsImlkIiwidXNlciIsIm5ld1VzZXIiLCJ0b2tlbiIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJlbWFpbHMiLCJ2YWx1ZSIsInNhdmUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSw0REFBMEIsU0FBMUJBLHVCQUEwQixHQUFNO0FBQzNDQyxxQkFBU0MsR0FBVCxDQUNFLElBQUlDLDhCQUFlQyxjQUFuQixDQUNFO0FBQ0VDLGNBQVVDLHVCQUFVQyxNQUFWLENBQWlCQyxRQUQ3QjtBQUVFQyxrQkFBY0gsdUJBQVVDLE1BQVYsQ0FBaUJFLFlBRmpDO0FBR0VDLGlCQUFhSix1QkFBVUMsTUFBVixDQUFpQkc7QUFIaEMsR0FERjtBQUFBLHdGQU1FLGlCQUFPQyxXQUFQLEVBQW9CQyxZQUFwQixFQUFrQ0MsT0FBbEMsRUFBMkNDLElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVJQyxzQkFBUUMsR0FBUixDQUFZLGVBQVosRUFBNkJMLFdBQTdCO0FBQ0FJLHNCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkosWUFBN0I7QUFDQUcsc0JBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSCxPQUF6QjtBQUpKO0FBQUEscUJBS3VCSSxlQUFLQyxPQUFMLENBQWEsRUFBRSxhQUFhTCxRQUFRTSxFQUF2QixFQUFiLENBTHZCOztBQUFBO0FBS1VDLGtCQUxWOztBQUFBLG1CQU1RQSxJQU5SO0FBQUE7QUFBQTtBQUFBOztBQU9NTixtQkFBSyxJQUFMLEVBQVdNLElBQVg7QUFQTjtBQUFBOztBQUFBO0FBU1lDLHFCQVRaLEdBU3NCLElBQUlKLGNBQUosQ0FBUyxFQUFULENBVHRCOztBQVVNSSxzQkFBUWQsTUFBUixDQUFlWSxFQUFmLEdBQW9CTixRQUFRTSxFQUE1QjtBQUNBRSxzQkFBUWQsTUFBUixDQUFlZSxLQUFmLEdBQXVCWCxXQUF2QjtBQUNBVSxzQkFBUWQsTUFBUixDQUFlZ0IsV0FBZixHQUE2QlYsUUFBUVUsV0FBckM7QUFDQUYsc0JBQVFkLE1BQVIsQ0FBZWlCLEtBQWYsR0FBdUJYLFFBQVFZLE1BQVIsQ0FBZSxDQUFmLEVBQWtCQyxLQUF6QztBQWJOO0FBQUEscUJBY1lMLFFBQVFNLElBQVIsRUFkWjs7QUFBQTtBQWVNYixtQkFBSyxJQUFMLEVBQVdPLE9BQVg7O0FBZk47QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFrQklOLHNCQUFRYSxLQUFSO0FBbEJKLCtDQW1CV2QsaUJBbkJYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQStCRCxDQWhDTSIsImZpbGUiOiJwYXNzcG9ydC1nb29nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcbmltcG9ydCBHb29nbGVTdHJhdGVneSBmcm9tIFwicGFzc3BvcnQtZ29vZ2xlLW9hdXRoXCI7XHJcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnRcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL3Jlc291cmNlcy91c2VyL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWd1cmVHb29nbGVTdHJhdGVneSA9ICgpID0+IHtcclxuICBwYXNzcG9ydC51c2UoXHJcbiAgICBuZXcgR29vZ2xlU3RyYXRlZ3kuT0F1dGgyU3RyYXRlZ3koXHJcbiAgICAgIHtcclxuICAgICAgICBjbGllbnRJRDogZGV2Q29uZmlnLmdvb2dsZS5jbGllbnRJZCxcclxuICAgICAgICBjbGllbnRTZWNyZXQ6IGRldkNvbmZpZy5nb29nbGUuY2xpZW50U2VjcmV0LFxyXG4gICAgICAgIGNhbGxiYWNrVVJMOiBkZXZDb25maWcuZ29vZ2xlLmNhbGxiYWNrVVJMXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIChhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuLCBwcm9maWxlLCBkb25lKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWNjZXNzVG9rZW46IFwiLCBhY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuU2VjcmV0OiBcIiwgcmVmcmVzaFRva2VuKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZmlsZTogXCIsIHByb2ZpbGUpO1xyXG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IFwiZ29vZ2xlLmlkXCI6IHByb2ZpbGUuaWQgfSk7XHJcbiAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICBkb25lKG51bGwsIHVzZXIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHt9KTtcclxuICAgICAgICAgICAgbmV3VXNlci5nb29nbGUuaWQgPSBwcm9maWxlLmlkO1xyXG4gICAgICAgICAgICBuZXdVc2VyLmdvb2dsZS50b2tlbiA9IGFjY2Vzc1Rva2VuO1xyXG4gICAgICAgICAgICBuZXdVc2VyLmdvb2dsZS5kaXNwbGF5TmFtZSA9IHByb2ZpbGUuZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIG5ld1VzZXIuZ29vZ2xlLmVtYWlsID0gcHJvZmlsZS5lbWFpbHNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgIGF3YWl0IG5ld1VzZXIuc2F2ZSgpO1xyXG4gICAgICAgICAgICBkb25lKG51bGwsIG5ld1VzZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuIGRvbmUoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIClcclxuICApO1xyXG59O1xyXG4iXX0=