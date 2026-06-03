import { Figure, H2, H3, P, TeX, ITeX, Header, Note, B } from "./_primitives";

export function M15FullText() {
  return (
    <article className="mx-auto max-w-3xl">
      <Header
        kicker={<B en="Master's thesis · M.Sc. in Nuclear and Particle Physics · University of Oslo · Spring 2025" es="Tesis de máster · Máster en Física Nuclear y de Partículas · Universidad de Oslo · primavera de 2025" />}
        title={
          <B
            en={<>Analysis of the dark matter density profile of the globular cluster M15</>}
            es={<>Análisis del perfil de densidad de materia oscura del cúmulo globular M15</>}
          />
        }
        byline={<B en="Iván Villegas-Pérez — Supervisors: Prof. Heidi Sandaker (UiO), Dr. Giacomo D'Amico (UiB / IFAE), Dr. Julia I. Djuvsland (formerly UiB), Dr. Francesco G. Saturni (INAF-OAR)" es="Iván Villegas-Pérez — Tutores: Prof. Heidi Sandaker (UiO), Dr. Giacomo D'Amico (UiB / IFAE), Dra. Julia I. Djuvsland (anteriormente UiB), Dr. Francesco G. Saturni (INAF-OAR)" />}
      />

      <section>
        <H2><B en="Abstract" es="Resumen" /></H2>
        <P>
          <B
            en={<>Dark matter constitutes ~25 % of the total energy of the Universe yet its nature is unknown. In this work I studied the dark matter density distribution of the globular cluster M15 in order to derive the astrophysical factor <ITeX>{`J`}</ITeX>, which quantifies the dark matter content along a line of sight. This will feed the analysis of MAGIC data — either enabling a dark matter detection or constraining particle parameters (mass, annihilation cross-section, lifetime). An MCMC Jeans analysis on M15 kinematic data was performed for three density profiles (Einasto, Burkert and Zhao–Hernquist). A statistical test on the reduced <ITeX>{`\\chi^{2}`}</ITeX> posteriors selects the cuspy profiles as the best fit.</>}
            es={<>La materia oscura constituye ~25 % de la energía total del Universo y su naturaleza es desconocida. En este trabajo estudio la distribución de densidad de materia oscura del cúmulo globular M15 para derivar el factor astrofísico <ITeX>{`J`}</ITeX>, que cuantifica el contenido de materia oscura a lo largo de una línea de visión. Esto se utilizará en el análisis de los datos de MAGIC — bien permitiendo una detección o restringiendo los parámetros de la partícula (masa, sección eficaz de aniquilación, vida media). Se realizó un análisis de Jeans con MCMC sobre los datos cinemáticos de M15 para tres perfiles de densidad (Einasto, Burkert y Zhao–Hernquist). Un test estadístico sobre las posteriori del <ITeX>{`\\chi^{2}`}</ITeX> reducido selecciona los perfiles cuspy como los que mejor ajustan los datos.</>}
          />
        </P>
        <P>
          <B
            en="Specifically, for an integration angle of 0.5°, the dark matter distribution in M15 is best described by a cuspy profile with"
            es="En concreto, para un ángulo de integración de 0.5°, la distribución de materia oscura en M15 se describe mejor por un perfil cuspy con"
          />
        </P>
        <TeX>{String.raw`\begin{aligned} J(0.5^{\circ}) &\in \bigl[\, 2.5\!\times\!10^{23},\; 8\!\times\!10^{26}\,\bigr]\;\text{GeV}^{2}\,\text{cm}^{-5}, \\ \log_{10}\!\bigl(J(0.5^{\circ})/\text{GeV}^{2}\text{cm}^{-5}\bigr) &\in [23.4,\,25.7]. \end{aligned}`}</TeX>
        <P>
          <B
            en="In addition, M15's dark matter halo is spatially extended with respect to the MAGIC point spread function, regardless of the chosen profile."
            es="Además, el halo de materia oscura de M15 es espacialmente extenso respecto a la PSF de MAGIC, con independencia del perfil elegido."
          />
        </P>
      </section>

      <section>
        <H2><B en="Main ideas" es="Ideas principales" /></H2>

        <H3><B en="Why M15?" es="¿Por qué M15?" /></H3>
        <P>
          <B
            en="M15 (NGC 7078) is one of the densest known globular clusters and a long-standing candidate for indirect dark matter searches: a relatively close, kinematically well-measured stellar system with a high dark-matter-to-stars ratio in its core. A robust J-factor estimate is a prerequisite for translating MAGIC's flux limits into bounds on particle properties."
            es="M15 (NGC 7078) es uno de los cúmulos globulares más densos conocidos y un candidato de larga data para búsquedas indirectas de materia oscura: un sistema estelar relativamente cercano, con cinemática muy bien medida y una alta razón materia oscura/estrellas en su núcleo. Una estimación robusta del J-factor es condición necesaria para traducir los límites de flujo de MAGIC en cotas sobre las propiedades de la partícula."
          />
        </P>

        <H3><B en="Jeans analysis with three profiles" es="Análisis de Jeans con tres perfiles" /></H3>
        <P>
          <B
            en={<>Three profiles were tested: the cored Burkert and the cuspy Einasto and Zhao–Hernquist. The spherical, anisotropic Jeans equation was solved and compared against the observed line-of-sight velocity dispersion. The likelihood was sampled with MCMC, jointly fitting density-profile parameters, the velocity anisotropy and the stellar mass-to-light ratio. The <ITeX>{`J`}</ITeX>-factor is the line-of-sight integral of <ITeX>{`\\rho_{\\text{DM}}^{2}`}</ITeX> over the solid angle <ITeX>{`\\Omega`}</ITeX>:</>}
            es={<>Se probaron tres perfiles: el cored Burkert y los cuspy Einasto y Zhao–Hernquist. Se resolvió la ecuación de Jeans esférica y anisótropa, comparando con la dispersión de velocidades en línea de visión observada. La verosimilitud se muestreó con MCMC, ajustando conjuntamente los parámetros del perfil, la anisotropía de velocidades y el cociente masa/luminosidad estelar. El <ITeX>{`J`}</ITeX>-factor es la integral en línea de visión de <ITeX>{`\\rho_{\\text{DM}}^{2}`}</ITeX> sobre el ángulo sólido <ITeX>{`\\Omega`}</ITeX>:</>}
          />
        </P>
        <TeX>{String.raw`J(\alpha_{\text{int}}) \;=\; \int_{\Delta\Omega(\alpha_{\text{int}})}\!\! d\Omega \int_{\text{l.o.s.}} d\ell\; \rho_{\rm DM}^{2}\!\bigl(r(\ell,\Omega)\bigr)`}</TeX>
        <Figure src="/figures/m15/brightness.png" num={1} caption={<B en="Surface brightness profile of M15 anchoring the stellar component of the Jeans modelling." es="Perfil de brillo superficial de M15 que ancla la componente estelar del modelado de Jeans." />} />
        <Figure src="/figures/m15/velocity.png" num={2} caption={<B en="Line-of-sight velocity dispersion of M15 member stars — the main observable constraining the density profile." es="Dispersión de velocidades en línea de visión de las estrellas de M15 — la principal observable que restringe el perfil de densidad." />} />

        <H3><B en={<>From <ITeX>{`\\rho(r)`}</ITeX> to <ITeX>{`J(\\alpha_{\\text{int}})`}</ITeX></>} es={<>De <ITeX>{`\\rho(r)`}</ITeX> a <ITeX>{`J(\\alpha_{\\text{int}})`}</ITeX></>} /></H3>
        <P>
          <B
            en={<>For each posterior sample the dark matter density was integrated along the line of sight and over a circular region of half-angle <ITeX>{`\\alpha_{\\text{int}}`}</ITeX> to obtain <ITeX>{`J(\\alpha_{\\text{int}})`}</ITeX>. Confidence bands were built from the posterior, allowing a direct comparison between profiles and with CLUMPY-based estimates from the literature.</>}
            es={<>Para cada muestra de la posteriori se integró la densidad de materia oscura en la línea de visión y sobre una región circular de semi-ángulo <ITeX>{`\\alpha_{\\text{int}}`}</ITeX>, obteniendo <ITeX>{`J(\\alpha_{\\text{int}})`}</ITeX>. Se construyeron bandas de confianza a partir de la posteriori, permitiendo comparar directamente los perfiles entre sí y con las estimaciones basadas en CLUMPY de la literatura.</>}
          />
        </P>
        <Figure src="/figures/m15/dm_density.png" num={3} caption={<B en={<>68 %, 95 % and 99.7 % credible bands of <ITeX>{`\\rho(r)`}</ITeX> of M15 from the MCMC.</>} es={<>Bandas creíbles al 68 %, 95 % y 99.7 % de <ITeX>{`\\rho(r)`}</ITeX> de M15 a partir del MCMC.</>} />} />
        <Figure src="/figures/m15/joint_J.png" num={4} caption={<B en={<><ITeX>{`J(\\alpha_{\\text{int}})`}</ITeX> combining the three profiles — the basis for the final <ITeX>{`J`}</ITeX>-factor range.</>} es={<><ITeX>{`J(\\alpha_{\\text{int}})`}</ITeX> combinando los tres perfiles — la base del rango final del <ITeX>{`J`}</ITeX>-factor.</>} />} />

        <H3><B en="Statistical model selection and PSF extension" es="Selección estadística de modelo y extensión respecto a la PSF" /></H3>
        <P>
          <B
            en={<>A test on the reduced <ITeX>{`\\chi^{2}`}</ITeX> posteriors selects the cuspy profiles (Einasto and Zhao–Hernquist) as the best fit. Across all three profiles, the angular extent of the dark matter halo is larger than the MAGIC PSF — so M15 cannot be treated as a point source in the analysis pipeline.</>}
            es={<>Un test sobre la posteriori del <ITeX>{`\\chi^{2}`}</ITeX> reducido selecciona los perfiles cuspy (Einasto y Zhao–Hernquist) como el mejor ajuste. En los tres perfiles, la extensión angular del halo de materia oscura es mayor que la PSF de MAGIC — de modo que M15 no puede tratarse como una fuente puntual en la cadena de análisis.</>}
          />
        </P>
      </section>

      <section>
        <H2><B en="Conclusions" es="Conclusiones" /></H2>
        <P>
          <B
            en="The MCMC Jeans analysis yields J-factors consistent with the literature and clearly favours cuspy profiles. The halo is spatially extended for MAGIC, which must be taken into account when deriving particle-physics constraints from observations of this target."
            es="El análisis de Jeans con MCMC da J-factors consistentes con la literatura y favorece claramente los perfiles cuspy. El halo es extenso para MAGIC, lo que debe tenerse en cuenta al derivar restricciones de física de partículas a partir de las observaciones de este objetivo."
          />
        </P>
        <Note>
          <B
            en="This page is a high-level summary of the full ~120-page thesis. All chapters — kinematic data sets, derivations of the Jeans equation, MCMC convergence diagnostics, corner plots, the F- and Z-tests and the comparison with CLUMPY — are in the downloadable PDF."
            es="Esta página es un resumen de alto nivel de la tesis completa (~120 páginas). Todos los capítulos — conjuntos cinemáticos, deducciones de la ecuación de Jeans, diagnósticos de convergencia del MCMC, corner plots, tests F y Z y la comparación con CLUMPY — están en el PDF descargable."
          />
        </Note>
      </section>
    </article>
  );
}