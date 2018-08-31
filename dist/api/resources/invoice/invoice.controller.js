"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _invoice = require("./invoice.model");

var _invoice2 = _interopRequireDefault(_invoice);

var _invoice3 = require("./invoice.service");

var _invoice4 = _interopRequireDefault(_invoice3);

var _user = require("../user/user.service");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  findAll: function findAll(req, res, next) {
    var _req$query = req.query,
        _req$query$page = _req$query.page,
        page = _req$query$page === undefined ? 1 : _req$query$page,
        _req$query$perPage = _req$query.perPage,
        perPage = _req$query$perPage === undefined ? 10 : _req$query$perPage,
        filter = _req$query.filter,
        sortField = _req$query.sortField,
        sortDir = _req$query.sortDir;

    var options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10),
      populate: "client"
    };
    var query = {};
    if (filter) {
      query.item = {
        $regex: filter
      };
    }
    if (sortField && sortDir) {
      options.sort = (0, _defineProperty3.default)({}, sortField, sortDir);
    }
    console.log(options);
    _invoice2.default.paginate(query, options).then(function (invoices) {
      return res.json(invoices);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  create: function create(req, res, next) {
    var schema = _joi2.default.object().keys({
      item: _joi2.default.string().required(),
      date: _joi2.default.date().required(),
      due: _joi2.default.date().required(),
      client: _joi2.default.string().required(),
      qty: _joi2.default.number().integer().required(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.number().optional()
    });

    var _Joi$validate = _joi2.default.validate(req.body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error);
    }
    _invoice2.default.create(value).then(function (invoice) {
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _invoice2.default.findById(id).populate("client").then(function (invoice) {
      if (!invoice) {
        return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "Could not find any invoice" });
      }
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  delete: function _delete(req, res) {
    var id = req.params.id;

    _invoice2.default.findByIdAndRemove(id).then(function (invoice) {
      if (!invoice) {
        return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "Could not delete any invoice" });
      }
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    var schema = _joi2.default.object().keys({
      item: _joi2.default.string().optional(),
      date: _joi2.default.date().optional(),
      due: _joi2.default.date().optional(),
      qty: _joi2.default.number().integer().optional(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.number().optional(),
      client: _joi2.default.string().optional()
    });

    var _Joi$validate2 = _joi2.default.validate(req.body, schema),
        error = _Joi$validate2.error,
        value = _Joi$validate2.value;

    if (error && error.details) {
      return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error);
    }
    _invoice2.default.findOneAndUpdate({ _id: id }, value, { new: true }).then(function (invoice) {
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  download: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var id, invoice, _invoiceService$getTo, subTotal, total, user, templateBody, html;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              id = req.params.id;
              _context.next = 4;
              return _invoice2.default.findById(id).populate("client");

            case 4:
              invoice = _context.sent;

              if (invoice) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes.NOT_FOUND).send({ err: "could not find any invice" }));

            case 7:
              _invoiceService$getTo = _invoice4.default.getTotal(invoice), subTotal = _invoiceService$getTo.subTotal, total = _invoiceService$getTo.total;
              user = _user2.default.getUser(req.currentUser);
              templateBody = _invoice4.default.getTemplateBody(invoice, subTotal, total, user);
              html = _invoice4.default.getInvoiceTemplate(templateBody);

              res.pdfFromHTML({
                filename: invoice.item + ".pdf",
                htmlContent: html
              });
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);

              console.error(_context.t0);
              return _context.abrupt("return", res.status(500).send(_context.t0));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 14]]);
    }));

    function download(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return download;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwicXVlcnkiLCJwYWdlIiwicGVyUGFnZSIsImZpbHRlciIsInNvcnRGaWVsZCIsInNvcnREaXIiLCJvcHRpb25zIiwicGFyc2VJbnQiLCJsaW1pdCIsInBvcHVsYXRlIiwiaXRlbSIsIiRyZWdleCIsInNvcnQiLCJjb25zb2xlIiwibG9nIiwiSW52b2ljZSIsInBhZ2luYXRlIiwidGhlbiIsImpzb24iLCJpbnZvaWNlcyIsImNhdGNoIiwic3RhdHVzIiwiSHR0cFN0YXR1cyIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImVyciIsImNyZWF0ZSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJzdHJpbmciLCJyZXF1aXJlZCIsImRhdGUiLCJkdWUiLCJjbGllbnQiLCJxdHkiLCJudW1iZXIiLCJpbnRlZ2VyIiwidGF4Iiwib3B0aW9uYWwiLCJyYXRlIiwidmFsaWRhdGUiLCJib2R5IiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJCQURfUkVRVUVTVCIsImludm9pY2UiLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZCIsIk5PVF9GT1VORCIsImRlbGV0ZSIsImZpbmRCeUlkQW5kUmVtb3ZlIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIm5ldyIsImRvd25sb2FkIiwic2VuZCIsImludm9pY2VTZXJ2aWNlIiwiZ2V0VG90YWwiLCJzdWJUb3RhbCIsInRvdGFsIiwidXNlciIsInVzZXJTZXJ2aWNlIiwiZ2V0VXNlciIsImN1cnJlbnRVc2VyIiwidGVtcGxhdGVCb2R5IiwiZ2V0VGVtcGxhdGVCb2R5IiwiaHRtbCIsImdldEludm9pY2VUZW1wbGF0ZSIsInBkZkZyb21IVE1MIiwiZmlsZW5hbWUiLCJodG1sQ29udGVudCJdLCJtYXBwaW5n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QUE7QUFBQSxDIiwiZmlsZSI6Imludm9pY2UuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSBcImpvaVwiO1xyXG5pbXBvcnQgSHR0cFN0YXR1cywgeyBOT1RfRk9VTkQgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcclxuaW1wb3J0IEludm9pY2UgZnJvbSBcIi4vaW52b2ljZS5tb2RlbFwiO1xyXG5pbXBvcnQgaW52b2ljZVNlcnZpY2UgZnJvbSBcIi4vaW52b2ljZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tIFwiLi4vdXNlci91c2VyLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBmaW5kQWxsKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBjb25zdCB7IHBhZ2UgPSAxLCBwZXJQYWdlID0gMTAsIGZpbHRlciwgc29ydEZpZWxkLCBzb3J0RGlyIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBwYWdlOiBwYXJzZUludChwYWdlLCAxMCksXHJcbiAgICAgIGxpbWl0OiBwYXJzZUludChwZXJQYWdlLCAxMCksXHJcbiAgICAgIHBvcHVsYXRlOiBcImNsaWVudFwiXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcXVlcnkgPSB7fTtcclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgcXVlcnkuaXRlbSA9IHtcclxuICAgICAgICAkcmVnZXg6IGZpbHRlclxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKHNvcnRGaWVsZCAmJiBzb3J0RGlyKSB7XHJcbiAgICAgIG9wdGlvbnMuc29ydCA9IHtcclxuICAgICAgICBbc29ydEZpZWxkXTogc29ydERpclxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XHJcbiAgICBJbnZvaWNlLnBhZ2luYXRlKHF1ZXJ5LCBvcHRpb25zKVxyXG4gICAgICAudGhlbihpbnZvaWNlcyA9PiByZXMuanNvbihpbnZvaWNlcykpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9LFxyXG4gIGNyZWF0ZShyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICBpdGVtOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgZGF0ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBkdWU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgY2xpZW50OiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgcXR5OiBKb2kubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcigpXHJcbiAgICAgICAgLnJlcXVpcmVkKCksXHJcbiAgICAgIHRheDogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXHJcbiAgICAgIHJhdGU6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgIH1cclxuICAgIEludm9pY2UuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAudGhlbihpbnZvaWNlID0+IHJlcy5qc29uKGludm9pY2UpKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfSxcclxuICBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgSW52b2ljZS5maW5kQnlJZChpZClcclxuICAgICAgLnBvcHVsYXRlKFwiY2xpZW50XCIpXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIGlmICghaW52b2ljZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuTk9UX0ZPVU5EKVxyXG4gICAgICAgICAgICAuanNvbih7IGVycjogXCJDb3VsZCBub3QgZmluZCBhbnkgaW52b2ljZVwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oaW52b2ljZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9LFxyXG4gIGRlbGV0ZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIEludm9pY2UuZmluZEJ5SWRBbmRSZW1vdmUoaWQpXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIGlmICghaW52b2ljZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuTk9UX0ZPVU5EKVxyXG4gICAgICAgICAgICAuanNvbih7IGVycjogXCJDb3VsZCBub3QgZGVsZXRlIGFueSBpbnZvaWNlXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbihpbnZvaWNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICBpdGVtOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgICAgZGF0ZTogSm9pLmRhdGUoKS5vcHRpb25hbCgpLFxyXG4gICAgICBkdWU6IEpvaS5kYXRlKCkub3B0aW9uYWwoKSxcclxuICAgICAgcXR5OiBKb2kubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcigpXHJcbiAgICAgICAgLm9wdGlvbmFsKCksXHJcbiAgICAgIHRheDogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXHJcbiAgICAgIHJhdGU6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICBjbGllbnQ6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgIH1cclxuICAgIEludm9pY2UuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQgfSwgdmFsdWUsIHsgbmV3OiB0cnVlIH0pXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4gcmVzLmpzb24oaW52b2ljZSkpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9LFxyXG4gIGFzeW5jIGRvd25sb2FkKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgSW52b2ljZS5maW5kQnlJZChpZCkucG9wdWxhdGUoXCJjbGllbnRcIik7XHJcbiAgICAgIGlmICghaW52b2ljZSkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKE5PVF9GT1VORCkuc2VuZCh7IGVycjogXCJjb3VsZCBub3QgZmluZCBhbnkgaW52aWNlXCIgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBzdWJUb3RhbCwgdG90YWwgfSA9IGludm9pY2VTZXJ2aWNlLmdldFRvdGFsKGludm9pY2UpO1xyXG4gICAgICBjb25zdCB1c2VyID0gdXNlclNlcnZpY2UuZ2V0VXNlcihyZXEuY3VycmVudFVzZXIpO1xyXG4gICAgICBjb25zdCB0ZW1wbGF0ZUJvZHkgPSBpbnZvaWNlU2VydmljZS5nZXRUZW1wbGF0ZUJvZHkoXHJcbiAgICAgICAgaW52b2ljZSxcclxuICAgICAgICBzdWJUb3RhbCxcclxuICAgICAgICB0b3RhbCxcclxuICAgICAgICB1c2VyXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGh0bWwgPSBpbnZvaWNlU2VydmljZS5nZXRJbnZvaWNlVGVtcGxhdGUodGVtcGxhdGVCb2R5KTtcclxuICAgICAgcmVzLnBkZkZyb21IVE1MKHtcclxuICAgICAgICBmaWxlbmFtZTogYCR7aW52b2ljZS5pdGVtfS5wZGZgLFxyXG4gICAgICAgIGh0bWxDb250ZW50OiBodG1sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXX0=