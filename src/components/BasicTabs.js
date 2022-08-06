import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = (props) => {
  //state to handle tab value
  const [value, setValue] = React.useState(0);

  //function to handle change when any tab is clicked
  const handleChange = (event, newValue) => {
    setValue(newValue);
    //here tab value is passed to parent component with the help of parentCallBack
    props.parentCallBack(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Resources" {...a11yProps(0)} />
          <Tab label="Requests" {...a11yProps(1)} />
          <Tab label="Users" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </Box>
  );
};

export default BasicTabs;