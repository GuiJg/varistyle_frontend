import missPantim from "../assets/misspantim_logo.jpg"

const Header = () => {
    return (
        <header>
                <div className='header-logo'>
                    <img src={missPantim} alt='Miss Pantim Logo'/>
                </div>
                <nav className="header-menu">
                    <a href="#about" className="header-link">Miss Pantim</a>
                    <a href="#" className="header-link">Praia</a>
                    <a href="#" className="header-link">Fit</a>
                    <a href="#" className="header-link">Casual</a>
                </nav>
        </header>
    )
}

export default Header