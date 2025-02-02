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
                <Outlet/>
            </SideSection>
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
    flex-direction: row;
    width: 100%;
    height: 90vh;
`;
