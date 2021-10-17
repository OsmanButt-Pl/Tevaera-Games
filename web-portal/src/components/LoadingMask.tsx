/*
  !!!IMPORTANT!!!
    1. the element you are trying to mask has to have it's css position set to relative
    2. this LoadingMask needs to be a child of the element you are masking

  example:
    <Box className={classes.thisIsTheClassThatHasPositionRelativeSet}>
      <LoadingMask loading={true} />
    <Box />
*/

import { createStyles, makeStyles, Backdrop, CircularProgress } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    mask: {
      position: 'absolute',
      zIndex: 3,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
  }),
);
interface LoadingMaskProps {
  loading: boolean;
}

const LoadingMask: React.FC<LoadingMaskProps> = props => {
  const classes = useStyles();
  const { loading } = props;
  return (
    <Backdrop open={loading} className={classes.mask}>
      <CircularProgress hidden={!loading} size={50} />
    </Backdrop>
  );
};

export default LoadingMask;
