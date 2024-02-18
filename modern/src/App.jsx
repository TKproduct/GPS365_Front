import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress, useMediaQuery, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import BottomMenu from './common/components/BottomMenu';
import SocketController from './SocketController';
import CachingController from './CachingController';
import { useEffectAsync } from './reactHelper';
import { sessionActions } from './store';
import Animation from './Animation4.json';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';

const useStyles = makeStyles(() => ({
  page: {
    flexGrow: 1,
    overflow: 'auto',
  },
  menu: {
    zIndex: 4,
  },
}));

const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const desktop = useMediaQuery(theme.breakpoints.up('md'));
  const [showAnimation, setShowAnimation] = useState(true);

  const newServer = useSelector((state) => state.session.server.newServer);
  const initialized = useSelector((state) => !!state.session.user);

  useEffectAsync(async () => {
    
    setShowAnimation(false);
    const response = await fetch('/api/session');
    if (!initialized) {
      if (response.ok) {
        dispatch(sessionActions.updateUser(await response.json()));
      }else{
        const timer = setTimeout(() => {
          setShowAnimation(true);
            navigate('/login');
          
        }, 5000);
      }        
      }
    
    return null;
  }, [initialized, newServer, navigate]);

  return !initialized ? (<Lottie style={{ overflow: 'hidden' }}  animationData={Animation}/>) : (
    <>
      <SocketController />
      <CachingController />
      <div className={classes.page}>
        <Outlet />
      </div>
      {!desktop && (
        <div className={classes.menu}>
          <BottomMenu />
        </div>
      )}
    </>
  );
};

export default App;
