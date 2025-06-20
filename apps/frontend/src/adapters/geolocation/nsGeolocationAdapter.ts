import * as geolocation from '@nativescript/geolocation';
import {
	Options,
	successCallbackType,
	errorCallbackType,
} from '@nativescript/geolocation';
import { CoreTypes } from '@nativescript/core';

export type { Options, Location } from '@nativescript/geolocation';

const GeolocationOptions: Options = {
	desiredAccuracy: CoreTypes.Accuracy.high,
	updateDistance: 0,
	minimumUpdateTime: 1000,
	updateTime: 1000,
	timeout: 1000,
	iosAllowsBackgroundLocationUpdates: true,
	iosPausesLocationUpdatesAutomatically: false,
	openSettingsIfLocationHasBeenDenied: true,
};

export const isGLEnabled = async () => await geolocation.isEnabled();

export const enableGLLocationRequest = async (
	always = true,
	openSettingsIfLocationHasBeenDenied = true,
) =>
	geolocation
		.enableLocationRequest(always, openSettingsIfLocationHasBeenDenied)
		.then(res => console.log('enableGLLocationRequest?', res));

export const getGlCurrentLocation = async (
	options: Options = GeolocationOptions,
) => {
	if (await isGLEnabled()) return geolocation.getCurrentLocation(options);
	else return Promise.reject('Geolocation not enabled.');
};

export const watchGLlocation = (
	successCallBack: successCallbackType,
	errorCallBack: errorCallbackType,
	options: Options = GeolocationOptions,
) => geolocation.watchLocation(successCallBack, errorCallBack, options);

export const clearWatchGLLocation = (watchId: number) =>
	geolocation.clearWatch(watchId);
