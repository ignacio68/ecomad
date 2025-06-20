import {
	Options,
	Location,
	// GenericGeoLocation,
	// DefaultLatLonKeys,
	isGLEnabled,
	// hasGlGps,
	enableGLLocationRequest,
	//isGLAuthorized,
	watchGLlocation,
	clearWatchGLLocation,
	getGlCurrentLocation,
} from '@/adapters/geolocation'

import { CoreTypes } from '@nativescript/core'

import { storeToRefs } from 'pinia'

const GeolocationOptions: Options = {
	desiredAccuracy: CoreTypes.Accuracy.high,
	updateDistance: 1,
	minimumUpdateTime: 1000,
	updateTime: 1000,
	timeout: 1000,
	iosAllowsBackgroundLocationUpdates: true,
	iosPausesLocationUpdatesAutomatically: false,
	openSettingsIfLocationHasBeenDenied: true,
}

let watchId: number

export const isGeolocationEnabled = async (): Promise<boolean> => isGLEnabled()

export const enableLocationRequest = async (): Promise<void> =>
	enableGLLocationRequest()

// TODO: debería ser un hook
// export const isGeolocationAuthorized = () => isGLAuthorized()

export const isWatchingLocation = (): boolean => typeof watchId !== 'undefined'

export const startWatchLocation = async (flightId: number): Promise<void> => {
	watchId = await watchGLlocation(
		async userLocation => {
			if (userLocation) {
			}
		},
		error => {
			console.log(`geolocationService::watchUserLocation():error: ${error}`)
		},
		GeolocationOptions,
	)
}

export const clearWatchLocation = () => {
	clearWatchGLLocation(watchId)
}
