import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test('render Hello World text on screen', () => {
    render(<Greeting/>);
    const helloWorld = screen.getByText('Hello World!');
    expect(helloWorld).toBeInTheDocument();
})