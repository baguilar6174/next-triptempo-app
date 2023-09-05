/* eslint-disable no-unused-vars */
import { Region, Province, City, Route, TransportationProvider, Schedule } from '@prisma/client';

type CreateScheduleDTO = Omit<Schedule, 'id'>;

export enum REGIONS {
	COSTA = 1,
	SIERRA = 2,
	ORIENTE = 3
}

export enum PROVINCES {
	AZUAY = 1,
	BOLIVAR = 2,
	CANAR = 3,
	CARCHI = 4,
	COTOPAXI = 5,
	CHIMBORAZO = 6,
	EL_ORO = 7,
	ESMERALDAS = 8,
	GUAYAS = 9,
	IMBABURA = 10,
	LOJA = 11,
	LOS_RIOS = 12,
	MANABI = 13,
	MORONA_SANTIAGO = 14,
	NAPO = 15,
	PASTAZA = 16,
	PICHINCHA = 17,
	TUNGURAHUA = 18,
	ZAMORA_CHINCHIPE = 19,
	GALAPAGOS = 20,
	SUCUMBÍOS = 21,
	ORELLANA = 22,
	SANTO_DOMINGO = 23,
	SANTA_ELENA = 24
}

// TODO: Better codes to each city
export enum CITIES {
	CUENCA = 1,
	AZOGUES = 2,
	CANAR = 3,
	LA_TRONCAL = 4,
	RIOBAMBA = 5,
	MACHALA = 6,
	GUAYAQUIL = 7,
	LOJA = 8,
	QUITO = 9,
	AMBATO = 10
}

export const regions: Region[] = [
	{ name: 'Litoral o Costa', id: REGIONS.COSTA },
	{ name: 'Sierra o Interandina', id: REGIONS.SIERRA },
	{ name: 'Oriente o Amazonía', id: REGIONS.ORIENTE }
];

export const provinces: Province[] = [
	// Costa region
	{ name: 'El Oro', regionId: REGIONS.COSTA, id: PROVINCES.EL_ORO },
	{ name: 'Esmeraldas', regionId: REGIONS.COSTA, id: PROVINCES.ESMERALDAS },
	{ name: 'Guayas', regionId: REGIONS.COSTA, id: PROVINCES.GUAYAS },
	{ name: 'Los Ríos', regionId: REGIONS.COSTA, id: PROVINCES.LOS_RIOS },
	{ name: 'Manabí', regionId: REGIONS.COSTA, id: PROVINCES.MANABI },
	{ name: 'Santa Elena', regionId: REGIONS.COSTA, id: PROVINCES.SANTA_ELENA },
	{ name: 'Santo Domingo de los Tsachilas', regionId: REGIONS.COSTA, id: PROVINCES.SANTO_DOMINGO },
	// Sierra region
	{ name: 'Azuay', regionId: REGIONS.SIERRA, id: PROVINCES.AZUAY },
	{ name: 'Bolívar ', regionId: REGIONS.SIERRA, id: PROVINCES.BOLIVAR },
	{ name: 'Cañar', regionId: REGIONS.SIERRA, id: PROVINCES.CANAR },
	{ name: 'Carchi', regionId: REGIONS.SIERRA, id: PROVINCES.CARCHI },
	{ name: 'Cotopaxi', regionId: REGIONS.SIERRA, id: PROVINCES.COTOPAXI },
	{ name: 'Chimborazo', regionId: REGIONS.SIERRA, id: PROVINCES.CHIMBORAZO },
	{ name: 'Imbabura', regionId: REGIONS.SIERRA, id: PROVINCES.IMBABURA },
	{ name: 'Loja', regionId: REGIONS.SIERRA, id: PROVINCES.LOJA },
	{ name: 'Pichincha', regionId: REGIONS.SIERRA, id: PROVINCES.PICHINCHA },
	{ name: 'Tungurahua', regionId: REGIONS.SIERRA, id: PROVINCES.TUNGURAHUA },
	// Oriente region
	{ name: 'Morona Santiago', regionId: REGIONS.ORIENTE, id: PROVINCES.MORONA_SANTIAGO },
	{ name: 'Napo', regionId: REGIONS.ORIENTE, id: PROVINCES.NAPO },
	{ name: 'Orellana', regionId: REGIONS.ORIENTE, id: PROVINCES.ORELLANA },
	{ name: 'Pastaza', regionId: REGIONS.ORIENTE, id: PROVINCES.PASTAZA },
	{ name: 'Sucumbíos', regionId: REGIONS.ORIENTE, id: PROVINCES.SUCUMBÍOS },
	{ name: 'Zamora Chinchipe', regionId: REGIONS.ORIENTE, id: PROVINCES.ZAMORA_CHINCHIPE }
];

export const cities: City[] = [
	{ id: CITIES.CUENCA, name: 'Cuenca', provinceId: PROVINCES.AZUAY },
	{ id: CITIES.AZOGUES, name: 'Azogues', provinceId: PROVINCES.CANAR },
	{ id: CITIES.CANAR, name: 'Cañar', provinceId: PROVINCES.CANAR },
	{ id: CITIES.LA_TRONCAL, name: 'La Troncal', provinceId: PROVINCES.CANAR },
	{ id: CITIES.RIOBAMBA, name: 'Riobamba', provinceId: PROVINCES.CHIMBORAZO },
	{ id: CITIES.MACHALA, name: 'Machala', provinceId: PROVINCES.EL_ORO },
	{ id: CITIES.GUAYAQUIL, name: 'Guayaquil', provinceId: PROVINCES.GUAYAS },
	{ id: CITIES.LOJA, name: 'Loja', provinceId: PROVINCES.LOJA },
	{ id: CITIES.QUITO, name: 'Quito', provinceId: PROVINCES.PICHINCHA },
	{ id: CITIES.AMBATO, name: 'Ambato', provinceId: PROVINCES.TUNGURAHUA }
];

export const transportationProviders: TransportationProvider[] = [
	{ id: 1, name: 'Cooperativa Patria', logo: null },
	{ id: 2, name: 'Cooperativa Chimborazo', logo: null }
];

export const routes: Route[] = [
	{
		id: 1,
		startCityId: CITIES.RIOBAMBA,
		endCityId: CITIES.QUITO,
		distance: 166.72,
		estimatedTravelTime: 3.5,
		price: 5.5,
		transportationProviderId: 1
	},
	{
		id: 2,
		startCityId: CITIES.RIOBAMBA,
		endCityId: CITIES.QUITO,
		distance: 166.72,
		estimatedTravelTime: 3.5,
		price: 5.5,
		transportationProviderId: 2
	}
];

export const schedules: CreateScheduleDTO[] = [
	{ routeId: 1, departureTime: '3:15' },
	{ routeId: 1, departureTime: '5:30' },
	{ routeId: 2, departureTime: '6:30' },
	{ routeId: 2, departureTime: '9:45' }
];
