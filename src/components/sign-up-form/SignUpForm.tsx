import { ChangeEvent, FormEvent, useState } from "react";
import isEmail from "validator/lib/isEmail";

export const ERRORS = {
  email: "Email is not valid",
  passwordLen: "Password should be of min 5 characters",
  passwordMismatch: "Password doesn't match",
};

export const initialFormData = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState<string>("");

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!isEmail(email)) {
      setError(ERRORS.email);
      return;
    }

    if (password.length < 5) {
      setError(ERRORS.passwordLen);
      return;
    }

    if (password !== confirmPassword) {
      setError(ERRORS.passwordMismatch);
      return;
    }

    setError("");
    setFormData(initialFormData);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { email, password, confirmPassword } = formData;

  return (
    <form
      className="p-16 mx-auto max-w-sm border shadow-sm"
      onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmitHandler(e)}
    >
      <h2 className="text-2xl mb-3">Sign Up</h2>
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border border-slate-300 rounded p-1"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full border border-slate-300 rounded p-1"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="w-full border border-slate-300 rounded p-1"
          value={confirmPassword}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
        />
      </div>

      {error && <p className="mb-3 text-red-700">{error}</p>}

      <button
        type="submit"
        className="bg-purple-500 hover:bg-purple-700 text-white px-3 py-1 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
