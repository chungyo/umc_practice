import {Link} from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <NavContainer>
            <Title>YONGCHA</Title>
            <nav>
                <Link to={'/'}>로그인</Link>
                <Link to='/movies'>회원가입</Link>
            </nav>
        </NavContainer>
    );
};

export default Navbar;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
    background-color: darkslategrey;
    width: 100%;
    height: 10vh;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: deeppink;
`;

