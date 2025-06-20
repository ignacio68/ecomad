<script setup lang="ts">
import { PropType, watchEffect, ref } from 'nativescript-vue'
import {
	MapStyle,
	ShowOptions,
	LatLng,
	MapboxView,
} from '@nativescript-community/ui-mapbox'
import { applyMapOptions } from '@/services/mapService'
import { BASE_MAP_CONFIG, MAPBOX_ACCESS_TOKEN } from '@/constants/map'
import { useLocationPermission } from '@/hooks/useLocationPermission'
import { DynamicMapOptions } from '@/types/map'

const props = defineProps({
	style: {
		type: String as PropType<MapStyle>,
		required: true,
	},
	center: {
		type: Object as PropType<LatLng>,
		required: true,
	},
	zoomLevel: {
		type: Number,
		required: true,
	},
	showUserLocation: {
		type: Boolean,
		default: false,
	},
})

const mapView = ref<MapboxView | null>(null)
const isInitialLoad = ref(true)
const { hasPermission: hasLocationPermission } = useLocationPermission()

const onMapReady = (event: { map: MapboxView }) => {
	mapView.value = event.map
}

watchEffect(async () => {
	const map = mapView.value
	if (!map) {
		return
	}

	try {
		const showUserLocation =
			props.showUserLocation && hasLocationPermission.value

		const dynamicOptions: DynamicMapOptions = {
			style: props.style,
			center: props.center,
			zoomLevel: props.zoomLevel,
			showUserLocation,
		}
		await applyMapOptions({
			mapView: map,
			options: dynamicOptions,
			animated: !isInitialLoad.value,
		})

		if (isInitialLoad.value) {
			isInitialLoad.value = false
		}
	} catch (error) {
		console.error('Error al aplicar opciones del mapa en watchEffect:', error)
	}
})

// const zoomIn = () => zoomLevel.value++;
// const zoomOut = () => zoomLevel.value--;
</script>

<template>
	<ContentView class="h-full w-full">
		<Mapbox
			v-if="MAPBOX_ACCESS_TOKEN"
			:accessToken="MAPBOX_ACCESS_TOKEN"
			v-bind="BASE_MAP_CONFIG"
			@mapReady="onMapReady"
		/>
		<Label
			v-else
			text="Mapbox token is not provided."
			textWrap="true"
			class="m-16 text-center"
		/>
	</ContentView>
</template>
