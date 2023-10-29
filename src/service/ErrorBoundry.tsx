import React from 'react';

type StateType = {
  hasError: boolean;
};

type PropsType = {
  children: React.ReactNode;
};

class ErrorBoundry extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_: Error): StateType {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.log('error: ', error);
    // eslint-disable-next-line no-console
    console.log('errorInfo: ', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something wen wrong</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
