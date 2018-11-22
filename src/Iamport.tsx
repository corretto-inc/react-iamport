import * as React from 'react';

export interface IamportComponentRenderProps {
  onClick: () => void;
}

export interface IamportProps {
  identificationCode: string;
  params: object;
  jqueryLoaded?: boolean;

  onSuccess?: (response: any) => void;
  onFailed?: (response: any) => void;
  onCompleted?: (response: any) => void;
  render: (renderProps: IamportComponentRenderProps) => React.ReactNode;
}

interface State {
  sdkLoaded: boolean;
}

interface Iamport {
  init: (identificationCode: string) => void;
  request_pay: (params: object, callback: (response: any) => void) => void;
}

export default class IamportComponent extends React.Component<
  IamportProps,
  State
> {
  loadJquery = () => {
    const { jqueryLoaded } = this.props;

    // 이미 jquery를 사용하고 있다면 다시 import할 필요가 없다.
    if (jqueryLoaded) {
      this.loadIamportSdk();
      return;
    }
    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs: any = element;
      let js: any = element;

      js = d.createElement(s);
      js.id = id;
      // tslint:disable-next-line:max-line-length
      js.src = `https://code.jquery.com/jquery-1.12.4.min.js`;
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'iamport-jquery', () => {
      this.loadIamportSdk();
    });
  }
  loadIamportSdk = () => {
    const { identificationCode } = this.props;

    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs: any = element;
      let js: any = element;

      js = d.createElement(s);
      js.id = id;
      // tslint:disable-next-line:max-line-length
      js.src = `https://cdn.iamport.kr/js/iamport.payment-1.1.5.js`;
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'iamport-jssdk', () => {
      const impInstance: Iamport = (window as any).IMP;
      impInstance.init(identificationCode);
    });
  }

  requestPay = () => {
    const { params, onSuccess, onFailed, onCompleted } = this.props;
    const impInstance: Iamport = (window as any).IMP;

    impInstance.request_pay(params, (rsp: any) => {
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

  public render() {
    return this.props.render({
      onClick: this.requestPay,
    });
  }
}
