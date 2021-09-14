import React from "react";
import {Header} from "../Components/Header/Header";
import {ProductSection} from "../Components/ProductSection/ProductSection";
import {productos} from "../Utils/dataForTest";
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme?:any) => ({
    destacados: {
        marginTop:theme.spacing(8),
        padding:theme.spacing(4),

    },

}));
export const Home = () => {
    const classes = useStyles();
    return(
        <Container maxWidth="md">
            <Header />
            <div className={classes.destacados}>
                <ProductSection products={productos} />
            </div>
        </Container>
    )
}