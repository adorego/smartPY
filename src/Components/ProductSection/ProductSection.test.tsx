import {render, screen} from "@testing-library/react";
import {ProductSection} from "./ProductSection";
import {ProductInt} from "../ProductCard/ProductCard";
import {productos} from "../../Utils/dataForTest";
import {createId} from "../ProductCard/ProductCard";

describe('ProductSection', () => {
    let product:ProductInt = {} as ProductInt;
    // @ts-ignore
    let productosArray:[ProductInt]= new Array<ProductInt>();
    beforeEach(() => {
        product = {
            id:productos[0].id,
            foto:productos[0].foto,
            name: productos[0].name,
            priceBefore:productos[0].priceBefore,
            priceAfter:productos[0].priceAfter,
            discount:productos[0].discount
        }
        productosArray.push(product);
        productosArray.push({
            id:productos[1].id,
            foto:productos[1].foto,
            name: productos[1].name,
            priceBefore:productos[1].priceBefore,
            priceAfter:productos[1].priceAfter,
            discount:productos[1].discount
        });
        productosArray.push({
            id:productos[2].id,
            foto:productos[2].foto,
            name: productos[2].name,
            priceBefore:productos[2].priceBefore,
            priceAfter:productos[2].priceAfter,
            discount:productos[2].discount
        });
    });
    it("renders section with the right id", () => {
        const {container} = render(<ProductSection {...productosArray[0]}/>);
        screen.debug();
        expect(container.querySelector("#productSection")).toBeInTheDocument();
    });

    it("renders one product cards", () => {
        //console.log(productosArray);
        const {container, getByText} = render(<ProductSection products={new Array<ProductInt>(productosArray[0])} />);
        screen.debug();
        expect(container.querySelector(`#${createId(productosArray[0].id)}`)).toBeInTheDocument();
        expect(getByText(productosArray[0].name)).toBeInTheDocument();
    });

    it('renders a product list', function () {
        const {container, getByText} = render(<ProductSection products={new Array<ProductInt>(productosArray[0], productosArray[1], productosArray[2])} />);
        screen.debug();
        expect(container.querySelector(`#${createId(productosArray[0].id)}`)).toBeInTheDocument();
        expect(getByText(productosArray[0].name)).toBeInTheDocument();

    });
});