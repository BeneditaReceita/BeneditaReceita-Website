/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DATABASE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
