/// <reference types="vite/client" />

declare namespace NodeJS {
	interface ProcessEnv {
		readonly VITE_DATA_URL: string;
	}
}
