import axios from "axios"

export const WP_HOST = import.meta.env.VITE_WP_HOST

const wpConfig = {
	baseURL: WP_HOST,
	headers: {
		"Content-Type": "application/json",
	},
}

export const apiWpClient = axios.create(wpConfig)

const wooConfig = {
	baseURL: WP_HOST,
	headers: {
		"Content-Type": "application/json",
	},
}

export const apiWooClient = axios.create(wooConfig)
