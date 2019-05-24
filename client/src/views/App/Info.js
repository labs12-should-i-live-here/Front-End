import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <div>
        <div style={iStyle}>
          {/* <section style={isectionStyle}>
            <h1 style={ih1Style}></h1>
            <p style={ipStyle}></p>
          </section> */}
          <section style={isectionStyle}>
            <h1 style={ih1Style}>Map Layers</h1>
            <p style={ipStyle}>
              Our layers show the risks of various natural disasters for each
              county in the country. They come from a few different sources and
              mean different things.
            </p>
          </section>
          <section style={isectionStyle}>
            <h1 style={ih1Style}>Danger</h1>
            <p style={ipStyle}>
              This layer assigns each county an overall subjective danger score
              between 1 and 6. This score combines all our records of past
              events for that county, and weigh events by their magnitude when
              that number was available. We calculated the score by the
              following algorithm.
            </p>
            <br />
            <ol>
              <li>
                1. Sum the number of events for the following categories: Winter
                Weather, Storm, Flood, Fire, Heat, and Drought (from the NOAA
                dataset, see below).
              </li>
              <li>
                2. Add that to 100 times the number of Hurricanes that were
                declared federal disasters (from the FEMA dataset, see below).
              </li>
              <li>
                3. Normalize and scale the base-10 logarithm of that number
                (which we call ‘storms’) so that the distribution over all
                counties has a standard deviation of 1 and a mean of 0.
              </li>
              <li>
                4. Calculate the energy released by all earthquakes above
                magnitude 4.0, and add up that energy per county. Normalize and
                scale as before.
              </li>
              <li>
                5. Calculate the damage caused by tornadoes, using an
                exponential scale that gives ~300x more weight to category 5
                tornadoes as to category 0. Normalize and scale as before.
              </li>
              <li>
                6. Add up the normalized numbers, creating a normal distribution
                with a mean of 0 and a standard deviation of 1.
              </li>
              <li>
                7. Bin the results into six symmetrical bins around the mean,
                with bin boundaries at 0, 1, and 2 standard deviations from the
                mean.
              </li>
            </ol>
            <p style={ipStyle}>
              We chose this method because it allows us to aggregate events by
              magnitude (when available) and create a normal distribution of
              danger levels from what would otherwise be extremely lopsided data
              dominated by zeros and by extreme events. This is necessary
              because the natural distribution of all these events is
              log-normal. Thus, our custom danger metric highlights the counties
              around the USA that suffer a disproportionate number of severe
              events. This layer displays the bins.
            </p>
          </section>
          <section style={isectionStyle}>
            <h1 style={ih1Style}>Cost</h1>
            <p style={ipStyle}>
              In order to create a single metric of the costs associated with
              natural disasters, we used the NOAA dataset (see below) and
              recorded the property damages, injuries, and deaths associated
              with all the extreme weather events between 1996 and 2018.
            </p>
            <p style={ipStyle}>
              We then turned everything into dollars. For dollars, we used the{" "}
              <a
                style={iaStyle}
                href="https://en.wikipedia.org/wiki/Value_of_life#United_States"
                target="_blank"
              >
                statistical value of a human life in the USA
              </a>
              , which we approximate as 9 million dollars. We turned injuries
              into dollars by assuming that an injury costs on average 1 year of
              quality-adjusted life, which is commonly set at 50,000 dollars. I
              scaled and normalized the base-10 logarithm of this total cost,
              and binned it as described before. The result is also normally
              distributed throughout the county. This layer displays the bins.
            </p>
          </section>

          <section style={isectionStyle}>
            <h2 style={ih2Style}>Earthquakes</h2>
            <p style={ipStyle}>
              We got our list of earthquakes from the Advanced National Seismic
              System (ANSS), a collaboration of the U.S. Geological Survey
              (USGS) and regional, state, and academic partners that collects
              and analyzes data on significant earthquakes to provide near
              real-time information to emergency responders and officials, the
              news media, and the public. We used a{" "}
              <a
                style={iaStyle}
                href="https://github.com/usgs/libcomcat"
                target="_blank"
              >
                Python API
              </a>{" "}
              to query their
              <a
                style={iaStyle}
                href="https://earthquake.usgs.gov/data/comcat/"
                target="_blank"
              >
                Comprehensive Earthquake Catalog
              </a>
              , collecting all the earthquakes in the coterminous 48 states,
              Alaska, and Hawaii. We collected all the earthquake events of
              magnitude greater than 4.0 on the Richter scale that happened
              between 1996 and 2018. This layer displays a heatmap of those
              individual earthquake events.
            </p>
          </section>

          <section style={isectionStyle}>
            <h1 style={ih1Style}>Tornadoes</h1>
            <p style={ipStyle}>
              This layer displays individual tornado events from the same NOAA
              data that created the tornado risk layer. That layer aggregated
              tornadoes by county. This layer displays them individually, with
              colors proportional to the tornado magnitude. Greener points are
              lower intensity, redder points are higher.
            </p>
          </section>

          <section style={isectionStyle}>
            <h2 style={ih2Style}>Earthquake Risk</h2>
            <p style={ipStyle}>
              This seismic hazard map is part of the 1997-2014 edition of the
              National Atlas of the United States, a publication by the US
              Department of the Interior. This map summarizes the quantitative
              information, available from geologic and geophysical sources,
              about seismic ground motion hazard in the United States.
            </p>

            <p style={ipStyle}>
              The data represent a model showing the probability that ground
              motion will reach a certain level. Specifically, this map layer
              shows peak horizontal ground acceleration (the fastest measured
              change in speed, for a particle at ground level that is moving
              horizontally due to an earthquake) with a 10% probability of
              exceedance in 50 years. Values are given in %g, where g is
              acceleration due to gravity, or 9.8 meters/second^2.
            </p>

            <p style={ipStyle}>
              Dataset available at the{" "}
              <a
                style={iaStyle}
                href="https://geo.nyu.edu/catalog/stanford-rm034qp5477"
                target="_blank"
              >
                NYU Spatial Data Repository
              </a>
              , and more information about the dataset available at the{" "}
              <a
                style={iaStyle}
                href="https://purl.stanford.edu/rm034qp5477"
                target="_blank"
              >
                Stanford Digital Repository.`
              </a>
            </p>
          </section>

          <section style={isectionStyle}>
            <h1 style={ih1Style}>Hurricane Risk</h1>
            <p style={ipStyle}>
              Our data on hurricanes comes from the Federal Emergency Management
              Agency (FEMA){" "}
              <a
                style={iaStyle}
                href="https://www.fema.gov/media-library/assets/documents/28318"
                target="_blank"
              >
                Disaster Declarations Summary
              </a>
              , a summarized dataset describing all federally declared
              disasters. We collected data for 1996-2018 and summed up all the
              times that a hurricane was declared a federal disaster for that
              county. This layer displays the number of events.
            </p>
          </section>

          <section style={isectionStyle}>
            <h2 style={ih2Style}>
              Tornado, Major Storm, Flood, Winter Weather, Fire, and Heat Wave
              Risks
            </h2>
            <p style={ipStyle}>
              We used a{" "}
              <a
                style={iaStyle}
                href="https://www.climate.gov/maps-data/dataset/severe-storms-and-extreme-events-data-table"
                target="_blank"
              >
                database of severe storms and extreme events
              </a>{" "}
              from the National Oceanic and Atmospheric Administration (NOAA).
              These data are collected by the National Weather Service. Weather
              offices detect events using instruments and visual observations,
              and they also receive information from storm spotters—people who
              call in to report severe events. Tornadoes, high wind speeds, and
              storm cell data are collected with radar.
            </p>

            <ul>
              <strong style={istrongStyle}>
                Events in the official NOAA database are selected based upon the
                following criteria:
              </strong>
              <li>
                Storm has sufficient intensity to cause loss of life, injuries,
                significant property damage, and/or disruption to commerce.
              </li>
              <li>
                Storm event contains rare, unusual, weather phenomena or
                significant meteorological events, such as extreme temperature.
              </li>
            </ul>
            <p style={ipStyle}>
              The data itself is available{" "}
              <a
                style={iaStyle}
                href="https://www1.ncdc.noaa.gov/pub/data/swdi/stormevents/csvfiles/"
                target="_blank"
              >
                here
              </a>
              , and the corresponding metadata is{" "}
              <a
                style={iaStyle}
                href="https://www1.ncdc.noaa.gov/pub/data/swdi/stormevents/csvfiles/Storm-Data-Export-Format.pdf"
                target="_blank"
              >
                here
              </a>
              . Our county-by-county maps are colored according to the logarithm
              of event counts. We counted all the events that occurred in each
              county between 1996 and 2018, aggregated them in a few broad
              categories, and created a color display that varies according to
              the base-10 natural logarithm of the event count. NOAA classified
              extreme weather events into 48 categories, which we combined into
              a few broad categories as follows:
            </p>
            <br />
            <div>
              <table style={itableStyle}>
                <tbody>
                  <tr style={itrStyle}>
                    <th>Category</th>
                    <th>NOAA extreme weather event categories</th>
                  </tr>

                  <tr style={itrStyle}>
                    <td>Flood</td>
                    <td>
                      Flood, Flash Flood, Coastal Flood, Storm Surge/Tide,
                      Lakeshore Flood, Debris Flow
                    </td>
                  </tr>

                  <tr style={itrStyle}>
                    <td>Storm</td>
                    <td>
                      Thunderstorm Wind, Marine Thunderstorm Wind, Marine High
                      Wind, High Wind, Funnel Cloud, Dust Storm, Strong Wind,
                      Dust Devil, Tropical Depression, Lightning, Tropical
                      Storm, High Surf, Heavy Rain, Hail, Marine Hail, Marine
                      Strong Wind, Waterspout
                    </td>
                  </tr>

                  <tr style={itrStyle}>
                    <td>Winter weather</td>
                    <td>
                      Winter Storm, Heavy Snow, Frost/Freeze, Freezing Fog, Ice
                      Storm, Sleet, Lake-Effect Snow, Cold/Wind Chill, Extreme
                      Cold/Wind Chill, Blizzard
                    </td>
                  </tr>

                  <tr style={itrStyle}>
                    <td>Fire</td>
                    <td>Wildfire, Dense Smoke</td>
                  </tr>

                  <tr style={itrStyle}>
                    <td>Heat</td>
                    <td>Heat, Excessive Heat</td>
                  </tr>

                  <tr style={itrStyle}>
                    <td>Hurricane</td>
                    <td>Hurricane, Hurricane (typhoon)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <p style={ipStyle}>
              We also collected the total number of deaths, injuries, and
              property caused by extreme weather events in each county over the
              same timeframe. We counted both direct and indirect
              deaths/injuries.
            </p> */}
          </section>

          <section style={isectionStyle}>
            <h1 style={ih1Style}>Past events for a given county</h1>
            <p style={ipStyle}>
              Our past event graphs for individual counties contain data from
              the NOAA dataset described above, separated by year between 1996
              and 2018. Total events for the county were summed.
            </p>
          </section>

          <section style={isectionStyle}>
            <h1 style={ih1Style}>Predicted events for a given location</h1>
            <p style={ipStyle}>
              Predicted events are not associated with counties, but with
              specific locations where the user double-clicks. Those coordinates
              are used as a query for a third-party API, the{" "}
              <a
                style={iaStyle}
                href="https://climate.azavea.com/"
                target="_blank"
              >
                Azavea Climate API
              </a>
              , which provides projections for that location. Azavea gives us
              access predictions from the{" "}
              <a style={iaStyle} href="http://loca.ucsd.edu/" target="_blank">
                UCSD LOCA dataset
              </a>
              . These predictions are based on a specific climate change
              scenario, RCP4.5. Representative Concentration Pathways (RCPs) are
              projections of greenhouse gas concentration (not emission)
              trajectories adopted by the{" "}
              <a
                style={iaStyle}
                href="https://en.wikipedia.org/wiki/Intergovernmental_Panel_on_Climate_Change"
                target="_blank"
              >
                IPCC
              </a>{" "}
              for its fifth Assessment Report in 2014. For more details refer{" "}
              <a
                style={iaStyle}
                href="https://skepticalscience.com/rcp.php"
                target="_blank"
              >
                Representative Concentration Pathways
              </a>
              .
            </p>
            <p style={ipStyle}>
              Many climate indicators are available through Azavea. We used
              yearly aggregations of maximum and average values of dry_spells,
              extreme_cold_events, extreme_heat_events,
              extreme_precipitation_events and heat_wave_incidents for the next
              20 years.
            </p>
          </section>

          <section style={isectionStyle}>
            <h2 style={ih2Style}>County shapes, names, and codes</h2>
            <p style={ipStyle}>
              We got our map of the shapes of US counties from{" "}
              <a
                style={iaStyle}
                href="https://community.esri.com/thread/24614"
                target="_blank"
              >
                this source
              </a>
              , which itself is a lower-resolution version of a map published by
              the{" "}
              <a
                style={iaStyle}
                href="https://www.arcgis.com/home/item.html?id=a00d6b6149b34ed3b833e10fb72ef47b"
                target="_blank"
              >
                Environmental Systems Research Institute
              </a>
              . The following explanation for what counts as a county is from
              the
              <a
                style={iaStyle}
                href="https://catalog.data.gov/dataset/tiger-line-shapefile-2016-nation-u-s-current-county-and-equivalent-national-shapefile"
                target="_blank"
              >
                US Census Bureau
              </a>
            </p>

            <p style={ipStyle}>
              The primary legal divisions of most states are termed counties. In
              Louisiana, these divisions are known as parishes. In Alaska, which
              has no counties, the equivalent entities are the organized
              boroughs, city and boroughs, municipalities, and for the
              unorganized area, census areas. The latter are delineated
              cooperatively for statistical purposes by the State of Alaska and
              the Census Bureau. In four states (Maryland, Missouri, Nevada, and
              Virginia), there are one or more incorporated places that are
              independent of any county organization and thus constitute primary
              divisions of their states. These incorporated places are known as
              independent cities and are treated as equivalent entities for
              purposes of data presentation. The District of Columbia and Guam
              have no primary divisions, and each area is considered an
              equivalent entity for purposes of data presentation.
            </p>
          </section>

          {/* Save for additional documentation------------------------------------------------------------------------------------------- */}
          {/* <section style={isectionStyle}>
            <h1 style={ih1Style}>FEMA Disasters</h1>
            <p style={ipStyle}>
              The Federal Emergency Management Agency (FEMA) Disaster
              Declarations Summary is a summarized dataset describing all
              federally declared disasters. This information begins with the
              first disaster declaration in 1953 and features all three disaster
              declaration types: major disaster, emergency and fire management
              assistance. The dataset includes declared recovery programs and
              geographic areas (county not available before 1964; Fire
              Management records are considered partial due to historical nature
              of the dataset).
            </p>
            <p style={ipStyle}>
              We performed data wrangling on FEMA archive of disasters
              throughout the USA to consolidate data by{" "}
              <strong style={istrongStyle}>County FIPS Code</strong> and by Year
              and County FIPS Code. This data was in turn used for data
              visualization via choropleth maps.
            </p>
            <h2 style={ih2Style}>Datasets:</h2>
            <a
              style={iaStyle}
              href="https://www.fema.gov/media-library/assets/documents/28318"
              target="_blank"
            >
              FEMA Disaster Declarations Summary
            </a>
            <h2 style={ih2Style}>DFIPS Code:</h2>
            FIPS codes are unique identifiers used by the US government for
            identifying states and counties (or county-equivalent areas). Each
            county has a full FIPS code that contains two digits for the state
            and three for the county within that state.
          </section>

          <section style={isectionStyle}>
            <h1 style={ih1Style}>Azavea Climate API</h1>
            <p style={ipStyle}>
              Azavea Climate API provides different models and scenarios for
              universally-recognized temperature and precipitation indicators.
              Azavea provides access to research and application development
              through free and open API.
            </p>
            <h2 style={ih2Style}>Datasets:</h2>
            <a
              style={iaStyle}
              href="https://cds.nccs.nasa.gov/nex-gddp/"
              target="_blank"
            >
              NASA NEX-GDDP
            </a>
            <br />
            <a style={iaStyle} href="http://loca.ucsd.edu/" target="_blank">
              UCSD LOCA
            </a>
            <br />
            For better prediction accuracy with respect to location, we are
            using <strong style={istrongStyle}>LOCA dataset.</strong>
            <h2 style={ih2Style}>Scenarios:</h2>
            <p style={ipStyle}>
              A Representative Concentration Pathway (RCP) is a greenhouse gas
              concentration (not emissions) trajectory adopted by the IPCC for
              its fifth Assessment Report (AR5) in 2014. For more details refer{" "}
              <a
                style={iaStyle}
                href="https://skepticalscience.com/rcp.php"
                target="_blank"
              >
                Representative Concentration Pathways.
              </a>
            </p>
            <p style={ipStyle}>RCP4.5</p>
            <p style={ipStyle}>RCP8.5</p>
            <p style={ipStyle}>
              To avoid inflating the projections and for displaying more
              realistic estimate, we are using{" "}
              <strong style={istrongStyle}>RCP45</strong> scenario.
            </p>
            <h2 style={ih2Style}>Indicators:</h2>
            <p style={ipStyle}>
              There are many climate indicators available but we shall fetch and
              use{" "}
              <strong style={istrongStyle}>
                yearly aggregation of maximum and average values of dry_spells,
                extreme_cold_events, extreme_heat_events,
                extreme_precipitation_events and heat_wave_incidents from
                current year till 2100.
              </strong>
            </p>
          </section> */}
        </div>
      </div>
    );
  }
}
const iStyle = {
  background: "floralwhite",
  color: "black",
  padding: "1.5rem",
  justifyContent: "center",
  fontSize: "1.2em"
};
const isectionStyle = {
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto"
};
const ipStyle = {
  marginTop: "10px"
};
const ih1Style = {
  marginTop: "10px",
  fontWeight: "bold"
};
const ih2Style = {
  marginTop: "10px",
  fontWeight: "bold"
};
const iaStyle = {
  marginTop: "10px"
};
const itableStyle = {
  width: "100%"
};
const istrongStyle = {
  fontWeight: "bold"
};
const itrStyle = {
  marginTop: "10px"
};
export default Info;
