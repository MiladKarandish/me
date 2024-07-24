/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />
import 'vite/client';

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}