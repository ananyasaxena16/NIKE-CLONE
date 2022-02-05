//This basically is the first Component that is rendered by MainFile.
//It Consists of the one functionality, i was asked to add in my nike clone and that is 'A highly responsive Sign Up modal'.
//Used functional Component and hook 'useState' for setting the state for the changing variable.
//Used Material UI for Styling the Components.


import  Hidden  from '@mui/material/Hidden';
import  AppBar  from '@mui/material/AppBar';
import  ButtonGroup  from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import * as React from 'react'; 
import TextField from '@mui/material/TextField';
import jumpman from '../Logo/jumpman.jpeg';
import nike from '../Logo/nike.png';

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

const useStyles = makeStyles({
    stak:{
        width:'400px',
        [theme.breakpoints.down('sm')]:{
            width:'300px',
        },
        
        


    },
    nikedivsignin:{
        textAlign:'center',

    },
    nikyinsign:{
        height:'70px',
        width:'70px',
        padding:'0 10px',
        position:'relative',
        margin:'0 auto',


    },

    niky:{
        height:'60px',
        width:'60px',
        backgroundColor:'primary',
    },

    jumpma:{
        height:'40px',
        width:'40px',
        backgroundColor:'primary',
        



        


    },
    paper: { 
        width:'500px',
        [theme.breakpoints.down('sm')]:{
            width:'400px',
        },
     },
    
    cardconte:{
        display: 'flex',
        flexDirection: 'column',
        
        
        alignItems:'center',
        paddingBlock:'4px',
        
    },
    btg:{
        position:'absolute',
        right:'0',
        top:'0',
        height:'12px',
        FontColor:'black',
        paddingTop:'7px',
        
        display:'flex',
        verticalAlign:'baseline',
        minHeight:'15',
        maxWidth:'1300px',
        
    },
});

function Header1() {
    const classes=useStyles(); 

    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    
    
    return (
        <ThemeProvider theme={theme}>

        
        
        <Hidden mdDown>
        <AppBar  className ={classes.app} position="static" color="primary"  sx={{ height: '30px'}}>
      
  
          
            <img className={classes.jumpma} src={jumpman} alt="Logo"></img>

           
          
         
        <ButtonGroup  className={classes.btg} variant="text"  aria-label="small button group" aria-label="text button group" color="inherit"  size="small"
        id="menu-appbar"
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <Button className={classes.btn}>Help</Button>
        <Button className={classes.btn}>Join Us</Button>
        <Button className={classes.btn} onClick={handleOpen}>
            Sign Up</Button>
            
            <Dialog
            classes={{ paper: classes.paper}}
        maxWidth="xs"
        
        open={open}
        onClose={handleClose}
        
       
      >
          <div >
              <div className={classes.nikedivsignin}><img className={classes.nikyinsign} src={nike} alt="Logo"></img></div>
          
          <Typography  variant="h3" component="div" align="center" gutterBottom>
          
              Your Account For Everything Nike
          </Typography>
          </div>
          
          <Card > 
               
              <CardContent className={classes.cardconte}>
              <Stack 
              className={classes.stak}
      component="form"
    
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Email"
        id="filled-hidden-label-small"
        
        variant="outlined"
        size="large"
      />
      <TextField
        label="Password"
        id="filled-hidden-label-normal"
        
        variant="outlined"
      />
      <FormControlLabel
              control={<Checkbox value="remember me" color="secondary" />}
              label="Keep me signed in"
            />
            <p color="grey">
            By logging in, you agree to Nike's Privacy Policy and Terms of Use.
            </p>
            <Button
              type="submit"
              
              variant="contained"
              color="secondary"
              sx={{ mt: 5, mb: 2 }}
            >
              Sign In
            </Button>
       

    </Stack>
    <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          
    
    
                 
              </CardContent>
              
              

          </Card>
        
      </Dialog>
        </ButtonGroup>
        
        
      </AppBar>
      </Hidden>
      <Dialog
            classes={{ paper: classes.paper}}
        maxWidth="xs"
        
        open={open}
        onClose={handleClose}
        
       
      >
          <div >
              <div className={classes.nikedivsignin}><img className={classes.nikyinsign} src={nike} alt="Logo"></img></div>
          
          <Typography  variant="h3" component="div" align="center" gutterBottom>
          
              Your Account For Everything Nike
          </Typography>
          </div>
          
          <Card > 
               
              <CardContent className={classes.cardconte}>
              <Stack 
              className={classes.stak}
      component="form"
    
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Email"
        id="filled-hidden-label-small"
        
        variant="outlined"
        size="large"
      />
      <TextField
        label="Password"
        id="filled-hidden-label-normal"
        
        variant="outlined"
      />
      <FormControlLabel
              control={<Checkbox value="remember me" color="secondary" />}
              label="Keep me signed in"
            />
            <p color="grey">
            By logging in, you agree to Nike's Privacy Policy and Terms of Use.
            </p>
            <Button
              type="submit"
              
              variant="contained"
              color="secondary"
              sx={{ mt: 5, mb: 2 }}
            >
              Sign In
            </Button>
       

    </Stack>
    <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          
    
    
                 
              </CardContent>
              
              

          </Card>
        
      </Dialog>
      
        
    </ThemeProvider>
    )
}

export default Header1
