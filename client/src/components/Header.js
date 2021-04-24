import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'rgba(0,0,0, 0.5)',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  appbarTitle: {
    fontSize: 40
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#d59f2f',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
  login: {
    color: 'white',
    fontSize: '1.2rem',
    width: 120,
    borderRadius: 20
  }
}));
export default function Header({handleAddClick}) {
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Scandale<span className={classes.colorText}>Cocktails</span>
          </h1>
          <Button className={classes.login} onClick={handleAddClick}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}