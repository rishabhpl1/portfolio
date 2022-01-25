import "../styles/IntroductionPage.css"
const IntroductionPage = () => {
    return (
        <div className="flex-wrap">
            <div className="introduction">
                Hello, I'm <span class="highlight"> Rishabh Pal.</span>
                <br />
                I'm a front-end developer
            </div>
            <div className="button">View my work
            <i className="arrow right"></i>
            </div>
        </div>

    )
}

export default IntroductionPage;