import { Connectivity } from '@nativescript/core';

export const validConnectivityType = (connectivityType: number) =>
	connectivityType === 1 || connectivityType === 2;

export const checkConnectivity = (): number => {
	// Starts monitoring the network for changes
	const type = Connectivity.getConnectionType();

	switch (type) {
		case Connectivity.connectionType.none:
			console.log('No connection');
			break;
		case Connectivity.connectionType.wifi:
			console.log('WiFi connection');
			break;
		case Connectivity.connectionType.vpn:
			console.log('VPN connection');
			break;
		case Connectivity.connectionType.mobile:
			console.log('Mobile connection');
			break;
		case Connectivity.connectionType.ethernet:
			console.log('Ethernet connection');
			break;
		case Connectivity.connectionType.bluetooth:
			console.log('Bluetooth connection');
			break;
		default:
			break;
	}
	return type;
};

export const startMonitoringConnectivity = (): void => {
	// Starts monitoring the network for changes
	Connectivity.startMonitoring(newConnectionType => {
		// setConnectiontype(newConnectionType);
		if (newConnectionType === Connectivity.connectionType.none) {
			console.log('Connection type changed to none.');
		}
	});
};

export const stopMonitoringConnectivity = () => Connectivity.stopMonitoring();