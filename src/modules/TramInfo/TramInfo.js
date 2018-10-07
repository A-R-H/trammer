import React, { Component } from "react";
import "./TramInfo.css";

class TramInfo extends Component {
  render() {
    const { wait, carr, status } = this.props;
    const due = status === "Due";
    return (
      <div>
        {due ? (
          <p>{`${carr} due in ${wait} minutes`}</p>
        ) : (
          <p>{`${carr} ${status}`}</p>
        )}
      </div>
    );
  }
}

export default TramInfo;
