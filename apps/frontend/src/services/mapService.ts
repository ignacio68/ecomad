import {
	mbApplyMapOptions,
	MbApplyMapOptionsParams,
} from '@/adapters/maps/mapboxAdapter'

export const applyMapOptions = async (
	params: MbApplyMapOptionsParams,
): Promise<void> => {
	try {
		await mbApplyMapOptions(params)
		console.log('applyMapOptions', params.options)
	} catch (error) {
		console.error('Error al aplicar opciones del mapa en el servicio:', error)
		throw error
	}
}
