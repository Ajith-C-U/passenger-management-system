import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule,
    Line
} from "react-simple-maps";
import map from "../../utils/worldmap.json"
import "./index.scss"

const MapChart = (location: any, setTooltipContent: any) => {


    const newFrom = location.location.viewDetails.from.split(',');
    const newTo = location.location.viewDetails.to.split(',');
    return (
        <div data-tip="">
            <ComposableMap
                projection="geoEqualEarth"
                projectionConfig={{
                    scale: 150,
                    center: [0, 0]
                }}
            >
                <Graticule stroke="#DDD" />
                <Geographies
                    geography={map}
                    fill="#D6D6DA"
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                >
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                data-tip={geo.properties.name}
                                onMouseEnter={() => {
                                    setTooltipContent(`${geo.properties.name}`);
                                }}
                                onMouseLeave={() => {
                                    setTooltipContent("");
                                }}
                                style={{
                                    default: {
                                        fill: "#D6D6DA",
                                        outline: "none"
                                    },
                                    hover: {
                                        fill: "#F53",
                                        outline: "none"
                                    },
                                    pressed: {
                                        fill: "#E42",
                                        outline: "none"
                                    }
                                }} />
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
            </ComposableMap>
        </div>
    );
};

export default MapChart;
