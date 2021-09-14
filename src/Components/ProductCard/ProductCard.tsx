import React, {FC} from "react";
import Card from "@material-ui/core/Card"
import {CardMedia, CardHeader, CardContent, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme?:any) => ({
    card: {
        border: "2px solid black",
        maxWidth: "180px",
        height: "auto"
    },
    media:{
        width:180,
        height:231
    }
}));

export const createId = (id:string) => {
    return `product${id}`;
}

export interface ProductInt {
    id:string;
    foto:string;
    name:string;
    priceBefore:number;
    priceAfter:number;
    discount:number;
}

export const ProductCard:FC<ProductInt> = (props:ProductInt) =>{
    const classes = useStyles();
    return(
        <Card id={createId(props.id)} className={classes.card}>
            <CardHeader
                title={props.name}
            />

            <CardMedia id="productImage"
            className={classes.media} image={props.foto}>

            </CardMedia>
            <CardContent id="productPrice">
                <Typography>
                    {Number(props.priceBefore).toLocaleString("es-PY")}
                </Typography>
                <Typography>
                    {Number(props.priceAfter).toLocaleString("es-PY")}
                </Typography>
                <Typography>
                    {`-${props.discount}%`}
                </Typography>
            </CardContent>
        </Card>);
}

