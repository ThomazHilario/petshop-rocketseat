import { defineComputeConfig } from "@prisma/compute-sdk/config";

export default defineComputeConfig({
  app: {
    name: "petshop-api",
    framework: "nestjs",
    httpPort: 4000,
    env: ".env",
  },
});
