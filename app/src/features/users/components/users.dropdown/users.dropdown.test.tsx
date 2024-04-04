import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { UsersDropdown } from "./index";
import { render } from "utils";

const dummyUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

// Necessary setup for tests to run with MUI components and Jest. This would normally go in a separate file but for simplicity i'm adding it here.
beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test("users dropdown renders", () => {
  render(<UsersDropdown users={dummyUsers} onUserSelect={() => {}} />);
  const dropdown = screen.getByTestId("users-dropdown");

  expect(dropdown).toBeInTheDocument();

  const openButton = screen.getAllByRole("button");
  fireEvent.click(openButton[0]);

  const options = screen.getAllByRole("option");
  expect(options).toHaveLength(1);
});

test("users dropdown labels render with correct format", () => {
  render(<UsersDropdown users={dummyUsers} onUserSelect={() => {}} />);
  const openButton = screen.getAllByRole("button");
  fireEvent.click(openButton[0]);

  const options = screen.getAllByRole("option");

  const label = options[0].textContent;
  expect(label).toBe("Graham, Leanne");
});

test("render error message if no users", () => {
  render(
    <UsersDropdown users={undefined} onUserSelect={() => {}} loading={false} />
  );
  const errorComponent = screen.getByTestId("error-text");
  expect(errorComponent).toBeInTheDocument();
});
