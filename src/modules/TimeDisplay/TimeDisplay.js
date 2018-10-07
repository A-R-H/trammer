import React, { Component } from "react";
import "./TimeDisplay.css";
import StationInfo from "../StationInfo/StationInfo";
import TramTimes from "../../services/TramTimeServices";

class TimeDisplay extends Component {
  state = {
    gotDids: false
  };

  async componentDidMount() {
    await this.getTramTimes();
  }

  render() {
    const { gotDids, traffDids, cornDids, deansDids } = this.state;
    return (
      <div id="mainbox">
        <div id="timedisplaybox">
          {gotDids && (
            <div className="didsbox">
              {traffDids ? (
                <StationInfo dids={traffDids} station="Trafford Bar" />
              ) : (
                <React.Fragment />
              )}
              {cornDids ? (
                <StationInfo dids={cornDids} station="Cornbrook" />
              ) : (
                <React.Fragment />
              )}
              {deansDids ? (
                <StationInfo dids={deansDids} station="Deansgate" />
              ) : (
                <React.Fragment />
              )}
            </div>
          )}
          {!gotDids && <div className="didsbox">Loading</div>}
        </div>
        <div id="refreshbox">
          <button onClick={this.getTramTimes}>Refresh</button>
        </div>
      </div>
    );
  }

  getTramTimes = async () => {
    TramTimes.Get().then(({ data }) => {
      const { dids } = data;
      this.setState({
        gotDids: true,
        traffDids: dids[0],
        cornDids: dids[1],
        deansDids: dids[2]
      });
    });
  };
}

export default TimeDisplay;
