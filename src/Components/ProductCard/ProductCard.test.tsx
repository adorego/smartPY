import React from "react";
import {render, screen} from "@testing-library/react";
import {ProductCard, ProductInt} from "./ProductCard";
import {createId} from "./ProductCard";
import {productos} from "../../Utils/dataForTest";


describe("Card",() =>{
    let srcImage:String = '';
    let title:String = '';

    beforeEach(() => {

    });

    it("shows the product card", () => {

        const {container} = render(<ProductCard id={productos[0].id} foto={productos[0].foto}/>);
        screen.debug();
        expect(container.querySelector(`div#${createId(productos[0].id)}`)).toBeInTheDocument();
    });

    it('renders a product image', () =>{
        srcImage = productos[0].foto;
        const {container} = render(<ProductCard foto={productos[0].foto}/>);
        screen.debug();
        const imageContainer = container.querySelector("#productImage");
        expect(imageContainer).toBeInTheDocument();
        expect(imageContainer.getAttribute('style')).toEqual(`background-image: url(${srcImage});`);
    });

    it('renders a product title', () =>{
       title = productos[0].name;
       const srcImage = productos[0].foto;
       const {container} = render(<ProductCard foto={srcImage} name={title}/>);
       screen.debug();
       expect(container.textContent).toMatch(title);

    });

    it('renders another product title',() =>{
        title = productos[1].name;
        const srcImage = productos[1].foto;
        const {container} = render(<ProductCard foto={srcImage} name={title}/>);
        screen.debug();
        expect(container.textContent).toMatch(title);
    });
    it('renders the products price section', () => {
        const srcImage = productos[0].foto;
        const priceBefore:number = productos[0].priceBefore;
        const priceAfter:number = productos[0].priceAfter;
        const descuento:number = productos[0].discount;
        const descuentoString: String = `-${descuento}%`;
        const {container, getByText} = render(<ProductCard foto={srcImage} name={title} priceBefore={priceBefore} priceAfter={priceAfter} discount={descuento} />);
        screen.debug();
        expect(container.querySelector("#productPrice")).toBeInTheDocument();
        expect(getByText(descuentoString)).toBeInTheDocument();
        expect(getByText(Number(priceBefore).toLocaleString("es-PY"))).toBeInTheDocument();
        expect(getByText(Number(priceAfter).toLocaleString("es-PY"))).toBeInTheDocument();


    });
    it('renders a product', function () {
        const product:ProductInt = {
            id:"1",
            foto:productos[0].foto,
            name: productos[0].name,
            priceBefore:productos[0].priceBefore,
            priceAfter:productos[0].priceAfter,
            discount:productos[0].discount
        }
        const {container, getByText} = render(<ProductCard {...product} />);
        screen.debug();
        expect(container.querySelector(`#${createId(product.id)}`)).toBeInTheDocument();
    });

});