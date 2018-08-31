"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureGithubStrategy = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportGithub = require("passport-github");

var _passportGithub2 = _interopRequireDefault(_passportGithub);

var _development = require("./../../config/env/development");

var _user = require("../resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureGithubStrategy = exports.configureGithubStrategy = function configureGithubStrategy() {
  _passport2.default.use(new _passportGithub2.default.Strategy({
    clientID: _development.devConfig.github.clientId,
    clientSecret: _development.devConfig.github.clientSecret,
    callbackURL: _development.devConfig.github.callbackURL
  }, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(token, refreshToken, profile, done) {
      var user, newUser;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.log("accessToken: ", token);
              console.log("tokenSecret: ", refreshToken);
              console.log("profile: ", profile);
              _context.next = 6;
              return _user2.default.findOne({ "github.id": profile.id });

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

              newUser.github.id = profile.id;
              newUser.github.token = token;
              newUser.github.displayName = profile.displayName;
              newUser.github.email = profile.emails[0].value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtZ2l0aHViLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUdpdGh1YlN0cmF0ZWd5IiwicGFzc3BvcnQiLCJ1c2UiLCJHaXRodWJTdHJhdGVneSIsIlN0cmF0ZWd5IiwiY2xpZW50SUQiLCJkZXZDb25maWciLCJnaXRodWIiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImNhbGxiYWNrVVJMIiwidG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJwcm9maWxlIiwiZG9uZSIsImNvbnNvbGUiLCJsb2ciLCJVc2VyIiwiZmluZE9uZSIsImlkIiwidXNlciIsIm5ld1VzZXIiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiZW1haWxzIiwidmFsdWUiLCJzYXZlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsNERBQTBCLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUMzQ0MscUJBQVNDLEdBQVQsQ0FDRSxJQUFJQyx5QkFBZUMsUUFBbkIsQ0FDRTtBQUNFQyxjQUFVQyx1QkFBVUMsTUFBVixDQUFpQkMsUUFEN0I7QUFFRUMsa0JBQWNILHVCQUFVQyxNQUFWLENBQWlCRSxZQUZqQztBQUdFQyxpQkFBYUosdUJBQVVDLE1BQVYsQ0FBaUJHO0FBSGhDLEdBREY7QUFBQSx3RkFNRSxpQkFBT0MsS0FBUCxFQUFjQyxZQUFkLEVBQTRCQyxPQUE1QixFQUFxQ0MsSUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUlDLHNCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkwsS0FBN0I7QUFDQUksc0JBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCSixZQUE3QjtBQUNBRyxzQkFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJILE9BQXpCO0FBSko7QUFBQSxxQkFLdUJJLGVBQUtDLE9BQUwsQ0FBYSxFQUFFLGFBQWFMLFFBQVFNLEVBQXZCLEVBQWIsQ0FMdkI7O0FBQUE7QUFLVUMsa0JBTFY7O0FBQUEsbUJBTVFBLElBTlI7QUFBQTtBQUFBO0FBQUE7O0FBT01OLG1CQUFLLElBQUwsRUFBV00sSUFBWDtBQVBOO0FBQUE7O0FBQUE7QUFTWUMscUJBVFosR0FTc0IsSUFBSUosY0FBSixDQUFTLEVBQVQsQ0FUdEI7O0FBVU1JLHNCQUFRZCxNQUFSLENBQWVZLEVBQWYsR0FBb0JOLFFBQVFNLEVBQTVCO0FBQ0FFLHNCQUFRZCxNQUFSLENBQWVJLEtBQWYsR0FBdUJBLEtBQXZCO0FBQ0FVLHNCQUFRZCxNQUFSLENBQWVlLFdBQWYsR0FBNkJULFFBQVFTLFdBQXJDO0FBQ0FELHNCQUFRZCxNQUFSLENBQWVnQixLQUFmLEdBQXVCVixRQUFRVyxNQUFSLENBQWUsQ0FBZixFQUFrQkMsS0FBekM7QUFiTjtBQUFBLHFCQWNZSixRQUFRSyxJQUFSLEVBZFo7O0FBQUE7QUFlTVosbUJBQUssSUFBTCxFQUFXTyxPQUFYOztBQWZOO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBa0JJTixzQkFBUVksS0FBUjtBQWxCSiwrQ0FtQldiLGlCQW5CWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GOztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUErQkQsQ0FoQ00iLCJmaWxlIjoicGFzc3BvcnQtZ2l0aHViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhc3Nwb3J0IGZyb20gXCJwYXNzcG9ydFwiO1xyXG5pbXBvcnQgR2l0aHViU3RyYXRlZ3kgZnJvbSBcInBhc3Nwb3J0LWdpdGh1YlwiO1xyXG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWcvZW52L2RldmVsb3BtZW50XCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9yZXNvdXJjZXMvdXNlci91c2VyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlndXJlR2l0aHViU3RyYXRlZ3kgPSAoKSA9PiB7XHJcbiAgcGFzc3BvcnQudXNlKFxyXG4gICAgbmV3IEdpdGh1YlN0cmF0ZWd5LlN0cmF0ZWd5KFxyXG4gICAgICB7XHJcbiAgICAgICAgY2xpZW50SUQ6IGRldkNvbmZpZy5naXRodWIuY2xpZW50SWQsXHJcbiAgICAgICAgY2xpZW50U2VjcmV0OiBkZXZDb25maWcuZ2l0aHViLmNsaWVudFNlY3JldCxcclxuICAgICAgICBjYWxsYmFja1VSTDogZGV2Q29uZmlnLmdpdGh1Yi5jYWxsYmFja1VSTFxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyAodG9rZW4sIHJlZnJlc2hUb2tlbiwgcHJvZmlsZSwgZG9uZSkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFjY2Vzc1Rva2VuOiBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlblNlY3JldDogXCIsIHJlZnJlc2hUb2tlbik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2ZpbGU6IFwiLCBwcm9maWxlKTtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBcImdpdGh1Yi5pZFwiOiBwcm9maWxlLmlkIH0pO1xyXG4gICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgZG9uZShudWxsLCB1c2VyKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcih7fSk7XHJcbiAgICAgICAgICAgIG5ld1VzZXIuZ2l0aHViLmlkID0gcHJvZmlsZS5pZDtcclxuICAgICAgICAgICAgbmV3VXNlci5naXRodWIudG9rZW4gPSB0b2tlbjtcclxuICAgICAgICAgICAgbmV3VXNlci5naXRodWIuZGlzcGxheU5hbWUgPSBwcm9maWxlLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICBuZXdVc2VyLmdpdGh1Yi5lbWFpbCA9IHByb2ZpbGUuZW1haWxzWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcclxuICAgICAgICAgICAgZG9uZShudWxsLCBuZXdVc2VyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIHJldHVybiBkb25lKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgKTtcclxufTtcclxuIl19