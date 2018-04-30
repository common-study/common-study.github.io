import { h } from 'preact';
import { Link } from 'react-router-dom';
import styles from './styles.css';

export const Header = () => (
	<header class={styles.header}>
		<Link to="/">common study</Link>
	</header>
);
