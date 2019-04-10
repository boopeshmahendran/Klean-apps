import React from "react";
import styles from "./ProcessSection.css";
import Strings from "../../strings";
import Process from "./Process";
import requirementIcon from "../images/icons/requirement.png";
import deployIcon from "../images/icons/deploy.png";
import uiuxIcon from "../images/icons/uiux.png";
import qaIcon from "../images/icons/medal.png";
import developmentIcon from "../images/icons/appdevelopment.png";
import supportIcon from "../images/icons/support.png";

class ProcessSection extends React.Component {
    render() {
        return (
            <section id="services" className={styles.processSection}>
                <div className={styles.header}>{Strings.PROCESS_HEADER}</div>
                <div className={styles.body}>
                    <Process
                        number={1}
                        image={requirementIcon}
                        header="Requirement Analysis"
                        body="We get to know our client's requirements"
                    />
                    <Process
                        number={2}
                        image={uiuxIcon}
                        header="UI/UX Design"
                        body="We create beautiful and eye-catchy design using the latest design tools"
                    />
                    <Process
                        number={3}
                        image={developmentIcon}
                        header="Development"
                        body="We start development with customer’s feedback"
                    />
                    <Process
                        number={4}
                        image={qaIcon}
                        header="Quality Assurance"
                        body="We test the app thoroughly and ensure 100% bug free app"
                    />
                    <Process
                        number={5}
                        image={deployIcon}
                        header="Deployment"
                        body="At this stage, your app will be ready to be deployed on App Store or play store."
                    />
                    <Process
                        number={6}
                        image={supportIcon}
                        header="Support"
                        body="We provide the best support and answer every query"
                    />
                </div>
            </section>
        );
    }
}

export default ProcessSection;