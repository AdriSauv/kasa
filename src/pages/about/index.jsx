import Banner from "../../components/banner";
import "./style.scss"
import aboutData from "../../assets/data/about.json";
import Collapse from "../../components/collapse";

function About() {
    return (
        <main>
            <Banner page="about" />
            <section className="collapse">
                {aboutData.map(({ title, description }, index) => {
                    const collapseTitle = <h2 className="title-about-collapse">{title}</h2>;
                    const collapseDescription = <p className="description-about-collapse">{description}</p>;
                    return (
                        <Collapse
                            key={`${title}-${index}`}
                            collapseTitle={collapseTitle}
                            collapseDescription={collapseDescription}
                        />
                    );
                })}                       
            </section>
        </main>
    )
}

export default About