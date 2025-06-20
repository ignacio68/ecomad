import { MapboxView } from '@nativescript-community/ui-mapbox'
import { DynamicMapOptions } from '@/types/map'

interface AdapterUpdateParams {
	promises: Promise<void>[]
	mapView: MapboxView
	options: DynamicMapOptions
	animated: boolean
}

export interface MbApplyMapOptionsParams {
	mapView: MapboxView
	options: DynamicMapOptions
	animated?: boolean
}

type StyleAdapterParams = Omit<AdapterUpdateParams, 'animated'>

const addCenterPromise = ({
	promises,
	mapView,
	options,
	animated,
}: AdapterUpdateParams) => {
	if (options.center?.lat && options.center?.lng) {
		promises.push(
			mapView.setCenter({
				lat: options.center.lat,
				lng: options.center.lng,
				animated,
			}),
		)
	}
}

const addZoomLevelPromise = ({
	promises,
	mapView,
	options,
	animated,
}: AdapterUpdateParams) => {
	if (options.zoomLevel) {
		promises.push(
			mapView.setZoomLevel({
				level: options.zoomLevel,
				animated,
			}),
		)
	}
}

const addStylePromise = ({
	promises,
	mapView,
	options,
}: StyleAdapterParams) => {
	if (options.style) {
		promises.push(mapView.setMapStyle(options.style as string))
	}
}

/**
 * Aplica opciones al mapa una vez que está listo y es reactivo.
 * Principalmente para el estilo y cambios dinámicos.
 */
export const mbApplyMapOptions = async ({
	mapView,
	options,
	animated = true,
}: MbApplyMapOptionsParams): Promise<void> => {
	try {
		const promises: Promise<void>[] = []
		const params: AdapterUpdateParams = {
			promises,
			mapView,
			options,
			animated,
		}

		addCenterPromise(params)
		addZoomLevelPromise(params)
		addStylePromise(params)
		// Aplicar showUserLocation a través de su propia función si es necesario.
		// Nota: se eliminó setConfig porque las opciones estáticas se manejan en la plantilla
		// y las dinámicas tienen sus propias funciones.

		await Promise.all(promises)
	} catch (error) {
		console.error('Error al aplicar opciones del mapa en el adaptador:', error)
		throw error
	}
}
