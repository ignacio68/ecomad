import type { ShowOptions } from '@nativescript-community/ui-mapbox'
import { ControlPosition, MapStyle } from '@nativescript-community/ui-mapbox'

export const DEFAULT_MAP_OPTIONS: ShowOptions = {
	accessToken: process.env.MAPBOX_SECRET_TOKEN as string,
	style: 'light', // Estilo por defecto
	center: { lat: 40.4165, lng: -3.70256 }, // Madrid
	zoomLevel: 8,
	showUserLocation: false,
	hideLogo: true,
	hideAttribution: true,
	hideCompass: false,
	compassPosition: ControlPosition.TOP_RIGHT,
	disableRotation: false,
	disableScroll: false,
	disableZoom: false,
	disableTilt: false,
	locationComponentOptions: {
		enabled: false,
	},
}

export const MAP_STYLES = {
	LIGHT: 'mapbox://styles/mapbox/light-v10',
	DARK: 'mapbox://styles/mapbox/dark-v10',
	STREETS: 'mapbox://styles/mapbox/streets-v11',
	OUTDOORS: 'mapbox://styles/mapbox/outdoors-v11',
	SATELLITE: 'mapbox://styles/mapbox/satellite-v9',
	SATELLITE_STREETS: 'mapbox://styles/mapbox/satellite-streets-v11',
}

export const CUSTOM_MAP_STYLE =
	'mapbox://styles/ignacio68/ckay3bxbr11qt1hquzxx1ohot'
