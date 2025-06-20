<script lang="ts" setup>
import { ref } from 'nativescript-vue'
import Map from '@/components/Map/Map.vue'
import { DEFAULT_DYNAMIC_MAP_OPTIONS } from '@/constants/map'
import type { DynamicMapOptions } from '@/types/map'
import { MapStyle } from '@nativescript-community/ui-mapbox'

// Usamos el tipo importado
const mapOptions = ref<DynamicMapOptions>({ ...DEFAULT_DYNAMIC_MAP_OPTIONS })

function toggleMapStyle() {
	const newStyle =
		mapOptions.value.style === MapStyle.LIGHT ? MapStyle.DARK : MapStyle.LIGHT
	console.log(`Cambiando estilo a: ${newStyle}`)
	mapOptions.value.style = newStyle
}
</script>

<template>
	<Frame>
		<Page actionBarHidden="true" backgroundUnderStatusBar="true">
			<GridLayout rows="*, auto">
				<Map
					row="0"
					:style="mapOptions.style"
					:center="mapOptions.center"
					:zoomLevel="mapOptions.zoomLevel"
					:showUserLocation="mapOptions.showUserLocation"
				/>

				<Button
					row="1"
					text="Cambiar Estilo"
					@tap="toggleMapStyle"
					class="m-16"
				/>
			</GridLayout>
		</Page>
	</Frame>
</template>
