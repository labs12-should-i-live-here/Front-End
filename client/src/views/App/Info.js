import React, { Component } from "react";
import NavBarB from "../../components/Shared/NavbarB.js";
// import Search from "../../components/LandingSearch/Search.js";
import Map from "../../components/HomeView/Map/Map.js";


class About extends Component {
  render() {
    return (
      <div>
        <NavBarB />
        <div style={{ display: "none" }}>
          <Map />
        </div>
<div style={iStyle}>
<section>
<h1 style={ih1Style}>FEMA Disasters</h1>
<p style={ipStyle}>The Federal Emergency Management Agency (FEMA) Disaster Declarations Summary is a summarized dataset describing all federally declared disasters. This information begins with the first disaster declaration in 1953 and features all three disaster declaration types: major disaster, emergency and fire management assistance. The dataset includes declared recovery programs and geographic areas (county not available before 1964; Fire Management records are considered partial due to historical nature of the dataset).</p>
<p style={ipStyle}>We performed data wrangling on FEMA archive of disasters throughout the USA to consolidate data by <strong style={istrongStyle}>County FIPS Code</strong> and by Year and County FIPS Code. This data was in turn used for data visualization via choropleth maps.</p>
<h2 style={ih2Style}>Datasets:</h2>
<a style={iaStyle} href="https://www.fema.gov/media-library/assets/documents/28318" target="_blank">FEMA Disaster Declarations Summary</a>
<h2 style={ih2Style}>DFIPS Code:</h2>
FIPS codes are unique identifiers used by the US government for identifying states and counties (or county-equivalent areas).
Each county has a full FIPS code that contains two digits for the state and three for the county within that state.
</section>

<section>
<h1 style={ih1Style}>Azavea Climate API</h1>
<p style={ipStyle}>Azavea Climate API provides different models and scenarios for universally-recognized temperature and precipitation indicators. 
Azavea provides access to research and application development through free and open API.</p>
<h2 style={ih2Style}>Datasets:</h2>
<a style={iaStyle} href="https://cds.nccs.nasa.gov/nex-gddp/" target="_blank">NASA NEX-GDDP</a>
<br />
<a style={iaStyle} href="http://loca.ucsd.edu/" target="_blank">UCSD LOCA</a>
<br />
For better prediction accuracy with respect to location, we are using <strong style={istrongStyle}>LOCA dataset.</strong>
<h2 style={ih2Style}>Scenarios:</h2>
<p style={ipStyle}>A Representative Concentration Pathway (RCP) is a greenhouse gas concentration (not emissions) trajectory adopted by the IPCC for
its fifth Assessment Report (AR5) in 2014. For more details refer <a style={iaStyle} href="https://skepticalscience.com/rcp.php" target="_blank">Representative Concentration Pathways.</a></p>
<p style={ipStyle}>RCP4.5</p>
<p style={ipStyle}>RCP8.5</p>
<p style={ipStyle}>To avoid inflating the projections and for displaying more realistic estimate, we are using <strong style={istrongStyle}>RCP45</strong> scenario.</p>
<h2 style={ih2Style}>Indicators:</h2>
<p style={ipStyle}>There are many climate indicators available but we shall fetch and use <strong style={istrongStyle}>yearly aggregation of maximum and average values 
of dry_spells, extreme_cold_events, extreme_heat_events, extreme_precipitation_events and heat_wave_incidents from current year till 2100.</strong></p>
</section>

<section>
<h2 style={ih2Style}>Earthquake Risk</h2>
<p style={ipStyle}>This seismic hazard map is part of the 1997-2014 edition of the National Atlas of the United States, a publication by the US Department 
of the Interior. This map summarizes the quantitative information, available from geologic and geophysical sources, about seismic ground motion hazard in
the United States.</p>

<p style={ipStyle}>The data represent a model showing the probability that ground motion will reach a certain level. Specifically, this map layer
shows peak horizontal ground acceleration (the fastest measured change in speed, for a particle at ground level that is moving horizontally due to an
earthquake) with a 10% probability of exceedance in 50 years. Values are given in %g, where g is acceleration due to gravity, or 9.8 meters/second^2.</p>

<p style={ipStyle}>Dataset available at the <a style={iaStyle} href="https://geo.nyu.edu/catalog/stanford-rm034qp5477" target="_blank">NYU Spatial Data Repository</a>,
and more information about
the dataset available at the <a style={iaStyle} href="https://purl.stanford.edu/rm034qp5477" target="_blank">Stanford Digital Repository.`</a></p>
</section>

<section>
<h2 style={ih2Style}>Earthquake events</h2>
<p style={ipStyle}>We got our list of earthquakes from the Advanced National Seismic System (ANSS), a collaboration of the U.S. Geological Survey (USGS)
and regional, state, and academic partners that collects and analyzes data on significant earthquakes to provide near real-time information to emergency
responders and officials, the news media, and the public.  We used a <a style={iaStyle} href="https://github.com/usgs/libcomcat" target="_blank">Python API</a> to query their
<a style={iaStyle} href="https://earthquake.usgs.gov/data/comcat/" target="_blank">Comprehensive Earthquake Catalog</a>, collecting all the
earthquakes in the coterminous 48 states, Alaska, and Hawaii.</p>

<p style={ipStyle}>We collected all the earthquake events of magnitude greater than 4.0 on the Richter scale that happened between 1996 and 2018.</p>
</section>

<section>
<h2 style={ih2Style}>NOAA extreme weather events</h2>
<p style={ipStyle}>We used a <a style={iaStyle} href="https://www.climate.gov/maps-data/dataset/severe-storms-and-extreme-events-data-table" target="_blank">database of severe storms and extreme events</a> from the National Oceanic and Atmospheric Administration (NOAA).
These data are collected by the National Weather Service. Weather offices detect events using instruments and visual observations, 
and they also receive information from storm spotters—people who call in to report severe events. Tornadoes, high wind speeds, 
and storm cell data are collected with radar.</p>

<ul>
<strong style={istrongStyle}>Events in the official NOAA database are selected based upon the following criteria:</strong>
<li>Storm has sufficient intensity to cause loss of life, injuries, significant property damage, and/or disruption to commerce.</li> 
<li>Storm event contains rare, unusual, weather phenomena or significant meteorological events, such as extreme temperature.</li>
</ul>
<p style={ipStyle}>The data itself is available <a style={iaStyle} href="https://www1.ncdc.noaa.gov/pub/data/swdi/stormevents/csvfiles/" target="_blank">here</a>,
 and the corresponding metadata is <a style={iaStyle} href="https://www1.ncdc.noaa.gov/pub/data/swdi/stormevents/csvfiles/Storm-Data-Export-Format.pdf" target="_blank">here</a>.
Our county-by-county maps are colored according to the logarithm of event counts.
We counted all the events that occurred in each county between 1996 and 2018, aggregated them in a few broad categories, and created a color display that
varies according to the base-10 natural logarithm of the event count.  NOAA classified extreme weather events into 48 categories,
which we combined into a few broad categories as follows:</p>
<div>
<table style={itableStyle}>  
<tbody>
<tr style={itrStyle}>
  <th>Displayed category</th>
  <th>NOAA extreme weather event categories</th>
</tr>

<tr>
  <td>Flood</td>
  <td>Flood, Flash Flood, Coastal Flood, Storm Surge/Tide, Lakeshore Flood, Debris Flow</td>
</tr>

<tr>
  <td>Storm</td>
  <td>Thunderstorm Wind, Marine Thunderstorm Wind, Marine High Wind, High Wind, Funnel Cloud, Dust Storm, Strong Wind, Dust Devil, 
    Tropical Depression, Lightning, Tropical Storm, High Surf, Heavy Rain, Hail, Marine Hail, Marine Strong Wind, Waterspout</td>
</tr>

<tr>
  <td>Winter weather</td>
  <td>Winter Storm, Heavy Snow, Frost/Freeze, Freezing Fog, Ice Storm, Sleet, Lake-Effect Snow, Cold/Wind Chill, Extreme Cold/Wind Chill, Blizzard</td>
</tr>

<tr>
  <td>Fire</td>
  <td>Wildfire, Dense Smoke</td>
</tr>

<tr>
  <td>Heat</td>
  <td>Heat, Excessive Heat</td>
</tr>

<tr>
  <td>Hurricane</td>
  <td>Hurricane, Hurricane (typhoon)</td>
</tr>
</tbody>
</table>
</div>

<p style={ipStyle}>We also collected the total number of deaths, injuries, and property caused by extreme weather events in each county over the
same timeframe.  We counted both direct and indirect deaths/injuries.</p>
</section>

<section>
<h2 style={ih2Style}>County shapes, names, and codes</h2>
<p style={ipStyle}>We got our map of the shapes of US counties from <a style={iaStyle} href="https://community.esri.com/thread/24614" target="_blank">this source</a>,
which itself is a
lower-resolution version of a map published by
the <a style={iaStyle} href="https://www.arcgis.com/home/item.html?id=a00d6b6149b34ed3b833e10fb72ef47b" target="_blank">Environmental Systems Research Institute</a>.
 The following explanation for what counts as a county is
from the 
<a style={iaStyle} href="https://catalog.data.gov/dataset/tiger-line-shapefile-2016-nation-u-s-current-county-and-equivalent-national-shapefile" target="_blank">US Census Bureau</a></p>
 
<p style={ipStyle}>The primary legal divisions of most states are termed counties. In Louisiana, these divisions are known as parishes.
In Alaska, which has no counties, the equivalent entities are the organized boroughs, city and boroughs, municipalities, and for the unorganized area,
census areas. The latter are delineated cooperatively for statistical purposes by the State of Alaska and the Census Bureau.
In four states (Maryland, Missouri, Nevada, and Virginia), there are one or more incorporated places that are independent of any county
organization and thus constitute primary divisions of their states. These incorporated places are known as independent cities and are treated
as equivalent entities for purposes of data presentation. The District of Columbia and Guam have no primary divisions, and each area is
considered an equivalent entity for purposes of data presentation.</p>
</section>        
</div>
</div>
    );
  }
}
const iStyle = {
    background: "floralwhite",
    marginTop: "50px",
    color: "black",
    padding: "1.5rem",
    justifyContent: "center",
    fontSize: "1.2em"
  };
  const ipStyle = {
    marginTop: "10px",
  };
  const ih1Style = {
    marginTop: "10px",
    fontWeight: "bold",
  };
  const ih2Style = {
    marginTop: "10px",
    fontWeight: "bold",
  };
  const iaStyle = {
    marginTop: "10px",
  };
  const itableStyle = {
    width:"100%",
  };
  const istrongStyle = {
    fontWeight: "bold"
  };
  const itrStyle = {
    marginTop: "5px"
  };
export default About;