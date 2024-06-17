import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Chase';

export const lastName = 'Rushton';

export const description =
	'Welcome to my work in progreas portfolio website!';

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
