
const Footer = () => {
  return (
    <footer className="mt-auto border-t border-black/5 dark:border-white/10 bg-backgroundlight dark:bg-backgroundgray z-10">
      <div className="footer footer-center p-6 text-textdark text-sm">
        <p className="opacity-90">© {new Date().getFullYear()} FetchFast. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
