import React from "react";

class Logger extends React.Component {
  componentDidMount() {}
  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return <p>Logger</p>;
  }
}

export default Logger;
