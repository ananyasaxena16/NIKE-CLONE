//This file contains the extra things that are said to be as static and was at the end of the reactJS website
//Used Material UI for Styling 
//Used Hook makestyles for including CSS styling in material UI as well 

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import  Container  from '@mui/material/Container';


const useStyles = makeStyles({
    shop:{
        borderRadius:'20em',
        

    },
    

});

function Footer() {
    const classes = useStyles();
    return (
        
    <div >
    <Container>
    <Card>
      <CardMedia
        component="img"
        height="900vh"
        width='100%'
        margin='0 auto'
        image="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/88f59b7f-3814-44a7-8727-d0151b70d83c/image.png"
        
        alt="Paella dish"
      />
      <CardContent className={classes.cardCon}>
            <Typography variant="body2" color="inherit" align="center">
            Nike Sports Bra
            </Typography>
            <Typography variant="h2" color="inherit" align="center">
            Turn Up The Support
            </Typography>
            <Typography variant="h6" color="inherit" align="center">
            Find a high-support sports bra that holds you in, so you don’t have to hold back.
            </Typography>
            <Typography align="center">
            <Button align="center" href="https://www.nike.com/in/w/sports-bras-40qgm" sx={{ borderRadius: '30px' }} className={classes.shop} variant="contained" color="secondary">
           
            Shop
           
          
            </Button>

            </Typography>
        
        
        
        </CardContent>
    </Card>
    </Container>

      
      
    </div>
        
    )
}

export default Footer
