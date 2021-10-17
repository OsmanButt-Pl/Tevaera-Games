/* eslint-disable @typescript-eslint/no-empty-function */
import { createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import UserOptions from '../../components/UserOptions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loadingPaper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paymentRequest: {
      height: '100%',
    },
    paymentRequestLarge: {
      minHeight: 600,
    },
    paperSpace: {
      margin: theme.spacing(2, 0, 2, 0),
    },
    paperSpaceMobile: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }),
);

const GuestHome: React.FC = () => {
  const classes = useStyles();
  const isMobileSize = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const createAccount = () => {};
  const signIn = () => {};

  return (
    <>
      <Grid container item spacing={2} justify="center">
        <Grid item xs={12} md={4}>
          {
            <Paper className={isMobileSize ? classes.paperSpace : undefined}>
              {<UserOptions requestPayable={true} createAccount={createAccount} signIn={signIn} />}
            </Paper>
          }
        </Grid>
      </Grid>
    </>
  );
};

export default GuestHome;
