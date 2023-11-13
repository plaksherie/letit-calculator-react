export interface ITitle {
	rendered: string
}

export interface IMainParameter {
	title: string
	price: string
	tooltip: string
	details: string
	skip: boolean
	skip_products: boolean
	selected: boolean
}

export interface IProduct {
	id: number
	title: string
	image_url: string
	description: string
	price: string
	selected: boolean
}

export interface IEquipmentBlock {
	title: string
	products: IProduct[]
	only_one: boolean
	only_select: boolean
}

export interface IAdditionalService {
	title: string
	price: string
	selected: boolean
}

export interface IAcfService {
	title: string
	title_in_form: string
	icon: string
	title_main_parameters: string
	main_parameters: IMainParameter[]
	equipment_blocks: IEquipmentBlock[]
	additional_services: IAdditionalService[]
	alert_show: boolean
	alert_content: string
}

export interface IAcf {
	services: IAcfService[]
}

export interface ResidentialComplex {
	id: number
	title: ITitle
	acf: IAcf
}
