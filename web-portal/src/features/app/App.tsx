// import 'core-js-pure/stable';
// import 'regenerator-runtime/runtime';
// import '../../assets/app.scss';

import { Container, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect } from 'react';

import PrimaryAppBar from '../../components/PrimaryAppBar';
import { selectUserExists, selectViewerUser, selectNetworkBusy, fetchMenuVisible, selectMenuVisible } from './AppSlice';
import { useSelector, useDispatch } from 'react-redux';
// import GuestHome from '../guestHome/GuestHome';
import { fetchViewerUserByEmail } from './AppActions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    root: {
      minHeight: '100%',
      width: '100%',
      maxWidth: '100%',
      padding: 0,
      margin: 0,
    },
    canvas: {
      maxWidth: '100%',
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
      [theme.breakpoints.up('xs')]: {
        margin: theme.spacing(3, 0),
      },
      [theme.breakpoints.down('xs')]: {
        margin: 0,
        padding: 0,
      },
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userExists = useSelector(selectUserExists);
  const viewerUser = useSelector(selectViewerUser);
  const networkBusy = useSelector(selectNetworkBusy);
  const menuVisible = useSelector(selectMenuVisible);

  useEffect(() => {
    // TODO: Remove below hardcoded value, and read it from the bearer token
    const email = 'gauravrladani@gmail.com';
    dispatch(fetchViewerUserByEmail(email));
  }, [userExists]);

  const toggleMenuVisible = () => {
    dispatch(fetchMenuVisible(!menuVisible));
  };

  // const getAppContent = () => {
  //   return <GuestHome />;
  // };
  return (
    <Container className={classes.root}>
      <Typography variant="h4" component="h1">
        <PrimaryAppBar networkBusy={networkBusy} viewerUser={viewerUser} userLoggedIn={true} handleMenuIconClick={toggleMenuVisible} />
      </Typography>
      {/* <Container className={classes.canvas}>{getAppContent()}</Container> */}
    </Container>
  );
};

export default App;
