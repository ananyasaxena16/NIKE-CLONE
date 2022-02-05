# NIKE CLONE

A static & responsive replica of https://www.nike.com/in/ using React Library.



## Functionality
* Sign In Button opening a Sign In modal.

*  Search Bar with top-most suggestions.
## Languages And Libraries Used
* React Library And Javascript 
* Material UI 
* CSS
## Description And Working
* MainFile.js is the main file which renders all the functional components.
* Components that are rendered by MainFile.js :
    
    * Header1.js     [path:(src->Components->Header1.js)]
      > This includes the primary Appbar of the website, which consists of logo of jumpman jordan and three buttons in button group and those are Help, Join Us And Sign Up.
      
      > Sign Up button Functionality->
      * It opens up a Sign Up modal using eventListener onClick Consisting of Logo and textfields of Email And Password with sign in button. This modal has been styled by Material UI library.
      * I used useState Hook in this, so useState is a Hook that lets you add React state to function components, so I added this hook to add some state to it.
      * Also, using setState function i can change the state of it.
      * useState has two basic arguement, one is variable state i.e., open and a setState function i.e., setOpen. By default, the state variable consist of false bool value.
      * Once you open up a sign in modal, state value of open is changed to true bool value, through handleOpen function.
      * Once you close this modal, state value is again changed to false bool value. through handleClose function.

      >So, to add responsive nature to it. I have added Hidden Component,  breakpoints and media queries from Material UI.
    

   
   
   
    * Header2.js.      [path:(src->Components->Header2.js)]
       >This includes the second bar in the website which consists of Nike logo, search Bar, Wishlist icon and Cart icon. 
       

       >Search Bar Functionality->

       * It opens up a larger search bar with most-searched suggestions using eventListener onClick. It covers half page of our website and it uses a dialog component from Material UI, which uses transition API and slides from the left of the page.
       * I used useState Hook in this, so useState is a Hook that lets you add React state to function components, so I added this hook to add some state to it.
       * Also, using setState function i can change the state of it.
       * useState has two basic arguement, one is variable state i.e., openD and a setState function i.e., setOpenD. By default, the state variable consist of false bool value.
       * Once you open up this search bar, state value of openD is changed to true bool value, through handleClickOpen function.
       * Once you close this modal, state value is again changed to false bool value. through handleClickClose function.

       >So, to add responsive nature to it. I have added Hidden Component,  breakpoints and media queries from Material UI.
    
    * Mid.js.       [path:(src->Components->Mid.js)]
      > This basically is the third Component that is rendered by MainFile.
      
      >It Consists of highly reponsive yet static bar in between AppBar and Card.
       
    * Footer.js.    [path:(src->Components->Footer.js)]
      >This file contains the extra things that are said to be as static and was at the end of the  website.


>Also, used Hook makeStyles by Material UI to add extra CSS for styling. 






## Screenshots

![Main Web PAge](src/Components/ScreenShots/M1.png)

