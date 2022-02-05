//This basically is the third Component that is rendered by MainFile.
//It Consists of highly reponsive bar in between card and AppBar
//Used Material UI for Styling the Components.


import React from 'react';
import { Hidden } from '@mui/material';
import  Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    

    
    
    dia:{
        height:'700px',

    },
    palette:{
        primary:{
            main:"#eceff1",
        },
        secondary:{
            main:"#000000",
        }
    }
  });


const useStyles=makeStyles({
    slides:{
        justifyContent:'center',
        margin:'0 auto',
        alignItems:'center',
        display:'flex',
        paddingTop:'10px',
        backgroundColor:'#eceff1',
        height:'55px',
        [theme.breakpoints.down('md')]:{
            justifyContent:'center',
            margin:'0 auto',
            alignItems:'center',
            display:'flex',
            paddingTop:'45px',
            backgroundColor:'#eceff1',
            height:'55px',
            
        },



    },
});

function Mid() {
    const theme = useTheme();
    const classes = useStyles();
    return (
    <ThemeProvider theme={theme}> 
    <Hidden mdUp> 
      <div className={classes.slides}>
          <Typography>
              HELLO NIKE APP
              Download the app 
          </Typography>
      </div>
    </Hidden>

    <Hidden mdDown>
      <div className={classes.slides}>
          <Typography>
              HELLO NIKE APP
              Download the app 
          </Typography>
      </div>
    </Hidden>
    </ThemeProvider>
        
    )
}

export default Mid
