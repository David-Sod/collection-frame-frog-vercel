import { Button, Frog, TextInput, parseEther } from "frog";
import { devtools } from "frog/dev";
import { serveStatic } from "frog/serve-static";
// import { neynar } from 'frog/hubs'
import { handle } from "frog/vercel";
import { abi } from "./abi";
import { baseSepolia } from "viem/chains";
// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
});

app.frame("/", (c) => {
  return c.res({
    image: (
      <div style={{ color: "white", display: "flex", fontSize: 60 }}>
        Perform a transaction
      </div>
    ),
    intents: [<Button.Transaction target="/mint">Mint</Button.Transaction>],
  });
});

app.transaction("/mint", (c) => {
  // Contract transaction response.
  return c.contract({
    abi: abi.abi,
    chainId: `eip155:${baseSepolia.id}`,
    functionName: "mint",
    args: [1, "0x57cAb5833C6b4a70a6202aB001C84d4C7BC3d9b1", [], 1, 0],
    to: "0xEaDaF03483365c89E5Ec447a390Db0C605F4A2C7",
    value: parseEther("0.001"),
  });
});

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== "undefined";
const isProduction = isEdgeFunction || import.meta.env?.MODE !== "development";
devtools(app, isProduction ? { assetsPath: "/.frog" } : { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
