import {useState} from 'react'
import Map from './Map.js'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import data from './nycZipCodeData/buttonList.json'
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button'
import Grid from'@mui/material/Grid'


const drawerWidth = 500;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    }));

const AppBar = styled(MuiAppBar, {
shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
    }),
}),
}));
    

export default function Valuation(){
    const [types,setTypes] =  useState({'A0': 1, 'A1': 1, 'A2': 1, 'A3': 1, 'A4': 1, 'A5': 1, 'A6': 1, 'A7': 1, 'A8': 1, 'A9': 1, 'B1': 1, 'B2': 1, 'B3': 1, 'B9': 1, 'C0': 1, 'C1': 1, 'C2': 1, 'C3': 1, 'C4': 1, 'C5': 1, 'C6': 1, 'C7': 1, 'C8': 1, 'C9': 1, 'CM': 1, 'D0': 1, 'D1': 1, 'D2': 1, 'D3': 1, 'D4': 1, 'D5': 1, 'D6': 1, 'D7': 1, 'D8': 1, 'D9': 1, 'E1': 1, 'E2': 1, 'E3': 1, 'E4': 1, 'E7': 1, 'E9': 1, 'F1': 1, 'F2': 1, 'F4': 1, 'F5': 1, 'F8': 1, 'F9': 1, 'G0': 1, 'G1': 1, 'G2': 1, 'G3': 1, 'G4': 1, 'G5': 1, 'G6': 1, 'G7': 1, 'G8': 1, 'G9': 1, 'GU': 1, 'GW': 1, 'HB': 1, 'HH': 1, 'HR': 1, 'HS': 1, 'H1': 1, 'H2': 1, 'H3': 1, 'H4': 1, 'H5': 1, 'H6': 1, 'H7': 1, 'H8': 1, 'H9': 1, 'I1': 1, 'I2': 1, 'I3': 1, 'I4': 1, 'I5': 1, 'I6': 1, 'I7': 1, 'I9': 1, 'J1': 1, 'J2': 1, 'J3': 1, 'J4': 1, 'J5': 1, 'J6': 1, 'J7': 1, 'J8': 1, 'J9': 1, 'K1': 1, 'K2': 1, 'K3': 1, 'K4': 1, 'K5': 1, 'K6': 1, 'K7': 1, 'K8': 1, 'K9': 1, 'L1': 1, 'L2': 1, 'L3': 1, 'L8': 1, 'L9': 1, 'M1': 1, 'M2': 1, 'M3': 1, 'M4': 1, 'M9': 1, 'N1': 1, 'N2': 1, 'N3': 1, 'N4': 1, 'N9': 1, 'O1': 1, 'O2': 1, 'O3': 1, 'O4': 1, 'O5': 1, 'O6': 1, 'O7': 1, 'O8': 1, 'O9': 1, 'P1': 1, 'P2': 1, 'P3': 1, 'P4': 1, 'P5': 1, 'P6': 1, 'P7': 1, 'P8': 1, 'P9': 1, 'Q1': 1, 'Q2': 1, 'Q3': 1, 'Q4': 1, 'Q5': 1, 'Q6': 1, 'Q7': 1, 'Q8': 1, 'Q9': 1, 'RA': 1, 'RB': 1, 'RG': 1, 'RH': 1, 'RK': 1, 'RP': 1, 'RR': 1, 'RS': 1, 'RT': 1, 'RW': 1, 'R0': 1, 'R1': 1, 'R2': 1, 'R3': 1, 'R4': 1, 'R5': 1, 'R6': 1, 'R7': 1, 'R8': 1, 'R9': 1, 'S0': 1, 'S1': 1, 'S2': 1, 'S3': 1, 'S4': 1, 'S5': 1, 'S9': 1, 'T1': 1, 'T2': 1, 'T9': 1, 'U0': 1, 'U1': 1, 'U2': 1, 'U3': 1, 'U4': 1, 'U5': 1, 'U6': 1, 'U7': 1, 'U8': 1, 'U9': 1, 'V0': 1, 'V1': 1, 'V2': 1, 'V3': 1, 'V4': 1, 'V5': 1, 'V6': 1, 'V7': 1, 'V8': 1, 'V9': 1, 'W1': 1, 'W2': 1, 'W3': 1, 'W4': 1, 'W5': 1, 'W6': 1, 'W7': 1, 'W8': 1, 'W9': 1, 'Y1': 1, 'Y2': 1, 'Y3': 1, 'Y4': 1, 'Y5': 1, 'Y6': 1, 'Y7': 1, 'Y8': 1, 'Y9': 1, 'Z0': 1, 'Z1': 1, 'Z2': 1, 'Z3': 1, 'Z4': 1, 'Z5': 1, 'Z7': 1, 'Z8': 1, 'Z9': 1})
    const [expandedA, setExpanded] = useState({'A ONE FAMILY DWELLINGS': 0, 'B TWO FAMILY DWELLINGS': 0, 'C WALK UP APARTMENTS': 0, 'D ELEVATOR APARTMENTS': 0, 'E WAREHOUSES': 0, 'F FACTORIES AND INDUSTRIAL BUILDINGS': 0, 'G GARAGES': 0, 'H HOTELS': 0, 'I HOSPITALS AND HEALTH FACILITIES': 0, 'J THEATRES': 0, 'K STORE BUILDINGS': 0, 'L LOFTS': 0, 'M RELIGIOUS FACILITIES': 0, 'N ASYLUMS AND HOMES': 0, 'O OFFICE BUILDINGS': 0, 'P INDOOR PUBLIC ASSEMBLY & CULT. FACILITIES': 0, 'Q OUTDOOR RECREATIONAL FACILITIES': 0, 'R CONDOMINIUMS': 0, 'S PRIMARILY RES. - MIXED USE': 0, 'T TRANSPORTATION FACILITIES': 0, 'U UTILITY BUREAU PROPERTIES': 0, 'V VACANT LAND': 0, 'W EDUCATIONAL FACILITIES': 0, 'Y GOVERNMENT/CITY DEPARTMENTS': 0, 'Z MISC. BUILDING CLASSIFICATIONS': 0})
    const [selectAll, setSelectAll] = useState({'A ONE FAMILY DWELLINGS': 1, 'B TWO FAMILY DWELLINGS': 1, 'C WALK UP APARTMENTS': 1, 'D ELEVATOR APARTMENTS': 1, 'E WAREHOUSES': 1, 'F FACTORIES AND INDUSTRIAL BUILDINGS': 1, 'G GARAGES': 1, 'H HOTELS': 1, 'I HOSPITALS AND HEALTH FACILITIES': 1, 'J THEATRES': 1, 'K STORE BUILDINGS': 1, 'L LOFTS': 1, 'M RELIGIOUS FACILITIES': 1, 'N ASYLUMS AND HOMES': 1, 'O OFFICE BUILDINGS': 1, 'P INDOOR PUBLIC ASSEMBLY & CULT. FACILITIES': 1, 'Q OUTDOOR RECREATIONAL FACILITIES': 1, 'R CONDOMINIUMS': 1, 'S PRIMARILY RES. - MIXED USE': 1, 'T TRANSPORTATION FACILITIES': 1, 'U UTILITY BUREAU PROPERTIES': 1, 'V VACANT LAND': 1, 'W EDUCATIONAL FACILITIES': 1, 'Y GOVERNMENT/CITY DEPARTMENTS': 1, 'Z MISC. BUILDING CLASSIFICATIONS': 1})
    const [sigmaAll, setSigmaAll] =  useState(true)
    const [invert, setInvert] =  useState(false)
    const [open, setOpen] =  useState(false)
    const [range, setRange] =  useState(["2017/18","2018/19" ])
    const [ids, setIds] = useState(['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'B1', 'B2', 'B3', 'B9', 'C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'CM', 'D0', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'E1', 'E2', 'E3', 'E4', 'E7', 'E9', 'F1', 'F2', 'F4', 'F5', 'F8', 'F9', 'G0', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'GU', 'GW', 'HB', 'HH', 'HR', 'HS', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I9', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'L1', 'L2', 'L3', 'L8', 'L9', 'M1', 'M2', 'M3', 'M4', 'M9', 'N1', 'N2', 'N3', 'N4', 'N9', 'O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'O8', 'O9', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'RA', 'RB', 'RG', 'RH', 'RK', 'RP', 'RR', 'RS', 'RT', 'RW', 'R0', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'S0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S9', 'T1', 'T2', 'T9', 'U0', 'U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8', 'U9', 'V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8', 'Y9', 'Z0', 'Z1', 'Z2', 'Z3', 'Z4', 'Z5', 'Z7', 'Z8', 'Z9'])
    const [value2, setValue2] = useState([87.5, 100]);
    const theme = useTheme();
    const years = {0: '2010/11', 12.5: '2011/12', 25.0: '2012/13', 37.5: '2013/14', 50.0: '2014/15', 62.5: '2015/16', 75.0: '2016/17', 87.5: '2017/18', 100.0: '2018/19'}
    const marks =[{'value': 0, 'label': '2010'}, {'value': 12.5, 'label': '2011'}, {'value': 25.0, 'label': '2012'}, {'value': 37.5, 'label': '2013'}, {'value': 50.0, 'label': '2014'}, {'value': 62.5, 'label': '2015'}, {'value': 75.0, 'label': '2016'}, {'value': 87.5, 'label': '2017'}, {'value': 100.0, 'label': '2018'}]
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
      const minDistance = 12.5;
      const handleChange2 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (newValue[1] - newValue[0] < minDistance) {
          if (activeThumb === 0) {
            const clamped = Math.min(newValue[0], 100 - minDistance);
            setValue2([clamped, clamped + minDistance]);
          } else {
            const clamped = Math.max(newValue[1], minDistance);
            setValue2([clamped - minDistance, clamped]);
          }
        } else {
          setValue2(newValue);
        }
      };    
    
      const applyConditions = ()=>{
        let retYears = []
        for(let i of value2){
            retYears.push(years[i])
        }
        setRange(retYears)
        const KeyList = Object.keys(types)
        const ret = []
        for(let i of KeyList){
            if(types[i]){
                ret.push(i)
            }
        }
        setIds(ret)
    }




    const regularOnClick = (e)=>{
            setTypes(prevState=>({
                ...prevState,
                [e]: prevState[e] ? 0:1
            }))
    }

    const selectAllClick = (e)=>{
        const keyList = Object.keys(types)
        const toBeChanged = [] 
        for(let i of keyList){
            if(i[0] === e[0]){
                toBeChanged.push(i)
            }
        }
        const updateCheck = selectAll[e] === 0 ? true: false
        setSelectAll(prevState=>({
            ...prevState,
            [e]: prevState[e] ? 0:1
        }))
        let temp = {...types}
        for(let i of toBeChanged){
            updateCheck? temp[i]=1 :  temp[i] =0
        }
        setTypes({...temp})
       
    }
    const handleExpand = (e)=>{
        setExpanded(prevState=>({
            ...prevState,
            [e]: prevState[e] ? 0:1
        }))
    }

    const handleSigmaSelectAll = ()=>{
        let temp = {...types}
        const keyList = Object.keys(types)
        for(let i of keyList ){
            temp[i]= sigmaAll?0:1
        }
        setTypes({...temp})
        let temp2 = {...selectAll}
        const keyList2 = Object.keys(selectAll)
        for(let i of keyList2 ){
            temp2[i]= sigmaAll?0:1
        }
        setSelectAll({...temp2})

        setSigmaAll(sigmaAll?false:true)
    }



    const DropDowns = ()=>{
        const AccordionSummarys = Object.keys(data)
        const components = AccordionSummarys.map(A=>{
            const internal = data[A].map(I=>{
                return(
                <FormControlLabel 
                    key = {I.substring(0,2)} 
                    control={
                    <Checkbox 
                        onClick = {()=>{regularOnClick(I.substring(0,2))}} 
                        checked = {types[I.substring(0,2)]?true:false} 
                    />} 
                    id= {I.substring(0,2)}
                    label={I} 
                />)
            })
            
            return(
                <Accordion key = {A} expanded = {expandedA[A]?true:false} onChange = {()=>handleExpand(A)}>
                     <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                         <Typography>{A}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            <FormControlLabel 
                            key = {A.substring(0,1)} 
                            control={
                            <Checkbox 
                            onClick = {()=> selectAllClick(A)}
                            checked = {selectAll[A]?true:false} 
                            />} 
                            id= {A.substring(0,1)} 
                            label= {"Select All"}/>
                            {internal}
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                )})
        //setIds(ids)
        return(
            <>{components} </>             
        )}




    return(
        <>
            <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            NYC Valuations By Zip Code
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                    padding: '10px',
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <Box sx={{ width: 375, margin: 'auto', paddingBottom: '30px', paddingTop: '20px' }}>
                        <Box sx={{ width: 375, margin: 'auto', paddingBottom: '25px', textAlign: 'center',  }}>
                            <Button onClick = {applyConditions} variant="contained" sx={{margin: 'auto', padding: '10px' }}>Apply Condtions</Button>
                        </Box>
                        <Divider />
                        <Box sx={{ width: 375, margin: 'auto', padding: '10px' }}>
                            <Slider
                                getAriaLabel= {()=>"Custom marks"}
                                value = {value2}
                                getAriaValueText={v=>v}
                                onChange={handleChange2}
                                valueLabelDisplay= 'auto'
                                marks = {marks}
                                step = {12.5}
                                disableSwap
                            />
                        </Box>
                        <Divider />
                        <Grid container spacing={2} sx={{width: '100%', marginTop: '5px', textAlign: 'center' }}>
                            <Grid item xs ={6} >
                                <Button 
                                    onClick = {handleSigmaSelectAll} 
                                    variant={sigmaAll?"contained": "outlined"} 
                                    sx={{ width: '80%', margin: 'auto', padding: '10px' }}
                                    > {sigmaAll? "UnSelect All":"Select All" } 
                                </Button>
                            </Grid>
                            <Grid item xs ={6}>
                                <Button 
                                    onClick = {()=>{setInvert(invert?false:true)}} 
                                    variant={invert? "outlined": "contained"} 
                                    sx={{ width: '80%', margin: 'auto', padding: '10px' }}
                                    > {invert? "Revert": "Invert" } 
                                </Button>
                            </Grid>
                        </Grid>  
                    </Box>
                    <DropDowns ids = {types} setIds = {setTypes}/>
                </Drawer>
            {/* <Controls open = {open} setOpen = {bool => setOpen(bool)}/> */}
            <Map range = {range} types = {ids} invert = {invert}/>
        </>
    )
}

