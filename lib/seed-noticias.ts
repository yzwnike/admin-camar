// /lib/seed-noticias.ts
import 'server-only';
import { supabase } from './supabase'

const noticiasFusionadas = [
  {
    slug_es: "camar-colabora-homenaje-profesionales-covid-19",
    slug_en: "camar-collaborates-in-tribute-to-professionals-fighting-covid-19",
    folder_custom: "camar-homenaje-covid19",
    date: "2021-07-10",
    main_image: "camar-homenaje-covid19-main.webp",
    gallery: [
      { type: 'image', src: 'camar-homenaje-covid19-main.webp' },
      { type: 'video', src: 'camar-homenaje-covid19-1.mp4' },
    ],
    title: {
      es: "CAMAR colabora en el homenaje a los profesionales que luchan contra el COVID-19",
      en: "CAMAR collaborates in the tribute to professionals fighting COVID-19"
    },
    excerpt: {
      es: "CAMAR participa en el monumento en mármol Blanco Macael que homenajea a los sanitarios andaluces que luchan contra el COVID-19.",
      en: "CAMAR participates in the White Macael marble monument that pays tribute to Andalusian healthcare workers fighting COVID-19."
    },
    content: {
      es: `La marca **Macael** ha sido protagonista del monumento que homenajea a los sanitarios andaluces. En **Camar** hemos participado en todo el proceso de este emotivo proyecto, promovido por la **Asociación de Empresarios del Mármol de Andalucía (AEMA)**, desde el escaneo del modelo hasta la creación y fabricación de las esculturas en **mármol Blanco Macael** que han sido instaladas en espacios clave de las ocho capitales andaluzas como reconocimiento a estos profesionales.

Estas esculturas, que conforman una figura de dos manos simbolizando un aplauso, han sido una donación totalmente altruista, tanto por parte del conocido escultor **Navarro Arteaga**, creador del modelo de la escultura, como de **Camar** y las otras empresas colaboradoras en este proyecto.`,
      en: `The **Macael** brand has been the protagonist of the monument that pays tribute to Andalusian healthcare workers. At **Camar** we have participated in the entire process of this moving project, promoted by the **Marble Entrepreneurs Association of Andalusia (AEMA)**, from scanning the model to the creation and manufacturing of the sculptures in **White Macael marble** that have been installed in key spaces of the eight Andalusian capitals as recognition to these professionals.

These sculptures, which form a figure of two hands symbolizing applause, have been a completely altruistic donation, both by the well-known sculptor **Navarro Arteaga**, creator of the sculpture model, and by **Camar** and the other companies collaborating on this project.`
    }
  },
  {
    slug_es: "coronacion-torre-madre-de-dios-sagrada-familia",
    slug_en: "coronation-of-the-mother-of-god-tower-at-sagrada-familia",
    folder_custom: "coronacion-torre-madre-de-dios-sagrada-familia",
    date: "2021-12-08",
    main_image: "coronacion-torre-madre-de-dios-1.webp",
    gallery: [
      { type: 'image', src: 'coronacion-torre-madre-de-dios-1.webp' },
      { type: 'image', src: 'coronacion-torre-madre-de-dios-2.webp' },
      { type: 'video', src: 'coronacion-torre-madre-de-dios-3.mp4' },
    ],
    title: {
      es: "Coronación de la torre Madre de Dios de la Sagrada Familia de Barcelona",
      en: "Coronation of the Mother of God Tower at Sagrada Familia in Barcelona"
    },
    excerpt: {
      es: "Camar fabrica los esperones en granito Azul Bahía para la coronación de la torre Madre de Dios de la Sagrada Familia con la instalación de la estrella.",
      en: "Camar manufactures the spurs in Azul Bahía granite for the coronation of the Mother of God tower at Sagrada Familia with the installation of the star."
    },
    content: {
      es: `Compartimos la noticia de la terminación de los trabajos en la **torre Madre de Dios de la Sagrada Familia** con la instalación de la estrella como culminación de la misma y en la que **Camar** ha fabricado todos los esperones en **granito Azul Bahía**.

Para su ejecución hemos utilizado **130 m³ de granito**, dividido en **1.877 piezas** en total, realizadas con la máxima precisión en terminación **pulido brillo**.

Una gran obra de la que nos orgullecemos enormemente.`,
      en: `We share the news of the completion of the works on the **Mother of God tower at Sagrada Familia** with the installation of the star as its culmination, in which **Camar** has manufactured all the spurs in **Azul Bahía granite**.

For its execution, we have used **130 m³ of granite**, divided into **1,877 pieces** in total, made with maximum precision in **polished gloss** finish.

A great work of which we are enormously proud.`
    }
  },
  {
    slug_es: "el-escultor-portugues-francisco-simoes-que-trabaja-con-camar-desde-hace-mas-de-20-anos-recibe-el-premio-al-diseno-en-la-xxxvi-edicion-premios-macael",
    slug_en: "the-portuguese-sculptor-francisco-simoes-who-has-worked-with-camar-for-over-20-years-receives-the-design-award-at-the-xxxvi-macael-awards-edition",
    folder_custom: "escultor-portugues",
    date: "2023-11-10",
    main_image: "escultor-portugues-main.webp",
    gallery: [
      { type: 'image', src: 'escultor-portugues-1.webp' },
      { type: 'image', src: 'escultor-portugues-2.webp' },
      { type: 'image', src: 'escultor-portugues-3.webp' },
      { type: 'image', src: 'escultor-portugues-4.webp' },
      { type: 'video', src: 'escultor-portugues-1.mp4'}
    ],
    title: {
      es: "El escultor portugués Francisco Simoes que trabaja con Camar desde hace más de 20 años, recibe el premio al diseño en la XXXVI edición Premios Macael",
      en: "The Portuguese sculptor Francisco Simoes, who has worked with Camar for over 20 years, receives the design award at the XXXVI Macael Awards edition"
    },
    excerpt: {
      es: "El escultor portugués Francisco Simoes, colaborador de Camar, galardonado en los Premios Macael por su excelente trabajo en diseño con mármol.",
      en: "The Portuguese sculptor Francisco Simoes, Camar collaborator, honored at the Macael Awards for his excellent work in marble design."
    },
    content: {
      es: `Premio concedido al reconocido escultor portugués D. Francisco Simoes Gomes, por la ejecución de sucesivas esculturas durante 20 años, que han sido procesadas mediante escaneo del modelo original realizado por el artista y posteriormente mecanizadas en maquina CNC, ademas de en ocasiones la elaboración artesanal de algunas de las esculturas bajo el criterio y supervision de D. Francisco Simoes. Todo ello ejecutado en la Comarca del Mármol de Macael.

Algunos de los materiales con los que se han llevado a cabo las piezas son: [Mármol Blanco Macael](https://camar.es/catalogo-materiales/blanco-macael), [Anasol Macael](https://camar.es/catalogo-materiales/anasol-macael), [Amarillo Macael](https://camar.es/catalogo-materiales/amarillo-macael), Blanco Tranco, [Gris Macael](https://camar.es/catalogo-materiales/gris-macael), Travertino Rojo de Alhama, así como mármoles verdes de importación, como Verde India, y materiales negros como Granito Negro Intenso o Negro Marquina entre otras.

El premio al diseño se hará entrega en el edificio del Bulevar en Macael (Almería) el próximo día 10/11/2023 en la ceremónia de la XXXVI edición de los premios Macael.

Puede leer más sobre la noticia en el siguiente enlace: [La voz de almeria](https://www.lavozdealmeria.com/economia/241534/marmol-macael-premia-francisco-simoes-pedro-pena.html)`,
      en: `Award granted to the renowned Portuguese sculptor Mr. Francisco Simoes Gomes, for the execution of successive sculptures over 20 years, which have been processed by scanning the original model created by the artist and subsequently machined on CNC machines, in addition to the occasional handcrafted elaboration of some of the sculptures under the criteria and supervision of Mr. Francisco Simoes. All of this executed in the Macael Marble Region.

Some of the materials with which the pieces have been carried out are: [Blanco Macael Marble](https://camarmarble.com/materials/blanco-macael), [Anasol Macael](https://camarmarble.com/materials/anasol-macael), [Amarillo Macael](https://camarmarble.com/materials/amarillo-macael), Blanco Tranco, [Gris Macael](https://camarmarble.com/materials/gris-macael), Travertino Rojo de Alhama, as well as imported green marbles, such as Verde India, and black materials such as Granito Negro Intenso or Negro Marquina among others.

The design award will be presented at the Boulevard building in Macael (Almería) on 10/11/2023 at the ceremony of the XXXVI edition of the Macael Awards.

You can read more about the news at the following link: [La voz de almeria](https://www.lavozdealmeria.com/economia/241534/marmol-macael-premia-francisco-simoes-pedro-pena.html)`
    }
  },
  {
    slug_es: "granito-azul-bahia-torre-virgen-maria-sagrada-familia",
    slug_en: "camar-azul-bahia-granite-sagrada-familia-virgin-mary-tower",
    folder_custom: "granito-azul-bahia-sagrada-familia",
    date: "2021-02-02",
    main_image: "granito-azul-bahia-sagrada-familia-1.webp",
    gallery: [
      { type: 'image', src: 'granito-azul-bahia-sagrada-familia-1.webp' },
      { type: 'image', src: 'granito-azul-bahia-sagrada-familia-2.webp' },
      { type: 'image', src: 'granito-azul-bahia-sagrada-familia-3.webp' },
      { type: 'image', src: 'granito-azul-bahia-sagrada-familia-4.webp' },
    ],
    title: {
      es: "Granito Azul Bahía de Camar en la torre de la Virgen María de la Sagrada Familia",
      en: "Camar's Azul Bahia Granite at the Virgin Mary Tower of Sagrada Familia"
    },
    excerpt: {
      es: "El Granito Azul Bahía de Camar forma parte de la estructura de la torre de la Virgen María de la Sagrada Familia, uno de los proyectos más emblemáticos en los que participa la empresa.",
      en: "Camar's Azul Bahia Granite is part of the structure of the Virgin Mary tower at Sagrada Familia, one of the most emblematic projects in which the company participates."
    },
    content: {
      es: `Continúan las obras de uno de nuestros proyectos más destacados, la **Sagrada Familia de Barcelona**, donde a lo largo de este año se centrarán especialmente en finalizar la **torre de la Virgen María**, la segunda más alta del conjunto de la Basílica, de **138 metros de altura**.

Desde hace más de **5 años** orgullosamente trabajamos en las obras de este extraordinario monumento, archiconocido en todo el mundo, siendo la mayor obra del arquitecto **Antonio Gaudí**, donde Camar tiene el gran placer de colaborar.

Hasta la fecha, hemos fabricado un total de **6.650 piezas**. Entre estos materiales se encuentra el **Granito Azul Bahía**, que forma parte del esqueleto estructural de las **seis torres centrales**, constituido por una red de líneas horizontales y verticales.

Actualmente, la Basílica está acabando de colocar los **arestones** de la torre de la Virgen María, elementos verticales reconocibles por el color singular del **granito Azul Bahía** que Camar ha provisto para este espectacular proyecto.

[Link](https://twitter.com/sagradafamilia/status/1356309597867356162)`,
      en: `Work continues on one of our most outstanding projects, the **Sagrada Familia in Barcelona**, where throughout this year they will focus especially on completing the **Virgin Mary tower**, the second tallest of the Basilica complex, standing **138 meters high**.

For more than **5 years** we have proudly worked on the construction of this extraordinary monument, well-known throughout the world, being the greatest work of architect **Antonio Gaudí**, where Camar has the great pleasure of collaborating.

To date, we have manufactured a total of **6,650 pieces**. Among these materials is the **Azul Bahia Granite**, which forms part of the structural skeleton of the **six central towers**, consisting of a network of horizontal and vertical lines.

Currently, the Basilica is finishing placing the **ribs** of the Virgin Mary tower, vertical elements recognizable by the unique color of the **Azul Bahia granite** that Camar has provided for this spectacular project.

[Link](https://twitter.com/sagradafamilia/status/1356309597867356162)`
    }
  },
  {
    slug_es: "rey-fahd-alhambra",
    slug_en: "prince-abdelaziz-bin-fahd-alhambra",
    folder_custom: "rey-fahd-alhambra",
    date: "2022-10-19",
    main_image: "rey-fahd-alhambra-1.webp",
    gallery: [
      { type: 'image', src: 'rey-fahd-alhambra-1.webp' },
      { type: 'image', src: 'rey-fahd-alhambra-2.webp' },
      { type: 'image', src: 'rey-fahd-alhambra-3.webp' },
      { type: 'image', src: 'rey-fahd-alhambra-4.webp' },
      { type: 'image', src: 'rey-fahd-alhambra-5.webp' },
    ],
    title: {
      es: "El Príncipe Abdelaziz Bin Fahd y su conexión con la Alhambra",
      en: "Prince Abdelaziz Bin Fahd and his connection with the Alhambra"
    },
    excerpt: {
      es: "El Príncipe Abdelaziz Bin Fahd, hijo menor y favorito del Rey Fahd de Arabia Saudí, y su vinculación con la Alhambra y el arte en piedra.",
      en: "Prince Abdelaziz Bin Fahd, youngest and favorite son of King Fahd of Saudi Arabia, and his link with the Alhambra and stone art."
    },
    content: {
      es: `El príncipe **Abdelaziz Bin Fahd** (49) es el hijo menor y favorito del fallecido Rey Fahd de Arabia saudí.

Abdelaziz era, como su padre, un enamorado de España y cuando los veranos iba a visitarle a su palacio de Mar Mar, en Marbella, solía recalar en Granada para contemplar un monumento que era su obsesión: la **Alhambra**. 

Desesperado por hacer su sueño realidad, tomó una decisión: construir su propia Alhambra en el desierto, un millonario capricho que el rey Fahd concedió a su hijo predilecto. El enclave elegido fue un terreno en las afueras de Riad, la capital saudí, de **10,6 hectáreas**.

El suntuoso palacio se cubrió con **1,6 millones de ladrillos**, **500 columnas de mármol blanco** de la firma almeriense **Camar**, y más de **4.500 m²** de loza para suelos. De las **13 fuentes**, la mítica de los **Leones** fue la más laboriosa de imitar: requirió que personal de Camar se desplazara a Arabia para engarzar los materiales.

Puede leer la noticia completa en el periódico *El Mundo*: [Rey Fahd: la copia exacta de la Alhambra en Riad](https://www.elmundo.es/loc/famosos/2022/07/23/62d962edfc6c83bf138b45d8.html)`,
      en: `Prince **Abdelaziz Bin Fahd** (49) is the youngest and favorite son of the late King Fahd of Saudi Arabia.

Abdelaziz was, like his father, in love with Spain and when he visited him in summers at his Mar Mar palace in Marbella, he used to stop in Granada to contemplate a monument that was his obsession: the **Alhambra**.

Desperate to make his dream come true, he made a decision: to build his own Alhambra in the desert, a millionaire whim that King Fahd granted to his favorite son. The chosen location was a plot on the outskirts of Riyadh, the Saudi capital, of **10.6 hectares**.

The sumptuous palace was covered with **1.6 million bricks**, **500 white marble columns** from the Almeria firm **Camar**, and more than **4,500 m²** of floor tiles. Of the **13 fountains**, the mythical **Fountain of the Lions** was the most laborious to imitate: it required Camar personnel to travel to Arabia to set the materials.

You can read the complete news article in the newspaper *El Mundo*: [King Fahd: the exact copy of the Alhambra in Riyadh](https://www.elmundo.es/loc/famosos/2022/07/23/62d962edfc6c83bf138b45d8.html)`
    }
  },
  {
    slug_es: "ss-mm-los-reyes-de-espana-entregan-el-premios-al-diseno-la-villa-ricotta",
    slug_en: "their-majesties-the-king-and-queen-of-spain-present-the-design-award-to-villa-ricotta",
    folder_custom: "reyes-premios-diseno",
    date: "2022-11-04",
    main_image: "reyes-premios-diseno-main.webp",
    gallery: [
      { type: 'image', src: 'reyes-premios-diseno-1.webp' },
      { type: 'image', src: 'reyes-premios-diseno-2.webp' },
      { type: 'image', src: 'reyes-premios-diseno-main.webp' },
      { type: 'video', src: 'reyes-premios-diseno.mp4' },
    ],
    title: {
      es: "SS. MM. Los Reyes de España entregan el premio al diseño a la Villa Ricotta",
      en: "Their Majesties the King and Queen of Spain present the design award to Villa Ricotta"
    },
    excerpt: {
      es: "SS. MM. Los Reyes de España han presidido la XXXV edición de los Premios Macael, donde Francisco Simoes, colaborador de Camar, ha recibido el premio al diseño por la Villa Ricotta II.",
      en: "Their Majesties the King and Queen of Spain presided over the XXXV edition of the Macael Awards, where Francisco Simoes, Camar collaborator, received the design award for Villa Ricotta II."
    },
    content: {
      es: `Sus Majestades, los Reyes de España han Presidido la XXXV edición de los Premios Macael celebrada el pasado de Noviembre de 2.022. 

**Premio al Diseño**, a Villa Ricotta II. El Jurado concede el Premio al Diseño a Villa Ricotta II, residencia privada en Marbella, realizada con 5000 m2 de Piedra Paloma. Destaca la ejecución de 22 columnas (14 corintias y 8 jónicas) de hasta 8 metros de altura, con fustes elaborados en una sola pieza de casi 6 m.`,
      en: `Their Majesties, the King and Queen of Spain presided over the XXXV edition of the Macael Awards held this past November 2022. 

**Design Award**, to Villa Ricotta II. The Jury awards the Design Award to Villa Ricotta II, a private residence in Marbella, made with 5000 m² of Piedra Paloma. It features 22 columns (14 Corinthian and 8 Ionic) up to 8 meters high, with shafts made in a single piece of almost 6 m.`
    }
  },
  {
    slug_es: "sagrada-familia-premio-nacional-xxxviii-premios-macael",
    slug_en: "sagrada-familia-national-award-xxxviii-macael-awards",
    folder_custom: "sagrada-familia-premio-nacional-xxxviii-macael",
    date: "2025-11-21",
    main_image: "sagrada-familia-premio-nacional-1.webp",
    gallery: [
      { type: 'image', src: 'sagrada-familia-premio-nacional-1.webp' },
      { type: 'image', src: 'sagrada-familia-premio-nacional-2.webp' },
      { type: 'image', src: 'sagrada-familia-premio-nacional-3.webp' },
      { type: 'image', src: 'sagrada-familia-premio-nacional-4.webp' },
      { type: 'image', src: 'sagrada-familia-premio-nacional-5.webp' },
      { type: 'image', src: 'sagrada-familia-premio-nacional-6.webp' },
      { type: 'image', src: 'sagrada-familia-premio-nacional-7.webp' },
      { type: 'image', src: 'sagrada-familia-premio-nacional-8.webp' },
      { type: 'image', src: 'sagrada-familia-premio-nacional-9.webp' },
      { type: 'image', src: 'sagrada-familia-premio-nacional-10.webp' }
    ],
    title: {
      es: "La Sagrada Familia obtiene el Premio Nacional en los Premios Macael 2025",
      en: "Sagrada Familia receives the National Award at the Macael Awards 2025"
    },
    excerpt: {
      es: "La Basílica de la Sagrada Familia recibe el Premio Nacional en la XXXVIII edición de los Premios Macael, reconociendo el trabajo de Mármoles Camar en sus torres principales.",
      en: "The Basilica of Sagrada Familia receives the National Award at the XXXVIII edition of the Macael Awards, recognizing the work of Mármoles Camar on its main towers."
    },
    content: {
      es: `La Basílica de la **Sagrada Familia** (Barcelona) ha sido galardonada con el **Premio Nacional en los Premios Macael 2025**, uno de los reconocimientos más prestigiosos del sector de la piedra natural.

En este proyecto, **Camar** ha participado en la fabricación y suministro de diferentes elementos de piedra natural, un proceso que requiere una integración perfecta entre:

- Artesanía tradicional en cantería
- Fabricación industrial de precisión
- Control técnico exhaustivo
- Coordinación constante con la Dirección de Obra

La entrega de estas torres coincide con la preparación del **centenario de la muerte de Gaudí en 2026**. Para Camar, formar parte de este proyecto supone un honor y una responsabilidad: contribuir a una obra que trasciende generaciones.

## Sobre los Premios Macael
Los Premios Macael son un referente internacional en el sector de la piedra natural, destacando cada año proyectos que representan la excelencia en diseño, arquitectura e ingeniería.`,
      en: `The Basilica of **Sagrada Familia** (Barcelona) has been awarded the **National Award at the Macael Awards 2025**, one of the most prestigious recognitions in the natural stone sector.

In this project, **Camar** has participated in the manufacture and supply of different natural stone elements, a process that requires perfect integration between:

- Traditional stonemasonry craftsmanship
- Precision industrial manufacturing
- Exhaustive technical control
- Constant coordination with the Work Direction

The delivery of these towers coincides with the preparation of the **centenary of Gaudí's death in 2026**. For Camar, being part of a project of this magnitude is an honor and a responsibility: contributing to a work that transcends generations.

## About the Macael Awards
The Macael Awards are an international benchmark in the natural stone sector, highlighting every year projects that represent excellence in design, architecture, engineering and execution.`
    }
  },
  {
    slug_es: "villa-ricotta-ii-premio-al-diseno-en-los-premios-macael-xxxv-edicion",
    slug_en: "villa-ricotta-ii-design-award-macael-awards-xxxv-edition",
    folder_custom: "villa-ricotta-premio",
    date: "2022-10-19",
    main_image: "villa-ricotta-premio-1.webp",
    gallery: [
      { type: 'image', src: 'villa-ricotta-premio-1.webp' },
      { type: 'image', src: 'villa-ricotta-premio-2.webp' },
      { type: 'image', src: 'villa-ricotta-premio-3.webp' },
      { type: 'image', src: 'villa-ricotta-premio-4.webp' },
      { type: 'image', src: 'villa-ricotta-premio-5.webp' },
      { type: 'image', src: 'villa-ricotta-premio-6.webp' },
      { type: 'image', src: 'villa-ricotta-premio-7.webp' },
      { type: 'image', src: 'villa-ricotta-premio-8.webp' },
    ],
    title: {
      es: "Villa Ricotta II premio al diseño en los premios Macael XXXV edición",
      en: "Villa Ricotta II design award at the Macael Awards XXXV edition"
    },
    excerpt: {
      es: "Villa Ricotta II ha sido galardonada con el Premio al Diseño en la XXXV edición de los Premios Macael, presidida por SS. MM. Los Reyes de España.",
      en: "Villa Ricotta II has been awarded the Design Award at the XXXV edition of the Macael Awards, presided over by Their Majesties the King and Queen of Spain."
    },
    content: {
      es: `## Detalles de la Obra

Vivienda privada en Marbella ejecutada en Piedra Paloma. Destacamos la ejecución de 22 columnas de hasta 8 metros de altura con fustes ejecutados en una sola pieza de casi 6 metros.

El sólido capaz antes de tornear el fuste pesaba **9 toneladas** y una vez torneado y ranurado con su correspondiente éntasis su peso era finalmente de **5 toneladas**.

### Resumen de Materiales Utilizados
- **5.000 m²** de aplacados y pavimentos.
- **200 m³** de material macizo esculpido para columnas, capiteles y cornisas.

[Enlace a la noticia](https://www.diariodealmeria.es/finanzasyagricultura/Premios-Macael-liderazgo-industria-marmol_0_1729327828.html)`,
      en: `## Project Details

Private residence in Marbella executed in Piedra Paloma. We highlight the execution of 22 columns up to 8 meters high with shafts executed in a single piece of almost 6 meters.

The capable solid before turning the shaft weighed **9 tons** and once turned and grooved with its corresponding entasis its weight was finally **5 tons**.

### Summary of Materials Used
- **5,000 m²** of cladding and flooring.
- **200 m³** of solid material sculpted for columns, capitals and cornices.

[Link to the news](https://www.diariodealmeria.es/finanzasyagricultura/Premios-Macael-liderazgo-industria-marmol_0_1729327828.html)`
    }
  },
  {
    slug_es: "villa-ricotta-vendida-por-40-millones",
    slug_en: "villa-ricotta-sold-for-40-million-euros",
    folder_custom: "villa-ricotta-venta-40-millones",
    date: "2021-02-23",
    main_image: "villa-ricotta-venta-1.webp",
    gallery: [
      { type: 'image', src: 'villa-ricotta-venta-1.webp' },
      { type: 'image', src: 'villa-ricotta-venta-2.webp' },
    ],
    title: {
      es: "Villa Ricotta, vendida por 40 millones de euros",
      en: "Villa Ricotta, sold for 40 million euros"
    },
    excerpt: {
      es: "Villa Ricotta, uno de los proyectos de residencia privada más emblemáticos de Camar en Marbella, ha sido vendida por 40 millones de euros.",
      en: "Villa Ricotta, one of Camar's most iconic private residence projects in Marbella, has been sold for 40 million euros."
    },
    content: {
      es: `[La impresionante Villa Ricotta](https://camar.es/proyectos/villa-ricotta) ya tiene comprador por un valor de **40 millones de euros**.

Esta lujosa mansión se encuentra situada en **Sierra Blanca**, Marbella. Cuenta con **10 habitaciones**, **13 baños** y fue diseñada por el arquitecto **Jesús del Valle Cardenete**, ganando el **Premio Macael a la Mejor Villa Internacional** en 2017.

Un proyecto donde Camar ha utilizado sobre todo la caliza **Blanco Paloma**. Un trabajo que se distingue por su elegancia clásica y el equilibrio de sus columnas jónicas y corintias. 

Enlace a la noticia: [Diario Sur](https://www.diariosur.es/marbella-estepona/compran-villa-marbella-sierrablanca-cuarenta-millones-20210223145126-nt.html)`,
      en: `[The impressive Villa Ricotta](https://camar.es/proyectos/villa-ricotta) now has a buyer for a value of **40 million euros**.

This luxurious mansion is located in **Sierra Blanca**, Marbella. It has **10 bedrooms**, **13 bathrooms** and was designed by architect **Jesús del Valle Cardenete**, winning the **Macael Award for Best International Villa** in 2017.

A project where Camar has used different materials, especially the **Blanco Paloma** limestone. A work distinguished by its elegance, with Ionic and Corinthian columns that remind us of the best times of classical architecture.

Link to the news: [Diario Sur](https://www.diariosur.es/marbella-estepona/compran-villa-marbella-sierrablanca-cuarenta-millones-20210223145126-nt.html)`
    }
  }
]

export const importarNoticias = async () => {
  console.log("🚀 Importando Noticias con soporte folder_custom...");
  const { data, error } = await supabase
    .from('noticias')
    .upsert(noticiasFusionadas, { onConflict: 'slug_es' })
    .select()

  if (error) {
    console.error("❌ Error noticias:", error.message)
    return { success: false, error: error.message }
  }

  console.log(`✅ ¡Éxito! ${data?.length} noticias importadas con rutas correctas.`)
  return { success: true, count: data?.length || 0 }
}