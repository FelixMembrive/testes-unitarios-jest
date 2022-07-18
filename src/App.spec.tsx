import { findByText, render } from "@testing-library/react"
import App from "./App"
import userEvent from "@testing-library/user-event"

// test("exemplo", () => {
//     const { getByText } = render(<App/>)
//     expect(getByText("Teste")).toBeInTheDocument()
//     expect(getByText("Teste")).toHaveAttribute("class", "main")
// })

// test("exemplo", () => {
//     const { getByTestId } = render(<App/>)
//     expect(getByTestId("teste-titulo"))
// })

describe("App Component", () => {
    it("should render list items", () => {
        const { getByText } = render(<App />);

        expect(getByText("Eduardo")).toBeInTheDocument()
        expect(getByText("João")).toBeInTheDocument()
        expect(getByText("Emerson")).toBeInTheDocument()
    })
    it("should be able to add new item to the list", async () => {
        const { getByText, findByText, getByPlaceholderText, debug } = render(<App />);
        const addButton = getByText("Adicionar")

        const inputElement = getByPlaceholderText("novo item")
        await userEvent.type(inputElement, "Novo")

        userEvent.click(addButton)

        const newItem = await findByText("Novo")
        expect(newItem).toBeInTheDocument()

        // debug()

        // const inputElement = getByPlaceholderText("novo item")
        // userEvent.type(inputElement, "Novo")
    })
})