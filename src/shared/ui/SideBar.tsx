import styled from "styled-components";
import MenuItem from "@shared/ui/MenuItem.tsx";



const SideBar = () => {
    return (
        <NavContainer>
            <MenuItem to={'/search'} icon={<SearchIcon />} text="찾기" />
            <MenuItem to='/category' icon={<MovieIcon />} text="영화" />
        </NavContainer>
    );
};

export default SideBar;

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15px;
    background-color: rgb(19, 21, 23);
    width: 15%;
`;

const SearchIcon = () => <span role="img" aria-label="search">🔍</span>;
const MovieIcon = () => <span role="img" aria-label="movie">🎬</span>;
