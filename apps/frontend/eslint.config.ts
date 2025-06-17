// apps/frontend/eslint.config.ts
import eslint from '@eslint/js'
import typescriptEslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
// TODO: Reactivar eslint-plugin-tailwindcss cuando sea compatible con Tailwind 4
// import eslintPluginTailwind from "eslint-plugin-tailwindcss";
import eslintConfigPrettier from 'eslint-config-prettier'

export default typescriptEslint.config(
	{
		ignores: [
			'**/platforms',
			'**/hooks',
			'**/coverage',
			'**/node_modules',
			'**/types',
			'**/.git/',
			'**/.github/',
			'**/.husky/',
			'**/.cursor/',
		],
	},
	{
		extends: [
			eslint.configs.recommended,
			...typescriptEslint.configs.recommended,
			...eslintPluginVue.configs['flat/recommended'],
			// ...eslintPluginTailwind.configs['flat/recommended'],
		],
		files: ['**/*.{ts,vue}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				parser: typescriptEslint.parser,
			},
    },

		rules: {
      "vue/multi-word-component-names": "off",
      "vue/attribute-hyphenation": "off",
      "vue/v-on-event-hyphenation": "off",
		},
	},
	eslintConfigPrettier,
)


