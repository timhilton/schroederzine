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
            <p className="blurb">In 1995 the Schroeder Zine was launched to no acclaim. For no apparent reason, 25 years after the last issue, we've decided to bring it back. We haven't matured much. It's gonna be stupid, starting with the fact that none of the links work yet.</p>
        </section>
    )
}

export default Splash;