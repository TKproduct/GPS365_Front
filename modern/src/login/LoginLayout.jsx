import React from 'react';
import { useMediaQuery, Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useTheme } from '@mui/material/styles';

import image1 from '../resources/images/image1.jpg';
import image10 from '../resources/images/image10.jpg';
import image2 from '../resources/images/image2.jpg';
import image3 from '../resources/images/image3.png';
import image4 from '../resources/images/image4.png';
import image5 from '../resources/images/image5.jpg';
import image7 from '../resources/images/image7.png';
import image8 from '../resources/images/image8.png';
import image9 from '../resources/images/image9.jpg';
import ImageSlideshow from './ImageSliderShow';
import LoginImage from './loginImage';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    boxShadow: '-2px 0px 16px rgba(0, 0, 0, 0.25)',
    
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginLeft: '5px',
    marginRight: '5px'

  },
}));

const LoginLayout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (   
    <main className={classes.root} style={{ float: 'left',marginLeft: '-140px' }}  >
      {!useMediaQuery(theme.breakpoints.down('lg')) && ( <ImageSlideshow images={[image1,image3, image4,image5,image7, image8,image9,image10, image2,]}/>)}
      <Paper className={classes.paper} >
        <hr />
        <dir></dir>
      {!useMediaQuery(theme.breakpoints.down('lg')) && ( <LoginImage className={classes.logo} /> )}
      <hr />
        <form className={classes.form}  >
        <div >{children}</div>  
        </form>
      </Paper>
      
    </main>
  );
};

export default LoginLayout;