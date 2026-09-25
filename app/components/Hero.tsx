export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero-greeting">Hi, I&rsquo;m Ragnar</p>
      <h1 className="hero-title">Software Developer</h1>
      <p className="hero-bio">
        Lorem ipsum dolor sit amet consectetur. Id sed magna nunc vel
        pulvinar pellentesque magna est eget. Purus ut augue sit egestas.
        Pellentesque volutpat id elit viverra ante velit quis. Malesuada in
        lacus dolor ut et. Purus ut augue sit egestas. Pellentesque volutpat
        id elit viverra ante velit quis. Malesuada in lacus dolor ut et.
      </p>
      <a href="/resume.pdf" className="resume-link" download>
        Download resume →
      </a>
      <a href="#contact" className="btn-primary">
        CONTACT ME
      </a>
    </section>
  );
}