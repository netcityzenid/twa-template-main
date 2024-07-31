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
import NavbarBot from "./components/NavbarBottom";

function App() {
  const { network } = useTonConnect();

  return (
    <div className="bg-red-500 h-full ">
      <NavbarTop />
      <Hero />
      <NavbarBot />
    </div>
  );
}

export default App;
