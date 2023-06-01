/// <reference types="react-scripts" />

interface IMovies {
	id: number
	title: string
	cover: string
	link: string
}

/* COMPONENTS INTERFACE */
interface IHeaderLink {
	url: string
	children: ReactNode
}
