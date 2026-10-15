export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero-greeting">Hi, Im Ragnar</p>
      <h1 className="hero-title">Software Developer</h1>
      <p className="hero-bio">
        I am a 3rd year junior software developer student at Kuressaare Ametikool, my interests are programming and sports. My strengths are that I am positive, independent and have good teamwork skills. 
      </p>
      <a href="/cvRagnarÕige.pdf" className="resume-link" download target="_blank">
        Download resume →
      </a>
      <a href="#contact" className="btn-primary">
        CONTACT ME
      </a>
    </section>
  );
}