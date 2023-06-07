import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";

export default function SearchBar() {
  function searchUsers(event) {
    const value = event.target.value;

    if (value.length >= 3) {
      axios.get(`${process.env.REACT_APP_API_URL}/user/${value}`);
    }
  }

  return (
    <Search>
      <DebounceInput
        data-test="search"
        minLength={3}
        debounceTimeout={300}
        onChange={searchUsers}
        placeholder="Search for people"
      />
      <BsSearch onClick={searchUsers} />
    </Search>
  );
}

const Search = styled.div`
  display: flex;
  position: relative;
  width: 39%;
  input {
    width: 100%;
    border-radius: 8px;
    border-style: none;
    padding: 2%;
    font-weight: 400;
    font-size: 19px;
    line-height: 10px;
    &::placeholder {
      color: #c6c6c6;
    }
    &:focus-visible {
      outline: none;
    }
  }

  svg {
    position: absolute;
    right: 2%;
    top: 37%;
    color: #c6c6c6;
  }
`;
