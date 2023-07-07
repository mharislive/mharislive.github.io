import { fireEvent, render, screen } from "@testing-library/react";
import SignUpForm, { ERRORS } from "./SignUpForm";
// import userEvent from "@testing-library/user-event";

const setup = () => {
  return render(<SignUpForm />);
};

const getElement = () => {
  const heading = screen.getByRole("heading", { name: "Sign Up" });
  const emailInput = screen.getByRole("textbox", { name: "Email" });
  const passwordInput = screen.getByLabelText("Password");
  const confirmPasswordInput = screen.getByLabelText("Confirm password");
  const button = screen.getByRole("button", { name: "Submit" });
  const emailError = screen.queryByText(ERRORS.email);
  const passwordLenErr = screen.queryByText(ERRORS.passwordLen);
  const passwordMismatchError = screen.queryByText(ERRORS.passwordMismatch);

  return {
    heading,
    emailInput,
    passwordInput,
    confirmPasswordInput,
    emailError,
    passwordLenErr,
    passwordMismatchError,
    button,
  };
};

const setElementValue = ({
  email = "",
  password = "",
  confirmPassword = "",
}) => {
  const { emailInput, passwordInput, confirmPasswordInput } = getElement();

  if (email) {
    // userEvent.type(emailInput, email);
    fireEvent.change(emailInput, { target: { value: email } });
  }

  if (password) {
    // userEvent.type(passwordInput, password);
    fireEvent.change(passwordInput, { target: { value: password } });
  }

  if (confirmPassword) {
    // userEvent.type(confirmPasswordInput, confirmPassword);
    fireEvent.change(confirmPasswordInput, {
      target: { value: confirmPassword },
    });
  }
};

describe("SignUpForm", () => {
  describe("rendering", () => {
    it("should render successfully", () => {
      setup();
    });

    it("should render heading", () => {
      setup();
      expect(
        screen.getByRole("heading", { name: "Sign Up" })
      ).toBeInTheDocument();
    });

    it("should render email input", () => {
      setup();
      const { emailInput } = getElement();
      expect(emailInput).toBeInTheDocument();
    });

    it("should render password input", () => {
      setup();
      const { passwordInput } = getElement();
      expect(passwordInput).toBeInTheDocument();
    });

    it("should render confirm password input", () => {
      setup();
      const { confirmPasswordInput } = getElement();
      expect(confirmPasswordInput).toBeInTheDocument();
    });

    it("should render submit button", () => {
      setup();
      const { button } = getElement();
      expect(button).toBeInTheDocument();
    });
  });

  describe("error handling", () => {
    it("should render error if email is empty", () => {
      setup();
      const { button } = getElement();
      fireEvent.click(button);
      const { emailError } = getElement();
      expect(emailError).toBeInTheDocument();
    });

    it("should render error if email is invalid", () => {
      setup();
      setElementValue({ email: "test" });
      const { button } = getElement();
      fireEvent.click(button);
      const { emailError } = getElement();
      expect(emailError).toBeInTheDocument();
    });

    it("should render error if password length is less than 5", async () => {
      setup();
      setElementValue({ email: "test@test.com", password: "1234" });
      const { button } = getElement();
      fireEvent.click(button);
      const { passwordLenErr } = getElement();
      expect(passwordLenErr).toBeInTheDocument();
    });

    it("should render error if password mismatch happens", async () => {
      setup();
      setElementValue({
        email: "test@test.com",
        password: "12345",
        confirmPassword: "1234",
      });
      const { button } = getElement();
      fireEvent.click(button);
      const { passwordMismatchError } = getElement();
      expect(passwordMismatchError).toBeInTheDocument();
    });

    it("should submit form successfully if all fields are filled correctly", async () => {
      setup();
      setElementValue({
        email: "test@test.com",
        password: "12345",
        confirmPassword: "12345",
      });
      const { button } = getElement();
      fireEvent.click(button);
      const { emailError, passwordLenErr, passwordMismatchError } =
        getElement();
      expect(emailError).not.toBeInTheDocument();
      expect(passwordLenErr).not.toBeInTheDocument();
      expect(passwordMismatchError).not.toBeInTheDocument();
    });
  });
});
