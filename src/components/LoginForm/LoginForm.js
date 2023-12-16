import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Field, Form, Label, LogInButton } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Field type="email" name="email" />
      </Label>
      <Label>
        Password
        <Field type="password" name="password" />
      </Label>
      <LogInButton type="submit">Log In</LogInButton>
    </Form>
  );
};
