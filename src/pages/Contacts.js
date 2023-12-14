import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { List } from 'components/ContactList/ContactList.jsx';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { PhoneLoader } from 'components/Loader/Loader';
import { ContactForm } from 'components/Form/Form';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <SearchBar />
      <div>{isLoading && <PhoneLoader />}</div>
      <List />
    </>
  );
}
