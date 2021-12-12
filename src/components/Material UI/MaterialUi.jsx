import React, { useState } from 'react';
import {Button, ButtonGroup, Radio, Slider, Checkbox, Select, MenuItem, TextField, Switch, Box, Container, Grid, Hidden, Tabs, Tab, AppBar} from '@material-ui/core';
import {Delete, Favorite, FavoriteBorder} from '@material-ui/icons';
import TabPanel from './TabPanel';


const MaterialUi = () => {
const [color, setColor] = useState("primary");
const [btnEnable, setBtnEnable] = useState(false)
const [name, setName] = useState([])
const [gender, setGender] = useState("male")
const [val, setVal] = useState([10,50])
const [course, setCourse] = useState("")
const [tabsVal, setTabsVal] = useState(0)

const changeColor =()=> {
setColor("secondary");
setBtnEnable(true);
}
const getValue =(e)=> {
    let data = name
    data.push(e.target.value)
    setName(data)
    console.warn(name)
}
const testFunction =(e)=>{
    console.warn(e.target.value)
    setGender(e.target.value)
}

const mark = [
    {
        value: 0,
        label: "Start"
    },
    {
        value: 100,
        label: "Middle"
    },
    {
        value: 200,
        label: "End"
    }
]
const sliderVal =(e,val)=> {
    console.warn(val)
    
}
const updateVal =(e,val)=>{
    setVal(val)
}
const updateSelect =(e,val)=>{
    setCourse(e.target.value)
}
const getTextField =(e)=>{
    console.warn(e.target.value)
}
const getSwitch=(e,val)=>{
    console.warn(val)
}
const handleTabs=(e,val)=>{
    setTabsVal(val)
}
return (
<>
    <div className="buttons">
    {/* Button */}
        {/* <Button startIcon={<Delete />} color={color} size="large" disabled={btnEnable} variant="contained"
        onClick={changeColor}>Click here</Button> */}

        {/* ButtonGroup */}
        {/* <ButtonGroup color="primary" variant="contained" orientation="vertical">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            <Button>Four</Button>
        </ButtonGroup> */}

        {/* Checkbox */}
        {/* <Checkbox color="primary" value="Anil" onChange={(e)=>getValue(e)}/>
        <Checkbox color="primary" value="Bruce" onChange={(e)=>getValue(e)}/>
        <Checkbox color="primary" value="Minhaz" onChange={(e)=>getValue(e)}/>
        <Checkbox color="primary" value="XYZ" indeterminate onChange={(e)=>getValue(e)}/>
        <Checkbox color="secondary" icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} onChange={(e)=>getValue(e)}/> */}

            {/* Radio */}
        {/* <div className="radio">
            <Radio color="primary" value="male" onChange={testFunction} checked={gender=== "male"} /><span>Male</span> <br />
            <Radio color="secondary" value="female" onChange={testFunction} checked={gender=== "female"}/><span>Female</span> <br />
            <Radio color="secondary" value="others" onChange={testFunction} checked={gender=== "others"}/><span>Others</span>
        </div> */}

        {/* Slider */}
{/* 
        <div className="slider" style={{width: "200px", height:"200px", margin: "0px auto"}}>
            <Slider 
            color="secondary" 
            defaultValue={50} 
            step={10} max={200} 
            valueLabelDisplay={"auto"} 
            marks={mark} 
            onChange={sliderVal}
            orientation={"vertical"}
            />

            <Slider
            value={val}
            onChange={updateVal}
            valueLabelDisplay={"auto"}
            />
        </div> */}

        {/* Select */}
        {/* <div className="select">
            <Select value={course} displayEmpty onChange={updateSelect}>
                <MenuItem value="">Select Course</MenuItem>
                <MenuItem value={1}>Node</MenuItem>
                <MenuItem value={2}>React</MenuItem>
                <MenuItem value={3}>Material</MenuItem>
                <MenuItem value={4}>JavaScript</MenuItem>
            </Select>
        </div> */}

        {/* TextField */}
        {/* <div className="textField">
            <TextField
            label="Enter Name"
            color="secondary"
            variant="outlined"
            type="text"
            onChange={getTextField}
            />
        </div> */}

        {/* Switch */}
        {/* <div className="switch">
            <Switch
            size="medium"
            color="primary"
            onChange={getSwitch}
            />
        </div> */}

        {/* Box */}
        {/* <div className="box">
            <Box component="span"  style={{color: "red"}} clone m={20}>
             <Button>Hello</Button>
            </Box>
        </div> */}

        {/* Container */}
        {/* <div className="container">
            <Container style={{backgroundColor:"skyblue"}} fixed>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima autem fugit rem dicta aspernatur ipsa commodi nam repellendus nobis modi doloremque nostrum veritatis quas illum harum suscipit tenetur, soluta expedita qui delectus? Aperiam culpa maxime minima iste distinctio alias dolore, reiciendis, eligendi obcaecati mollitia totam saepe odio? Dolor porro rerum nisi autem sint dolores, neque sequi. Dolorum rem asperiores nemo recusandae nobis eveniet doloribus inventore itaque, ab numquam eos sit ullam officiis atque eligendi. Eveniet nulla quas omnis ipsam magni nemo rerum, possimus ex ipsum culpa quia iste, aliquam molestias dignissimos temporibus architecto porro hic. Ipsa eligendi reiciendis numquam accusantium!</p>
            </Container>
        </div> */}

        {/* Grid */}
        {/* <div className="grid">
            <Grid container item xs={12} spacing={2}>
                    <Grid lg={3} xs={12} sm={6} item>
                        <h1 style={{backgroundColor:"skyblue"}}>Block One</h1>
                    </Grid>
                    <Hidden smDown>
                    <Grid lg={3} xs={12} sm={6} item>
                        <h1 style={{backgroundColor:"skyblue"}}>Block Two</h1>
                    </Grid>
                    </Hidden>
                    <Grid lg={3} xs={12} sm={6} item>
                        <h1 style={{backgroundColor:"skyblue"}}>Block Three</h1>
                    </Grid>
                    <Grid lg={3} xs={12} sm={6} item>
                        <h1 style={{backgroundColor:"skyblue"}}>Block Four</h1>
                    </Grid>
                </Grid>
        </div> */}

        {/* Tabs */}
        <div className="tabs">
        <h1>Tabs</h1>
            <AppBar position="static">
                <Tabs value={tabsVal} onChange={handleTabs}>
                    <Tab label="Item One"></Tab>
                    <Tab label="Item Two"></Tab>
                    <Tab label="Item Three"></Tab>
                </Tabs>
            </AppBar>
            <TabPanel value={tabsVal} index={0}>Item One Details</TabPanel>
            <TabPanel value={tabsVal} index={1}>Item Two Details</TabPanel>
            <TabPanel value={tabsVal} index={2}>Item Three Details</TabPanel>
        </div>


    </div>
</>
)
}


export default MaterialUi