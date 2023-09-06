
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Roberto Jimenez </span>
            from <span className="purple"> Madrid, Spain</span>, currently based in <span className="purple">Cologne, Germany.</span>
            <br /> 
            <br /> I have completed a year of professional training as a fullstack web developer and currently looking for a job or internship.
            <br />
            <br />
            Apart from coding, these are some other things I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Science
            </li>
            <li className="about-activity">
              <ImPointRight /> Music production
            </li>
            <li className="about-activity">
              <ImPointRight /> Family
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
          </ul>

          <p style={{ color: "#d26200" }}>
          Practice makes perfect !{" "}
          </p>
          <footer className="blockquote-footer">Roberto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
