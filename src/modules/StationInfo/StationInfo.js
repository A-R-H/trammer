import React, { Component } from "react";
import "./StationInfo.css";
import TramInfo from "../TramInfo/TramInfo";

class StationInfo extends Component {
  render() {
    const { dids, station } = this.props;
    const s = dids.length === 1 ? "" : "s";
    return (
      <div className="stationinfobox">
        <p id="stationname">{`${station} - ${dids.length} tram${s}`}</p>
        {dids.map((did, i) => {
          return (
            <TramInfo
              key={i}
              dest={did.dest}
              wait={did.wait}
              carr={did.carr}
              status={did.stat}
              line={did.line}
            />
          );
        })}
      </div>
    );
  }
}

export default StationInfo;
