import styled from "styled-components"
import { BsSearch } from 'react-icons/bs'
import { DebounceInput } from 'react-debounce-input';

export default function SearchBar() {

    return (
        <div>
            <Search>
                <DebounceInput
                    data-test="search"
                    minLength={3}
                    debounceTimeout={300}
                    placeholder="Search for people"
                />
                <p><BsSearch /></p>
            </Search>

        </div>
    )
}


const Search = styled.div`
    display: flex;
    position: relative;
    width: 563px;
        input {
            width: 100%;
            height: 45px;
            border-radius: 8px;
            border-style: none;
            padding: 5px;
            &::placeholder {
                color: #C6C6C6;
            }
            &:focus-visible {
                outline: none;
            }
           
        }
        p {
            position: absolute;
            right: 10px;
            top: 13px;
            color: #C6C6C6;
        }

`
