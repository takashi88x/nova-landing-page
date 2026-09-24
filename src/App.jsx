import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="site">

      {/* NAVBAR */}
      <header className="navbar">

        <a href="#" className="logo" onClick={closeMenu}>
          NØVA
        </a>

        <nav className={`nav-links ${menuOpen ? 'menu-open' : ''}`}>
          <a href="#tratamentos" onClick={closeMenu}>
            Tratamentos
          </a>

          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>

          <a href="#contato" onClick={closeMenu}>
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="nav-cta"
          onClick={closeMenu}
        >
          Agendar avaliação
        </a>

        <button
          type="button"
          className={`mobile-menu ${menuOpen ? 'active' : ''}`}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
        </button>

      </header>


      <main>

        {/* HERO */}
        <section className="hero">

          <div className="hero-content">

            <p
              className="eyebrow reveal"
              style={{ '--delay': '0ms' }}
            >
              PELE · ROSTO · CORPO
            </p>

            <h1
              className="reveal"
              style={{ '--delay': '70ms' }}
            >
              Pele, rosto
              <span>& corpo.</span>
            </h1>

            <p className="hero-description">
              Estética avançada com uma abordagem mais natural.
            </p>

            <a
              href="#contato"
              className="primary-button reveal"
              style={{ '--delay': '210ms' }}
            >
              Conheça a NØVA
              <span>↗</span>
            </a>

          </div>


          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=90"
              alt="Tratamento estético facial"
            />
          </div>

        </section>


        {/* INTRO */}
        <section className="intro">

          <div className="section-label">
            <span>01</span>
            <span>A ABORDAGEM NØVA</span>
          </div>

          <div className="intro-content">

            <h2
              className="reveal"
              style={{ '--delay': '0ms' }}
            >
              Estética não precisa
              <em> parecer artificial.</em>
            </h2>

            <p
              className="reveal"
              style={{ '--delay': '90ms' }}
            >
              Cada tratamento começa entendendo o que faz sentido para você.
              Avaliação individual, protocolos personalizados e resultados
              que respeitam seus traços.
            </p>

          </div>

        </section>


        {/* TRATAMENTOS */}
        <section className="treatments" id="tratamentos">

          <div className="section-heading">

            <div className="section-label">
              <span>02</span>
              <span>TRATAMENTOS</span>
            </div>

            <h2>Pensados para você.</h2>

          </div>


          <div className="treatments-grid">

            <article
              className="treatment reveal"
              style={{ '--delay': '0ms' }}
            >

              <span className="treatment-number">
                01
              </span>

              <div>
                <h3>Rosto</h3>

                <p>
                  Procedimentos faciais e protocolos personalizados
                  de acordo com cada necessidade.
                </p>
              </div>

              <span className="arrow">
                ↗
              </span>

            </article>


            <article
              className="treatment reveal"
              style={{ '--delay': '70ms' }}
            >

              <span className="treatment-number">
                02
              </span>

              <div>
                <h3>Pele</h3>

                <p>
                  Tratamentos focados em textura, hidratação
                  e qualidade da pele.
                </p>
              </div>

              <span className="arrow">
                ↗
              </span>

            </article>


            <article
              className="treatment reveal"
              style={{ '--delay': '140ms' }}
            >

              <span className="treatment-number">
                03
              </span>

              <div>
                <h3>Corpo</h3>

                <p>
                  Tratamentos desenvolvidos de acordo com
                  seus objetivos e rotina.
                </p>
              </div>

              <span className="arrow">
                ↗
              </span>

            </article>

          </div>

        </section>


        {/* EDITORIAL */}
        <section className="editorial">

          <img
            src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1800&q=90"
            alt="Cuidados com a pele"
          />

          <div
            className="editorial-copy reveal"
            style={{ '--delay': '80ms' }}
          >

            <span>
              FILOSOFIA NØVA
            </span>

            <h2>
              Menos artificial.
              <br />
              Mais você.
            </h2>

          </div>

        </section>


        {/* SOBRE */}
        <section className="about" id="sobre">

          <div className="section-label">
            <span>03</span>
            <span>NOSSO MÉTODO</span>
          </div>


          <div className="about-grid">

            <div className="about-title">

              <h2>
                Uma abordagem
                <br />
                mais simples.
              </h2>

            </div>


            <div className="about-text">

              <p className="large-text">
                Beleza não precisa seguir um padrão.
              </p>

              <p>
                Nosso trabalho é entender o que você procura e construir
                um tratamento a partir disso — com precisão, transparência
                e atenção aos detalhes.
              </p>


              <div className="process">

                <div className="process-item">

                  <span>01</span>

                  <div>
                    <h3>Avaliação</h3>

                    <p>
                      Entendemos sua pele, seus traços e seus objetivos.
                    </p>
                  </div>

                </div>


                <div className="process-item">

                  <span>02</span>

                  <div>
                    <h3>Protocolo</h3>

                    <p>
                      Criamos um plano de tratamento pensado para você.
                    </p>
                  </div>

                </div>


                <div className="process-item">

                  <span>03</span>

                  <div>
                    <h3>Acompanhamento</h3>

                    <p>
                      Acompanhamos sua evolução durante todo o processo.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="cta" id="contato">

          <p>
            COMECE UMA CONVERSA
          </p>

          <h2>
            Vamos conversar.
          </h2>

          <a
            href="mailto:contato@novaskin.com"
            className="primary-button light"
          >
            Agendar avaliação
            <span>↗</span>
          </a>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-logo">
          NØVA
        </div>

        <div className="footer-info">
          <span>Pele · Rosto · Corpo</span>
          <span>São Paulo · Brasil</span>
        </div>

        <div className="footer-links">
          <a href="#">
            Instagram
          </a>

          <a href="#contato">
            Contato
          </a>
        </div>

        <div className="copyright">
          © 2026 NØVA
        </div>

      </footer>

    </div>
  )
}

export default App