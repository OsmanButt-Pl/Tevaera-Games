import { AppBar, LinearProgress, createStyles, makeStyles, Theme, Toolbar, IconButton, useMediaQuery } from '@material-ui/core';
import { FC } from 'react';
import { Person } from '../gql-types.generated';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      boxShadow: '0px 3px 6px #00000012',
    },
    logo: {
      height: '27px',
      marginLeft: theme.spacing(0),
      marginTop: '10px',
    },
    linearProgress: {
      marginTop: -4,
    },
    menuIcon: {
      paddingRight: theme.spacing(2),
    },
    mdIndexGrow: {
      flexGrow: 1,
      zIndex: 1,
      position: 'relative',
    },
    toolbar: {
      minHeight: '8vh',
    },
    toolbarSubAlign: {
      fontSize: '16px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }),
);

interface PrimaryAppBarProps {
  viewerUser?: Person;
  networkBusy?: boolean;
  userLoggedIn: boolean;
  handleMenuIconClick: () => void;
}

const PrimaryAppBar: FC<PrimaryAppBarProps> = props => {
  const classes = useStyles();
  const { networkBusy, userLoggedIn, handleMenuIconClick, viewerUser } = props;
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'));

  return (
    <div className={matches ? classes.grow : classes.mdIndexGrow} id="primary-app-bar">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {userLoggedIn && (
            <div>
              <IconButton size="medium" color="default" onClick={handleMenuIconClick} data-cy="menu-icon">
                <MenuIcon />
              </IconButton>
            </div>
          )}
          <div className={classes.toolbarSubAlign}>
            <a href="/" data-cy="home-logo">
              <img className={classes.logo} src="logo.png" alt="Tevaera Logo" />
            </a>
            <div>Hey, {viewerUser?.firstName ?? 'John'}!</div>
          </div>
        </Toolbar>
        {networkBusy && <LinearProgress className={classes.linearProgress} color="primary" />}
      </AppBar>
    </div>
  );
};

export default PrimaryAppBar;
