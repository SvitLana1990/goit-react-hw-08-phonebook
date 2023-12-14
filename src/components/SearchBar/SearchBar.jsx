import { Input } from './SearchBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { updateFilter } from 'redux/contacts/filterSlice';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  return (
    <Input
      type="text"
      name="name"
      value={filterValue}
      onChange={event => dispatch(updateFilter(event.target.value))}
      placeholder="Find contacts by name"
      required
    />
  );
};
