import { pageLinks, navIcons } from '../data'

const Footer = () => {
	return (
		<footer className="section footer">
			<ul className="footer-links">
				{pageLinks.map(({ id, href, name }) => (
					<li key={id}>
						<a href={href} className="footer-link">
							{name}
						</a>
					</li>
				))}
			</ul>
			<ul className="footer-icons">
				{navIcons.map(({ id, href, icon }) => (
					<li key={id}>
						<a
							href={href}
							target="_blank"
							className="footer-icon"
							rel="noreferrer"
						>
							<i className={icon}></i>
						</a>
					</li>
				))}
			</ul>
			<p className="copyright">
				copyright &copy; Backroads travel tours company
				<span id="date">{new Date().getFullYear()}</span> all rights reserved
			</p>
		</footer>
	)
}

export default Footer
