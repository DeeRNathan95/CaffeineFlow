export default function Layout( props ) {
    const { children } = props;

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CaffeineFlow</h1>
                <p>For Coffee Insatiates</p>
            </div>
            <button>
                <p>Sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p>
                <span className="text-gradient">Caffiend</span> was made by webstudiobydee.
            </p>
        </footer>

    )
  return (
    <div className="layout">    
        {header}
        <main>
        {children}
        </main>
        {footer}
    </div>
    )
}