/// <reference types="react-scripts" />

interface IMovies {
  id: number;
  title: string;
  cover: string;
  link: string;
}

/* COMPONENTS INTERFACE */
interface HeaderLinkProps {
  url: string;
  children: ReactNode;
}

interface BannerProps {
  image: string;
}
