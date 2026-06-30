import express from "express";
import { paymentMiddleware } from "@x402/express";
import { x402ResourceServer, HTTPFacilitatorClient } from "@x402/core/server";
import { registerExactEvmScheme } from "@x402/evm/exact/server";
import cors from "cors";
import dotenv from "dotenv";
import { getPeptide, listPeptides } from "./peptideData.js";
import { getStack, listStacks } from "./stackData.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const PAY_TO = process.env.WALLET_ADDRESS;
const NETWORK = process.env.X402_NETWORK_CAIP2 || "eip155:84532";
const FACILITATOR_URL = process.env.X402_FACILITATOR_URL || "https://x402.org/facilitator";

if (!PAY_TO) {
  console.error("Missing WALLET_ADDRESS in environment variables. Set it in .env or Vercel env vars.");
  process.exit(1);
}

const facilitatorClient = new HTTPFacilitatorClient({ url: FACILITATOR_URL });
const resourceServer = new x402ResourceServer(facilitatorClient);
registerExactEvmScheme(resourceServer);

app.get("/", (req, res) => {
  res.json({
    service: "Empirical OS x402 API",
    description: "Pay-per-call access to peptide protocol data and supplement stack data",
    free_routes: ["/api/peptides", "/api/stacks"],
    paid_routes: [
      { path: "/api/peptide/:slug", price: "$0.01", example: "/api/peptide/bpc-157" },
      { path: "/api/stack/:goal", price: "$0.01", example: "/api/stack/sleep" }
    ],
    network: NETWORK
  });
});

app.get("/api/peptides", (req, res) => {
  res.json({ available: listPeptides() });
});

app.get("/api/stacks", (req, res) => {
  res.json({ available: listStacks() });
});

app.use(
  paymentMiddleware(
    {
      "GET /api/peptide/:slug": {
        accepts: [
          {
            scheme: "exact",
            price: "$0.01",
            network: NETWORK,
            payTo: PAY_TO
          }
        ],
        description: "Research peptide protocol data: mechanism, dosing, reconstitution, administration route",
        mimeType: "application/json"
      },
      "GET /api/stack/:goal": {
        accepts: [
          {
            scheme: "exact",
            price: "$0.01",
            network: NETWORK,
            payTo: PAY_TO
          }
        ],
        description: "Supplement stack recommendation with mechanisms and dosing for a stated goal",
        mimeType: "application/json"
      }
    },
    resourceServer
  )
);

app.get("/api/peptide/:slug", (req, res) => {
  const data = getPeptide(req.params.slug);
  if (!data) {
    return res.status(404).json({ error: `No data for "${req.params.slug}". See /api/peptides for available entries.` });
  }
  res.json(data);
});

app.get("/api/stack/:goal", (req, res) => {
  const data = getStack(req.params.goal);
  if (!data) {
    return res.status(404).json({ error: `No stack for "${req.params.goal}". See /api/stacks for available entries.` });
  }
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Empirical OS x402 API running on port ${PORT}`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Pay to: ${PAY_TO}`);
});

export default app;
