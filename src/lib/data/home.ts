import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Chase';

export const lastName = 'Rushton';

export const description =
	'Expert in bioinformatics with a broad understanding of biological sciences, a passion for technology, and a strong ability to apply tech industry best practices to computational biology and data science. I have proven experience collaborating with bioinformaticians and molecular specialists across the hospital network to swiftly transition from analysis proof-of-concept to production-grade analysis pipelines for cancer detection, annotation, and custom database integration. My expertise lies in oncology and next-generation sequencing (NGS), where I excel at building robust, reproducible, and scalable NGS workflows. I possess a high-level knowledge of the current and future state of the growing industry for managing and processing NGS data. Additionally, I have experience in designing and implementing strategies to develop scalable genomics infrastructure (AWS, HPC, IAP). I have executed custom analysis pipelines on read-level data across extensive datasets, including TCGA, GOAL consortium, and UPHS clinical patients, translating the results into actionable insights.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'riadh_adrani@hotmail.fr'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
