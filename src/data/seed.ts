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

// TODO: Better codes to each provider
export enum PROVIDERS {
	COOP_PATRIA = 1,
	COOP_CHIMBORAZO = 2
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
	{ id: CITIES.RIOBAMBA, name: 'Riobamba', provinceId: PROVINCES.CHIMBORAZO },
	{ id: CITIES.MACHALA, name: 'Machala', provinceId: PROVINCES.EL_ORO },
	{ id: CITIES.QUITO, name: 'Quito', provinceId: PROVINCES.PICHINCHA },
	{ id: CITIES.GUAYAQUIL, name: 'Guayaquil', provinceId: PROVINCES.GUAYAS }
];

export const transportationProviders: TransportationProvider[] = [
	{
		id: PROVIDERS.COOP_PATRIA,
		name: 'Cooperativa Patria',
		logo: 'patria.png',
		details:
			'En la Cooperativa de Transportes Patria, nos enorgullecemos de brindar un servicio de transporte y encomiendas de alta calidad a nivel nacional.'
	},
	{
		id: PROVIDERS.COOP_CHIMBORAZO,
		name: 'Cooperativa Chimborazo',
		logo: 'chimborazo.png',
		details:
			'Transportes Chimborazo es una empresa especializada en el Transporte y envío de encomiendas en Ecuador. Comprometida con las necesidades de sus clientes.'
	}
];

export const routes: Route[] = [
	{
		id: 1,
		startCityId: CITIES.RIOBAMBA,
		endCityId: CITIES.QUITO,
		distance: 166,
		estimatedTravelTime: 3.5,
		price: 5.5,
		transportationProviderId: PROVIDERS.COOP_PATRIA
	},
	{
		id: 2,
		startCityId: CITIES.RIOBAMBA,
		endCityId: CITIES.QUITO,
		distance: 166,
		estimatedTravelTime: 3.5,
		price: 5.5,
		transportationProviderId: PROVIDERS.COOP_CHIMBORAZO
	},
	{
		id: 3,
		startCityId: CITIES.RIOBAMBA,
		endCityId: CITIES.CUENCA,
		distance: 262,
		estimatedTravelTime: 6,
		price: 9.4,
		transportationProviderId: PROVIDERS.COOP_PATRIA
	},
	{
		id: 4,
		startCityId: CITIES.RIOBAMBA,
		endCityId: CITIES.MACHALA,
		distance: 313,
		estimatedTravelTime: 6,
		price: 8,
		transportationProviderId: PROVIDERS.COOP_PATRIA
	},
	{
		id: 5,
		startCityId: CITIES.CUENCA,
		endCityId: CITIES.RIOBAMBA,
		distance: 262,
		estimatedTravelTime: 6,
		price: 9.4,
		transportationProviderId: PROVIDERS.COOP_PATRIA
	},
	{
		id: 6,
		startCityId: CITIES.RIOBAMBA,
		endCityId: CITIES.GUAYAQUIL,
		distance: 227,
		estimatedTravelTime: 5,
		price: 9,
		transportationProviderId: PROVIDERS.COOP_PATRIA
	}
];

const schedulesData = {
	1: [
		'03:30',
		'05:00',
		'07:00',
		'08:00',
		'08:30',
		'09:45',
		'10:00',
		'11:30',
		'11:45',
		'12:15',
		'13:00',
		'14:15',
		'14:30',
		'16:15',
		'17:45',
		'18:15',
		'18:45',
		'19:15',
		'19:45',
		'20:15',
		'22:00'
	],
	2: [
		'03:15',
		'05:30',
		'06:30',
		'06:45',
		'09:15',
		'09:30',
		'10:45',
		'11:00',
		'12:00',
		'12:30',
		'13:15',
		'14:00',
		'15:15',
		'17:00',
		'17:30',
		'19:00'
	],
	3: ['05:30', '07:30', '09:30', '11:00', '13:00', '15:30', '19:30', '22:30'],
	4: ['09:45', '14:15'],
	5: ['04:15', '05:15', '09:40', '11:15', '14:00', '15:30', '17:30', '19:15'],
	6: [
		'02:00',
		'03:00',
		'03:30',
		'04:30',
		'05:00',
		'06:30',
		'07:00',
		'07:30',
		'08:00',
		'08:30',
		'09:30',
		'10:30',
		'11:00',
		'11:30',
		'12:40',
		'13:30',
		'14:00',
		'15:30',
		'16:00',
		'17:00',
		'18:00',
		'19:00',
		'19:40',
		'20:30',
		'22:30'
	]
};

export const schedules = Object.entries(schedulesData).flatMap(([routeId, departureTimes]): CreateScheduleDTO[] =>
	departureTimes.map(
		(departureTime): CreateScheduleDTO => ({
			routeId: Number(routeId),
			departureTime
		})
	)
);
