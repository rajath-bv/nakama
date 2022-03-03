import { Layout } from 'antd';
import styled from 'styled-components';
const { Sider } = Layout;

export default styled(Sider)`
    background-color: #2c2c2c;
    width: 200px;
`;

export const StyledMenu = styled.ul`
    background-color: #2c2c2c;
    color: white;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`;

export const StyledItem = styled.li`
    cursor: pointer;
    list-style: none;
    text-align: center;
    padding: 10px 0;
    margin-bottom: 10px;
    &:hover {
        color: #2c2c2c;
        background-color: white;
    }
`;

export const EndItem = styled(StyledItem)`
    margin-top: auto;
`;
