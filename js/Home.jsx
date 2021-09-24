const { Link } = ReactRouterDOM

export function Home() {
  return (
    <section className="home">
      <h1 className="main-title">Welcome to Appsus</h1>

      <div className="about">
        <article className="about-comps">
          <aside className="about-book">
            <ul>
              <Link className="book-link" to="/book"><h3>Books</h3></Link>
              <li> Manage your favourite books!</li>
              <li>Supports Google books.</li>
            </ul>
          </aside>

          <aside className="about-mail">
            <ul>
              <Link className="mail-link" to="/mail"><h3>Mails</h3></Link>
              <li>Fast and easy mail service,</li>
              <li>Manage your mails with ease.</li>
            </ul>
          </aside>

          <aside className="about-link">
            <ul>
              <Link className="note-link" to="/note"><h3>Notes</h3></Link>
              <li> Manage your thoughts!</li>
              <li>Supports videos and pictures to be kept.</li>
            </ul>
          </aside>

        </article>
      </div>

      <h2 className="team-header">About me</h2>

      <div className="about-team">
        <article className="social-container">
          <img className="social-img" src="img/ofir.jpg" />
          <h3 className="social-header">Ofir Picciotto</h3>
          <p className="social-info">Hey I am Ofir, 36 years old, a fullstack developer from Beachwood, Ohio.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ofir-picciotto-3524a2184/" target="_blank">
              <img className="social-icon linkedin" src="./img/linkedin-brands.svg" alt="linkedin" />
            </a>
            <a href="https://github.com/OfirPicciotto?tab=repositories" target="_blank">
              <img className="social-icon git" src="./img/git-brands.svg" alt="github" />
            </a>
            <a href="https://twitter.com/Jagdish465" target="_blank">
              <img className="social-icon twitter" src="./img/twitter-brands.svg" alt="twitter" />
            </a>
          </div>
        </article>
      </div>

    </section>
  )
}


