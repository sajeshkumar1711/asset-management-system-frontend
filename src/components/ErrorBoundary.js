import React from 'react';
import { errorMessage } from '../config';

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true
    }
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   console.log(errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-sm-12 d-flex justify-content-center align-items-center">
              <h1 className="display-4 font-weight-bold">{ errorMessage }</h1>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
