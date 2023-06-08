import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchMatch, setSearchMatch] = useState([]);
  const navigate = useNavigate();

  async function searchUsers(event) {
    const value = event.target.value;

    if (value.length >= 3) {
      const promise = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/name/${value}`
      );
      setSearchMatch(promise.data);
    } else {
      setSearchMatch([]);
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

      {searchMatch.length >= 1 ? (
        <Teste>
          {searchMatch.map((s, i) => (
            <div key={i} onClick={() => navigate(`/user/${s.id}`)}>
              <img src={s.photo} alt="" />
              <p>{s.name}</p>
            </div>
          ))}
        </Teste>
      ) : (
        ""
      )}
      <BsSearch onClick={searchUsers} size={20} />
    </Search>
  );
}

const Search = styled.div`
  display: flex;
  flex-direction: column;
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
    z-index: 4;
    &::placeholder {
      color: #c6c6c6;
    }
    &:focus-visible {
      outline: none;
    }
  }

  svg {
    z-index: 4;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
    color: #c6c6c6;
  }
`;

const Teste = styled.div`
  z-index: 3;
  position: absolute;
  top: 85%;
  background: #e7e7e7;
  border-radius: 8px;
  width: 100%;
  padding: 15px 20px;
  gap: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px;
    gap: 10px;
    width: 100%;
    border-radius: 8px;
    color: #515151;
    font-family: "Lato";
    font-style: normal;

    :hover {
      background-color: #515151;
      color: black;
    }
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
