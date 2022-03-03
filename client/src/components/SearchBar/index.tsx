import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import styled from 'styled-components';
import history from '../../helpers/history';

export const SearchContainer = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
    justify-content: center;
`;

const Div = styled.div`
    background-color: #ffffff;
    color: #000000;
    width: 50vw;
    height: 30px;
    margin: 2vw auto;
    border-radius: 0.7vw;
    @media (max-width: 768px) {
        width: 85vw;
        margin: 5vw auto;
    }
`;

const Input = styled.input`
    border: none;
    width: 45vw;
    &::placeholder {
        text-align: center;
    }
    &:focus {
        border: none;
        outline: none;
    }
`;
const Span = styled.span`
    background-color: #ffffff;
    color: #000000;
    height: 40px;
    margin: 2vw auto;
    padding: 10px;
    border-radius: 0.7vw;
    align-items: center;
    justify-content: center;
    display: flex;
    @media (max-width: 768px) {
        height: 30px;
    }
`;

function SearchBar(props: any) {
    return (
        <Div>
            <Span>
                {props.isLeft && (
                    <MagnifyingGlass
                        style={{ marginRight: '10px' }}
                        size={20}
                    />
                )}
                <Input type="text" onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        history.replace({
                            pathname: "/",
                            search: `?search=${props.text}`,
                        })
                        history.go(0);
                    }
                }} onChange={(e) => props.setText(e.target.value)} value={props.text} 
                placeholder={props.placeholder} />
                {props.isRight && (
                    <MagnifyingGlass style={{ marginLeft: '10px' }} size={20} />
                )}
            </Span>
        </Div>
    );
}

export default SearchBar;
