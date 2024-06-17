import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'Bioinformatics-Specialist',
		company: 'Univeristy of Pennsylvania Health System',
		description: '•	Manage current clinical pipelines for over 6,000 patients annually. Develop new cutting-edge pipelines and tools for molecular pathology and oncology. Host and curate a data lake of all pipeline outputs and statistics for research use. Migrated  and curated 11 years of patient information and results to a new LIMS and database. Side Projects:Assisted in creating a targeted cancer panel at the vet school. Contributed to bringing cancer detection and treatments to developing countries in Africa (ICC). Created tutorial videos and informational content for emerging labs (ICC & GOAL).Initial member in the GOAL consortium to unify cancer genomics.',
		contract: ContractType.FullTime,
		type: 'Bioinformatics',
		location: 'Home',
		period: { from: new Date(2019,0,1),to: new Date() },
		skills: getSkills('Python', 'AWS'),
		name: 'Bioinformatics Specialist',
		color: 'red',
		links: [],
		logo: Assets.Penn,
		shortDescription: 'Bioinformatics Specialist'
	},
	{
		slug: 'Grad-student',
		company: 'Auburn University',
		description: 'Graduate student in the Department of Biological Sciences, working on WGS and bioinforamtics.Thesis: “Broad characterization of structural variation and genetic differentiation in two hybridizing macaque species” .Advisor: Dr. Laurie Stevison .Led a side project using the Sequenom iPLEX ADME PGx Panel on the MassARRAY System to genotype polymorphisms in D. pseudoobscura',
		contract: ContractType.FullTime,
		type: 'Graduate Education',
		location: 'Auburn,Alabama',
		period: { from: new Date(2016, 0, 1), to: new Date(2018,8,1) },
		skills: getSkills('Python', 'Bash'),
		name: 'Graduate Student',
		color: 'green',
		links: [],
		logo: Assets.Auburn,
		shortDescription: 'Graduate student in the Department of Biological Sciences'
	}
];

export const title = 'Experience';
