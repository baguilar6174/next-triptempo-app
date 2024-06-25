import { z } from 'zod';
import { SIX } from '../core';

export const searchSchema = z.object({
	startCity: z.string({ required_error: 'Please select a origin city.' }),
	endCity: z.string({ required_error: 'Please select a destination city.' })
});

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(SIX)
});
