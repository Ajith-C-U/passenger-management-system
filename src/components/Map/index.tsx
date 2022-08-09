import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";
import { useState } from "react";

const Map = (viewDetails: any) => {

  const [content, setContent] = useState("");

  return (
    <div className="mt-3">
      <MapChart location={viewDetails} setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default Map;