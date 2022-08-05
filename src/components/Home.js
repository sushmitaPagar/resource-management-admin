import React, { useEffect, useState } from "react";
import Header from "./Header";
import { TextField, InputAdornment, Grid } from '@mui/material';
import { Search } from "@mui/icons-material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BasicTabs from "./BasicTabs";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import "./Home.css";
import ResourceCard from "./ResourceCard";

//Item styling for cards
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Home = () => {

    const [dataArray, setDataArray] = useState([]);
    const [finaldata, setFinalData] = useState([]);

    useEffect(() => {
        const apiCall = async () => {
            let responseData = await performApiCall();
            setDataArray(responseData);
        }
        apiCall();
    }, []);

    const performApiCall = async () => {
        try{
            const url = "https://media-content.ccbp.in/website/react-assignment/resources.json";
            const response = await axios(url);
            console.log("api response ::", response.data);
            return response.data;
        }catch(error){
            alert(error.response.data.message);
        }

    };

    const handleCallBackData = (tabValue) => {
        console.log("from Home.js: tabValue = ", tabValue);
        switch(tabValue){
            case 1:
                console.log("finalData :: ", dataArray.filter((data) => {return data.tag === 'request'}));
                setFinalData(dataArray.filter((data) => {return data.tag === 'request'}));
                break;
            case 2:
                console.log("finalData :: ", dataArray.filter((data) => {return data.tag === 'user'}));
                setFinalData(dataArray.filter((data) => {return data.tag === 'user'}));
                break;
            default:
                console.log("finalData :: ", dataArray);
                setFinalData(dataArray);
                break;
        }
    };

    return (
        <>
        <Header />
        <BasicTabs parentCallBack={handleCallBackData}/>
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
        <Grid container spacing={2}>
            {dataArray.map((data)=>{
                        return (
                          <Grid item xs={6} md={3} key={data.id}>
                            <Item>
                              <ResourceCard product={data} key={data.id}/>
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