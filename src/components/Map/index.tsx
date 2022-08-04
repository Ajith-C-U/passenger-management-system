import MapChart from "./MapChart";

const Map = (viewDetails: any) => {

  return (
    <div>
      <MapChart location={viewDetails} />
    </div>
  );
}

export default Map;