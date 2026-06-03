import { Figure, H2, P, TeX, ITeX, Header, Note, B } from "./_primitives";

export function CMBFullText() {
  return (
    <article className="mx-auto max-w-3xl">
      <Header
        kicker={<B en="Course project · AST5220 Cosmology II · University of Oslo · June 2024" es="Proyecto de asignatura · AST5220 Cosmología II · Universidad de Oslo · junio de 2024" />}
        title={<B en="Computing the CMB power spectrum" es="Cálculo del espectro de potencias del CMB" />}
        byline={<B en="Iván Villegas-Pérez — Supervisors: Prof. David F. Mota & Dr. Hans A. Winther (UiO)" es="Iván Villegas-Pérez — Tutores: Prof. David F. Mota y Dr. Hans A. Winther (UiO)" />}
      />

      <section>
        <H2><B en="Abstract" es="Resumen" /></H2>
        <P>
          <B
            en={<>A four-stage C++ pipeline built on top of the AST5220 template that predicts the CMB and matter power spectra from first principles: background cosmology, recombination history, linear perturbations and the line-of-sight integration that produces <ITeX>{`C_{\\ell}`}</ITeX>. The pipeline reproduces a standard ΛCDM expansion history, a Saha–Peebles recombination, scale-dependent perturbation evolution and a CMB temperature power spectrum consistent with theoretical expectations.</>}
            es={<>Una cadena de cuatro etapas en C++ construida sobre la plantilla de AST5220 que predice los espectros de potencias del CMB y de la materia a partir de primeros principios: cosmología de fondo, historia de la recombinación, perturbaciones lineales y la integración en la línea de visión que produce <ITeX>{`C_{\\ell}`}</ITeX>. La cadena reproduce una historia de expansión ΛCDM estándar, una recombinación de Saha–Peebles, la evolución dependiente de la escala de las perturbaciones y un espectro de potencias de temperatura del CMB acorde con las expectativas teóricas.</>}
          />
        </P>
      </section>

      <section>
        <H2><B en="I. Cosmological parameters" es="I. Parámetros cosmológicos" /></H2>
        <P><B en="The baseline parameters used throughout the pipeline are:" es="Los parámetros base utilizados en toda la cadena son:" /></P>
        <TeX>{String.raw`\begin{aligned} h &= 0.67, \\ T_{\text{CMB},0} &= 2.7255\,\text{K}, \\ N_{\text{eff}} &= 3.046, \\ \Omega_{B,0} &= 0.05, \\ \Omega_{\text{CDM},0} &= 0.267, \\ \Omega_{k,0} &= 0, \\ n_{s} &= 0.965, \\ A_{s} &= 2.1\times 10^{-9}. \end{aligned}`}</TeX>
      </section>

      <section>
        <H2><B en="II. Background cosmology (Milestone I)" es="II. Cosmología de fondo (Hito I)" /></H2>
        <P>
          <B
            en={<>Working in flat FLRW with <ITeX>{`x = \\ln a`}</ITeX>, the code computes <ITeX>{`H(x)`}</ITeX>, the conformal time <ITeX>{`\\eta(x)`}</ITeX>, the cosmic time <ITeX>{`t(x)`}</ITeX>, and the standard distance measures. The radiation density today follows from the CMB temperature,</>}
            es={<>Trabajando en FLRW plano con <ITeX>{`x = \\ln a`}</ITeX>, el código calcula <ITeX>{`H(x)`}</ITeX>, el tiempo conforme <ITeX>{`\\eta(x)`}</ITeX>, el tiempo cósmico <ITeX>{`t(x)`}</ITeX> y las medidas estándar de distancia. La densidad de radiación actual se sigue de la temperatura del CMB,</>}
          />
        </P>
        <TeX>{String.raw`\Omega_{\gamma,0} \;=\; \frac{2\pi^{2}}{30}\,\frac{(k_{B}\,T_{\text{CMB},0})^{4}}{\hbar^{3}\,c^{5}}\,\frac{8\pi G}{3 H_{0}^{2}}`}</TeX>
        <P><B en="and analogously the neutrino density" es="y análogamente la densidad de neutrinos" /></P>
        <TeX>{String.raw`\Omega_{\nu,0} \;=\; N_{\text{eff}}\left(\frac{7}{8}\right)\cdot\left(\frac{4}{11}\right)^{\frac{4}{3}}\cdot\Omega_{\gamma,0}.`}</TeX>
        <P><B en="The transitions between radiation-, matter- and Λ-domination are identified." es="Se identifican las transiciones entre dominios de radiación, materia y Λ." /></P>
        <Figure src="/figures/cmb/omegas.png" num={1} caption={<B en={<>Density parameters <ITeX>{`\\Omega_{i}(x)`}</ITeX> showing the three cosmological epochs.</>} es={<>Parámetros de densidad <ITeX>{`\\Omega_{i}(x)`}</ITeX> mostrando las tres épocas cosmológicas.</>} />} />
        <Figure src="/figures/cmb/eta_over_c.png" num={2} caption={<B en={<>Conformal time <ITeX>{`\\eta(x)/c`}</ITeX> — the comoving horizon — vs <ITeX>{`x = \\ln a`}</ITeX>.</>} es={<>Tiempo conforme <ITeX>{`\\eta(x)/c`}</ITeX> — el horizonte comóvil — frente a <ITeX>{`x = \\ln a`}</ITeX>.</>} />} />
      </section>

      <section>
        <H2><B en="III. Recombination history (Milestone II)" es="III. Historia de la recombinación (Hito II)" /></H2>
        <P>
          <B
            en={<>The free electron fraction <ITeX>{`X_{e}(x)`}</ITeX> is solved with Saha deep in equilibrium and with the Peebles ODE around recombination. From <ITeX>{`X_{e}`}</ITeX> we obtain <ITeX>{`\\tau(x)`}</ITeX>, its derivatives and the visibility function <ITeX>{`\\tilde{g}(x) = -\\tau'(x)\\,\\exp[-\\tau(x)]`}</ITeX>.</>}
            es={<>La fracción de electrones libres <ITeX>{`X_{e}(x)`}</ITeX> se resuelve con Saha en equilibrio y con la EDO de Peebles en torno a la recombinación. A partir de <ITeX>{`X_{e}`}</ITeX> se obtiene <ITeX>{`\\tau(x)`}</ITeX>, sus derivadas y la función de visibilidad <ITeX>{`\\tilde{g}(x) = -\\tau'(x)\\,\\exp[-\\tau(x)]`}</ITeX>.</>}
          />
        </P>
        <Figure src="/figures/cmb/Xe.png" num={3} caption={<B en={<>Free-electron fraction <ITeX>{`X_{e}(x)`}</ITeX>: Saha early, Peebles through recombination.</>} es={<>Fracción de electrones libres <ITeX>{`X_{e}(x)`}</ITeX>: Saha al principio, Peebles durante la recombinación.</>} />} />
        <Figure src="/figures/cmb/tau.png" num={4} caption={<B en={<>Optical depth <ITeX>{`\\tau(x)`}</ITeX> and its first two derivatives — visibility peaks at last scattering.</>} es={<>Profundidad óptica <ITeX>{`\\tau(x)`}</ITeX> y sus dos primeras derivadas — la visibilidad alcanza su máximo en la última dispersión.</>} />} />
      </section>

      <section>
        <H2><B en="IV. Linear perturbations (Milestone III)" es="IV. Perturbaciones lineales (Hito III)" /></H2>
        <P>
          <B
            en="The Einstein–Boltzmann hierarchy is integrated for each Fourier mode k, starting from tight-coupling initial conditions and switching to the full polarization and neutrino hierarchies after tight-coupling ends. Outputs include the metric potentials Φ, Ψ, density contrasts and velocities for CDM, baryons and photons, and the temperature and polarization multipoles."
            es="La jerarquía de Einstein–Boltzmann se integra para cada modo de Fourier k, partiendo de condiciones iniciales de acoplamiento estrecho y pasando a las jerarquías completas de polarización y neutrinos al terminar el acoplamiento. Las salidas incluyen los potenciales métricos Φ, Ψ, los contrastes de densidad y velocidades para CDM, bariones y fotones, y los multipolos de temperatura y polarización."
          />
        </P>
        <Figure src="/figures/cmb/density.png" num={5} caption={<B en="Density perturbations for CDM, baryons and photons for several k." es="Perturbaciones de densidad para CDM, bariones y fotones para varios valores de k." />} />
      </section>

      <section>
        <H2><B en="V. CMB and matter power spectra (Milestone IV)" es="V. Espectros de potencias del CMB y de la materia (Hito IV)" /></H2>
        <P>
          <B
            en={<>With the perturbation solutions in hand, the line-of-sight integral gives the temperature transfer functions <ITeX>{`\\Theta_{\\ell}(k, x = 0)`}</ITeX> and, after convolution with the primordial power spectrum, the angular power spectrum:</>}
            es={<>Con las soluciones de las perturbaciones, la integral en la línea de visión da las funciones de transferencia de temperatura <ITeX>{`\\Theta_{\\ell}(k, x = 0)`}</ITeX> y, tras convolucionar con el espectro primordial, el espectro angular de potencias:</>}
          />
        </P>
        <TeX>{String.raw`C_{\ell} \;=\; 4\pi \int \frac{dk}{k}\; P_{\text{prim}}(k)\; \bigl|\Theta_{\ell}(k)\bigr|^{2}`}</TeX>
        <P>
          <B en="The matter power spectrum P(k) is reconstructed from the CDM and baryon transfer functions evaluated today." es="El espectro de potencias de la materia P(k) se reconstruye a partir de las funciones de transferencia de CDM y bariones evaluadas hoy." />
        </P>
        <Figure src="/figures/cmb/cmb_ps.png" num={6} caption={<B en={<>CMB temperature angular power spectrum <ITeX>{`D_{\\ell} = \\frac{\\ell(\\ell+1)\\,C_{\\ell}}{2\\pi}`}</ITeX> — acoustic peaks and Silk damping.</>} es={<>Espectro angular de potencias de temperatura del CMB <ITeX>{`D_{\\ell} = \\frac{\\ell(\\ell+1)\\,C_{\\ell}}{2\\pi}`}</ITeX> — picos acústicos y amortiguamiento de Silk.</>} />} />
        <Figure src="/figures/cmb/matter_ps.png" num={7} caption={<B en="Total matter power spectrum P(k), with the turnover at matter–radiation equality." es="Espectro de potencias total de la materia P(k), con el cambio de pendiente en la igualdad materia–radiación." />} />
        <Figure src="/figures/cmb/cmb_map.png" num={8} caption={<B en="Sample full-sky CMB temperature map generated from the computed Cℓ." es="Mapa de cielo completo de temperatura del CMB generado a partir de los Cℓ calculados." />} />
      </section>

      <section>
        <H2><B en="VI. Conclusions" es="VI. Conclusiones" /></H2>
        <P>
          <B
            en="A complete first-principles pipeline from cosmological parameters to the CMB and matter power spectra was implemented in C++. Each stage was validated against the expected qualitative behaviour (matter–radiation equality, recombination, sound horizon, acoustic peaks)."
            es="Se implementó en C++ una cadena completa desde los parámetros cosmológicos hasta los espectros de potencias del CMB y de la materia. Cada etapa se validó frente al comportamiento cualitativo esperado (igualdad materia–radiación, recombinación, horizonte sonoro, picos acústicos)."
          />
        </P>
        <Note>
          <B
            en="A condensed Astronomy & Astrophysics-style write-up summarises the four milestones; the per-milestone reports with the detailed derivations are bundled in the GitHub repository."
            es="Un resumen al estilo Astronomy & Astrophysics condensa los cuatro hitos; los informes por hito con todas las deducciones están en el repositorio de GitHub."
          />
        </Note>
      </section>
    </article>
  );
}