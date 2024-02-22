/* eslint-disable no-unused-vars */
/// <reference types="vite/client" />
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.json';

declare module '@ant-design/icons-vue';

declare interface Window {
    electron: {
        shutdown: () => void,
        restart: () => void,
        sheep: () => void,
    }
}

interface BaseKeyValueIO {
    id?: number | string;
    value?: number | string;
    label?: string;
    text?: string;
}

