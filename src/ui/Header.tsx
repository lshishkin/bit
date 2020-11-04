import React, { FC } from "react";
import { useSelector } from "react-redux";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { IApplicationState } from "../store/types"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: 50,
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      fontSize: 24
    }
  })
);

const Header: FC<{ title: string }> = ({ title }) => {
  const classes = useStyles();
  const { theme } = useSelector((state: IApplicationState) => ({
    theme: state.theme.theme
  }));
  return (
    <div className={classes.root} style={{ background: theme.secondColor, color: theme.textColor }}>
      <h3>{title}</h3>
    </div>
  );
};

export default Header;
