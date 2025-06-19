<script setup lang="ts">
import { PropType } from 'nativescript-vue'
import type { ShowOptions, LatLng } from '@nativescript-community/ui-mapbox'
import { MapboxView } from '@nativescript-community/ui-mapbox'
import { refView } from '@nativescript-use/vue'
import { handleMapReady } from '@/services/mapService'

const props = defineProps({
	options: {
		type: Object as PropType<ShowOptions>,
		required: true,
	},
	userLocation: {
		type: Object as PropType<LatLng>,
		required: false,
	},
})

const mapView = refView<MapboxView>()

const onMapReady = async (event: { map: MapboxView }) => {
	console.log('onMapReady', event)
	if (!mapView.value) {
		console.error('Map view no está inicializado')
		return
	}

	try {
		await handleMapReady(mapView.value, props.options.style)
	} catch (error) {
		console.error('Error en onMapReady:', error)
	}
}

const getInitialCenterCoordinates = () =>
	props.userLocation ? props.userLocation : props.options.center
</script>

<template>
	<ContentView class="h-full w-full">
		<Mapbox
			ref="mapView"
			:accessToken="props.options.accessToken"
			:center="getInitialCenterCoordinates()"
			:zoomLevel="props.options.zoomLevel"
			:showUserLocation="props.options.showUserLocation"
			:hideLogo="props.options.hideLogo"
			:hideAttribution="props.options.hideAttribution"
			:hideCompass="props.options.hideCompass"
			:compassPosition="props.options.compassPosition"
			:disableRotation="props.options.disableRotation"
			:disableScroll="props.options.disableScroll"
			:disableZoom="props.options.disableZoom"
			:disableTilt="props.options.disableTilt"
			:telemetryEnabled="false"
			@mapReady="onMapReady"
		/>
	</ContentView>
</template>
