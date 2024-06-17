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
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'M.S Bioinformatics',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Auburn University ',
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];

export const title = 'Education';
