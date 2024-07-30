import { CHAIN, TonConnectButton } from "@tonconnect/ui-react";
import { useCounterContract } from "../hooks/useCounterContract";
import { useTonConnect } from "../hooks/useTonConnect";
import { Card, FlexBoxCol, FlexBoxRow, Ellipsis, Button } from "./styled/styled";

export function Counter() {
  const { network } = useTonConnect();
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();

  return (
    <div className="Container">
      <div className="w-full flex justify-end gap-2">
        <TonConnectButton />
        <Button>{network ? (network === CHAIN.MAINNET ? "mainnet" : "testnet") : "N/A"}</Button>
      </div>
      <Card>
        <FlexBoxCol>
          <h3 className="text-red-500">Counter</h3>
          <FlexBoxRow>
            <b>Address</b>
            <Ellipsis>{address}</Ellipsis>
          </FlexBoxRow>
          <FlexBoxRow>
            <b>Value</b>
            <div className=" ">{value ?? "Loading..."}</div>
          </FlexBoxRow>
          <Button
            disabled={!connected}
            className={`Button ${connected ? "Active" : "Disabled"}`}
            onClick={() => {
              sendIncrement();
            }}
          >
            Increment
          </Button>
        </FlexBoxCol>
      </Card>
    </div>
  );
}
