import { render, screen } from "@testing-library/react";
import App from "./App";
import { useEventTests } from "./lib/hooks/useEventTests";

beforeAll(() => {
	console.log("Inici tests App");
});

describe("App testing", () => {

	beforeEach(() => {
		render(<App />);
		screen.debug();
	});
	
	describe("Initial values tests", () => {
		test("check empty inputs initially", () => {
			expect(screen.getByLabelText("Password").value).toBe("");
			expect(screen.getByRole("textbox").value).toBe("");
			expect(screen.getByLabelText(/confirm password/i).value).toBe("");
		});

		/* test("check to be able to type an email address", () => {
		const emailInput = screen.getByRole("textbox", {
			name: /email/i,
		});
		userEvent.type(emailInput, "selena@gmail.com");
		expect(emailInput.value).toBe("selena@gmail.com");
	}); */

		test("check to be able to type an email address", () => {
			const { emailInput } = useEventTests({ email: "test@test.com" });
			expect(emailInput.value).toBe("test@test.com");
		});

		/* test("check to be able to type a password", () => {
		const passwordInput = screen.getByLabelText("Password");
		userEvent.type(passwordInput, "This is the password!");
		expect(passwordInput.value).toBe("This is the password!");
	}); */

		test("check to be able to type a confirm password", () => {
			const { confirmPasswordInput } = useEventTests({
				confirmPassword: "admin123",
			});
			expect(confirmPasswordInput.value).toBe("admin123");
		});

		/* test("check showing email error message", () => {
		const emailInput = screen.getByRole("textbox", { name: /email/i });
		const emailError = screen.queryByText(/the email you input is invalid/i);
		const submitButton = screen.getByRole("button", { name: /submit/i });
		expect(emailError).not.toBeInTheDocument();
		userEvent.type(emailInput, "selenagmail.com");
		useEventTests({ email: "testtest.com" });
		userEvent.click(submitButton);
		const emailErrorAgain = screen.queryByText(/the email you input is invalid/i);
		expect(emailErrorAgain).toBeInTheDocument();
	}); */
	});

	describe("Error message tests", () => {
		test("check showing email error message", () => {
			expect(
				screen.queryByText(/the email you input is invalid/i)
			).not.toBeInTheDocument();
			useEventTests({ email: "testtest.com", submit: "submit" });
			expect(
				screen.getByText(/the email you input is invalid/i)
			).toBeInTheDocument();
		});

		/* test("check showing password error mesage", () => {
	const emailInput = screen.getByRole("textbox", {
		name: /email/i,
	});
	const passwordInput = screen.queryByText("Password");
	const passwordError = screen.queryByText(
		/the password you input should be 5 characters long/i
	);
	expect(passwordError).not.toBeInTheDocument();
	userEvent.type(emailInput, "selena@gmail.com");
	useEventTests({ email: "test@test.com" });
	userEvent.type(passwordInput, "pass");
	useEventTests({ password: "pass" });
	userEvent.click(screen.getByRole("button", { name: /submit/i }));
	const passwordErrorAgain = screen.queryByText(
		/the password you input should be 5 characters long/i
	);
	expect(passwordErrorAgain).toBeInTheDocument();
}); */

		test("check showing password error mesage", () => {
			expect(
				screen.queryByText(
					/the password you input should be 5 characters long/i
				)
			).not.toBeInTheDocument();
			useEventTests({
				email: "test@test.com",
				password: "123",
				submit: "submit",
			});
			expect(
				screen.getByText(/the password you input should be 5 characters long/i)
			).toBeInTheDocument();
		});

		/* test("check showing password error mesage if password doesn't match", () => {
	const emailInput = screen.getByRole("textbox", {
		name: /email/i,
	});
	const passwordInput = screen.queryByText("Password");
	const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
	const passwordConfirmError = screen.queryByText(
		/the passwords doesn't match/i
	);
	userEvent.type(emailInput, "selena@gmail.com");
	expect(passwordConfirmError).not.toBeInTheDocument();
	userEvent.type(passwordInput, "This is the password!");
	userEvent.type(confirmPasswordInput, "This is the password");
	userEvent.click(screen.getByRole("button", { name: /submit/i }));
	const passwordConfirmErrorAgain = screen.queryByText(
		/the passwords doesn't match/i
	);
	expect(passwordConfirmErrorAgain).toBeInTheDocument();
}); */

		test("check showing password error mesage if password doesn't match", () => {
			expect(
				screen.queryByText(/the passwords doesn't match/i)
			).not.toBeInTheDocument();
			useEventTests({
				email: "test@test.com",
				password: "This is the password!",
				confirmPassword: "This is the password",
				submit: "submit",
			});
			expect(
				screen.getByText(/the passwords doesn't match/i)
			).toBeInTheDocument();
		});

		/* test("check no error message if email is ok & password matches", () => {
	const emailInput = screen.getByRole("textbox", {
		name: /email/i,
	});
	const emailError = screen.queryByText(/the email you input is invalid/i);
	const passwordInput = screen.queryByText("Password");
	const passwordError = screen.queryByText(
		/the password you input should be 5 characters long/i
	);
	const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
	const passwordConfirmError = screen.queryByText(
		/the passwords doesn't match/i
	);
	expect(emailError).not.toBeInTheDocument();
	expect(passwordError).not.toBeInTheDocument();
	expect(passwordConfirmError).not.toBeInTheDocument();
	userEvent.type(emailInput, "selena@gmail.com");
	userEvent.type(passwordInput, "This is the password!");
	userEvent.type(confirmPasswordInput, "This is the password!");
	userEvent.click(screen.getByRole("button", { name: /submit/i }));
	const emailErrorAgain = screen.queryByText(/the email you input is invalid/i);
	const passwordErrorAgain = screen.queryByText(
		/the password you input should be 5 characters long/i
	);
	const passwordConfirmErrorAgain = screen.queryByText(
		/the passwords doesn't match/i
	);
	expect(emailErrorAgain).not.toBeInTheDocument();
	expect(passwordErrorAgain).not.toBeInTheDocument();
	expect(passwordConfirmErrorAgain).not.toBeInTheDocument();
}); */

		test("check no error message if email is ok & password matches", () => {
			expect(
				screen.queryByText(/the email you input is invalid/i)
			).not.toBeInTheDocument();
			expect(
				screen.queryByText(
					/the password you input should be 5 characters long/i
				)
			).not.toBeInTheDocument();
			expect(
				screen.queryByText(/the passwords doesn't match/i)
			).not.toBeInTheDocument();
			useEventTests({
				email: "test@test.com",
				password: "This is the password!",
				confirmPassword: "This is the password!",
				submit: "submit",
			});
			expect(
				screen.queryByText(/the email you input is invalid/i)
			).not.toBeInTheDocument();
			expect(
				screen.queryByText(
					/the password you input should be 5 characters long/i
				)
			).not.toBeInTheDocument();
			expect(
				screen.queryByText(/the passwords doesn't match/i)
			).not.toBeInTheDocument();
		});
	});
});
