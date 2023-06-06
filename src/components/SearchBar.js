import styled from "styled-components"
import { BsSearch } from 'react-icons/bs'
import { DebounceInput } from 'react-debounce-input';

export default function SearchBar() {

    return (
        <Search>
            <DebounceInput
                data-test="search"
                minLength={3}
                debounceTimeout={300}
                placeholder="Search for people"
            />
            <p><BsSearch /></p>
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
                color: #C6C6C6; 
            }
            &:focus-visible {
                outline: none;
            }
        }

        p {
            position: absolute;
            right: 2%;
            top: 37%;
            color: #C6C6C6;
        }

`
