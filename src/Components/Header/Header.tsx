import React, {FC} from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import logo from "../../images/logoSPY.png";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        logo:{
            maxWidth:"120px"
        }
    })
);

export const Header:FC = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar position={"fixed"}>
                <Toolbar>
                    <img className={classes.logo} src={logo} alt="Logo"/>
                </Toolbar>
            </AppBar>
        </div>
    );
};