function Home() {
  return (
    <div className="home-container">
      <div className="hero-image">
        <picture>
          <source srcSet="/assets/home-tm-img.png" media="(max-width: 600px)" />
          <source srcSet="/assets/home-tm-img.png" media="(max-width: 1024px)" />
          <img src="/assets/home-img.png" alt="Spy x Family Cast" />
        </picture>
      </div>
    </div>
  );
}

export default Home;