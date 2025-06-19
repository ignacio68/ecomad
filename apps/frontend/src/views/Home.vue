<script lang="ts" setup>
import Map from '@/components/Map/Map.vue'
import { DEFAULT_MAP_OPTIONS } from '@/constants/map'

const mapOptions = {
	...DEFAULT_MAP_OPTIONS,
	style: 'light', // Usamos el estilo directamente en las opciones
}
</script>

<template>
	<Frame>
		<Page>
			<ActionBar>
				<Label text="EcoMAD" class="text-lg font-bold" />
			</ActionBar>

			<StackLayout class="h-full w-full">
				<Map :options="mapOptions" />
			</StackLayout>
		</Page>
	</Frame>
</template>
