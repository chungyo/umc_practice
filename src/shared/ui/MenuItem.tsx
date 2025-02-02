import { Link } from "react-router-dom";
import styled from "styled-components";

type TMenuItem = {
    to: string
    icon: React.ReactNode
    text: string
}

const MenuItem = ({ to, icon, text }: TMenuItem) => {
    return (
        <StyledLink to={to}>
            <IconWrapper>{icon}</IconWrapper>
            <Text>{text}</Text>
        </StyledLink>
    );
};

export default MenuItem;


const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px 15px;
    color: #f4f4f4;
    width: 100%;
    height: 6vh;
    &:hover {
        background-color: deeppink;
        color: #000;
    }
`;

const IconWrapper = styled.div`
    margin-right: 8px;  // 아이콘과 텍스트 간의 간격
`;

const Text = styled.span`
    font-size: 16px;
`;

