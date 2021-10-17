import { Box, createStyles, makeStyles, Theme, Divider, Grid, Button, Typography } from '@material-ui/core';
import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    options: {
      width: '100%',
      padding: theme.spacing(2),
    },
    noUserOptions: {
      width: '100%',
      padding: 0,
      margin: 0,
    },
    guestButton: {
      width: '100%',
    },
    createAccountButton: {
      width: '100%',
    },
    signInButton: {
      width: '100%',
    },
    orWrapper: {
      paddingTop: 8,
    },
    orText: {
      textAlign: 'center',
      width: 40,
    },
    orWrap: {
      flexGrow: 0,
    },
    dividerWrap: {
      flexGrow: 1,
      paddingTop: 12,
    },
    divider: {
      backgroundColor: theme.palette.grey[500],
    },
    errorIcon: {
      color: theme.palette.grey[700],
      lineHeight: 1,
      marginRight: 8,
      fontSize: '1.5em',
    },
    eCheckMessage: {
      padding: 4,
      lineHeight: 1,
      fontSize: '.8em',
      display: 'flex',
      alignItems: 'center',
    },
    eCheckMessageWrapper: {
      width: '100%',
      marginTop: 8,
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);
interface UserOptionsProps {
  createAccount: () => void;
  requestPayable: boolean;
  signIn: () => void;
}
const UserOptions: React.FC<UserOptionsProps> = props => {
  const classes = useStyles();
  const { createAccount, signIn, requestPayable } = props;
  return (
    <Box className={classes.options}>
      <Grid container spacing={1}>
        {requestPayable && (
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Button
                className={classes.guestButton}
                variant="contained"
                color="primary"
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onClick={() => {}}
                data-cy="checkout-as-guest"
              >
                CONTINUE AS GUEST
              </Button>
            </Grid>
          </Grid>
        )}
        <Grid container className={classes.noUserOptions} spacing={1}>
          {requestPayable && (
            <Grid item container justify={'center'} alignItems={'stretch'} xs={12} className={classes.orWrapper}>
              <Grid item xs={'auto'} className={classes.dividerWrap}>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item xs={'auto'} className={classes.orWrap}>
                <Typography className={classes.orText}>or</Typography>
              </Grid>
              <Grid item xs={'auto'} className={classes.dividerWrap}>
                <Divider className={classes.divider} />
              </Grid>
            </Grid>
          )}
          <Grid item xs={8}>
            <Button
              className={classes.createAccountButton}
              color="primary"
              variant="outlined"
              onClick={() => {
                createAccount();
              }}
              data-cy="create-an-account"
            >
              REGISTER
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              className={classes.signInButton}
              color="primary"
              variant="outlined"
              onClick={() => {
                signIn();
              }}
              data-cy="sign-in"
            >
              SIGN IN
            </Button>
          </Grid>
          {requestPayable && (
            <Box className={classes.eCheckMessageWrapper}>
              <Typography className={classes.eCheckMessage} variant="body2">
                <ErrorIcon className={classes.errorIcon} />
                To contribute, you must have an account.
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserOptions;
