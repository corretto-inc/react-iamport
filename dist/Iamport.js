"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class IamportComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.loadJquery = () => {
            const { loadedJquery } = this.props;
            // 이미 jquery를 사용하고 있다면 다시 import할 필요가 없다.
            if (loadedJquery) {
                this.loadIamportSdk();
                return;
            }
            ((d, s, id, cb) => {
                const element = d.getElementsByTagName(s)[0];
                const fjs = element;
                let js = element;
                js = d.createElement(s);
                js.id = id;
                // tslint:disable-next-line:max-line-length
                js.src = `https://code.jquery.com/jquery-1.12.4.min.js`;
                fjs.parentNode.insertBefore(js, fjs);
                js.onload = cb;
            })(document, 'script', 'iamport-jquery', () => {
                this.loadIamportSdk();
            });
        };
        this.loadIamportSdk = () => {
            const { identificationCode } = this.props;
            ((d, s, id, cb) => {
                const element = d.getElementsByTagName(s)[0];
                const fjs = element;
                let js = element;
                js = d.createElement(s);
                js.id = id;
                // tslint:disable-next-line:max-line-length
                js.src = `https://cdn.iamport.kr/js/iamport.payment-1.1.5.js`;
                fjs.parentNode.insertBefore(js, fjs);
                js.onload = cb;
            })(document, 'script', 'iamport-jssdk', () => {
                const impInstance = window.IMP;
                impInstance.init(identificationCode);
            });
        };
        this.requestPay = () => {
            const { params, onSuccess, onFailed, onCompleted } = this.props;
            const impInstance = window.IMP;
            impInstance.request_pay(params, (rsp) => {
                if (rsp.success) {
                    if (onSuccess) {
                        onSuccess(rsp);
                    }
                }
                else {
                    if (onFailed) {
                        onFailed(rsp);
                    }
                }
                if (onCompleted) {
                    onCompleted(rsp);
                }
            });
        };
    }
    sdkLoaded() {
        this.setState({ sdkLoaded: true });
    }
    componentDidMount() {
        if (document.getElementById('iamport-jssdk')) {
            this.sdkLoaded();
        }
        this.loadJquery();
        let iamportRoot = document.getElementById('iamport');
        if (!iamportRoot) {
            iamportRoot = document.createElement('div');
            iamportRoot.id = 'iamport';
            document.body.appendChild(iamportRoot);
        }
    }
    render() {
        return this.props.render({
            onClick: this.requestPay,
        });
    }
}
exports.default = IamportComponent;
