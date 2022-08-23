import Logo from '../svgs/logo.svg';

const Splash = () => {
    return (
        <section className="splash">
            <h1 className="hidden">
                the Schroeder Zine
            </h1>
            <Logo />
            <p>Est. 1995</p>
            <br/>
            <p className="blurb">In 1995 the Schroeder Zine was launched to no acclaim. For no apparent reason, 25 years after the last issue, we've decided to bring it back. We haven't matured much. We've been uploading all the old content, and writing some really dumb new stuff.</p>
        </section>
    )
}

export default Splash;