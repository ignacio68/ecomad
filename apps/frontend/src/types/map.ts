import type { LatLng, ShowOptions } from '@nativescript-community/ui-mapbox'
import { MapStyle } from '@nativescript-community/ui-mapbox'

/**
 * Define las opciones que un componente padre puede pasar dinámicamente al mapa.
 */
export interface DynamicMapOptions {
	style: MapStyle
	center: LatLng
	zoomLevel: number
	showUserLocation: boolean
}

/**
 * Define la forma de la configuración estática y por defecto del mapa,
 * omitiendo las propiedades que se gestionan de forma dinámica o separada.
 */
export type BaseMapOptions = Omit<
	ShowOptions,
	keyof DynamicMapOptions | 'accessToken'
>
