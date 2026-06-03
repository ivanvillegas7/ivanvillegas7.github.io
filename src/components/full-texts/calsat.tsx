import { Figure, H2, H3, P, TeX, Header, Note, B } from "./_primitives";

export function CalSatFullText() {
  return (
    <article className="mx-auto max-w-3xl">
      <Header
        kicker={<B en="Research internship report · IFCA · 23 November 2023" es="Memoria de prácticas de investigación · IFCA · 23 de noviembre de 2023" />}
        title={
          <B
            en={<>A review of &ldquo;Calibration Satellite for Ultra-sensitive Cosmic Microwave Background Polarization Ground-based Experiments&rdquo;</>}
            es={<>Revisión de &ldquo;Satélite de calibración para experimentos de polarización del fondo cósmico de microondas desde tierra de ultra-alta sensibilidad&rdquo;</>}
          />
        }
        byline={<B en="Iván Villegas-Pérez · Supervisor: Dr. Francisco J. Casas Reinares (IFCA)" es="Iván Villegas-Pérez · Tutor: Dr. Francisco J. Casas Reinares (IFCA)" />}
      />

      <section>
        <H2><B en="Abstract" es="Resumen" /></H2>
        <P>
          <B
            en="A review of the calculations performed by Luis Fernando Mejía Jirón in his Master's thesis on a Low Earth Orbit calibration satellite (CalSat) for ground-based CMB polarization experiments. CalSat's utility is studied through the number of passes over each experiment's field of view, and a thermal analysis shows that its emission cannot saturate the detectors. Following the same procedures, similar results are obtained, with small differences attributable to approximations and to the exact location of each ground station."
            es="Revisión de los cálculos realizados por Luis Fernando Mejía Jirón en su tesis de máster sobre un satélite de calibración en órbita baja (CalSat) para experimentos de polarización del CMB desde tierra. Se estudia la utilidad de CalSat a partir del número de pasos por el campo de visión de cada experimento y un análisis térmico muestra que su emisión no puede saturar los detectores. Siguiendo los mismos procedimientos se obtienen resultados similares, con pequeñas diferencias atribuibles a las aproximaciones y a la posición exacta de cada estación."
          />
        </P>
      </section>

      <section>
        <H2><B en="I. Introduction" es="I. Introducción" /></H2>
        <P>
          <B
            en="CMB temperature anisotropies are key probes of the early Universe. Inflation also predicts polarized B-modes from primordial gravitational waves, several orders of magnitude weaker than temperature fluctuations and obscured by polarized galactic foregrounds (synchrotron below 100 GHz, thermal dust above). Detecting them requires extremely precise calibration — one option is a dedicated calibration satellite (CalSat) on a Low Earth Orbit at ~400 km, emitting a well-characterised, fully polarized signal at multiple microwave frequencies."
            es="Las anisotropías de temperatura del CMB son una de las mejores sondas del Universo primitivo. La inflación predice además modos B polarizados generados por ondas gravitacionales primordiales, varios órdenes de magnitud más débiles que las fluctuaciones de temperatura y oscurecidos por los fondos galácticos polarizados (sincrotrón por debajo de 100 GHz, polvo térmico por encima). Detectarlos exige una calibración extremadamente precisa — una opción es un satélite de calibración (CalSat) en órbita baja a ~400 km, que emita una señal totalmente polarizada y bien caracterizada en varias frecuencias del rango de microondas."
          />
        </P>

        <H3><B en="CalSat in a Sun-synchronous orbit" es="CalSat en órbita heliosíncrona" /></H3>
        <P>
          <B
            en="Imposing that the longitude of the ascending node precesses at the same rate as the Earth orbits the Sun gives the Sun-synchronous condition:"
            es="Imponer que la longitud del nodo ascendente precese al mismo ritmo que la Tierra orbita el Sol da la condición de órbita heliosíncrona:"
          />
        </P>
        <TeX>{String.raw`\dot{\Omega} \;=\; -\,\frac{3\sqrt{\mu}\,J_{2}\,R^{2}}{2\,(1-e^{2})^{2}\,a^{7/2}}\,\cos(i) \;=\; 0.9856^{\circ}/\text{day}`}</TeX>
        <P>
          <B
            en="With Earth's values (R = 6371 km, μ = 398600.44 km³/s², J₂ = 1.08263×10⁻³) and a circular orbit (e ≈ 0), this fixes a direct relation between inclination and altitude, consistent with Mejía Jirón's results across 400–1400 km."
            es="Con los valores de la Tierra (R = 6371 km, μ = 398600.44 km³/s², J₂ = 1.08263×10⁻³) y órbita circular (e ≈ 0), esto fija una relación directa entre inclinación y altitud, consistente con los resultados de Mejía Jirón entre 400 y 1400 km."
          />
        </P>
        <Figure src="/figures/calsat/sso.png" num={1} caption={<B en="Sun-synchronous condition: inclination vs altitude for a circular orbit." es="Condición heliosíncrona: inclinación frente a altitud para una órbita circular." />} />

        <H3><B en="Elevation angle" es="Ángulo de elevación" /></H3>
        <P>
          <B en="Approximating the local surface as a straight line gives a simple altitude-dependent expression:" es="Aproximando la superficie local como una recta se obtiene una expresión sencilla dependiente de la altitud:" />
        </P>
        <TeX>{String.raw`\tan(-\alpha) \;=\; \frac{h}{(90^{\circ}-i)\,R_{\oplus}}`}</TeX>
        <Figure src="/figures/calsat/elevation.png" num={2} caption={<B en="Elevation angle of CalSat seen by a polar observer vs orbital altitude." es="Ángulo de elevación de CalSat visto por un observador polar frente a la altitud orbital." />} />
      </section>

      <section>
        <H2><B en="II. Methods" es="II. Métodos" /></H2>
        <P>
          <B
            en="Orbits were propagated with GMAT using SMA = 6778 km, ECC = 0.0001, INC = 97.025°. Five ground stations — QUIJOTE, CLASS, ACT, LSPE-STRIP and POLARBEAR-2 — were added with their measured coordinates. CalSat is counted as 'in field of view' whenever it crosses a circular area centred on the station with diameter equal to the experiment's FoV."
            es="Las órbitas se propagaron con GMAT usando SMA = 6778 km, ECC = 0.0001, INC = 97.025°. Se añadieron las cinco estaciones — QUIJOTE, CLASS, ACT, LSPE-STRIP y POLARBEAR-2 — con sus coordenadas. CalSat se cuenta como 'dentro del campo de visión' cada vez que cruza un área circular centrada en la estación con diámetro igual al campo del experimento."
          />
        </P>
        <Figure src="/figures/calsat/orbit_1d.png" num={3} caption={<B en="Ground track of CalSat after one day." es="Trazado terrestre de CalSat tras un día." />} />
        <Figure src="/figures/calsat/orbit_30d.png" num={4} caption={<B en="Ground track after 30 days — dense SSO coverage at ~400 km." es="Trazado terrestre tras 30 días — la densa cobertura SSO a ~400 km." />} />
      </section>

      <section>
        <H2><B en="III. Results" es="III. Resultados" /></H2>
        <H3><B en="Number of passes per experiment" es="Número de pasos por experimento" /></H3>
        <P>
          <B
            en="Over 30 days the number of passes ranges from a few tens (ACT, with the narrowest FoV) to several hundred (LSPE-STRIP, POLARBEAR-2). The count is highly sensitive to the start time for ACT — even a one-minute shift can change it noticeably because CalSat may graze the FoV tangentially."
            es="A lo largo de 30 días el número de pasos varía entre unas decenas (ACT, con el FoV más estrecho) y varios cientos (LSPE-STRIP, POLARBEAR-2). El recuento es muy sensible al instante de inicio para ACT — incluso un desplazamiento de un minuto puede cambiarlo apreciablemente, ya que CalSat puede rozar el FoV de forma tangencial."
          />
        </P>
        <Figure src="/figures/calsat/quijote_passes.jpg" num={5} caption={<B en="Passes of CalSat over the QUIJOTE field of view over one month." es="Pasos de CalSat sobre el campo de visión de QUIJOTE durante un mes." />} />
        <Figure src="/figures/calsat/act_passes.jpg" num={6} caption={<B en="Passes over ACT — the narrowest FoV in the sample." es="Pasos sobre ACT — el FoV más estrecho de la muestra." />} />

        <H3><B en="Thermal analysis" es="Análisis térmico" /></H3>
        <P>
          <B
            en="Using ASATAN, the maximum panel temperature when facing the Sun is ~39 °C, as reported by Mejía Jirón. Assuming the whole satellite reaches that value, the absorbed power on each receiver was computed at the working frequencies of each experiment."
            es="Con ASATAN, la temperatura máxima de los paneles encarados al Sol es ~39 °C, según Mejía Jirón. Suponiendo que todo el satélite alcanza ese valor, se calcula la potencia absorbida en cada receptor en las frecuencias de trabajo de cada experimento."
          />
        </P>
        <Figure src="/figures/calsat/quijote_power.png" num={7} caption={<B en="Absorbed power on QUIJOTE vs CalSat surface temperature, for each working frequency." es="Potencia absorbida en QUIJOTE frente a la temperatura superficial de CalSat, para cada frecuencia de trabajo." />} />
        <P>
          <B en="For all experiments and frequencies, the absorbed power is several orders of magnitude below saturation — receiver saturation by CalSat's thermal emission is ruled out." es="Para todos los experimentos y frecuencias, la potencia absorbida está varios órdenes de magnitud por debajo de la saturación — queda descartada la saturación de los receptores por la emisión térmica de CalSat." />
        </P>
      </section>

      <section>
        <H2><B en="IV. Conclusions" es="IV. Conclusiones" /></H2>
        <P>
          <B
            en="The re-derivations of the Sun-synchronous condition, the elevation angle and the pass statistics confirm the original CalSat results, with small differences attributable to approximations and ground station locations. The thermal analysis rules out receiver saturation. CalSat remains a viable, well-characterised calibration source for current and next-generation ground-based CMB polarization experiments."
            es="Las rededucciones de la condición heliosíncrona, el ángulo de elevación y la estadística de pasos confirman los resultados originales de CalSat, con pequeñas diferencias atribuibles a aproximaciones y a la posición de las estaciones. El análisis térmico descarta la saturación de los receptores. CalSat sigue siendo una fuente de calibración viable y bien caracterizada para experimentos actuales y futuros de polarización del CMB desde tierra."
          />
        </P>
        <Note>
          <B
            en="The full report — including all data tables (passes, observation times, absorbed-power vs frequency) and the GMAT setup — is available via the PDF download in the sidebar."
            es="El informe completo — con todas las tablas de datos (pasos, tiempos de observación, potencia absorbida frente a frecuencia) y la configuración de GMAT — está disponible mediante la descarga del PDF en la barra lateral."
          />
        </Note>
      </section>
    </article>
  );
}