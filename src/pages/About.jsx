function About() {
  return (
    <div className="about-container">
      <div className="background-image" />
      <div className="about-left">
        <img src="/assets/blacklogo.png" alt="Spy x Family Logo" className="about-logo" />
        <p className="about-description">
          <strong>Spy × Family</strong> is a Japanese manga series written and illustrated by Tatsuya Endo. The story follows Loid Forger, an enigmatic spy who has to "build a family" to execute a mission, not realizing that his adopted daughter is a telepath, and the woman he agrees to marry is a skilled assassin.
        </p>
      </div>
      <div className="about-right">
        <img src="/assets/posterimg.png" alt="Spy x Family Poster" className="about-poster" />
      </div>
    </div>
  );
}

export default About;