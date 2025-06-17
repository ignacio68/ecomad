<script lang="ts" setup>
import {
	ref,
	computed,
	onMounted,
	onUnmounted,
	$navigateTo,
} from 'nativescript-vue'
import Details from './Details.vue'

const counter = ref(0)
const message = computed(() => {
	return `Blank {N}-Vue app: ${counter.value}`
})

function logMessage() {
	console.log('You have tapped the message!')
}

let interval: any
onMounted(() => {
	console.log('mounted')
	interval = setInterval(() => counter.value++, 100)
})

onUnmounted(() => {
	console.log('unmounted')
	clearInterval(interval)
})
</script>

<template>
	<Frame>
		<Page>
			<ActionBar>
				<Label text="Home" class="text-lg font-bold" />
			</ActionBar>

			<GridLayout rows="*, auto, auto, *" class="px-4">
				<Label
					row="1"
					class="text-center align-middle text-xl text-gray-500"
					:text="message"
					@tap="logMessage"
				/>

				<Button
					row="2"
					@tap="$navigateTo(Details)"
					class="mt-4 rounded-lg border-2 border-blue-400 bg-white px-4 py-2"
					horizontalAlignment="center"
				>
					View Details
				</Button>
			</GridLayout>
		</Page>
	</Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
