import { screen, render } from "@testing-library/react";
import ProductPage from "./product-page";

beforeEach(() => render(<ProductPage />));

describe("product page", () => {
	it("must render display a title", () => {
		screen.debug()
		expect(screen.getByText(/product page/i)).toBeInTheDocument();
	});
});

describe("carrito", () => {
	it("must render display a word", () => {
		expect(screen.getByText(/carrito/i)).toBeInTheDocument();
	});
});
