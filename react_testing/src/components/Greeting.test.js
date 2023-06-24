import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting"

describe('Greeting component', () => {
    test('render Hello World text on screen', () => {
        render(<Greeting/>);
        const helloWorld = screen.getByText('Hello World!');
        expect(helloWorld).toBeInTheDocument();
    });

    test('renders good to see you is the button was not clicked', () => {
        render(<Greeting/>);
        const outputElement = screen.getByText("It's good to see you");
        expect(outputElement).toBeInTheDocument();

    });

    test('renders changed if the button was clicked', () => {
        render(<Greeting/>);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const outputElement = screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();

    });

    test('does not render good to see you! if the button was clicked', () => {
        render(<Greeting/>);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const outputElement = screen.queryByText("It's good to see you");
        expect(outputElement).toBeNull();
    });
})

