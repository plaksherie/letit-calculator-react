interface WooProductImage {
	id: number
	src: string
	name: string
	description: string
	price_html: string
}

export interface WooProduct {
	id: number
	images: WooProductImage[]
}
