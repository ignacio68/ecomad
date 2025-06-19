import { MapboxView, ShowOptions } from '@nativescript-community/ui-mapbox'
import {
	mbSetupMap,
	mbSetMapStyle,
	mbHandleMapReady,
} from '../adapters/maps/mapboxAdapter'

// TODO: If you need to support other map providers (e.g., Google Maps) in the future,
// create an abstraction layer (agnostic type and adapters) to decouple business logic
// from the specific provider implementation.

export const setupMap = (options: ShowOptions): MapboxView => {
	return mbSetupMap(options)
}

export const setMapStyle = async (
	mapView: MapboxView,
	style: string,
): Promise<void> => {
	try {
		await mbSetMapStyle(mapView, style)
	} catch (error) {
		console.error('Error al aplicar el estilo en el servicio:', error)
		throw error
	}
}

export const handleMapReady = async (
	mapView: MapboxView,
	style?: string,
): Promise<void> => {
	try {
		await mbHandleMapReady(mapView, style)
	} catch (error) {
		console.error('Error al inicializar el mapa en el servicio:', error)
		throw error
	}
}
