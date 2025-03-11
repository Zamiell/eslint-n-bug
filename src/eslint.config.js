import tseslint from 'typescript-eslint';
import eslintPluginN from "eslint-plugin-n";

export default tseslint.config(
  tseslint.configs.recommended,

  {
    plugins: {
      n: eslintPluginN,
    },

    rules: {
      "n/file-extension-in-import": ["warn", "always"],
    }
  }
);
