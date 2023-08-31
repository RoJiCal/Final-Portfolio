
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Roberto Jimenez </span>
            from <span className="purple"> Madrid, Spain.</span>
            <br /> I am a final year student pursuing an Integrated MSc (IMSc)
            in Maths and Computing at BIT Mesra.
            <br />
            Additionally, I am currently employed as a software developer at
            Juspay.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Science
            </li>
            <li className="about-activity">
              <ImPointRight /> Music producer
            </li>
            <li className="about-activity">
              <ImPointRight /> Family
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
          </ul>

          <p style={{ color: "#d26200" }}>
          The practice makes the senior!{" "}
          </p>
          <footer className="blockquote-footer">Roberto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
