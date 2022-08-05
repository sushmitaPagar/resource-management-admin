import React, { useEffect, useState } from "react";
import Header from "./Header";
import { TextField, InputAdornment, Tab, Tabs } from '@mui/material';
import { Search } from "@mui/icons-material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BasicTabs from "./BasicTabs";
import axios from "axios";
import "./Home.css";

const Home = () => {

    useEffect(() => {
        const apiCall = async () => {
            let responseData = await performApiCall();
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

    return (
        <>
        <Header />
        {/* <Stack spacing={0} direction="row" sx={{margin: 4}}>
            <Button variant="outlined" fullWidth >Resources</Button>
            <Button variant="outlined" fullWidth >Requests</Button>
            <Button variant="outlined" fullWidth >Users</Button>
        </Stack> */}
        <BasicTabs />
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
        </>
    );
};

export default Home;