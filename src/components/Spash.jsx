import {ReactComponent as Logo} from '../svgs/logo.svg';

const Splash = () => {
    return (
        <section className="splash">
            <h1 className="hidden">
                the Schroeder Zine
            </h1>
            <Logo />
            <p>Est. 1995</p>
        </section>
    )
}

export default Splash;