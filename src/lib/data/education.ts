import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'B.S Molecular and Cellular Microbiology ',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Auburn University ',
		period: { from: new Date(2011, 8, 1), to: new Date(2015, 8, 1) },
		shortDescription: '',
		slug: 'Auburn-undergrad-university',
		subjects: []
	},
	{
		degree: 'M.S Bioinformatics',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Auburn University ',
		period: { from: new Date(2016, 8, 1), to: new Date(2018, 8, 1) },
		shortDescription: '',
		slug: 'Auburn-grad-university',
		subjects: []
	}
];

export const title = 'Education';
