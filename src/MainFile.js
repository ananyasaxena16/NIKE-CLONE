//Main File
//This is the file which renders every component, i.e,
//1. Header1(src->Components->Header1.js)
//2. Header2(src->Components->Header2.js)
//3. Mid(src->Components->Mid.js)
//4. Footer(src->Components->Footer.js)



//imported required libraries and Hooks from react and material UI
import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Components/Footer';
import Mid from './Components/Mid';
import Header1 from './Components/Header1';
import Header2 from './Components/Header2';








//created theme for changing the primary styling in material UI
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

//Styled the root class using hook makestyles, which enables us to style with CSS using classes in different components.
const useStyles = makeStyles({
   
  root: {
    //background: '',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 px 2px 2px grey',
    color: 'black',
    height: '20px',
    
  },
  
});



//Rendering Components
export default function MainFile() {
  const classes = useStyles();
  
  return(
      <>
      <ThemeProvider theme={theme}>
      <div className={classes.root}>
      <Header1/>
      </div>
      <Header2/>
      <Mid/>
      <Footer/>
      </ThemeProvider>
      
    </>
  )
}
//              
