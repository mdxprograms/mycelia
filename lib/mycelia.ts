/// <reference types="vite/client" />
// https://vitejs.dev/guide/features.html#client-types

export { dom } from "./dom";
export { mount } from "./utils";
export { default as Emitter } from "./emitter";
export type {
  CreateElement,
  Children,
  Props,
  ElementName,
  elementNames,
} from "./types/DOM";
export type { Mount } from "./types/Utils";
export type { EmitterType } from "./emitter";
export type { Listener, Listeners } from "./types/Emitter";
