// src/assets.d.ts
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '../assets' {
  export const menu: string;
  export const logo: string;
  export const bghomesvg: string;
  export const healthnugget: string;
}