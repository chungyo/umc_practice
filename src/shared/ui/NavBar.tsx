import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    const nav = useNavigate();

    return (
        <NavContainer>
            <Title onClick={() => nav('/')}>YONGCHA</Title>
            <LoginSection>
                <SubTitle onClick={() => nav('/login')}>로그인</SubTitle>
                <SubTitle onClick={() => nav('/signup')}>회원가입</SubTitle>
            </LoginSection>
        </NavContainer>
    );
};

export default Navbar;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
    background-color: rgb(19, 21, 23) ;
    width: 100%;
    height: 10vh;
`;

const LoginSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px
`;

const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    color: deeppink;
    cursor: pointer;  /* 클릭 가능함을 나타내는 커서 스타일 */
    &:hover {
        color: hotpink; /* 호버 시 색상 변화 */
    }
`;

const SubTitle = styled.h3`
    font-size: 1rem;
    font-weight: bold;
    color: deeppink;
    cursor: pointer;  /* 클릭 가능함을 나타내는 커서 스타일 */
    &:hover {
        color: hotpink; /* 호버 시 색상 변화 */
    }
`;