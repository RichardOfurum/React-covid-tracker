import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import { sortData, prettyPrintStat } from "./util";
import LineGraph from './LineGraph';
import numeral from "numeral";
import "leaflet/dist/leaflet.css";

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] =useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  console.log(casesType);

  useEffect(() =>{
      fetch(`https://disease.sh/v3/covid-19/all`)
      .then(response => response.json())
      .then(data => {
          setCountryInfo(data);
      })
  }, [])
  
  const url = `https://disease.sh/v3/covid-19/countries`;
  // `https://disease.sh/v3/covid-19/countries/${countryCode}`

  // State is how to write a variable in react;

  // USE EFFECT  = RUNS  ap piesce of code based on a given condition
  useEffect(() =>{
      //async -> sends a request to the server, wait for it, then do something with the info
      const getCountriesData= async () =>{
          await fetch(url)
          .then((response) => response.json())
          .then(data => {
              const countries = data.map((country) =>({
                    name: country.country, // United state, united kingdom
                    value: country.countryInfo.iso2 //UK, USA, FR
                  }));

                  const sortedData = sortData(data);
                  setTableData(sortedData);
                  setMapCountries(data);
                  setCountries(countries);
          });
      };

      getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
      const countryCode = event.target.value;
      // setCountry(countryCode);

      const url = countryCode === "worldwide"
           ?  `https://disease.sh/v3/covid-19/all`
           :  `https://disease.sh/v3/covid-19/countries/${countryCode}`;

      await fetch(url)
        .then(response => response.json())
        .then((data) =>{
            setCountry(countryCode);
            setCountryInfo(data);

            if(url === `https://disease.sh/v3/covid-19/all`){
                // alert('yes');
                setMapCenter([34.80746, -40.4796]);
            }else{
              setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
            }
            
            setCountryInfo(data);
            setMapZoom(4);

            console.log(data);
        });
  };

  console.log(countryInfo);

  return (
    <div className="App">
      
        <div className="app__left">
            <div className="app_header">
                <h1> COVID 19 TRACKER</h1>

                <FormControl className="app_dropdown">
                  <Select
                    variant="outlined"
                    value={country}
                    onChange={onCountryChange}
                  >
                    <MenuItem value="worldwide"> WorldWide </MenuItem>
                    {
                        countries.map(country =>(
                            <MenuItem value={country.value}> {country.name} </MenuItem>
                        ))
                    }
                    
                  </Select>
                </FormControl>
            </div>
            
            {/* <Button color="primary">Hello World</Button> */}

            <div className="app_stats">
                <InfoBox 
                    onClick={(e) => setCasesType("cases")}
                    
                    active={casesType === "cases"}
                    title="CoronaVirus Cases" 
                    isRed
                    cases={prettyPrintStat(countryInfo.todayCases)}
                    total={numeral(countryInfo.cases).format("0.0a")}
                />
                <InfoBox 
                    onClick={(e) => setCasesType("recovered")}
                    title="Recovered"
                    active={casesType === "recovered"}
                    cases={prettyPrintStat(countryInfo.todayRecovered)}
                    total={numeral(countryInfo.recovered).format("0.0a")}
                />
                {/* <InfoBox title="Tests" cases={countryInfo.tests} total={6000} /> */}
                <InfoBox 
                    onClick={(e) => setCasesType("deaths")}
                    title="Deaths"
                    isRed
                    active={casesType === "deaths"}
                    cases={prettyPrintStat(countryInfo.todayDeaths)}
                    total={numeral(countryInfo.deaths).format("0.0a")}
                />
        
            </div>

            <Map
              countries={mapCountries}
              casesType={casesType}
              center={mapCenter}
              zoom={mapZoom}
            />

            
        </div>

        <Card className="app__right">
              <CardContent>
                <h3>Live Cases By Country</h3>

                <Table countries={tableData}/>

                <h3>WorldWide New {casesType}</h3>

                <LineGraph casesType={casesType}/>
                      
              </CardContent>
        </Card>

    </div>
  );
}

export default App;
