import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Self-employed',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'Open Source Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'Grad-student',
		company: 'Auburn University',
		description: 'Graduate student in the Department of Biological Sciences, working on WGS and bioinforamtics.Thesis: “Broad characterization of structural variation and genetic differentiation in two hybridizing macaque species” .Advisor: Dr. Laurie Stevison .Led a side project using the Sequenom iPLEX ADME PGx Panel on the MassARRAY System to genotype polymorphisms in D. pseudoobscura',
		contract: ContractType.FullTime,
		type: 'Graduate Education',
		location: 'Auburn,Alabama',
		period: { from: new Date(2016, 0, 1), to: new Date(2018,0,1) },
		skills: getSkills('Python', 'Bash'),
		name: 'Graduate Student',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Graduate student in the Department of Biological Sciences'
	}
];

export const title = 'Experience';
