import { MapboxView, ShowOptions } from '@nativescript-community/ui-mapbox'

export const mbSetupMap = (options: ShowOptions): MapboxView => {
	const mapView = new MapboxView()
	mapView.setConfig(options)
	return mapView
}

export const mbSetMapStyle = async (
	mapView: MapboxView,
	style: string,
): Promise<void> => {
	try {
		await mapView.setMapStyle(style)
	} catch (error) {
		console.error('Error al aplicar el estilo en el adaptador:', error)
		throw error
	}
}

export const mbHandleMapReady = async (
	mapView: MapboxView,
	style?: string,
): Promise<void> => {
	if (!style) return

	try {
		await mbSetMapStyle(mapView, style)
	} catch (error) {
		console.error('Error al inicializar el mapa en el adaptador:', error)
		throw error
	}
}
