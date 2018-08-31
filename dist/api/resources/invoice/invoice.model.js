"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginate = require("mongoose-paginate");

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var Invoice = new Schema({
  item: {
    type: String,
    required: true
  },
  qty: {
    type: Number
  },
  date: {
    type: Date
  },
  due: {
    type: Date
  },
  rate: {
    type: Number
  },
  tax: {
    type: Number
  },
  client: {
    ref: "Client",
    type: Schema.Types.ObjectId,
    required: true
  }
});
Invoice.plugin(_mongoosePaginate2.default);
exports.default = _mongoose2.default.model("Invoice", Invoice);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIkludm9pY2UiLCJpdGVtIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicXR5IiwiTnVtYmVyIiwiZGF0ZSIsIkRhdGUiLCJkdWUiLCJyYXRlIiwidGF4IiwiY2xpZW50IiwicmVmIiwiVHlwZXMiLCJPYmplY3RJZCIsInBsdWdpbiIsIm1vbmdvb3NlUGFnaW5hdGUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsbUJBQVNELE1BQXhCO0FBQ0EsSUFBTUUsVUFBVSxJQUFJRixNQUFKLENBQVc7QUFDekJHLFFBQU07QUFDSkMsVUFBTUMsTUFERjtBQUVKQyxjQUFVO0FBRk4sR0FEbUI7QUFLekJDLE9BQUs7QUFDSEgsVUFBTUk7QUFESCxHQUxvQjtBQVF6QkMsUUFBTTtBQUNKTCxVQUFNTTtBQURGLEdBUm1CO0FBV3pCQyxPQUFLO0FBQ0hQLFVBQU1NO0FBREgsR0FYb0I7QUFjekJFLFFBQU07QUFDSlIsVUFBTUk7QUFERixHQWRtQjtBQWlCekJLLE9BQUs7QUFDSFQsVUFBTUk7QUFESCxHQWpCb0I7QUFvQnpCTSxVQUFRO0FBQ05DLFNBQUssUUFEQztBQUVOWCxVQUFNSixPQUFPZ0IsS0FBUCxDQUFhQyxRQUZiO0FBR05YLGNBQVU7QUFISjtBQXBCaUIsQ0FBWCxDQUFoQjtBQTBCQUosUUFBUWdCLE1BQVIsQ0FBZUMsMEJBQWY7a0JBQ2VsQixtQkFBU21CLEtBQVQsQ0FBZSxTQUFmLEVBQTBCbEIsT0FBMUIsQyIsImZpbGUiOiJpbnZvaWNlLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgbW9uZ29vc2VQYWdpbmF0ZSBmcm9tIFwibW9uZ29vc2UtcGFnaW5hdGVcIjtcclxuXHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuY29uc3QgSW52b2ljZSA9IG5ldyBTY2hlbWEoe1xyXG4gIGl0ZW06IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBxdHk6IHtcclxuICAgIHR5cGU6IE51bWJlclxyXG4gIH0sXHJcbiAgZGF0ZToge1xyXG4gICAgdHlwZTogRGF0ZVxyXG4gIH0sXHJcbiAgZHVlOiB7XHJcbiAgICB0eXBlOiBEYXRlXHJcbiAgfSxcclxuICByYXRlOiB7XHJcbiAgICB0eXBlOiBOdW1iZXJcclxuICB9LFxyXG4gIHRheDoge1xyXG4gICAgdHlwZTogTnVtYmVyXHJcbiAgfSxcclxuICBjbGllbnQ6IHtcclxuICAgIHJlZjogXCJDbGllbnRcIixcclxuICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuSW52b2ljZS5wbHVnaW4obW9uZ29vc2VQYWdpbmF0ZSk7XHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiSW52b2ljZVwiLCBJbnZvaWNlKTtcclxuIl19