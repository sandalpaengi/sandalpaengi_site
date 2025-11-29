export default function Footer() {
    return (
        <footer className="py-12 px-4 md:px-6 border-t border-black mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 text-sm font-mono">
                <div className="max-w-xs">
                    <p className="mb-4">
                        Sandalpaengi<br />
                        Handcrafted Furniture<br />
                        Seoul, South Korea
                    </p>
                    <p className="text-xs opacity-60">
                        &copy; {new Date().getFullYear()}
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <a href="mailto:hello@sandalpaengi.com" className="hover:underline">hello@sandalpaengi.com</a>
                    <a href="tel:+821012345678" className="hover:underline">+82 10 1234 5678</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                </div>
            </div>
        </footer>
    );
}
