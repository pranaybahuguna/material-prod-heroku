"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  validateSignupSchema: function validateSignupSchema(body) {
    var schema = _joi2.default.object().keys({
      email: _joi2.default.string().email().required(),
      name: _joi2.default.string().required(),
      password: _joi2.default.string()
    });

    var _Joi$validate = _joi2.default.validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  },
  validateLoginSchema: function validateLoginSchema(body) {
    var schema = _joi2.default.object().keys({
      email: _joi2.default.string().email().required(),
      password: _joi2.default.string().required()
    });

    var _Joi$validate2 = _joi2.default.validate(body, schema),
        error = _Joi$validate2.error,
        value = _Joi$validate2.value;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  },
  getUser: function getUser(user) {
    var rsp = {};
    if (user.local) {
      if (user.local.email) {
        rsp.name = user.local.name;
        rsp.email = user.local.email;
      }
    }

    if (user.google) {
      if (user.google.email) {
        rsp.name = user.google.displayName;
        rsp.email = user.google.email;
      }
    }

    if (user.github) {
      if (user.github.email) {
        rsp.name = user.github.displayName;
        rsp.email = user.github.email;
      }
    }
    if (user.twitter) {
      if (user.twitter.email) {
        rsp.name = user.twitter.displayName;
        rsp.email = user.twitter.email;
      }
    }

    return rsp;
  },
  validateForgotSchema: function validateForgotSchema(body) {
    var schema = _joi2.default.object().keys({
      email: _joi2.default.string().email().required()
    });

    var _Joi$validate3 = _joi2.default.validate(body, schema),
        error = _Joi$validate3.error,
        value = _Joi$validate3.value;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRlU2lnbnVwU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbWFpbCIsInN0cmluZyIsInJlcXVpcmVkIiwibmFtZSIsInBhc3N3b3JkIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsInZhbGlkYXRlTG9naW5TY2hlbWEiLCJnZXRVc2VyIiwidXNlciIsInJzcCIsImxvY2FsIiwiZ29vZ2xlIiwiZGlzcGxheU5hbWUiLCJnaXRodWIiLCJ0d2l0dGVyIiwidmFsaWRhdGVGb3Jnb3RTY2hlbWEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYkEsc0JBRGEsZ0NBQ1FDLElBRFIsRUFDYztBQUN6QixRQUFNQyxTQUFTQyxjQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDL0JDLGFBQU9ILGNBQUlJLE1BQUosR0FDSkQsS0FESSxHQUVKRSxRQUZJLEVBRHdCO0FBSS9CQyxZQUFNTixjQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFKeUI7QUFLL0JFLGdCQUFVUCxjQUFJSSxNQUFKO0FBTHFCLEtBQWxCLENBQWY7O0FBRHlCLHdCQVFBSixjQUFJUSxRQUFKLENBQWFWLElBQWIsRUFBbUJDLE1BQW5CLENBUkE7QUFBQSxRQVFqQlUsS0FSaUIsaUJBUWpCQSxLQVJpQjtBQUFBLFFBUVZDLEtBUlUsaUJBUVZBLEtBUlU7O0FBU3pCLFFBQUlELFNBQVNBLE1BQU1FLE9BQW5CLEVBQTRCO0FBQzFCLGFBQU8sRUFBRUYsWUFBRixFQUFQO0FBQ0Q7QUFDRCxXQUFPLEVBQUVDLFlBQUYsRUFBUDtBQUNELEdBZFk7QUFlYkUscUJBZmEsK0JBZU9kLElBZlAsRUFlYTtBQUN4QixRQUFNQyxTQUFTQyxjQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDL0JDLGFBQU9ILGNBQUlJLE1BQUosR0FDSkQsS0FESSxHQUVKRSxRQUZJLEVBRHdCO0FBSS9CRSxnQkFBVVAsY0FBSUksTUFBSixHQUFhQyxRQUFiO0FBSnFCLEtBQWxCLENBQWY7O0FBRHdCLHlCQU9DTCxjQUFJUSxRQUFKLENBQWFWLElBQWIsRUFBbUJDLE1BQW5CLENBUEQ7QUFBQSxRQU9oQlUsS0FQZ0Isa0JBT2hCQSxLQVBnQjtBQUFBLFFBT1RDLEtBUFMsa0JBT1RBLEtBUFM7O0FBUXhCLFFBQUlELFNBQVNBLE1BQU1FLE9BQW5CLEVBQTRCO0FBQzFCLGFBQU8sRUFBRUYsWUFBRixFQUFQO0FBQ0Q7QUFDRCxXQUFPLEVBQUVDLFlBQUYsRUFBUDtBQUNELEdBM0JZO0FBNEJiRyxTQTVCYSxtQkE0QkxDLElBNUJLLEVBNEJDO0FBQ1osUUFBTUMsTUFBTSxFQUFaO0FBQ0EsUUFBSUQsS0FBS0UsS0FBVCxFQUFnQjtBQUNkLFVBQUlGLEtBQUtFLEtBQUwsQ0FBV2IsS0FBZixFQUFzQjtBQUNwQlksWUFBSVQsSUFBSixHQUFXUSxLQUFLRSxLQUFMLENBQVdWLElBQXRCO0FBQ0FTLFlBQUlaLEtBQUosR0FBWVcsS0FBS0UsS0FBTCxDQUFXYixLQUF2QjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSVcsS0FBS0csTUFBVCxFQUFpQjtBQUNmLFVBQUlILEtBQUtHLE1BQUwsQ0FBWWQsS0FBaEIsRUFBdUI7QUFDckJZLFlBQUlULElBQUosR0FBV1EsS0FBS0csTUFBTCxDQUFZQyxXQUF2QjtBQUNBSCxZQUFJWixLQUFKLEdBQVlXLEtBQUtHLE1BQUwsQ0FBWWQsS0FBeEI7QUFDRDtBQUNGOztBQUVELFFBQUlXLEtBQUtLLE1BQVQsRUFBaUI7QUFDZixVQUFJTCxLQUFLSyxNQUFMLENBQVloQixLQUFoQixFQUF1QjtBQUNyQlksWUFBSVQsSUFBSixHQUFXUSxLQUFLSyxNQUFMLENBQVlELFdBQXZCO0FBQ0FILFlBQUlaLEtBQUosR0FBWVcsS0FBS0ssTUFBTCxDQUFZaEIsS0FBeEI7QUFDRDtBQUNGO0FBQ0QsUUFBSVcsS0FBS00sT0FBVCxFQUFrQjtBQUNoQixVQUFJTixLQUFLTSxPQUFMLENBQWFqQixLQUFqQixFQUF3QjtBQUN0QlksWUFBSVQsSUFBSixHQUFXUSxLQUFLTSxPQUFMLENBQWFGLFdBQXhCO0FBQ0FILFlBQUlaLEtBQUosR0FBWVcsS0FBS00sT0FBTCxDQUFhakIsS0FBekI7QUFDRDtBQUNGOztBQUVELFdBQU9ZLEdBQVA7QUFDRCxHQTFEWTtBQTJEYk0sc0JBM0RhLGdDQTJEUXZCLElBM0RSLEVBMkRjO0FBQ3pCLFFBQU1DLFNBQVNDLGNBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUMvQkMsYUFBT0gsY0FBSUksTUFBSixHQUNKRCxLQURJLEdBRUpFLFFBRkk7QUFEd0IsS0FBbEIsQ0FBZjs7QUFEeUIseUJBTUFMLGNBQUlRLFFBQUosQ0FBYVYsSUFBYixFQUFtQkMsTUFBbkIsQ0FOQTtBQUFBLFFBTWpCVSxLQU5pQixrQkFNakJBLEtBTmlCO0FBQUEsUUFNVkMsS0FOVSxrQkFNVkEsS0FOVTs7QUFPekIsUUFBSUQsU0FBU0EsTUFBTUUsT0FBbkIsRUFBNEI7QUFDMUIsYUFBTyxFQUFFRixZQUFGLEVBQVA7QUFDRDtBQUNELFdBQU8sRUFBRUMsWUFBRixFQUFQO0FBQ0Q7QUF0RVksQyIsImZpbGUiOiJ1c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gXCJqb2lcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB2YWxpZGF0ZVNpZ251cFNjaGVtYShib2R5KSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgIGVtYWlsOiBKb2kuc3RyaW5nKClcclxuICAgICAgICAuZW1haWwoKVxyXG4gICAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgICBuYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKGJvZHksIHNjaGVtYSk7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICByZXR1cm4geyBlcnJvciB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgdmFsdWUgfTtcclxuICB9LFxyXG4gIHZhbGlkYXRlTG9naW5TY2hlbWEoYm9keSkge1xyXG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICBlbWFpbDogSm9pLnN0cmluZygpXHJcbiAgICAgICAgLmVtYWlsKClcclxuICAgICAgICAucmVxdWlyZWQoKSxcclxuICAgICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUoYm9keSwgc2NoZW1hKTtcclxuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB2YWx1ZSB9O1xyXG4gIH0sXHJcbiAgZ2V0VXNlcih1c2VyKSB7XHJcbiAgICBjb25zdCByc3AgPSB7fTtcclxuICAgIGlmICh1c2VyLmxvY2FsKSB7XHJcbiAgICAgIGlmICh1c2VyLmxvY2FsLmVtYWlsKSB7XHJcbiAgICAgICAgcnNwLm5hbWUgPSB1c2VyLmxvY2FsLm5hbWU7XHJcbiAgICAgICAgcnNwLmVtYWlsID0gdXNlci5sb2NhbC5lbWFpbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh1c2VyLmdvb2dsZSkge1xyXG4gICAgICBpZiAodXNlci5nb29nbGUuZW1haWwpIHtcclxuICAgICAgICByc3AubmFtZSA9IHVzZXIuZ29vZ2xlLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIHJzcC5lbWFpbCA9IHVzZXIuZ29vZ2xlLmVtYWlsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVzZXIuZ2l0aHViKSB7XHJcbiAgICAgIGlmICh1c2VyLmdpdGh1Yi5lbWFpbCkge1xyXG4gICAgICAgIHJzcC5uYW1lID0gdXNlci5naXRodWIuZGlzcGxheU5hbWU7XHJcbiAgICAgICAgcnNwLmVtYWlsID0gdXNlci5naXRodWIuZW1haWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh1c2VyLnR3aXR0ZXIpIHtcclxuICAgICAgaWYgKHVzZXIudHdpdHRlci5lbWFpbCkge1xyXG4gICAgICAgIHJzcC5uYW1lID0gdXNlci50d2l0dGVyLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIHJzcC5lbWFpbCA9IHVzZXIudHdpdHRlci5lbWFpbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByc3A7XHJcbiAgfSxcclxuICB2YWxpZGF0ZUZvcmdvdFNjaGVtYShib2R5KSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgIGVtYWlsOiBKb2kuc3RyaW5nKClcclxuICAgICAgICAuZW1haWwoKVxyXG4gICAgICAgIC5yZXF1aXJlZCgpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUoYm9keSwgc2NoZW1hKTtcclxuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB2YWx1ZSB9O1xyXG4gIH1cclxufTtcclxuIl19