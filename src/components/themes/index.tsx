import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../../ui/Footer"
import Header from "../../ui/Header"
import { Button } from '@material-ui/core';
import { IApplicationState } from "../../store/types";
import { themeActions } from "../../store/theme/action";
import { ThemeInterface } from "../../store/theme/types";

interface ThemesTypes {
    name: string;
    value: string;
    color: string;
}
const useStyles = makeStyles({
    root: {
        height: "calc(100vh - 100px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: 200,
        margin: "20px 0",
        border: '1px solid black',
        borderRadius: 5
    }
});

const themes: Array<ThemesTypes> = [{ name: "Светлая", value: "light", color: "rgb(206, 240, 227)" },
{ name: "Темная", value: "dark", color: "rgb(25, 25, 25)" },
{ name: "Синяя", value: "blue", color: "rgb(34, 22, 105)" }
]
const Themes = () => {
    const { theme } = useSelector((state: IApplicationState) => ({
        theme: state.theme.theme
    }));
    const classes = useStyles();
    const dispatch = useDispatch();
    return <><Header title='Темы' /><div className={classes.root} style={{ background: theme.mainColor }}>
        {themes.map((item) => <Button className={classes.button} style={{ background: item.color }} onClick={() => {
            dispatch(themeActions.fetchTheme(item.value))
        }}>{item.name}</Button>)}
    </div><Footer /></>
}

export default Themes