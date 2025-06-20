import { ControlPosition, MapStyle } from '@nativescript-community/ui-mapbox'
import type { DynamicMapOptions, BaseMapOptions } from '@/types/map'

export const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_SECRET_TOKEN as string

export const DEFAULT_DYNAMIC_MAP_OPTIONS: DynamicMapOptions = {
	style: MapStyle.LIGHT,
	center: { lat: 40.4165, lng: -3.70256 }, // Madrid
	zoomLevel: 12,
	showUserLocation: false,
}

export const BASE_MAP_CONFIG: BaseMapOptions = {
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
