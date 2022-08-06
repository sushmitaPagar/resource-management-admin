import React, { useEffect, useState } from "react";
import Header from "./Header";
import { TextField, InputAdornment, Grid } from '@mui/material';
import { Search } from "@mui/icons-material";
import Stack from '@mui/material/Stack';
import BasicTabs from "./BasicTabs";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import "./Home.css";
import ResourceCard from "./ResourceCard";
import Link from '@mui/material/Link';

//Item styling for cards
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

//Home component which renders home page
const Home = () => {
    //state for complete responce data from api
    const [dataArray, setDataArray] = useState([]);
    //state for filtered data according to tab selection
    const [finalData, setFinalData] = useState([]);

    //useEffect hook for calling the api after component rendering
    useEffect(() => {
        const apiCall = async () => {
            let responseData = await performApiCall();
            setDataArray(responseData);
            setFinalData(responseData); //set finalData as complete responce data initially
        }
        apiCall();
    }, []);

    //function to perform api call and get the resources data
    const performApiCall = async () => {
        try{
            const url = "https://media-content.ccbp.in/website/react-assignment/resources.json";
            const response = await axios(url);
            return response.data;
        }catch(error){
            alert(error.response.data.message);
        }

    };

    //function to handle tabValue (depending on which tab is selected from resources, requests and users).
    //tabValue is obtained from child component 'BasicTabs'
    const handleCallBackData = (tabValue) => {
        switch(tabValue){
            case 1://if request tab is clicked
                setFinalData(dataArray.filter((data) => {return data.tag === 'request'}));
                break;
            case 2://if users tab is clicked
                setFinalData(dataArray.filter((data) => {return data.tag === 'user'}));
                break;
            default://if default tab i.e. resources is clicked
                setFinalData(dataArray);
                break;
        }
    };

    return (
        <>
        {/* Header component */}
        <Header />
        {/* BasicTabs component with parentCallBack as a prop to get tab value */}
        <BasicTabs parentCallBack={handleCallBackData}/>
        {/* search input field */}
        <Stack direction="row" justifyContent="start" sx={{margin: 4}}>
            <TextField
                className="search-field"
                size="small"
                sx={{width: 500}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search color="black" />
                        </InputAdornment>
                    ),
                }}
                placeholder="Search"
                name="search"
            />
        </Stack>
        {/* grid container to display cards */}
        <Grid container spacing={2}>
            {finalData.map((data)=>{
                        return (
                          <Grid item xs={6} md={4} key={data.id}>
                            <Item>
                                <Link href="/resource" target="_blank" rel="noopener">
                                    <ResourceCard resource={data} key={data.id}/>
                                </Link>
                            </Item>
                          </Grid>
                          );
                        })
            }
        </Grid>
        </>
    );
};

export default Home;