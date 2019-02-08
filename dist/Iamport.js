"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var IamportComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IamportComponent, _React$Component);

  function IamportComponent() {
    var _this;

    _classCallCheck(this, IamportComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IamportComponent).apply(this, arguments));

    _this.loadJquery = function () {
      var jqueryLoaded = _this.props.jqueryLoaded; // 이미 jquery를 사용하고 있다면 다시 import할 필요가 없다.

      if (jqueryLoaded) {
        _this.loadIamportSdk();

        return;
      }

      (function (d, s, id, cb) {
        var element = d.getElementsByTagName(s)[0];
        var fjs = element;
        var js = element;
        js = d.createElement(s);
        js.id = id; // tslint:disable-next-line:max-line-length

        js.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        fjs.parentNode.insertBefore(js, fjs);
        js.onload = cb;
      })(document, 'script', 'iamport-jquery', function () {
        _this.loadIamportSdk();
      });
    };

    _this.loadIamportSdk = function () {
      var identificationCode = _this.props.identificationCode;

      (function (d, s, id, cb) {
        var element = d.getElementsByTagName(s)[0];
        var fjs = element;
        var js = element;
        js = d.createElement(s);
        js.id = id; // tslint:disable-next-line:max-line-length

        js.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.5.js";
        fjs.parentNode.insertBefore(js, fjs);
        js.onload = cb;
      })(document, 'script', 'iamport-jssdk', function () {
        var impInstance = window.IMP;
        impInstance.init(identificationCode);
      });
    };

    _this.requestPay = function () {
      var _this$props = _this.props,
          params = _this$props.params,
          onSuccess = _this$props.onSuccess,
          onFailed = _this$props.onFailed,
          onCompleted = _this$props.onCompleted;
      var impInstance = window.IMP;
      impInstance.request_pay(params, function (rsp) {
        if (rsp.success) {
          if (onSuccess) {
            onSuccess(rsp);
          }
        } else {
          if (onFailed) {
            onFailed(rsp);
          }
        }

        if (onCompleted) {
          onCompleted(rsp);
        }
      });
    };

    return _this;
  }

  _createClass(IamportComponent, [{
    key: "sdkLoaded",
    value: function sdkLoaded() {
      this.setState({
        sdkLoaded: true
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (document.getElementById('iamport-jssdk')) {
        this.sdkLoaded();
      }

      this.loadJquery();
      var iamportRoot = document.getElementById('iamport');

      if (!iamportRoot) {
        iamportRoot = document.createElement('div');
        iamportRoot.id = 'iamport';
        document.body.appendChild(iamportRoot);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.render({
        onClick: this.requestPay
      });
    }
  }]);

  return IamportComponent;
}(React.Component);

exports.default = IamportComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklhbXBvcnQuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJSZWFjdCIsInJlcXVpcmUiLCJJYW1wb3J0Q29tcG9uZW50IiwiYXJndW1lbnRzIiwibG9hZEpxdWVyeSIsImpxdWVyeUxvYWRlZCIsInByb3BzIiwibG9hZElhbXBvcnRTZGsiLCJkIiwicyIsImlkIiwiY2IiLCJlbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmanMiLCJqcyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwib25sb2FkIiwiZG9jdW1lbnQiLCJpZGVudGlmaWNhdGlvbkNvZGUiLCJpbXBJbnN0YW5jZSIsIndpbmRvdyIsIklNUCIsImluaXQiLCJyZXF1ZXN0UGF5IiwicGFyYW1zIiwib25TdWNjZXNzIiwib25GYWlsZWQiLCJvbkNvbXBsZXRlZCIsInJlcXVlc3RfcGF5IiwicnNwIiwic3VjY2VzcyIsInNldFN0YXRlIiwic2RrTG9hZGVkIiwiZ2V0RWxlbWVudEJ5SWQiLCJpYW1wb3J0Um9vdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbmRlciIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxFQUFBQSxLQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxJQUFNQyxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXJCOztJQUNNQyxnQjs7Ozs7QUFDRiw4QkFBYztBQUFBOztBQUFBOztBQUNWLDJGQUFTQyxTQUFUOztBQUNBLFVBQUtDLFVBQUwsR0FBa0IsWUFBTTtBQUFBLFVBQ1pDLFlBRFksR0FDSyxNQUFLQyxLQURWLENBQ1pELFlBRFksRUFFcEI7O0FBQ0EsVUFBSUEsWUFB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QUU7QUFBYixPQUFkO0FBQ0g7Ozt3Q0FDbUI7QUFDaEIsVUFBSWYsUUFBUSxDQUFDZ0IsY0FBVCxDQUF3QixlQUF4QixDQUFKLEVBQThDO0FBQzFDLGFBQUtELFNBQUw7QUFDSDs7QUFDRCxXQUFLaEMsVUFBTDtBQUNBLFVBQUlrQyxXQUFXLEdBQUdqQixRQUFRLENBQUNnQixjQUFULENBQXdCLFNBQXhCLENBQWxCOztBQUNBLFVBQUksQ0FBQ0MsV0FBTCxFQUFrQjtBQUNkQSxRQUFBQSxXQUFXLEdBQUdqQixRQUFRLENBQUNMLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBc0IsUUFBQUEsV0FBVyxDQUFDNUIsRUFBWixHQUFpQixTQUFqQjtBQUNBVyxRQUFBQSxRQUFRLENBQUNrQixJQUFULENBQWNDLFdBQWQsQ0FBMEJGLFdBQTFCO0FBQ0g7QUFDSjs7OzZCQUNRO0FBQ0wsYUFBTyxLQUFLaEMsS0FBTCxDQUFXbUMsTUFBWCxDQUFrQjtBQUNyQkMsUUFBQUEsT0FBTyxFQUFFLEtBQUtmO0FBRE8sT0FBbEIsQ0FBUDtBQUdIOzs7O0VBaEYwQjNCLEtBQUssQ0FBQzJDLFM7O0FBa0ZyQzdDLE9BQU8sQ0FBQzhDLE9BQVIsR0FBa0IxQyxnQkFBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY2xhc3MgSWFtcG9ydENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubG9hZEpxdWVyeSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsganF1ZXJ5TG9hZGVkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgLy8g7J2066+4IGpxdWVyeeulvCDsgqzsmqntlZjqs6Ag7J6I64uk66m0IOuLpOyLnCBpbXBvcnTtlaAg7ZWE7JqU6rCAIOyXhuuLpC5cbiAgICAgICAgICAgIGlmIChqcXVlcnlMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRJYW1wb3J0U2RrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKChkLCBzLCBpZCwgY2IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBmanMgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGxldCBqcyA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAganMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7XG4gICAgICAgICAgICAgICAganMuaWQgPSBpZDtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICAgICAganMuc3JjID0gYGh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0xLjEyLjQubWluLmpzYDtcbiAgICAgICAgICAgICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XG4gICAgICAgICAgICAgICAganMub25sb2FkID0gY2I7XG4gICAgICAgICAgICB9KShkb2N1bWVudCwgJ3NjcmlwdCcsICdpYW1wb3J0LWpxdWVyeScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRJYW1wb3J0U2RrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5sb2FkSWFtcG9ydFNkayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWRlbnRpZmljYXRpb25Db2RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgKChkLCBzLCBpZCwgY2IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBmanMgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGxldCBqcyA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAganMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7XG4gICAgICAgICAgICAgICAganMuaWQgPSBpZDtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICAgICAganMuc3JjID0gYGh0dHBzOi8vY2RuLmlhbXBvcnQua3IvanMvaWFtcG9ydC5wYXltZW50LTEuMS41LmpzYDtcbiAgICAgICAgICAgICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XG4gICAgICAgICAgICAgICAganMub25sb2FkID0gY2I7XG4gICAgICAgICAgICB9KShkb2N1bWVudCwgJ3NjcmlwdCcsICdpYW1wb3J0LWpzc2RrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltcEluc3RhbmNlID0gd2luZG93LklNUDtcbiAgICAgICAgICAgICAgICBpbXBJbnN0YW5jZS5pbml0KGlkZW50aWZpY2F0aW9uQ29kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UGF5ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXJhbXMsIG9uU3VjY2Vzcywgb25GYWlsZWQsIG9uQ29tcGxldGVkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgY29uc3QgaW1wSW5zdGFuY2UgPSB3aW5kb3cuSU1QO1xuICAgICAgICAgICAgaW1wSW5zdGFuY2UucmVxdWVzdF9wYXkocGFyYW1zLCAocnNwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJzcC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyhyc3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAob25GYWlsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmFpbGVkKHJzcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9uQ29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkKHJzcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHNka0xvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNka0xvYWRlZDogdHJ1ZSB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWFtcG9ydC1qc3NkaycpKSB7XG4gICAgICAgICAgICB0aGlzLnNka0xvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZEpxdWVyeSgpO1xuICAgICAgICBsZXQgaWFtcG9ydFJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWFtcG9ydCcpO1xuICAgICAgICBpZiAoIWlhbXBvcnRSb290KSB7XG4gICAgICAgICAgICBpYW1wb3J0Um9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWFtcG9ydFJvb3QuaWQgPSAnaWFtcG9ydCc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlhbXBvcnRSb290KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnJlbmRlcih7XG4gICAgICAgICAgICBvbkNsaWNrOiB0aGlzLnJlcXVlc3RQYXksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElhbXBvcnRDb21wb25lbnQ7XG4iXX0=