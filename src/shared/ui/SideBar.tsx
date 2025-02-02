import {Link} from "react-router-dom";
import styled from "styled-components";

const SideBar = () => {
    return (
        <NavContainer>
            <Link to={'/'}>찾기</Link>
            <Link to='/movies'>영화</Link>
        </NavContainer>
    );
};

export default SideBar;

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
