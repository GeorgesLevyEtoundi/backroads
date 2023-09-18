import tour1 from './assets/images/tour-1.jpeg'
import tour2 from './assets/images/tour-2.jpeg'
import tour3 from './assets/images/tour-3.jpeg'
import tour4 from './assets/images/tour-4.jpeg'

export const pageLinks = [
	{ id: 1, href: '#home', name: 'Home' },
	{ id: 2, href: '#about', name: 'About' },
	{ id: 3, href: '#services', name: 'Services' },
	{ id: 4, href: '#tours', name: 'Tours' },
]

export const navIcons = [
	{ id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
	{ id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
	{ id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const services = [
	{
		id: 1,
		icon: 'fas fa-wallet fa-fw',
		title: 'saving money',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
	},
	{
		id: 2,
		icon: 'fas fa-tree fa-fw',
		title: 'fas fa-tree fa-fw',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
	},
	{
		id: 3,
		icon: 'fas fa-socks fa-fw',
		title: 'amazing comfort',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
	},
]

export const tours = [
	{
		id: 1,
		title: 'Tibet Adventure',
		date: 'august 26th, 2020',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		place: 'China',
		placeIcon: 'fas fa-map',
		days: 6,
		price: 2100,
		image: tour1,
	},
	{
		id: 2,
		title: 'best of java',
		date: 'october 1th, 2020',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		place: 'indonesia',
		placeIcon: 'fas fa-map',
		days: 11,
		price: 1400,
		image: tour2,
	},
	{
		id: 3,
		title: 'explore hong kong',
		date: 'september 15th, 2020',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		place: 'hong kong',
		placeIcon: 'fas fa-map',
		days: 8,
		price: 5000,
		image: tour3,
	},
	{
		id: 4,
		title: 'kenya highlights',
		date: 'december 5th, 2019',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		place: 'kenya',
		placeIcon: 'fas fa-map',
		days: 20,
		price: 3300,
		image: tour4,
	},
]
