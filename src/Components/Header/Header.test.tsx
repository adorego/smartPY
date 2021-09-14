import {render, screen} from '@testing-library/react';
import {Header} from "./Header";
describe("Header", () =>{
    it("renders the logo", () =>{
        const logoFile = "logoSPY.png";
        const altText = "logo SmartPY"
        render(<Header />);
        const logo = screen.getByRole(/img/i);
        screen.debug();
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("alt", 'Logo');
    });
    it("renders LoginPage button", () => {

    });
});