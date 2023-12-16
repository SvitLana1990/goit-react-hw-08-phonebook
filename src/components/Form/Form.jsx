import { Formik } from 'formik';
import { Form, ErrorMessage, Field, Button, Label } from './Form.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { toast } from 'react-hot-toast';
import { addContact } from 'redux/contacts/contactsOperations';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(9, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = async values => {
    const name = values.name;
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      toast.error(`Contact with the name ${name} already exists.`, {
        position: 'top-center',
      });
      return;
    }
    try {
      await dispatch(addContact(values)).unwrap();
      toast.success(`${values.name} added to your contacts`, {
        position: 'top-center',
      });
    } catch (error) {
      toast.error('Ooops! Something went wrong. Try refreshing the page', {
        position: 'top-center',
      });
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <Label htmlFor="name">
            NAME
            <Field type="text" id="name" name="name" placeholder="Write name" />
            <ErrorMessage name="name" component="span" />
          </Label>

          <Label htmlFor="number">
            Number
            <Field
              type="tel"
              id="number"
              name="number"
              placeholder="Write number"
            />
            <ErrorMessage name="number" component="span" />
          </Label>
          <Button type="submit" style={{ margin: '0 auto' }}>
            Add contact
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
