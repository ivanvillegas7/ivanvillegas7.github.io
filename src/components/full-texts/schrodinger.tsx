import { Figure, H2, H3, P, TeX, ITeX, Header, B } from "./_primitives";

export function SchrodingerFullText() {
  return (
    <article className="mx-auto max-w-3xl">
      <Header
        kicker={<B en="Course project · 15 December 2021" es="Proyecto de asignatura · 15 de diciembre de 2021" />}
        title={
          <B
            en="Application of Schrödinger's equation in a box using a single, double and triple slit configuration"
            es="Aplicación de la ecuación de Schrödinger en una caja con configuraciones de una, dos y tres rendijas"
          />
        }
        byline="Julián Guerrero Cánovas, María Pérez Martínez, Elena Pujante Martínez & Iván Villegas-Pérez"
      />

      <section>
        <H2><B en="Abstract" es="Resumen" /></H2>
        <P>
          <B
            en={<>In this report we simulate single-, double- and triple-slit configurations in a box using Schrödinger's equation. Specifically, we study the time evolution of the probability of detecting a particle at a position <ITeX>{`(x, y)`}</ITeX> starting from a Gaussian initial state, and the detection probability along the <ITeX>{`y`}</ITeX> axis at a fixed <ITeX>{`x`}</ITeX>. We recover the diffraction patterns expected from Huygens' principle as well as the precision of the Crank–Nicolson scheme.</>}
            es={<>En este informe simulamos configuraciones de una, dos y tres rendijas en una caja usando la ecuación de Schrödinger. En concreto, estudiamos la evolución temporal de la probabilidad de detectar una partícula en una posición <ITeX>{`(x, y)`}</ITeX> a partir de un estado inicial gaussiano, y la probabilidad de detección a lo largo del eje <ITeX>{`y`}</ITeX> para una <ITeX>{`x`}</ITeX> fija. Recuperamos los patrones de difracción esperados por el principio de Huygens y la precisión del esquema de Crank–Nicolson.</>}
          />
        </P>
      </section>

      <section>
        <H2><B en="I. Introduction" es="I. Introducción" /></H2>
        <P>
          <B
            en="The double-slit experiment shows that light and matter can display both wave-like and particle-like behaviour, and exposes the probabilistic nature of quantum mechanics. We simulate the 2D time-dependent Schrödinger equation to study the double slit and its single- and triple-slit variants, with the Crank–Nicolson algorithm implemented in C++ and visualisation in Python."
            es="El experimento de la doble rendija muestra que la luz y la materia pueden comportarse como ondas y como partículas, y revela la naturaleza probabilística de la mecánica cuántica. Simulamos la ecuación de Schrödinger 2D dependiente del tiempo para estudiar la doble rendija y sus variantes con una y tres rendijas, con el algoritmo de Crank–Nicolson implementado en C++ y la visualización en Python."
          />
        </P>
      </section>

      <section>
        <H2><B en="II. Methods" es="II. Métodos" /></H2>
        <H3><B en="Background" es="Marco teórico" /></H3>
        <P>
          <B
            en="The general formulation of the time-dependent Schrödinger equation is"
            es="La formulación general de la ecuación de Schrödinger dependiente del tiempo es"
          />
        </P>
        <TeX>{String.raw`i\hbar\,\frac{d}{dt}\,|\Psi\rangle \;=\; \hat{H}\,|\Psi\rangle`}</TeX>
        <P>
          <B
            en="where Ĥ is the Hamiltonian and |Ψ⟩ a quantum state. In position space, for a non-relativistic particle in 2D,"
            es="donde Ĥ es el hamiltoniano y |Ψ⟩ un estado cuántico. En representación de posición, para una partícula no relativista en 2D,"
          />
        </P>
        <TeX>{String.raw`i\hbar\,\frac{\partial \Psi}{\partial t} \;=\; -\frac{\hbar^{2}}{2m}\!\left(\frac{\partial^{2}}{\partial x^{2}} + \frac{\partial^{2}}{\partial y^{2}}\right)\!\Psi \;+\; V(x,y)\,\Psi`}</TeX>
        <P>
          <B
            en="After scaling away the dimensionful variables, the equation reads"
            es="Tras eliminar las variables dimensionales mediante un cambio de escala, la ecuación queda"
          />
        </P>
        <TeX>{String.raw`i\,\frac{\partial u}{\partial t} \;=\; -\frac{\partial^{2} u}{\partial x^{2}} - \frac{\partial^{2} u}{\partial y^{2}} + V(x,y)\,u`}</TeX>
        <P>
          <B
            en={<>and the Born rule becomes <ITeX>{`p(x, y; t) = |u(x, y, t)|^{2}`}</ITeX>. Dirichlet conditions <ITeX>{`u = 0`}</ITeX> are imposed on the edges of the unit box, and the initial state is a Gaussian wave packet of widths <ITeX>{`\\sigma_{x}`}</ITeX>, <ITeX>{`\\sigma_{y}`}</ITeX> centred at <ITeX>{`(x_{c}, y_{c})`}</ITeX> with momentum <ITeX>{`(p_{x}, p_{y})`}</ITeX>.</>}
            es={<>y la regla de Born queda <ITeX>{`p(x, y; t) = |u(x, y, t)|^{2}`}</ITeX>. Imponemos condiciones de Dirichlet <ITeX>{`u = 0`}</ITeX> en los bordes de la caja unidad, y el estado inicial es un paquete gaussiano de anchuras <ITeX>{`\\sigma_{x}`}</ITeX>, <ITeX>{`\\sigma_{y}`}</ITeX> centrado en <ITeX>{`(x_{c}, y_{c})`}</ITeX> con momento <ITeX>{`(p_{x}, p_{y})`}</ITeX>.</>}
          />
        </P>

        <H3><B en="The algorithm" es="El algoritmo" /></H3>
        <P>
          <B
            en="The Crank–Nicolson method (θ = 1/2 combination of forward and backward Euler in time) yields, after discretisation on a square grid of spacing h, the linear system"
            es="El método de Crank–Nicolson (combinación con θ = 1/2 de los esquemas de Euler hacia delante y hacia atrás en el tiempo) lleva, tras discretizar sobre una rejilla cuadrada de paso h, al sistema lineal"
          />
        </P>
        <TeX>{String.raw`A\,\vec{u}^{\,n+1} \;=\; B\,\vec{u}^{\,n}, \qquad r \equiv \frac{i\,\Delta t}{2\,h^{2}}`}</TeX>
        <P>
          <B
            en="where the vectors have length (M − 2)² and A, B are sparse matrices solved at each step with spsolve."
            es="donde los vectores tienen longitud (M − 2)² y A, B son matrices dispersas resueltas en cada paso con spsolve."
          />
        </P>
      </section>

      <section>
        <H2><B en="III. Results and discussion" es="III. Resultados y discusión" /></H2>
        <P>
          <B
            en={<>Total probability <ITeX>{`\\sum p_{ij}`}</ITeX> should be conserved. We tested this on two simulations of the double-slit-in-a-box setup, with and without the barrier (<ITeX>{`h = 0.005`}</ITeX>, <ITeX>{`\\Delta t = 2.5\\times 10^{-5}`}</ITeX>, <ITeX>{`T = 0.008`}</ITeX>). The deviation stays essentially zero without the barrier and small but non-zero with it — a known artefact of the potential term.</>}
            es={<>La probabilidad total <ITeX>{`\\sum p_{ij}`}</ITeX> debe conservarse. Lo comprobamos en dos simulaciones de la doble rendija en una caja, con y sin la barrera (<ITeX>{`h = 0.005`}</ITeX>, <ITeX>{`\\Delta t = 2.5\\times 10^{-5}`}</ITeX>, <ITeX>{`T = 0.008`}</ITeX>). La desviación es prácticamente nula sin barrera y pequeña pero no nula con ella — un artefacto conocido del término de potencial.</>}
          />
        </P>

        <H3><B en="Time evolution of the 2D probability density" es="Evolución temporal de la densidad de probabilidad 2D" /></H3>
        <Figure
          src="/figures/schrodinger/p_2slits_animation.gif"
          num={1}
          caption={<B en="Animated colourmap of p(x, y; t) for the double-slit configuration." es="Mapa de color animado de p(x, y; t) para la configuración de doble rendija." />}
        />
        <P>
          <B
            en="The wave packet hits the wall and the portion crossing the slits diffracts as predicted by Huygens' principle; the reflected portion produces the characteristic interference pattern on the right of the barrier."
            es="El paquete de ondas alcanza la pared y la parte que atraviesa las rendijas se difracta según el principio de Huygens; la parte reflejada produce el patrón de interferencia característico a la derecha de la barrera."
          />
        </P>

        <H3><B en="Real and imaginary parts of the wave function" es="Partes real e imaginaria de la función de onda" /></H3>
        <Figure src="/figures/schrodinger/Re_animation.gif" num={2} caption={<B en="Re(u(x, y, t)) for the double slit." es="Re(u(x, y, t)) para la doble rendija." />} />
        <Figure src="/figures/schrodinger/Im_animation.gif" num={3} caption={<B en="Im(u(x, y, t)) for the double slit." es="Im(u(x, y, t)) para la doble rendija." />} />

        <H3><B en="Detection probability across slit configurations" es="Probabilidad de detección en las distintas configuraciones de rendijas" /></H3>
        <P>
          <B
            en="At x = 0.8 and t = 0.002 we recorded the detection probability along the y axis. The diffracted intensity is essentially zero except at directions where the waves from all slits add in phase — the quantum analogue of Young's intensity pattern."
            es="Para x = 0.8 y t = 0.002 registramos la probabilidad de detección a lo largo del eje y. La intensidad difractada es prácticamente nula salvo en las direcciones en las que las ondas de todas las rendijas se suman en fase — el análogo cuántico del patrón de Young."
          />
        </P>
      </section>

      <section>
        <H2><B en="IV. Conclusion" es="IV. Conclusión" /></H2>
        <P>
          <B
            en="Crank–Nicolson provides a good approximate solution: the deviation of the total probability stays small, and the colourmaps and y-line profiles recover the expected diffraction and n-slit interference. A natural extension would be to study tunnelling through a thin wall without slits."
            es="Crank–Nicolson proporciona una buena solución aproximada: la desviación de la probabilidad total se mantiene pequeña, y los mapas de color y los perfiles a lo largo de y reproducen la difracción esperada y la interferencia de n rendijas. Una extensión natural sería estudiar el efecto túnel a través de una pared delgada sin rendijas."
          />
        </P>
      </section>
    </article>
  );
}