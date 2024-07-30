import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import Hero from "./components/Hero";
import NavbarTop from "./components/NavbarTop";

const StyledApp = styled.div`
  background-color: #151515;
  color: white;
  min-height: 100vh;
  padding: 20px 20px;
  margin: -10px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
  const { network } = useTonConnect();

  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <NavbarTop />
          <Hero/>
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
