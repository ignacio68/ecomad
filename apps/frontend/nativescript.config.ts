import { NativeScriptConfig } from '@nativescript/core'

export default {
	id: 'com.ignaciolopezamor.ecomad',
	appPath: 'src',
	appResourcesPath: 'App_Resources',
	android: {
		v8Flags: '--expose_gc',
		markingMode: 'none',
	},
	cli: {
		packageManager: 'pnpm',
	},
} as NativeScriptConfig
