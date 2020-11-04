import React from "react";
import { useSelector } from "react-redux";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom'
import ListAltIcon from '@material-ui/icons/ListAlt';
import IconButton from '@material-ui/core/IconButton';
import ColorLensIcon from '@material-ui/icons/ColorLens'
import { IApplicationState } from "../store/types"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: 50,
      display: 'flex',
      justifyContent: "space-around"
    }
  })
);

const Footer = () => {
  const history = useHistory()
  const classes = useStyles();
  const { theme } = useSelector((state: IApplicationState) => ({
    theme: state.theme.theme
  }));
  return (
    <div className={classes.root} style={{ background: theme.secondColor, color: theme.textColor }}>

      <IconButton component="span" onClick={() => history.push('/')}>
        <ListAltIcon />
      </IconButton>
      <IconButton component="span" onClick={() => history.push('/theme')}>
        <ColorLensIcon />
      </IconButton>
    </div>
  );
};

export default Footer;
