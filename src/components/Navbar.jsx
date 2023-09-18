import logo from '../assets/images/logo.svg'
import { pageLinks, navIcons } from '../data'

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<img src={logo} className="nav-logo" alt="backroads" />
						<button type="button" className="nav-toggle" id="nav-toggle">
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<ul className="nav-links" id="nav-links">
						{pageLinks.map(link => (
							<li key={link.id}>
								<a href={link.href} className="nav-link">
									{link.name}
								</a>
							</li>
						))}
					</ul>

					<ul className="nav-icons">
						{navIcons.map(navIcon => (
							<li key={navIcon.id}>
								<a
									href={navIcon.href}
									target="_blank"
									className="nav-icon"
									rel="noreferrer"
								>
									<i className={navIcon.icon}></i>
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar
