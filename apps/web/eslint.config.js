import baseConfig, { restrictEnvAccess } from "@opine/eslint-config/base";
import nextjsConfig from "@opine/eslint-config/nextjs";
import reactConfig from "@opine/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
