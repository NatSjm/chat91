import { login as fetchLogin } from 'fetches';

const onSubmitLogin = (e, history) => {
	e.preventDefault();

	const { email, password } = e.currentTarget.elements;

	if (email && password) {
		const emailValue = email.value;
		const passwordValue = password.value;

		fetchLogin(emailValue, passwordValue, history);
	}
};

export default onSubmitLogin;
