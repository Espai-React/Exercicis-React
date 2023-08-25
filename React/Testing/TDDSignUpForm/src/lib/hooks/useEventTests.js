import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const useEventTests = ({ email, password, confirmPassword, submit }) => {
	const emailInput = screen.getByRole("textbox", {
		name: /email/i,
	});
	const passwordInput = screen.getByLabelText("Password");
	const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
	const submitButton = screen.getByRole("button", { name: /submit/i });
	if (email) userEvent.type(emailInput, email);
	if (password) userEvent.type(passwordInput, password);
	if (confirmPassword) userEvent.type(confirmPasswordInput, confirmPassword);
	if (submit) userEvent.click(submitButton);
	return { emailInput, passwordInput, confirmPasswordInput, submitButton };
};


