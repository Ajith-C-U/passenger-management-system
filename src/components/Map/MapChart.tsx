import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography,
    Graticule,
    Line
} from "react-simple-maps";
import map from "../../utils/worldmap.json"

const MapChart = (location: any) => {
    const newFrom = location.location.viewDetails.from.split(',');
    const newTo = location.location.viewDetails.to.split(',');
    return (
        <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{
                scale: 150,
                center: [0, 0]
            }}
        >
            <ZoomableGroup>
                <Graticule stroke="#DDD" />
                <Geographies
                    geography={map}
                    fill="#D6D6DA"
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                >
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
                <Line
                    from={[newFrom[0], newFrom[1]]}
                    to={[newTo[0], newTo[1]]}
                    stroke="#FF5533"
                    strokeWidth={4}
                    strokeLinecap="round"
                />
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default MapChart;
