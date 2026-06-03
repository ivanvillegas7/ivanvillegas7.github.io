import { Figure, H2, H3, P, Header, Note, B } from "./_primitives";

export function KeplerFullText() {
  return (
    <article className="mx-auto max-w-3xl">
      <Header
        kicker={<B en="Bachelor's degree project · B.Sc. in Physics · Universidad de Cantabria · June 2023" es="Trabajo de fin de grado · Grado en Física · Universidad de Cantabria · junio de 2023" />}
        title={
          <B
            en={<>Simulation, detection and characterization of exoplanet transits with the Kepler space mission</>}
            es={<>Simulación, detección y caracterización de tránsitos de exoplanetas con la misión espacial Kepler</>}
          />
        }
        byline={<B en="Iván Villegas-Pérez — Supervisors: Prof. Diego Herranz Muñoz & Dr. Rosa M. Domínguez Quintero (IFCA, CSIC — UC)" es="Iván Villegas-Pérez — Tutores: Prof. Diego Herranz Muñoz y Dra. Rosa M. Domínguez Quintero (IFCA, CSIC — UC)" />}
      />

      <section>
        <H2><B en="Abstract" es="Resumen" /></H2>
        <P>
          <B
            en="This Bachelor's thesis studies exoplanet detection techniques and data-cleaning strategies for Kepler photometry, choosing a median filter as the cleaning method. A Python pipeline reads and cleans Kepler light curves and characterizes the transiting exoplanet given the stellar mass, radius and temperature. It is validated on synthetic light curves (recovering injected parameters to within numerical precision) and applied to Kepler-75b and TrES-2b, recovering planetary radius, orbital period and impact parameter consistent with published values."
            es="Este trabajo de fin de grado estudia técnicas de detección de exoplanetas y estrategias de limpieza de datos sobre fotometría de Kepler, seleccionando un filtro de mediana como método de limpieza. Una cadena en Python lee y limpia las curvas de luz de Kepler y caracteriza el exoplaneta en tránsito dados la masa, el radio y la temperatura estelares. Se valida sobre curvas sintéticas (recuperando los parámetros inyectados con precisión numérica) y se aplica a Kepler-75b y TrES-2b, recuperando radio planetario, periodo orbital y parámetro de impacto compatibles con los valores publicados."
          />
        </P>
      </section>

      <section>
        <H2><B en="Main ideas" es="Ideas principales" /></H2>

        <H3><B en="Method: transits as periodic dips" es="Método: tránsitos como caídas periódicas" /></H3>
        <P>
          <B
            en="A transiting planet produces a small, periodic dip in the observed flux. The depth gives the planet-to-star radius ratio, the duration constrains the geometry and the spacing yields the orbital period. The challenge is that hot-Jupiter dips are at the 1 % level on top of a variable, noisy light curve."
            es="Un planeta en tránsito produce una pequeña caída periódica en el flujo observado. La profundidad da el cociente de radios planeta/estrella, la duración restringe la geometría y la separación entre caídas da el periodo orbital. El reto es que las caídas de un júpiter caliente están al nivel del 1 % sobre una curva variable y ruidosa."
          />
        </P>

        <H3><B en="The pipeline" es="La cadena" /></H3>
        <P>
          <B
            en="The pipeline (1) reads the raw Kepler photometry, (2) removes long-term stellar variability with a median filter, (3) searches for periodicity with a Box-Least-Squares / Lomb–Scargle approach and (4) fits a transit model to recover the planetary parameters."
            es="La cadena (1) lee la fotometría cruda de Kepler, (2) elimina la variabilidad estelar de largo periodo con un filtro de mediana, (3) busca periodicidad con un enfoque Box-Least-Squares / Lomb–Scargle y (4) ajusta un modelo de tránsito para recuperar los parámetros planetarios."
          />
        </P>
        <Figure src="/figures/kepler/total_flux.png" num={1} caption={<B en="Raw Kepler flux of Kepler-75 — long-term variability dominates the transit signature." es="Flujo crudo de Kepler-75 — la variabilidad estelar de largo periodo domina sobre la señal de tránsito." />} />
        <Figure src="/figures/kepler/filtered_flux.png" num={2} caption={<B en="Same light curve after median-filter detrending — transit dips are clearly visible." es="Misma curva tras el filtrado con mediana — las caídas de tránsito son claramente visibles." />} />
        <Figure src="/figures/kepler/periodogram.png" num={3} caption={<B en="Zoom of the periodogram of Kepler-75 used to identify the orbital period." es="Zoom del periodograma de Kepler-75 usado para identificar el periodo orbital." />} />
        <Figure src="/figures/kepler/best_fit.png" num={4} caption={<B en="Phase-folded transit of Kepler-75b and best-fit Mandel–Agol-style model used to extract the planetary radius, orbital period and impact parameter." es="Tránsito de Kepler-75b plegado en fase y modelo de tipo Mandel–Agol que mejor ajusta los datos, usado para extraer el radio planetario, el periodo orbital y el parámetro de impacto." />} />

        <H3><B en="Validation on simulated transits" es="Validación con tránsitos simulados" /></H3>
        <P>
          <B
            en="Synthetic light curves with controlled noise and stellar variability let me confirm that the recovered parameters are unbiased and quantify how the relative error scales with the ratio between the transit period and the stellar variability period — the dominant source of systematic error."
            es="Curvas de luz sintéticas con ruido y variabilidad estelar controlados permiten confirmar que los parámetros recuperados no están sesgados y cuantificar cómo el error relativo escala con el cociente entre el periodo del tránsito y el periodo de variabilidad estelar — la principal fuente de error sistemático."
          />
        </P>
        <Figure src="/figures/kepler/simulated_transit.png" num={5} caption={<B en="One of the simulated light curves used to validate the pipeline." es="Una de las curvas de luz simuladas utilizadas para validar la cadena." />} />

        <H3><B en="Real Kepler targets" es="Objetos reales de Kepler" /></H3>
        <P>
          <B
            en="Applying the pipeline to Kepler-75b and TrES-2b yields planetary radii, orbital periods and impact parameters that agree with the literature. The same code works for any Kepler target as long as the stellar parameters are known."
            es="Aplicada a Kepler-75b y TrES-2b, la cadena da radios planetarios, periodos orbitales y parámetros de impacto en acuerdo con la literatura. El mismo código sirve para cualquier objetivo de Kepler siempre que se conozcan los parámetros estelares."
          />
        </P>
      </section>

      <section>
        <H2><B en="Conclusions" es="Conclusiones" /></H2>
        <P>
          <B
            en="A complete Python pipeline for the simulation, detection and characterization of exoplanetary transits in Kepler data was built from scratch. Median-filter detrending + periodogram detection + transit fitting recovers known planetary parameters and allows a quantitative assessment of the method's sensitivity to stellar variability."
            es="Se construyó desde cero una cadena completa en Python para la simulación, detección y caracterización de tránsitos exoplanetarios en datos de Kepler. La combinación de filtrado por mediana, detección por periodograma y ajuste del tránsito recupera parámetros planetarios conocidos y permite una evaluación cuantitativa de la sensibilidad del método a la variabilidad estelar."
          />
        </P>
        <Note>
          <B
            en="This page summarises the B.Sc. thesis (~80 pages, in Spanish). The full document — including all derivations, the data-cleaning benchmarks and the analyses of TrES-2b — is available via the PDF link in the sidebar."
            es="Esta página resume el TFG (~80 páginas, en español). El documento completo — con todas las deducciones, los benchmarks de limpieza de datos y los análisis de TrES-2b — está disponible mediante el enlace al PDF en la barra lateral."
          />
        </Note>
      </section>
    </article>
  );
}