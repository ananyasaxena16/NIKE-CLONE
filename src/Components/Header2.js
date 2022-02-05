//This basically is the second Component that is rendered by MainFile.
//It Consists of the another functionality, i was asked to add in my nike clone and that is 'A highly responsive Search Bar with suggestions'.
//Used functional Component and hook 'useState' for setting the state for the changing variable.
//Used Material UI for Styling the Components.


import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Hidden from '@mui/material/Hidden';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import nike from '../Logo/nike.png'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

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
    wrap:{
        position:'absolute',
        top: "0",
        left: "0",


    },
    DG:{
        height:'50vh',
        [theme.breakpoints.down('md')]:{
            height:'100vh',
        }
    },
    nikeinsearchup:{
        textAlign:'center',

    },
    nikyinsearch:{
        height:'70px',
        width:'60px',
        
        

    },

    

    niky:{
        height:'60px',
        width:'60px',
        backgroundColor:'primary',
    },

    
    iconws:{
        position:'absolute',
        right:'0',
        width:'120px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',

        

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
    text:{
        width:'80ch',
        
        [theme.breakpoints.down('md')]:{
            width:'40ch',
        },
        [theme.breakpoints.down('sm')]:{
            width:'30ch',
        },

    },
    bigDia:{
        display:'flex',
        flexDirection:'row',
        paddingTop:'30px',
        
       
        justifyContent:'space-evenly',
        width:'300',

        

    },
    closebtn:{
        
        backgroundColor:'#E8EEF1',
        borderRadius:'50%',

    },

    wrapover:{
        
        position:'absolute',
        
       transform: "translate(0%, -45%)",
        
        height:'50vh',
       
        
        width:'100vw',
        

    },
    appbarsearch:{
        height:'50vh'

    },
    
    
    serchBar:{
        paddingTop:'20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        right:'3',
        
    },
    varietyup:{
        display:'flex',
        paddingTop:'20px',
        margin:'0 auto',
        
        
        
    },
    varieties:{
        
        height:'36px',
        justifyContent:'space-evenly',
        alignItems:'center',
        display:'flex',
        width:'40vw',
        margin:'0 auto',
        paddingTop:'20px',
        verticalAlign:'baseline',
        overflow:'hidden',
        

        
        
    },
    
    tool:{
        minHeight: '80px',
    },
    
  
});

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '5rem',
    backgroundColor: '#E8EEF1',
    '&:hover': {
      backgroundColor: "#f8f8ff",

    },
    marginLeft: 0,
    marginBottom:'2px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
      width: '0',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(2)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
       
      },
    },
  }));
  


function Header2() {
    const [openD, setOpenD] = React.useState(false);
    const handleClickOpen = () => {
        setOpenD(true);
      };
    
      const handleClickClose = () => {
        setOpenD(false);
      };
      const classes = useStyles();
  
      return(
          <>
    <ThemeProvider theme={theme}>
        
     <Hidden mdDown>
      
      <div className={classes.varietyup}>
      <img className={classes.niky} src={nike} alt="Logo"></img>
      <div className={classes.varieties}>
          <div><b>
              Men
          </b></div>
          <div><b>
              Women
          </b></div>
          <div><b>
              Kids
          </b></div>
          <div>
          <b>
              Customise
          </b>
          </div>
          <div>
          <b>
              Sale
          </b>
          </div>
          <div>
          <b>
              SNKRS
          </b>
          </div>
          


      </div>
      <div className={classes.serchBar}>

     
      <Search>
            <SearchIconWrapper >
              <SearchIcon fontSize="large"/>
              
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="     Search…"
              //inputProps={{ 'aria-label': 'search'}}
              onClick={handleClickOpen}
            />
            
            <Dialog 
           maxWidth="xl"
           classes={{paper:classes.wrapover}}
        open={openD}
        TransitionComponent={Transition}
        
        onClose={handleClickClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className={classes.DG}>
        <div className={classes.bigDia}>
            <div className={classes.nikeinsearchup}>
                <img className={classes.nikyinsearch} src={nike} alt="Logo"></img>
            </div>
        

        <div className={classes.suggestion}>
        <TextField className={classes.text}
        id="filled-basic"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
      <Typography>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Shoes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Sports Wear" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Jordan Shoes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Sports Bra" />
            </ListItemButton>
          </ListItem>
        </List>
      </Typography>
        </div>
        
        <div >
        <DialogActions className={classes.closebtn}>
          <CloseIcon  onClick={handleClickClose}>Disagree</CloseIcon>
        </DialogActions>
        </div>
        
        </div>

        </DialogContent>
        
              
              
        
       
      </Dialog>

           
            
           
          </Search>
          <FavoriteBorderIcon fontSize="large">

          </FavoriteBorderIcon>
          <WorkOutlineIcon fontSize="large">

          </WorkOutlineIcon>
          </div>
      </div>
      </Hidden>
      <Hidden mdUp>
          <AppBar color="transparent">
              <Toolbar color="transparent" className={classes.toolbar} style={{ background: '#FFFFFF' }}>
              <div className={classes.nikeinsearchup}>
                <img className={classes.nikyinsearch} src={nike} alt="Logo"></img>
            </div>
                  <div className={classes.iconws}>
                    <SearchSharpIcon 
                    onClick={handleClickOpen}
                    
                    fontSize="large">

                    </SearchSharpIcon>
                    <Dialog 
           fullScreen
           classes={{paper:classes.wrap}}
        open={openD}
        TransitionComponent={Transition}
        
        onClose={handleClickClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className={classes.DG}>
        <div className={classes.bigDia}>
            <div className={classes.nikeinsearchup}>
                <img className={classes.nikyinsearch} src={nike} alt="Logo"></img>
            </div>
        

        <div className={classes.suggestion}>
        <TextField className={classes.text}
        id="filled-basic"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
      <Typography>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Sports Shoes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Jordan Shoes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Sports bra" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Women" />
            </ListItemButton>
          </ListItem>
        </List>
      </Typography>
        </div>
        
        <div >
        <DialogActions className={classes.closebtn}>
          <CloseIcon  onClick={handleClickClose}>Disagree</CloseIcon>
        </DialogActions>
        </div>
        
        </div>

        </DialogContent>
        
              
              
        
       
      </Dialog>

      <WorkOutlineIcon fontSize="large"></WorkOutlineIcon>
      <MenuOutlinedIcon  fontSize="large"></MenuOutlinedIcon>
        </div>
                  
              
        </Toolbar>
        </AppBar>
         

      </Hidden>
      </ThemeProvider>
      </>
            
       
    )
}

export default Header2
