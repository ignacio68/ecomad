<script lang="ts" setup>
import { ref, $navigateBack } from 'nativescript-vue'

const items = ref(
	Array(1000)
		.fill(0)
		.map((_, index) => `Item ${index + 1}`),
)
</script>

<template>
	<Page actionBarHidden="true">
		<GridLayout rows="auto, *">
			<Label
				text="Go Back"
				@tap="$navigateBack"
				class="px-4 py-10 text-center text-2xl font-bold text-gray-900"
			/>

			<ContentView row="1" class="rounded-t-3xl bg-[#65adf1]">
				<ListView
					:items="items"
					separatorColor="transparent"
					class="bg-transparent"
				>
					<template #default="{ item }">
						<GridLayout columns="*, auto" class="px-4">
							<Label :text="item" class="py-3 text-3xl text-white" />
							<ContentView col="1" class="h-5 w-5 rounded-full bg-white" />
						</GridLayout>
					</template>
				</ListView>
			</ContentView>
		</GridLayout>
	</Page>
</template>
