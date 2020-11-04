import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';
import { IApplicationState } from "../../store/types";
import { newsActions } from "../../store/news/action";
import { NewInterface } from "../../store/news/types";
import Footer from "../../ui/Footer"
import Header from "../../ui/Header"
import { usePageBottom } from "../../utils"
const useStyles = makeStyles({
  root: {
    height: "calc(100vh - 100px)",
    maxHeight: "calc(100vh - 100px)",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  }
});

const News = () => {
  const isPageBottom = usePageBottom("add-scroll");
  const classes = useStyles();
  const dispatch = useDispatch();
  const { news, load, error, theme } = useSelector((state: IApplicationState) => ({
    news: state.news.news,
    load: state.application.load,
    error: state.application.error,
    theme: state.theme.theme
  }));

  useEffect(() => {
    dispatch(newsActions.fetchNews());
  }, []);

  useEffect(() => {
    if (!isPageBottom || load || error) return;
    dispatch(newsActions.fetchNews());
  }, [isPageBottom]);
  return <>
    <Header title="Новости" />
    <div className={classes.root} style={{ background: theme.mainColor }} id="add-scroll">{news.map((item: NewInterface) => <div key={item.title}>
      <h3 style={{ color: theme.secondColor }}>{item.title}</h3>
      <p style={{ color: theme.textColor }}>{item.content}</p>
    </div>)}
      {load && <LinearProgress />}
    </div>
    <Footer />
  </>;
};

export default News;
