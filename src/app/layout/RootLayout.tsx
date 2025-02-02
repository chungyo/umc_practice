import {Outlet} from 'react-router';
import NavBar from "../../shared/ui/NavBar.tsx";
import styled from "styled-components";
import SideBar from "@shared/ui/SideBar.tsx";

export default function RootLayout() {
    return (
        <Container>
            <NavBar/>
            <SideSection>
                <SideBar/>
            </SideSection>
            <Outlet/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    height: 100vh;
    width: 100%;
`;

const SideSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    height: 100vh;
    background-color: darkslategray;
`;
