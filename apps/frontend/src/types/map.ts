export interface MapOptions {
	accessToken?: string
	style?: string
	center?: [number, number]
	zoom?: number
	showUserLocation?: boolean
	[key: string]: any // permite argumentos extra específicos de cada proveedor
	// Puedes añadir más campos comunes según tus necesidades
}

export type MapStyle = string
