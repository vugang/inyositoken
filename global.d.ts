// global.d.ts
declare global {
  interface Window {
    ethereum: any; // or a more specific type if available
  }
}

// This line is needed to convert this file into a module
export {};
