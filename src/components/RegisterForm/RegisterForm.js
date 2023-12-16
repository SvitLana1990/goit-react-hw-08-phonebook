import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Field, Form, Label, RegisterButton } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Field type="text" name="name" />
      </Label>
      <Label>
        Email
        <Field type="email" name="email" />
      </Label>
      <Label>
        Password
        <Field type="password" name="password" />
      </Label>
      <RegisterButton type="submit">Register</RegisterButton>
    </Form>
  );
};
