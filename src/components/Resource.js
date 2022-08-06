import React from "react";
import Box from '@mui/material/Box';
import "./Resource.css";
import Header from "./Header";

//Resource component which renders resource page
const Resource = () => {

    return (
        <>
        <Header />
        <Box className="resource">
            Resource details page
        </Box>
        </>
    );
};

export default Resource;