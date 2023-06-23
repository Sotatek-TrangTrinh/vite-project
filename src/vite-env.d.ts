export {};

declare global {
  interface Window {
    ENV: {
      API_ENDPOINT: string;
    };
  }
}
