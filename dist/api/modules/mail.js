"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = undefined;

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _nodemailer = require("nodemailer");

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _htmlToText = require("html-to-text");

var _htmlToText2 = _interopRequireDefault(_htmlToText);

var _development = require("../../config/env/development");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendEmail = exports.sendEmail = function sendEmail(options) {
  return new _promise2.default(function (resolve, reject) {
    var transpoter = null;
    transpoter = _nodemailer2.default.createTransport({
      service: "gmail",
      auth: {
        user: "meanapp.noreply@gmail.com", //devConfig.meanAppGmail.email,
        pass: "nxVMcnszMMDvhRzNEv" //devConfig.meanAppGmail.password
      }
    });
    /*transpoter = nodemailer.createTransport({
        host: devConfig.ethereal.host,
        port: devConfig.ethereal.port,
        auth: {
          user: devConfig.ethereal.username,
          pass: devConfig.ethereal.password
        }
      });*/

    var text = _htmlToText2.default.fromString(options.html, {
      wordwrap: 130
    });
    var mailOptions = {
      from: '"Pranay Bahuguna 👻"',
      to: options.email,
      subject: options.subject,
      text: text,
      html: options.html
    };
    transpoter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return reject(error);
      }
      console.log("Message id ", info.messageId);
      console.log("Preview URL ", _nodemailer2.default.getTestMessageUrl(info));
      return resolve({ message: "Reset Email has been sent to your inbox" });
    });
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kdWxlcy9tYWlsLmpzIl0sIm5hbWVzIjpbInNlbmRFbWFpbCIsInJlc29sdmUiLCJyZWplY3QiLCJ0cmFuc3BvdGVyIiwibm9kZW1haWxlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsInBhc3MiLCJ0ZXh0IiwiaHRtbFRvVGV4dCIsImZyb21TdHJpbmciLCJvcHRpb25zIiwiaHRtbCIsIndvcmR3cmFwIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJlbWFpbCIsInN1YmplY3QiLCJzZW5kTWFpbCIsImVycm9yIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlSWQiLCJnZXRUZXN0TWVzc2FnZVVybCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRU8sSUFBTUEsZ0NBQVksU0FBWkEsU0FBWTtBQUFBLFNBQ3ZCLHNCQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQixRQUFJQyxhQUFhLElBQWpCO0FBQ0FBLGlCQUFhQyxxQkFBV0MsZUFBWCxDQUEyQjtBQUN0Q0MsZUFBUyxPQUQ2QjtBQUV0Q0MsWUFBTTtBQUNKQyxjQUFNLDJCQURGLEVBQytCO0FBQ25DQyxjQUFNLG9CQUZGLENBRXVCO0FBRnZCO0FBRmdDLEtBQTNCLENBQWI7QUFPQTs7Ozs7Ozs7O0FBU0EsUUFBTUMsT0FBT0MscUJBQVdDLFVBQVgsQ0FBc0JDLFFBQVFDLElBQTlCLEVBQW9DO0FBQy9DQyxnQkFBVTtBQURxQyxLQUFwQyxDQUFiO0FBR0EsUUFBTUMsY0FBYztBQUNsQkMsWUFBTSxzQkFEWTtBQUVsQkMsVUFBSUwsUUFBUU0sS0FGTTtBQUdsQkMsZUFBU1AsUUFBUU8sT0FIQztBQUlsQlYsZ0JBSmtCO0FBS2xCSSxZQUFNRCxRQUFRQztBQUxJLEtBQXBCO0FBT0FYLGVBQVdrQixRQUFYLENBQW9CTCxXQUFwQixFQUFpQyxVQUFDTSxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDaEQsVUFBSUQsS0FBSixFQUFXO0FBQ1QsZUFBT3BCLE9BQU9vQixLQUFQLENBQVA7QUFDRDtBQUNERSxjQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkYsS0FBS0csU0FBaEM7QUFDQUYsY0FBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJyQixxQkFBV3VCLGlCQUFYLENBQTZCSixJQUE3QixDQUE1QjtBQUNBLGFBQU90QixRQUFRLEVBQUUyQixTQUFTLHlDQUFYLEVBQVIsQ0FBUDtBQUNELEtBUEQ7QUFRRCxHQXBDRCxDQUR1QjtBQUFBLENBQWxCIiwiZmlsZSI6Im1haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xyXG5pbXBvcnQgaHRtbFRvVGV4dCBmcm9tIFwiaHRtbC10by10ZXh0XCI7XHJcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWcvZW52L2RldmVsb3BtZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZEVtYWlsID0gb3B0aW9ucyA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGxldCB0cmFuc3BvdGVyID0gbnVsbDtcclxuICAgIHRyYW5zcG90ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICAgIHNlcnZpY2U6IFwiZ21haWxcIixcclxuICAgICAgYXV0aDoge1xyXG4gICAgICAgIHVzZXI6IFwibWVhbmFwcC5ub3JlcGx5QGdtYWlsLmNvbVwiLCAvL2RldkNvbmZpZy5tZWFuQXBwR21haWwuZW1haWwsXHJcbiAgICAgICAgcGFzczogXCJueFZNY25zek1NRHZoUnpORXZcIiAvL2RldkNvbmZpZy5tZWFuQXBwR21haWwucGFzc3dvcmRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvKnRyYW5zcG90ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICAgICAgaG9zdDogZGV2Q29uZmlnLmV0aGVyZWFsLmhvc3QsXHJcbiAgICAgICAgcG9ydDogZGV2Q29uZmlnLmV0aGVyZWFsLnBvcnQsXHJcbiAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgdXNlcjogZGV2Q29uZmlnLmV0aGVyZWFsLnVzZXJuYW1lLFxyXG4gICAgICAgICAgcGFzczogZGV2Q29uZmlnLmV0aGVyZWFsLnBhc3N3b3JkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTsqL1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBodG1sVG9UZXh0LmZyb21TdHJpbmcob3B0aW9ucy5odG1sLCB7XHJcbiAgICAgIHdvcmR3cmFwOiAxMzBcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XHJcbiAgICAgIGZyb206ICdcIlByYW5heSBCYWh1Z3VuYSDwn5G7XCInLFxyXG4gICAgICB0bzogb3B0aW9ucy5lbWFpbCxcclxuICAgICAgc3ViamVjdDogb3B0aW9ucy5zdWJqZWN0LFxyXG4gICAgICB0ZXh0LFxyXG4gICAgICBodG1sOiBvcHRpb25zLmh0bWxcclxuICAgIH07XHJcbiAgICB0cmFuc3BvdGVyLnNlbmRNYWlsKG1haWxPcHRpb25zLCAoZXJyb3IsIGluZm8pID0+IHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJNZXNzYWdlIGlkIFwiLCBpbmZvLm1lc3NhZ2VJZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJldmlldyBVUkwgXCIsIG5vZGVtYWlsZXIuZ2V0VGVzdE1lc3NhZ2VVcmwoaW5mbykpO1xyXG4gICAgICByZXR1cm4gcmVzb2x2ZSh7IG1lc3NhZ2U6IFwiUmVzZXQgRW1haWwgaGFzIGJlZW4gc2VudCB0byB5b3VyIGluYm94XCIgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuIl19