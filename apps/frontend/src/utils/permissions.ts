import {
	check,
	request,
	openSettings,
	canOpenSettings,
} from '@nativescript-community/perms';

export type Status =
	| 'authorized'
	| 'denied'
	| 'limited'
	| 'restricted'
	| 'undetermined'
	| 'never_ask_again';

export const checkPermissions = async () => {
	const permission = await check('location', { background: true });
	return permission[0];
};

export const requestPermissions = () => {
	request('location', { background: true });
};

export const openApplicationsSettings = () => {
	if (__ANDROID__) {
		openSettings();
	} else {
		request('location', { background: true });
	}
};

export const canOpenApplicationsSettings = () => canOpenSettings();
