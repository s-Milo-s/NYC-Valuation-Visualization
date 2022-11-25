import {useState,useEffect} from 'react';
import ReactMapGL, {NavigationControl, FullscreenControl} from 'react-map-gl'
import Box from '@mui/material/Box';
import Paper from '@mui/material/paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import 'mapbox-gl/dist/mapbox-gl.css';
import DeckGL from '@deck.gl/react';
//import {add_legend} from '@deck.gl/react'
import {PolygonLayer} from '@deck.gl/layers';
import data from './nycZipCodeData/results.json'

export default function Map(props){
    const [cache, setCache] = useState({})
    const [years, setYears] = useState(["2017/18","2018/19" ])
    const [types, setTypes] = useState(['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'B1', 'B2', 'B3', 'B9', 'C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'CM', 'D0', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'E1', 'E2', 'E3', 'E4', 'E7', 'E9', 'F1', 'F2', 'F4', 'F5', 'F8', 'F9', 'G0', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'GU', 'GW', 'HB', 'HH', 'HR', 'HS', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I9', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'L1', 'L2', 'L3', 'L8', 'L9', 'M1', 'M2', 'M3', 'M4', 'M9', 'N1', 'N2', 'N3', 'N4', 'N9', 'O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'O8', 'O9', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'RA', 'RB', 'RG', 'RH', 'RK', 'RP', 'RR', 'RS', 'RT', 'RW', 'R0', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'S0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S9', 'T1', 'T2', 'T9', 'U0', 'U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8', 'U9', 'V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8', 'Y9', 'Z0', 'Z1', 'Z2', 'Z3', 'Z4', 'Z5', 'Z7', 'Z8', 'Z9'])
    const [invert, setInvert] =  useState(false)
    const neighborhood = {'10453': 'Central Bronx', '10457': 'Central Bronx', '10460': 'Central Bronx', '10458': 'Bronx Park and Fordham', '10467': 'Bronx Park and Fordham', '10468': 'Bronx Park and Fordham', '10451': 'High Bridge and Morrisania', '10452': 'High Bridge and Morrisania', '10456': 'High Bridge and Morrisania', '10454': 'Hunts Point and Mott Haven', '10455': 'Hunts Point and Mott Haven', '10459': 'Hunts Point and Mott Haven', '10474': 'Hunts Point and Mott Haven', '10463': 'Kingsbridge and Riverdale', '10471': 'Kingsbridge and Riverdale', '10466': 'Northeast Bronx', '10469': 'Northeast Bronx', '10470': 'Northeast Bronx', '10475': 'Northeast Bronx', '10461': 'Southeast Bronx', '10462': 'Southeast Bronx', '10464': 'Southeast Bronx', '10465': 'Southeast Bronx', '10472': 'Southeast Bronx', '10473': 'Southeast Bronx', '11212': 'Central Brooklyn', '11213': 'Central Brooklyn', '11216': 'Central Brooklyn', '11233': 'Central Brooklyn', '11238': 'Central Brooklyn', '11209': 'Southwest Brooklyn', '11214': 'Southwest Brooklyn', '11228': 'Southwest Brooklyn', '11204': 'Borough Park', '11218': 'Borough Park', '11219': 'Borough Park', '11230': 'Borough Park', '11234': 'Canarsie and Flatlands', '11236': 'Canarsie and Flatlands', '11239': 'Canarsie and Flatlands', '11223': 'Southern Brooklyn', '11224': 'Southern Brooklyn', '11229': 'Southern Brooklyn', '11235': 'Southern Brooklyn', '11201': 'Northwest Brooklyn', '11205': 'Northwest Brooklyn', '11215': 'Northwest Brooklyn', '11217': 'Northwest Brooklyn', '11231': 'Northwest Brooklyn', '11203': 'Flatbush', '11210': 'Flatbush', '11225': 'Flatbush', '11226': 'Flatbush', '11207': 'East New York and New Lots', '11208': 'East New York and New Lots', '11211': 'Greenpoint', '11222': 'Greenpoint', '11220': 'Sunset Park', '11232': 'Sunset Park', '11206': 'Bushwick and Williamsburg', '11221': 'Bushwick and Williamsburg', '11237': 'Bushwick and Williamsburg', '10026': 'Central Harlem', '10027': 'Central Harlem', '10030': 'Central Harlem', '10037': 'Central Harlem', '10039': 'Central Harlem', '10001': 'Chelsea and Clinton', '10011': 'Chelsea and Clinton', '10018': 'Chelsea and Clinton', '10019': 'Chelsea and Clinton', '10020': 'Chelsea and Clinton', '10036': 'Chelsea and Clinton', '10029': 'East Harlem', '10035': 'East Harlem', '10010': 'Gramercy Park and Murray Hill', '10016': 'Gramercy Park and Murray Hill', '10017': 'Gramercy Park and Murray Hill', '10022': 'Gramercy Park and Murray Hill', '10012': 'Greenwich Village and Soho', '10013': 'Greenwich Village and Soho', '10014': 'Greenwich Village and Soho', '10004': 'Lower Manhattan', '10005': 'Lower Manhattan', '10006': 'Lower Manhattan', '10007': 'Lower Manhattan', '10038': 'Lower Manhattan', '10280': 'Lower Manhattan', '10002': 'Lower East Side', '10003': 'Lower East Side', '10009': 'Lower East Side', '10021': 'Upper East Side', '10028': 'Upper East Side', '10044': 'Upper East Side', '10065': 'Upper East Side', '10075': 'Upper East Side', '10128': 'Upper East Side', '10023': 'Upper West Side', '10024': 'Upper West Side', '10025': 'Upper West Side', '10031': 'Inwood and Washington Heights', '10032': 'Inwood and Washington Heights', '10033': 'Inwood and Washington Heights', '10034': 'Inwood and Washington Heights', '10040': 'Inwood and Washington Heights', '11361': 'Northeast Queens', '11362': 'Northeast Queens', '11363': 'Northeast Queens', '11364': 'Northeast Queens', '11354': 'North Queens', '11355': 'North Queens', '11356': 'North Queens', '11357': 'North Queens', '11358': 'North Queens', '11359': 'North Queens', '11360': 'North Queens', '11365': 'Central Queens', '11366': 'Central Queens', '11367': 'Central Queens', '11412': 'Jamaica', '11423': 'Jamaica', '11432': 'Jamaica', '11433': 'Jamaica', '11434': 'Jamaica', '11435': 'Jamaica', '11436': 'Jamaica', '11101': 'Northwest Queens', '11102': 'Northwest Queens', '11103': 'Northwest Queens', '11104': 'Northwest Queens', '11105': 'Northwest Queens', '11106': 'Northwest Queens', '11374': 'West Central Queens', '11375': 'West Central Queens', '11379': 'West Central Queens', '11385': 'West Central Queens', '11691': 'Rockaways', '11692': 'Rockaways', '11693': 'Rockaways', '11694': 'Rockaways', '11695': 'Rockaways', '11697': 'Rockaways', '11004': 'Southeast Queens', '11005': 'Southeast Queens', '11411': 'Southeast Queens', '11413': 'Southeast Queens', '11422': 'Southeast Queens', '11426': 'Southeast Queens', '11427': 'Southeast Queens', '11428': 'Southeast Queens', '11429': 'Southeast Queens', '11414': 'Southwest Queens', '11415': 'Southwest Queens', '11416': 'Southwest Queens', '11417': 'Southwest Queens', '11418': 'Southwest Queens', '11419': 'Southwest Queens', '11420': 'Southwest Queens', '11421': 'Southwest Queens', '11368': 'West Queens', '11369': 'West Queens', '11370': 'West Queens', '11372': 'West Queens', '11373': 'West Queens', '11377': 'West Queens', '11378': 'West Queens', '10302': 'Port Richmond', '10303': 'Port Richmond', '10310': 'Port Richmond', '10306': 'South Shore', '10307': 'South Shore', '10308': 'South Shore', '10309': 'South Shore', '10312': 'South Shore', '10301': 'Stapleton and St. George', '10304': 'Stapleton and St. George', '10305': 'Stapleton and St. George', '10314': 'Mid-Island'}

    useEffect(()=>{
        setYears(props.range)
        setTypes(props.types)
        setInvert(props.invert)
        // console.log('setting years ', props.range)
        // console.log('setting types ', props.types)
    },[props.range, props.types, props.invert])
    
    const handleHeights = (zip)=>{
        let year1Val  = 0
        let cnt = 0
        for(let type of types){
            //for every type sum the values
            if(zip["values"][years[0]] && zip["values"][years[0]][type]){
                year1Val += Number(zip["values"][years[0]][type])
                cnt += 1
            }
        }
        if(cnt !=0 ){
            year1Val = year1Val/cnt
        }else{
            year1Val=0
        }
        let year2Val  = 0
        cnt = 0
        for(let type of types){
            //for every type sum the values
            if(zip["values"][years[1]] && zip["values"][years[1]][type]){
                year2Val += Number(zip["values"][years[1]][type])
                cnt += 1
            }
        }
        // console.log('1 ', year1Val)
        // console.log('2 ', year2Val)
        
        if(cnt !=0 ){
            year2Val = year2Val/cnt
        }else{
            year2Val=0
        }
            //After we have calculated the sum for each type of that year
            //We calculate the % chanege and the max over all the data sets of % change
            //One iteration to get all % changes and the max such that we can normalize the data 
        let ret;
        if(year1Val){
            ret = ((year2Val/year1Val)-1)*100
        }else{
            ret = 0
        }  
        ret = Math.floor(ret)
        cache[ zip['Zip-Code']] = ret
        if(ret<0){
            ret = invert? Math.max(ret,-150)*-1:Math.max(ret,-150)
        }
        else{
            ret = invert? Math.min(ret,150)*-1:Math.min(ret,150)
        }
        let spread = 1/(Number(years[1].substring(2,4)) - Number(years[0].substring(2,4)))
        let mult = 150*spread
        return Math.min(ret*mult,7500)
    }
    //Need to test if we have done computation
    //Else we do it
    //After we have accessed out value we delete it
    const handleColor = (d)=>{
        let spread = 1/(Number(years[1].substring(2,4)) - Number(years[0].substring(2,4)))
        let mult = 8*spread
        if(cache[d["Zip-Code"]]){
            let ret = cache[d["Zip-Code"]]
            if(ret>0){
                ret = Math.min(mult*ret,255)
                return [ret, 44, 84]
            }
            else{
                ret = Math.max(0, 84- (mult*ret) )
                return [0, 44, ret]
            }
        }
        else{
            return [0, 44, 84]
        }
    }
    
    const layer = new PolygonLayer({
        id: 'polygon-layer',
        data: data.Values,
        pickable: true,
        stroked: true,
        filled: true,
        extruded:true,
        wireframe: true,
        lineWidthMinPixels: 1,
        getPolygon: d => d.values.coordinates,
        getElevation: d=> handleHeights(d),
        getFillColor: d => handleColor(d),
        updateTriggers: {
            getElevation : [years],
            getFillColor : [years],
        },
        getLineColor: [0, 0, 0],
        getLineWidth: 1
      });

    const [viewport, setViewport] = useState({
        latitude: 40.730610,
        longitude: -73.935242,
        zoom: 10,
        pitch: 30,
        bearing: 0,
        controller: true
    });
    const layers = [
        layer
      ];

      function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
    const highScale = []
    let pos = 150
    for( let i = 22.5; i<255; i+=22.5){
        let temp = Math.floor(i)
        let hex = rgbToHex(temp,44,84)
        highScale.push(<Box sx={{position: 'absolute', top: String(pos)+'px', width: "100%",  height: "10px", backgroundColor:hex, zIndex: 10 }}></Box>)
        pos-=10
    }
    const lowScale = []
    pos = 150
    for( let i = 84; i<255; i+=17.1){
        let temp = Math.floor(i)
        let hex = rgbToHex(0,44,temp)
        lowScale.push(<Box sx={{position: 'absolute', top: String(pos)+'px', width: "100%",  height: "10px",  backgroundColor:hex, zIndex: 10 }}></Box>)
        pos+=10
    }
    return (
        <div>
            
            <DeckGL
            initialViewState={viewport}
            controller={true}
            layers={[layer]}
            style={{width: '100vw', height: '100vh'}}
            getTooltip={({object}) => object && `${neighborhood[object["Zip-Code"]]}, ${object["Zip-Code"]}\nPecent Change: %${cache[object["Zip-Code"]]}  `}
            >
            <ReactMapGL
            mapboxAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/milo1899/claipb3cc001814o5gxpuuicl"
            >
                {/* <NavigationControl position = 'bottom-right'  style ={{width: '80px', height: '100px'}}/> */}
                <Paper sx ={{position : "fixed", bottom: 20, right: 10, width: "80px" , height: "300px", textAlign: "center"}}>
                    <Paper elevation = {0} sx={{position: 'absolute', top: '10px', width: '100%', textAlign: "center"}}><Typography varient = 'h6'>Highest Δ</Typography></Paper>
        
                        {highScale}
                        {lowScale}
                    
                    <Paper elevation = {0} sx={{position: 'absolute', bottom: '5px', width: '100%', textAlign: "center"}}><Typography varient = 'h6'>Lowest Δ</Typography></Paper>
                </Paper>
            </ReactMapGL>
            </DeckGL>
        </div>
    )
}