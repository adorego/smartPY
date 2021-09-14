import React, {FC} from "react";
import {Grid} from "@material-ui/core";
import {ProductCard, ProductInt} from "../ProductCard/ProductCard";

interface ProductSectionProp{
    products:ProductInt[]
}
export const ProductSection:FC<ProductSectionProp> = (props:ProductSectionProp) => {
    //console.log({...props.products[0]});
    return(
        <div id="productSection">
                <Grid container spacing={4}>
                {props.products.map(
                    (item:ProductInt) => (
                        <Grid key={item.id} item xs={12} sm={9} md={3}>
                            <ProductCard key={item.id} {...item} />
                        </Grid>
                    )
                )}
                </Grid>


        </div>
    )
}