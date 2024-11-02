const Footer = () => {
    return (
        <footer className="footer bg-gray-800 text-gray-400 py-4 px-8 sm:px-6 lg:px-8">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="mb-4 text-sm text-gray-400">
                    © 2023 Copyright:
                </div>
                <div className="mb-4 text-sm text-gray-400">
                    <a href="https://github.com/tuusuario/portfolio" className="text-gray-400">
                        GitHub
                    </a>
                </div>
                <div className="mb-4 text-sm text-gray-400">
                    <a href="https://twitter.com/tuusuario" className="text-gray-400">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;