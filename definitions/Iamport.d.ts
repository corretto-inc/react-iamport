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
export default class IamportComponent extends React.Component<IamportProps, State> {
    loadJquery: () => void;
    loadIamportSdk: () => void;
    requestPay: () => void;
    sdkLoaded(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
}
export {};
//# sourceMappingURL=Iamport.d.ts.map