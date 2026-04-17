// /lib/seed-proyectos.ts
import { supabase } from './supabase'

const cdnUrl = "https://lanzadera-digital.b-cdn.net/camar.es/Proyectos/";

const proyectosOriginales = [
  {
    //ELBA CARLOTA BEACH & GOLF RESORT :checked:
    projectName: {
      es: "Elba Carlota Beach & Golf Resort",
      en: "Elba Carlota Beach & Golf Resort",
    },
    title: {
      es: "Elba Carlota Beach & Golf Resort",
      en: "Elba Carlota Beach & Golf Resort",
    },
    projectLocation: {
      es: "Las Palmas, España",
      en: "Las Palmas, Spain",
    },
    bgImage: `${cdnUrl}elba-carlota/pr-elba-carlota-1.webp`,
    mainImage: `${cdnUrl}elba-carlota/pr-elba-carlota-6.webp`,
    type: ["hoteles", "empresas"],
    projectPage: {
      filtro: "Hotel",
      pageTitle: {
        es: "Elba Carlota Beach & Golf Resort | Mármol para hoteles | Camar",
        en: "Elba Carlota Beach & Golf Resort | Marble for Hotels | Camar",
      },
      pageDescription: {
        es: "Descubre el proyecto Elba Carlota Beach & Golf Resort en Las Palmas, un hotel de lujo que combina elegancia y materiales de primera calidad. Explora cómo Camar ha transformado este espacio con mármol y piedra natural.",
        en: "Discover the Elba Carlota Beach & Golf Resort project in Las Palmas, a luxury hotel that combines elegance and high-quality materials. Explore how Camar has transformed this space with marble and natural stone.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}elba-carlota/pr-elba-carlota-1.webp` },
        { type: "image", src: `${cdnUrl}elba-carlota/pr-elba-carlota-6.webp` },
        { type: "image", src: `${cdnUrl}elba-carlota/pr-elba-carlota-3.webp` },
        { type: "image", src: `${cdnUrl}elba-carlota/pr-elba-carlota-4.webp` },
        { type: "image", src: `${cdnUrl}elba-carlota/pr-elba-carlota-5.webp` },
        { type: "image", src: `${cdnUrl}elba-carlota/pr-elba-carlota-2.webp` },
      ],
      sobreElProyecto: {
        es: "El Elba Carlota Beach & Golf Resort es un proyecto hotelero de lujo ubicado en Las Palmas, Gran Canaria. Este resort combina diseño contemporáneo con materiales naturales de alta calidad, creando espacios elegantes y acogedores.<br><br>Nuestro trabajo incluyó la selección e instalación de mármoles y piedras naturales en áreas comunes, recepción y zonas de descanso, aportando sofisticación y calidez al ambiente del hotel.",
        en: "El Elba Carlota Beach & Golf Resort is a luxury hotel project located in Las Palmas, Gran Canaria. This resort combines contemporary design with high-quality natural materials, creating elegant and welcoming spaces.<br><br>Our work included the selection and installation of marbles and natural stones in common areas, reception, and lounge areas, bringing sophistication and warmth to the hotel's ambiance.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Hoteles", en: "Hotels" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2018",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Espacios comunes de lujo",
            en: "Luxury Common Areas",
          },
          content: {
            es: "Revestimientos en mármol para recepción, pasillos y áreas de estar, creando un ambiente sofisticado y acogedor.",
            en: "Marble cladding for reception, hallways, and lounge areas, creating a sophisticated and welcoming atmosphere.",
          },
        },
        {
          title: {
            es: "Materiales de primera calidad",
            en: "High-Quality Materials",
          },
          content: {
            es: "Selección cuidadosa de mármoles que aportan elegancia y durabilidad al espacio hotelero.",
            en: "Careful selection of marbles that provide elegance and durability to the hotel space.",
          },
        },
        {
          title: {
            es: "Integración con el entorno",
            en: "Integration with the Environment",
          },
          content: {
            es: "Diseño que combina modernidad con la naturaleza del entorno canario, creando una experiencia única para los huéspedes.",
            en: "Design that combines modernity with the nature of the Canarian environment, creating a unique experience for guests.",
          },
        },
      ],
      materials: ["Anasol Macael", "Verde India"],
    },
  },
  {
    //FUENTE PÚBLICA EN PLAZA JADO :checked:
    projectName: {
      es: "Fuente Publica en Plaza Jado",
      en: "Public Fountain in Plaza Jado",
    },
    title: {
      es: "Fuente Pública en Plaza Jado",
      en: "Public Fountain in Plaza Jado",
    },
    projectLocation: {
      es: "Bilbao, España",
      en: "Bilbao, Spain",
    },
    bgImage: `${cdnUrl}plaza-jado/pr-plaza-jado-1.webp`,
    mainImage: `${cdnUrl}plaza-jado/pr-plaza-jado-2.webp`,
    type: ["fuentes", "empresas"],
    projectPage: {
      filtro: "Fuente",
      pageTitle: {
        es: "Fuente Pública en Plaza Jado | Mármol para fuentes urbanas | Camar",
        en: "Public Fountain in Plaza Jado | Marble for Urban Fountains | Camar",
      },
      pageDescription: {
        es: "Descubre la Fuente Pública en Plaza Jado de Bilbao, un proyecto urbano que embellece el espacio público con mármol y piedra natural de alta calidad. Explora cómo Camar ha transformado este espacio emblemático.",
        en: "Discover the Public Fountain at Plaza Jado in Bilbao, an urban project that beautifies public space with high-quality marble and natural stone. Explore how Camar transformed this emblematic area.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}plaza-jado/pr-plaza-jado-1.webp` },
        { type: "image", src: `${cdnUrl}plaza-jado/pr-plaza-jado-2.webp` },
        { type: "image", src: `${cdnUrl}plaza-jado/pr-plaza-jado-3.webp` },
        { type: "image", src: `${cdnUrl}plaza-jado/pr-plaza-jado-4.webp` },
        { type: "image", src: `${cdnUrl}plaza-jado/pr-plaza-jado-5.webp` },
        { type: "image", src: `${cdnUrl}plaza-jado/pr-plaza-jado-6.webp` },
        { type: "image", src: `${cdnUrl}plaza-jado/pr-plaza-jado-7.webp` },
        { type: "image", src: `${cdnUrl}plaza-jado/pr-plaza-jado-8.webp` },
        { type: "image", src: `${cdnUrl}plaza-jado/pr-plaza-jado-9.webp` },
        { type: "image", src: `${cdnUrl}plaza-jado/pr-plaza-jado-10.webp` },
        { type: "image", src: `${cdnUrl}plaza-jado/pr-plaza-jado-11.webp` },
      ],
      sobreElProyecto: {
        es: "La Fuente Pública en Plaza Jado es un proyecto urbano emblemático situado en el corazón de Bilbao. Esta fuente monumental combina funcionalidad y estética, convirtiéndose en un punto de referencia para residentes y visitantes.<br><br>El diseño incorpora mármol de primera calidad que resiste las condiciones climáticas del norte de España, manteniendo su belleza y elegancia a lo largo del tiempo.",
        en: "The Public Fountain at Plaza Jado is an emblematic urban project located in the heart of Bilbao. This monumental fountain combines functionality and aesthetics, becoming a landmark for residents and visitors.<br><br>The design incorporates high-quality marble that withstands the climatic conditions of northern Spain, maintaining its beauty and elegance over time.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Fuentes", en: "Fountains" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2016",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Diseño urbano integrado",
            en: "Integrated Urban Design",
          },
          content: {
            es: "La fuente se integra perfectamente con el entorno urbano de la Plaza Jado, creando un espacio de encuentro y descanso.",
            en: "The fountain seamlessly integrates with the urban environment of Plaza Jado, creating a space for gathering and relaxation.",
          },
        },
        {
          title: {
            es: "Materiales resistentes",
            en: "Durable Materials",
          },
          content: {
            es: "Mármol seleccionado específicamente por su resistencia a la intemperie y al clima húmedo del País Vasco.",
            en: "Marble selected specifically for its resistance to weathering and the humid climate of the Basque Country.",
          },
        },
        {
          title: {
            es: "Embellecimiento público",
            en: "Public Beautification",
          },
          content: {
            es: "Proyecto que contribuye a mejorar la calidad estética del espacio público de Bilbao.",
            en: "A project that contributes to improving the aesthetic quality of Bilbao's public space.",
          },
        },
      ],
      materials: ["Caliza Paloma"],
    },
  },
  {
    //VILLA RICOTTA :checked:
    projectName: {
      es: "Villa Ricotta",
      en: "Villa Ricotta",
    },
    title: {
      es: "Villa Ricotta",
      en: "Villa Ricotta",
    },
    projectLocation: {
      es: "Marbella, España",
      en: "Marbella, Spain",
    },
    bgImage: `${cdnUrl}villa-ricotta/pr-villa-ricotta-1.webp`,
    mainImage: `${cdnUrl}villa-ricotta/pr-villa-ricotta-2.webp`,
    type: ["singulares", "empresas", "hogar"],
    projectPage: {
      filtro: "Vivienda Privada",
      pageTitle: {
        es: "Villa Ricotta | Mármol para casas de lujo | Camar",
        en: "Villa Ricotta | Marble for Luxury Homes | Camar",
      },
      pageDescription: {
        es: "Descubre Villa Ricotta, una lujosa residencia en Marbella que combina diseño exclusivo y materiales de alta calidad. Explora cómo Camar ha transformado esta villa con mármol y piedra natural de primera clase.",
        en: "Discover Villa Ricotta, a luxurious residence in Marbella combining exclusive design and high-quality materials. Explore how Camar transformed this villa with premium marble and natural stone.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}villa-ricotta/pr-villa-ricotta-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-ricotta/pr-villa-ricotta-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-ricotta/pr-villa-ricotta-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-ricotta/pr-villa-ricotta-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-ricotta/pr-villa-ricotta-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-ricotta/pr-villa-ricotta-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-ricotta/pr-villa-ricotta-7.webp`,
        },
      ],
      sobreElProyecto: {
        es: "Villa Ricotta es una impresionante mansión en la Costa del Sol construida con piedra caliza española Blanco Paloma. Se distingue por su elegancia y por la armonía de sus columnas jónicas y corintias, evocando el esplendor de la arquitectura clásica.<br><br>Situada en Sierra Blanca, entre el Mediterráneo y la cordillera de La Concha en Marbella, Villa Ricotta fue galardonada con los Premios Macael como la mejor villa internacional en 2017.",
        en: "Villa Ricotta is an impressive mansion on the Costa del Sol built with Spanish Blanco Paloma limestone. It stands out for its elegance and the harmony of its Ionic and Corinthian columns, evoking the splendor of classical architecture.<br><br>Located in Sierra Blanca between the Mediterranean Sea and the La Concha mountain range in Marbella, Villa Ricotta was awarded the Macael Prize as Best International Villa in 2017.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Proyecto singular", en: "Singular Project" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2017",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Revestimiento de fachada única",
            en: "Unique Façade Cladding",
          },
          content: {
            es: "Casi 500 m3 fueron empleados para fabricar el revestimiento de las paredes, techos, cornisas, cúpulas y embocaduras de puertas y ventanas.",
            en: "Nearly 500 m³ were used to produce the cladding for walls, ceilings, cornices, domes and door and window surrounds.",
          },
        },
        {
          title: {
            es: "Fustes de columnas en una sola pieza",
            en: "Single-Piece Column Shafts",
          },
          content: {
            es: "Dieciocho columnas de 7 metros cada una con diferentes capiteles, Corintios y Jónicos donde el fuste de las columnas fue fabricado en una única pieza maciza de 5,75 metros de altura.",
            en: "Eighteen 7-meter columns with different capitals, Corinthian and Ionic, where the column shaft was manufactured as a single solid piece of 5.75 meters height.",
          },
        },
        {
          title: {
            es: "Belleza, nobleza y fuerza",
            en: "Beauty, Nobility and Strength",
          },
          content: {
            es: "Majestuosa fuente con tres esculturas de caballos construida por caballos rampantes que representa unos valores muy importantes.",
            en: "A majestic fountain with three sculpted horses representing important values, crafted with ramping horses.",
          },
        },
      ],
      materials: ["Caliza Paloma", "Emperador Dark", "Perlado"],
    },
  },
  {
    //VILLA BELLAGIO :checked:
    projectName: {
      es: "Villa Bellagio",
      en: "Villa Bellagio",
    },
    title: {
      es: "Villa Bellagio",
      en: "Villa Bellagio",
    },
    projectLocation: {
      es: "Marbella, España",
      en: "Marbella, Spain",
    },
    bgImage: `${cdnUrl}villa-bellagio/pr-villa-bellagio-1.webp`,
    mainImage: `${cdnUrl}villa-bellagio/pr-villa-bellagio-2.webp`,
    type: ["singulares", "empresas", "hogar"],
    projectPage: {
      filtro: "Vivienda Privada",
      pageTitle: {
        es: "Villa Ricotta | Mármol para casas de lujo | Camar",
        en: "Villa Ricotta | Marble for Luxury Homes | Camar",
      },
      pageDescription: {
        es: "Descubre Villa Bellagio, una lujosa residencia en Marbella que combina diseño exclusivo y materiales de alta calidad. Explora cómo Camar ha transformado esta villa con mármol y piedra natural de primera clase.",
        en: "Discover Villa Bellagio, a luxurious residence in Marbella combining exclusive design and high-quality materials. Explore how Camar transformed this villa with premium marble and natural stone.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-9.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-10.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-11.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-12.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-13.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-14.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-15.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-16.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-17.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-18.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}villa-bellagio/pr-villa-bellagio-19.webp`,
        },
      ],
      sobreElProyecto: {
        es: "La casa más cara de España no solo es una obra arquitectónica sin precedentes, también es una declaración de estilo, grandeza y excelencia. Villa Bellagio no es solo la casa más exclusiva de España. Es un símbolo de cómo la arquitectura, la piedra y la visión pueden crear una obra de arte habitable.",
        en: "The most expensive house in Spain is not only an unprecedented architectural work, it is also a statement of style, grandeur and excellence. Villa Bellagio is not just the most exclusive house in Spain. It is a symbol of how architecture, stone and vision can create a livable work of art.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Proyecto singular", en: "Singular Project" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2017",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Un icono de la costa del sol",
            en: "An Icon of the Costa del Sol",
          },
          content: {
            es: "Con un valor aproximado a los 70 millones de euros, Villa Bellagio es mucho más que una vivienda: es un símbolo de lujo europeo. Esta mansión redefine el concepto de exclusividad gracias a una ejecución artesanal y un diseño monumental realizado íntegramente en piedra natural por Mármoles Camar.",
            en: "With an approximate value of 70 million euros, Villa Bellagio is much more than a home: it is a symbol of European luxury. This mansion redefines the concept of exclusivity thanks to artisanal execution and monumental design made entirely of natural stone by Mármoles Camar.",
          },
        },
        {
          title: {
            es: "Fachada escultórica en piedra natural",
            en: "Sculptural Façade in Natural Stone",
          },
          content: {
            es: "La fachada de Villa Bellagio es una obra maestra de la artesanía en piedra. Dieciocho columnas de 7 metros de altura con capiteles jónicos y corintios fueron esculpidas en una sola pieza maciza de 5,75 metros. Una proeza técnica y estética que refuerza la majestuosidad de los espacios exteriores e interiores.",
            en: "The façade of Villa Bellagio is a masterpiece of stone craftsmanship. Eighteen 7-meter columns with Ionic and Corinthian capitals were sculpted from a single solid piece of 5.75 meters. A technical and aesthetic feat that reinforces the majesty of the exterior and interior spaces.",
          },
        },
        {
          title: {
            es: "Innovación y tradición en armonía",
            en: "Innovation and Tradition in Harmony",
          },
          content: {
            es: "Mármoles Camar combina técnicas tradicionales con tecnología de vanguardia, como el escaneo 3D y maquinaria CNC de 5 ejes, para lograr una precisión impecable en cada detalle. Este enfoque garantiza que cada elemento de Villa Bellagio sea una expresión de excelencia y sofisticación.",
            en: "Mármoles Camar combines traditional techniques with cutting-edge technology, such as 3D scanning and 5-axis CNC machinery, to achieve impeccable precision in every detail. This approach ensures that every element of Villa Bellagio is an expression of excellence and sophistication.",
          },
        },
      ],
      materials: ["Caliza Paloma", "Emperador Dark", "Perlado"],
    },
  },
  {
    //HOTEL BALTSCHUG KEMPINSKI MOSCOW :checked:
    projectName: {
      es: "Hotel Baltschug Kempinski Moscow",
      en: "Hotel Baltschug Kempinski Moscow",
    },
    title: {
      es: "Hotel Baltschug Kempinski Moscow",
      en: "Hotel Baltschug Kempinski Moscow",
    },
    projectLocation: {
      es: "Moscú, Rusia",
      en: "Moscow, Russia",
    },
    bgImage: `${cdnUrl}baltschug/pr-baltschug-1.webp`,
    mainImage: `${cdnUrl}baltschug/pr-baltschug-4.webp`,
    type: ["hoteles", "empresas"],
    projectPage: {
      filtro: "Hotel",
      pageTitle: {
        es: "Hotel Baltschug Kempinski Moscow | Mármol para hoteles de lujo | Camar",
        en: "Hotel Baltschug Kempinski Moscow | Marble for Luxury Hotels | Camar",
      },
      pageDescription: {
        es: "Descubre el Hotel Baltschug Kempinski Moscow, un proyecto hotelero icónico en el corazón de Rusia. Explora cómo Camar ha transformado este espacio con mármoles exclusivos y piedra natural de primera clase.",
        en: "Discover Hotel Baltschug Kempinski Moscow, an iconic hotel project in the heart of Russia. Explore how Camar transformed this space with exclusive marbles and premium natural stone.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}baltschug/pr-baltschug-1.webp` },
        { type: "image", src: `${cdnUrl}baltschug/pr-baltschug-4.webp` },
        { type: "image", src: `${cdnUrl}baltschug/pr-baltschug-5.webp` },
        { type: "image", src: `${cdnUrl}baltschug/pr-baltschug-2.webp` },
        { type: "image", src: `${cdnUrl}baltschug/pr-baltschug-3.webp` },
      ],
      sobreElProyecto: {
        es: "El Hotel Baltschug Kempinski Moscow es uno de los hoteles más prestigiosos de Moscú, ubicado frente al Kremlin. Este proyecto de renovación incorporó mármoles españoles de la más alta calidad, aportando elegancia y sofisticación a sus espacios interiores.<br><br>Nuestro trabajo incluyó suelos, revestimientos y elementos decorativos en zonas nobles del hotel, creando un ambiente de lujo atemporal que complementa la arquitectura histórica del edificio.",
        en: "Hotel Baltschug Kempinski Moscow is one of the most prestigious hotels in Moscow, located opposite the Kremlin. This renovation project incorporated the highest quality Spanish marbles, bringing elegance and sophistication to its interior spaces.<br><br>Our work included floors, cladding and decorative elements in the hotel's main areas, creating a timeless luxury ambiance that complements the building's historic architecture.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Hoteles", en: "Hotels" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2019",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Rusia", en: "Russia" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Ubicación privilegiada",
            en: "Prime Location",
          },
          content: {
            es: "Hotel situado frente al Kremlin, uno de los lugares más emblemáticos de Moscú.",
            en: "Hotel located opposite the Kremlin, one of Moscow's most emblematic landmarks.",
          },
        },
        {
          title: {
            es: "Mármoles exclusivos",
            en: "Exclusive Marbles",
          },
          content: {
            es: "Selección de los mejores mármoles españoles para crear espacios de lujo y distinción.",
            en: "Selection of the finest Spanish marbles to create luxury and distinctive spaces.",
          },
        },
        {
          title: {
            es: "Renovación de prestigio",
            en: "Prestigious Renovation",
          },
          content: {
            es: "Proyecto que combina la historia del edificio con la modernidad y elegancia de materiales naturales de primera calidad.",
            en: "A project that combines the building's history with the modernity and elegance of premium natural materials.",
          },
        },
      ],
      materials: ["Crema Marfil", "Emperador Light", "Rojo Alicante"],
    },
  },
  {
    //CASA PRIVADA EN MINNEAPOLIS :checked:
    projectName: {
      es: "Casa Privada en Minneapolis",
      en: "Private Home in Minneapolis",
    },
    title: {
      es: "Casa Privada en Minneapolis",
      en: "Private Home in Minneapolis",
    },
    projectLocation: {
      es: "Minneapolis, EE. UU.",
      en: "Minneapolis, USA",
    },
    bgImage: `${cdnUrl}minneapolis.webp`,
    mainImage: `${cdnUrl}minneapolis-main.webp`,
    type: ["hogar", "cocinas"],
    projectPage: {
      hideFromGallery: true,
    },
  },
  {
    //CASA PRIVADA EN CAROLINA DEL SUR :checked:
    projectName: {
      es: "Casa Privada en Carolina del Sur",
      en: "Private Home in South Carolina",
    },
    title: {
      es: "Casa Privada en Carolina del Sur",
      en: "Private Home in South Carolina",
    },
    projectLocation: {
      es: "Carolina del Sur, EE. UU.",
      en: "South Carolina, USA",
    },
    bgImage: `${cdnUrl}carolina.webp`,
    mainImage: `${cdnUrl}carolina-main.webp`,
    type: ["hogar", "baños"],
    projectPage: {
      hideFromGallery: true,
    },
  },
  {
    //CASA PRIVADA EN SHENZEN :checked:
    projectName: {
      es: "Casa Privada en Shenzen",
      en: "Private Home in Shenzhen",
    },
    title: {
      es: "Casa Privada en Shenzen",
      en: "Private Home in Shenzhen",
    },
    slug: {
      es: "/casa-shenzen",
      en: "/shenzhen-home",
    },
    projectLocation: {
      es: "Shenzen, China",
      en: "Shenzhen, China",
    },
    bgImage: `${cdnUrl}shenzen.webp`,
    mainImage: `${cdnUrl}shenzen-main.webp`,
    type: ["hogar", "suelos"],
    projectPage: {
      hideFromGallery: true,
    },
  },
  {
    //HOTEL REAL DE BOHOYO :checked:
    projectName: {
      es: "Hotel Real de Bohoyo",
      en: "Hotel Real de Bohoyo",
    },
    title: {
      es: "Hotel Real de Bohoyo",
      en: "Hotel Real de Bohoyo",
    },
    projectLocation: {
      es: "Ávila, España",
      en: "Ávila, Spain",
    },
    bgImage: `${cdnUrl}bohoyo/pr-bohoyo-1.webp`,
    mainImage: `${cdnUrl}bohoyo/pr-bohoyo-2.webp`,
    type: ["hoteles", "empresas"],
    projectPage: {
      filtro: "Hotel",
      pageTitle: {
        es: "Hotel Real de Bohoyo | Mármol para hoteles rurales | Camar",
        en: "Hotel Real de Bohoyo | Marble for Rural Hotels | Camar",
      },
      pageDescription: {
        es: "Descubre el Hotel Real de Bohoyo en Ávila, un proyecto hotelero rural que combina tradición y elegancia con mármol y piedra natural de alta calidad. Explora cómo Camar ha transformado este espacio único.",
        en: "Discover Hotel Real de Bohoyo in Ávila, a rural hotel project that combines tradition and elegance with high-quality marble and natural stone. Explore how Camar transformed this unique space.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}bohoyo/pr-bohoyo-1.webp` },
        { type: "image", src: `${cdnUrl}bohoyo/pr-bohoyo-2.webp` },
        { type: "image", src: `${cdnUrl}bohoyo/pr-bohoyo-3.webp` },
        { type: "image", src: `${cdnUrl}bohoyo/pr-bohoyo-4.webp` },
        { type: "image", src: `${cdnUrl}bohoyo/pr-bohoyo-5.webp` },
        { type: "image", src: `${cdnUrl}bohoyo/pr-bohoyo-6.webp` },
        { type: "image", src: `${cdnUrl}bohoyo/pr-bohoyo-7.webp` },
        { type: "image", src: `${cdnUrl}bohoyo/pr-bohoyo-8.webp` },
        { type: "image", src: `${cdnUrl}bohoyo/pr-bohoyo-9.webp` },
        { type: "image", src: `${cdnUrl}bohoyo/pr-bohoyo-10.webp` },
        { type: "image", src: `${cdnUrl}bohoyo/pr-bohoyo-11.webp` },
        { type: "image", src: `${cdnUrl}bohoyo/pr-bohoyo-12.webp` },
      ],
      sobreElProyecto: {
        es: "El Hotel Real de Bohoyo es un proyecto de turismo rural de lujo ubicado en Ávila, en pleno corazón de la Sierra de Gredos. Este hotel combina la arquitectura tradicional de la zona con toques de elegancia contemporánea mediante el uso de piedras naturales.<br><br>Nuestro trabajo incluyó la selección de materiales que se integran con el entorno natural, creando espacios cálidos y acogedores que respetan la esencia del turismo rural.",
        en: "Hotel Real de Bohoyo is a luxury rural tourism project located in Ávila, in the heart of Sierra de Gredos. This hotel combines traditional regional architecture with touches of contemporary elegance through the use of natural stones.<br><br>Our work included the selection of materials that integrate with the natural environment, creating warm and welcoming spaces that respect the essence of rural tourism.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Hoteles", en: "Hotels" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2019",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Turismo rural de lujo",
            en: "Luxury Rural Tourism",
          },
          content: {
            es: "Proyecto que eleva el concepto de hotel rural incorporando materiales nobles y de alta calidad.",
            en: "A project that elevates the rural hotel concept by incorporating noble and high-quality materials.",
          },
        },
        {
          title: {
            es: "Integración con el entorno",
            en: "Integration with the Environment",
          },
          content: {
            es: "Piedras naturales seleccionadas para armonizar con el paisaje de la Sierra de Gredos.",
            en: "Natural stones selected to harmonize with the Sierra de Gredos landscape.",
          },
        },
        {
          title: {
            es: "Calidez y elegancia",
            en: "Warmth and Elegance",
          },
          content: {
            es: "Espacios que combinan la tradición rural con el confort y la sofisticación de un hotel boutique.",
            en: "Spaces that combine rural tradition with the comfort and sophistication of a boutique hotel.",
          },
        },
      ],
      materials: [
        "Amarillo Macael",
        "Crema Marfil",
        "Port Sant Laurent",
        "Giallo Siena",
      ],
    },
  },
  {
    //CASA PRIVADA EN LONDRES :checked:
    projectName: {
      es: "Casa Privada en Londres",
      en: "Private Home in London",
    },
    title: {
      es: "Casa Privada en Londres",
      en: "Private Home in London",
    },
    projectLocation: {
      es: "Londres, Reino Unido",
      en: "London, United Kingdom",
    },
    bgImage: `${cdnUrl}londres.webp`,
    mainImage: `${cdnUrl}londres-main.webp`,
    type: ["cocinas", "hogar"],
    projectPage: {
      hideFromGallery: true,
    },
  },
  {
    //CASA PRIVADA EN AUSTRALIA :checked:
    projectName: {
      es: "Casa Privada en Australia",
      en: "Private Home in Australia",
    },
    title: {
      es: "Casa Privada en Australia",
      en: "Private Home in Australia",
    },
    projectLocation: {
      es: "Melbourne, Australia",
      en: "Melbourne, Australia",
    },
    bgImage: `${cdnUrl}australia.webp`,
    mainImage: `${cdnUrl}australia-main.webp`,
    type: ["cocinas", "hogar"],
    projectPage: {
      hideFromGallery: true,
    },
  },
  {
    //LA SAGRADA FAMILIA DE BARCELONA :checked:
    projectName: {
      es: "La Sagrada Familia de Barcelona",
      en: "La Sagrada Familia in Barcelona",
    },
    title: {
      es: "La Sagrada Familia de Barcelona",
      en: "La Sagrada Familia in Barcelona",
    },
    projectLocation: {
      es: "Barcelona, España",
      en: "Barcelona, Spain",
    },
    bgImage: `${cdnUrl}sagrada-familia/pr-sagrada-familia-1.webp`,
    mainImage: `${cdnUrl}sagrada-familia/pr-sagrada-familia-7.webp`,
    type: ["singulares", "religiosos", "empresas"],
    projectPage: {
      filtro: "Singular",
      pageTitle: {
        es: "La Sagrada Familia de Barcelona | Mármol para proyectos religiosos | Camar",
        en: "La Sagrada Familia in Barcelona | Marble for Religious Projects | Camar",
      },
      pageDescription: {
        es: "Descubre nuestra participación en La Sagrada Familia de Barcelona, obra maestra de Gaudí. Explora cómo Camar ha contribuido a este proyecto icónico con mármol y piedra natural de la más alta calidad.",
        en: "Discover our participation in La Sagrada Familia in Barcelona, Gaudí's masterpiece. Explore how Camar contributed to this iconic project with the highest quality marble and natural stone.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}sagrada-familia/pr-sagrada-familia-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}sagrada-familia/pr-sagrada-familia-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}sagrada-familia/pr-sagrada-familia-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}sagrada-familia/pr-sagrada-familia-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}sagrada-familia/pr-sagrada-familia-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}sagrada-familia/pr-sagrada-familia-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}sagrada-familia/pr-sagrada-familia-2.webp`,
        },
      ],
      sobreElProyecto: {
        es: "La Sagrada Familia es una de las obras arquitectónicas más emblemáticas del mundo, diseñada por Antoni Gaudí. Nuestra participación en este proyecto histórico representa un honor y una responsabilidad excepcional.<br><br>Hemos suministrado piedra natural de la más alta calidad para diversos elementos de la basílica, respetando la visión original de Gaudí y contribuyendo a la continuación de esta obra maestra que lleva más de un siglo en construcción.",
        en: "La Sagrada Familia is one of the world's most emblematic architectural works, designed by Antoni Gaudí. Our participation in this historic project represents an exceptional honor and responsibility.<br><br>We have supplied the highest quality natural stone for various elements of the basilica, respecting Gaudí's original vision and contributing to the continuation of this masterpiece that has been under construction for over a century.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Religiosos", en: "Religious" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2011-2026",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Patrimonio de la Humanidad",
            en: "UNESCO World Heritage Site",
          },
          content: {
            es: "Contribución a una de las obras más importantes de la arquitectura mundial, declarada Patrimonio de la Humanidad por la UNESCO.",
            en: "Contribution to one of the world's most important architectural works, declared a UNESCO World Heritage Site.",
          },
        },
        {
          title: {
            es: "Materiales excepcionales",
            en: "Exceptional Materials",
          },
          content: {
            es: "Suministro de piedras naturales seleccionadas con los más altos estándares de calidad para este proyecto único.",
            en: "Supply of natural stones selected with the highest quality standards for this unique project.",
          },
        },
        {
          title: {
            es: "Visión de Gaudí",
            en: "Gaudí's Vision",
          },
          content: {
            es: "Respeto y fidelidad a los diseños originales del arquitecto Antoni Gaudí en cada elemento suministrado.",
            en: "Respect and fidelity to architect Antoni Gaudí's original designs in every element supplied.",
          },
        },
      ],
      materials: ["Azul Bahia", "Blanco Macael", "Porfido Rojo"],
    },
  },
  {
    //RÉPLICA ALHAMBRA DE GRANADA :checked:
    projectName: {
      es: "Replica Alhambra de Granada",
      en: "Replica of the Alhambra of Granada",
    },
    title: {
      es: "Réplica Alhambra de Granada",
      en: "Replica of the Alhambra of Granada",
    },
    projectLocation: {
      es: "Riad, Arabia Saudita",
      en: "Riyadh, Saudi Arabia",
    },
    bgImage: `${cdnUrl}alhambra/pr-alhambra-1.webp`,
    mainImage: `${cdnUrl}alhambra/pr-alhambra-2.webp`,
    type: ["singulares", "empresas"],
    projectPage: {
      filtro: "Singular",
      pageTitle: {
        es: "Réplica Alhambra de Granada | Mármol para proyectos singulares | Camar",
        en: "Replica of the Alhambra of Granada | Marble for Singular Projects | Camar",
      },
      pageDescription: {
        es: "Descubre la Réplica de la Alhambra de Granada en Riad, un proyecto excepcional que recrea la majestuosidad del monumento andalusí. Explora cómo Camar ha materializado esta obra con mármol español.",
        en: "Discover the Replica of the Alhambra of Granada in Riyadh, an exceptional project that recreates the majesty of the Andalusian monument. Explore how Camar materialized this work with Spanish marble.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}alhambra/pr-alhambra-1.webp` },
        { type: "image", src: `${cdnUrl}alhambra/pr-alhambra-2.webp` },
        { type: "image", src: `${cdnUrl}alhambra/pr-alhambra-3.webp` },
        { type: "image", src: `${cdnUrl}alhambra/pr-alhambra-4.webp` },
        { type: "image", src: `${cdnUrl}alhambra/pr-alhambra-5.webp` },
        { type: "image", src: `${cdnUrl}alhambra/pr-alhambra-6.webp` },
      ],
      sobreElProyecto: {
        es: "La Réplica de la Alhambra de Granada en Riad es un proyecto extraordinario que recrea la belleza y esplendor del monumento andalusí más emblemático. Este ambicioso proyecto transporta la esencia de la arquitectura nazarí a Arabia Saudita.<br><br>Hemos suministrado mármoles y piedras naturales españolas para recrear con la máxima fidelidad los elementos arquitectónicos originales, incluyendo columnas, arcos, fuentes y revestimientos ornamentales.",
        en: "The Replica of the Alhambra of Granada in Riyadh is an extraordinary project that recreates the beauty and splendor of the most emblematic Andalusian monument. This ambitious project transports the essence of Nasrid architecture to Saudi Arabia.<br><br>We have supplied Spanish marbles and natural stones to recreate with maximum fidelity the original architectural elements, including columns, arches, fountains and ornamental cladding.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Proyecto singular", en: "Singular Project" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2020",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Arabia Saudita", en: "Saudi Arabia" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Proyecto único en el mundo",
            en: "Unique Project in the World",
          },
          content: {
            es: "Réplica a escala real de uno de los monumentos más admirados de la arquitectura islámica en España.",
            en: "Full-scale replica of one of the most admired monuments of Islamic architecture in Spain.",
          },
        },
        {
          title: {
            es: "Fidelidad al original",
            en: "Fidelity to the Original",
          },
          content: {
            es: "Recreación meticulosa de columnas, arcos y elementos ornamentales respetando las técnicas y materiales tradicionales.",
            en: "Meticulous recreation of columns, arches and ornamental elements respecting traditional techniques and materials.",
          },
        },
        {
          title: {
            es: "Exportación de patrimonio",
            en: "Heritage Export",
          },
          content: {
            es: "Proyecto que lleva la excelencia de la piedra natural española y la arquitectura andalusí al mundo árabe.",
            en: "A project that brings the excellence of Spanish natural stone and Andalusian architecture to the Arab world.",
          },
        },
      ],
      materials: ["Blanco Macael"],
    },
  },
  {
    //SHOWROOM EN MOSCÚ :checked:
    projectName: {
      es: "Showroom en Moscu",
      en: "Showroom in Moscow",
    },
    title: {
      es: "Showroom en Moscú",
      en: "Showroom in Moscow",
    },
    projectLocation: {
      es: "Moscú, Rusia",
      en: "Moscow, Russia",
    },
    bgImage: `${cdnUrl}showroom-moscu/pr-showroom-moscu-1.webp`,
    mainImage: `${cdnUrl}showroom-moscu/pr-showroom-moscu-2.webp`,
    type: ["singulares", "empresas"],
    projectPage: {
      filtro: "Singular",
      pageTitle: {
        es: "Showroom en Moscú | Mármol para espacios comerciales | Camar",
        en: "Showroom in Moscow | Marble for Commercial Spaces | Camar",
      },
      pageDescription: {
        es: "Descubre el Showroom en Moscú, un espacio comercial de lujo que exhibe la excelencia del mármol español. Explora cómo Camar ha creado este espacio único con piedra natural de primera calidad.",
        en: "Discover the Showroom in Moscow, a luxury commercial space showcasing the excellence of Spanish marble. Explore how Camar created this unique space with premium natural stone.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}showroom-moscu/pr-showroom-moscu-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}showroom-moscu/pr-showroom-moscu-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}showroom-moscu/pr-showroom-moscu-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}showroom-moscu/pr-showroom-moscu-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}showroom-moscu/pr-showroom-moscu-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}showroom-moscu/pr-showroom-moscu-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}showroom-moscu/pr-showroom-moscu-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}showroom-moscu/pr-showroom-moscu-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}showroom-moscu/pr-showroom-moscu-9.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}showroom-moscu/pr-showroom-moscu-10.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}showroom-moscu/pr-showroom-moscu-11.webp`,
        },
      ],
      sobreElProyecto: {
        es: "El Showroom en Moscú es un espacio comercial de alto standing diseñado para exhibir la versatilidad y belleza del mármol español. Este proyecto representa nuestra presencia en el mercado ruso y demuestra las infinitas posibilidades de la piedra natural.<br><br>El showroom incorpora diferentes tipos de mármol en suelos, paredes y elementos decorativos, creando un espacio que es en sí mismo una obra de arte y una carta de presentación de nuestros materiales.",
        en: "The Showroom in Moscow is a high-end commercial space designed to showcase the versatility and beauty of Spanish marble. This project represents our presence in the Russian market and demonstrates the endless possibilities of natural stone.<br><br>The showroom incorporates different types of marble in floors, walls and decorative elements, creating a space that is itself a work of art and a catalog of our materials.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Comercial", en: "Commercial" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2018",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Rusia", en: "Russia" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Espacio expositivo único",
            en: "Unique Exhibition Space",
          },
          content: {
            es: "Showroom diseñado para mostrar la diversidad y calidad de mármoles españoles en el mercado ruso.",
            en: "Showroom designed to showcase the diversity and quality of Spanish marbles in the Russian market.",
          },
        },
        {
          title: {
            es: "Versatilidad del mármol",
            en: "Marble Versatility",
          },
          content: {
            es: "Exhibición de diferentes aplicaciones del mármol: suelos, revestimientos, mobiliario y elementos decorativos.",
            en: "Exhibition of different marble applications: floors, cladding, furniture and decorative elements.",
          },
        },
        {
          title: {
            es: "Presencia internacional",
            en: "International Presence",
          },
          content: {
            es: "Proyecto que consolida la presencia de Camar en uno de los mercados más exigentes del mundo.",
            en: "A project that consolidates Camar's presence in one of the world's most demanding markets.",
          },
        },
      ],
      materials: [
        "Arabescato Orobico Grigio",
        "Blanco Sivec",
        "Bronze Armani",
        "Cosmus",
        "Emperador Dark",
        "Grigio Carnico",
        "Negro Bamboo",
        "Onyx Pink Persa",
        "Onyx White Persa",
        "Perlado",
        "Serpeggiante",
        "Sierra Elvira",
        "Statuario Michelangelo",
      ],
    },
  },
  {
    //CASA PRIVADA EN ROSTOV DEL DON :checked:
    projectName: {
      es: "Casa Privada en Rostov del Don",
      en: "Private Home in Rostov-on-Don",
    },
    title: {
      es: "Casa Privada en Rostov del Don",
      en: "Private Home in Rostov-on-Don",
    },
    projectLocation: {
      es: "Rostov del Don, Rusia",
      en: "Rostov-on-Don, Russia",
    },
    bgImage: `${cdnUrl}rostov.webp`,
    mainImage: `${cdnUrl}rostov-main.webp`,
    type: ["baños", "hogar"],
    projectPage: {
      hideFromGallery: true,
    },
  },
  {
    //CASA PRIVADA EN INDIA :checked:
    projectName: {
      es: "Casa Privada en India",
      en: "Private Home in India",
    },
    title: {
      es: "Casa Privada en India",
      en: "Private Home in India",
    },
    slug: {
      es: "/casa-india",
      en: "/india-home",
    },
    projectLocation: {
      es: "India",
      en: "India",
    },
    bgImage: `${cdnUrl}india.webp`,
    mainImage: `${cdnUrl}india-main.webp`,
    type: ["baños", "hogar"],
    projectPage: {
      hideFromGallery: true,
    },
  },
  {
    //FUENTE DEEP DIVE DUBAI :checked:
    projectName: {
      es: "Fuente Deep Dive Dubai",
      en: "Deep Dive Dubai Fountain",
    },
    title: { es: "Fuente Deep Dive Dubai", en: "Deep Dive Dubai Fountain" },
    projectLocation: {
      es: "Dubai, Emiratos Árabes Unidos",
      en: "Dubai, United Arab Emirates",
    },
    bgImage: `${cdnUrl}deep-dive/pr-deep-dive-2.webp`,
    mainImage: `${cdnUrl}deep-dive/pr-deep-dive-1.webp`,
    type: ["fuentes", "empresas"],
    projectPage: {
      filtro: "Fuente",
      pageTitle: {
        es: "Fuente Deep Dive Dubai | Mármol para fuentes exclusivas | Camar",
        en: "Deep Dive Dubai Fountain | Marble for Exclusive Fountains | Camar",
      },
      pageDescription: {
        es: "Descubre la Fuente Deep Dive Dubai, un proyecto acuático único en el mundo. Explora cómo Camar ha contribuido a esta instalación extraordinaria con mármol y piedra natural de alta resistencia.",
        en: "Discover the Deep Dive Dubai Fountain, a unique aquatic project in the world. Explore how Camar contributed to this extraordinary installation with marble and natural stone of high resistance.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}deep-dive/pr-deep-dive-2.webp` },
        { type: "image", src: `${cdnUrl}deep-dive/pr-deep-dive-1.webp` },
        { type: "image", src: `${cdnUrl}deep-dive/pr-deep-dive-3.webp` },
        { type: "image", src: `${cdnUrl}deep-dive/pr-deep-dive-4.webp` },
      ],
      sobreElProyecto: {
        es: "Deep Dive Dubai es la piscina más profunda del mundo, con 60 metros de profundidad, diseñada para practicar buceo y filmación submarina. Nuestra participación en este proyecto único incluyó el suministro de materiales para las áreas circundantes de la instalación.<br><br>Los materiales seleccionados debían cumplir con requisitos excepcionales de resistencia al agua y durabilidad, manteniendo su belleza en un entorno de alta humedad y contacto constante con el agua.",
        en: "Deep Dive Dubai is the world's deepest pool, with 60 meters of depth, designed for diving and underwater filming. Our participation in this unique project included supplying materials for the surrounding areas of the installation.<br><br>The selected materials had to meet exceptional requirements for water resistance and durability while maintaining their beauty in a high-humidity, constant-water-contact environment.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Fuentes", en: "Fountains" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2021",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Emiratos Árabes Unidos", en: "United Arab Emirates" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Piscina más profunda del mundo",
            en: "World's Deepest Pool",
          },
          content: {
            es: "Proyecto asociado a una instalación récord mundial de 60 metros de profundidad.",
            en: "A project associated with a world-record 60-meter-deep installation.",
          },
        },
        {
          title: {
            es: "Materiales de alta resistencia",
            en: "High-Resistance Materials",
          },
          content: {
            es: "Piedras naturales seleccionadas por su excepcional resistencia al agua y durabilidad en ambientes acuáticos.",
            en: "Natural stones selected for their exceptional water resistance and durability in aquatic environments.",
          },
        },
        {
          title: { es: "Proyecto innovador", en: "Innovative Project" },
          content: {
            es: "Participación en una de las instalaciones de buceo más avanzadas y espectaculares del mundo.",
            en: "Participation in one of the most advanced and spectacular diving facilities in the world.",
          },
        },
      ],
      materials: ["Anasol Macael"],
    },
  },
  {
    //FUENTE DE LOS CABALLOS :checked:
    projectName: { es: "Fuente de los Caballos", en: "Fountain of the Horses" },
    title: { es: "Fuente de los Caballos", en: "Fountain of the Horses" },
    projectLocation: { es: "Villa Ricotta, España", en: "Villa Ricotta, Spain" },
    bgImage: `${cdnUrl}fuente-caballos/pr-fuente-caballos-1.webp`,
    mainImage: `${cdnUrl}fuente-caballos/pr-fuente-caballos-2.webp`,
    type: ["fuentes", "empresas"],
    projectPage: {
      filtro: "Fuente",
      pageTitle: {
        es: "Fuente de los Caballos | Escultura y tecnología 3D | Camar",
        en: "Fountain of the Horses | Sculpture and 3D Technology | Camar",
      },
      pageDescription: {
        es: "Descubre la Fuente de los Caballos en Villa Ricotta, una obra maestra que combina artesanía tradicional con tecnología 3D. Tres esculturas de caballos cruzando una cascada con mármol Emperador Dark y Caliza Paloma.",
        en: "Discover the Horses Fountain at Villa Ricotta, a masterpiece combining traditional craftsmanship with 3D technology. Three horse sculptures crossing a waterfall in Emperador Dark and Caliza Paloma marble.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}fuente-caballos/pr-fuente-caballos-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}fuente-caballos/pr-fuente-caballos-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}fuente-caballos/pr-fuente-caballos-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}fuente-caballos/pr-fuente-caballos-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}fuente-caballos/pr-fuente-caballos-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}fuente-caballos/pr-fuente-caballos-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}fuente-caballos/pr-fuente-caballos-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}fuente-caballos/pr-fuente-caballos-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}fuente-caballos/pr-fuente-caballos-9.webp`,
        },
      ],
      sobreElProyecto: {
        es: "El caballo es utilizado en muchas culturas y mitologías como símbolo de poder, gracia, belleza, nobleza, fuerza y libertad. Estos valores se reflejan en esta hermosa fuente, donde los caballos cruzan majestuosamente la cascada.<br><br>Instalada como elemento decorativo exterior de la Villa Ricotta, la fuente está compuesta por tres esculturas de caballos: dos laterales realizados en Caliza Paloma blanca y el central en Emperador Dark. La pila inferior que recoge el agua está elaborada en Crema Marfil con acabado abujardado.<br><br>Para su ejecución fue necesario crear un modelo de arcilla de cada uno de los caballos. Una vez aprobados por el cliente, se escanearon con la técnica de escaneo 3D para esculturas y posteriormente se tallaron mediante CNC de 5 ejes. Finalmente, fueron acabados y pulidos a mano por artesanos especializados.",
        en: "The horse is used in many cultures and mythologies as a symbol of power, grace, beauty, nobility, strength and freedom. These values are reflected in this beautiful fountain, where the horses majestically cross the waterfall.<br><br>Installed as an exterior decorative element of Villa Ricotta, the fountain consists of three horse sculptures: two lateral ones made in white Caliza Paloma and the central one in Emperador Dark. The lower pool that collects the water is made of Crema Marfil with a bush-hammered finish.<br><br>For its execution, a clay model of each horse had to be created. Once approved by the client, they were scanned using 3D scanning techniques for sculptures and subsequently carved with 5-axis CNC. Finally, they were finished and hand-polished by specialized artisans.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Fuentes", en: "Fountains" },
        },
        {
          label: { es: "Ubicación", en: "Location" },
          value: { es: "Villa Ricotta", en: "Villa Ricotta" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Tecnología y artesanía",
            en: "Technology and Craftsmanship",
          },
          content: {
            es: "Combinación única de técnicas tradicionales y modernas: modelos en arcilla, escaneo 3D para escultura, tallado CNC de 5 ejes y acabado artesanal a mano.",
            en: "A unique combination of traditional and modern techniques: clay models, 3D scanning for sculpture, 5-axis CNC carving and hand-finishing by artisans.",
          },
        },
        {
          title: {
            es: "Tres esculturas de caballos",
            en: "Three Horse Sculptures",
          },
          content: {
            es: "Dos caballos laterales en Caliza Paloma blanca flanquean un majestuoso caballo central en Emperador Dark, todos cruzando la cascada de agua.",
            en: "Two lateral horses in white Caliza Paloma flank a majestic central horse in Emperador Dark, all crossing the water cascade.",
          },
        },
        {
          title: { es: "Simbolismo y diseño", en: "Symbolism and Design" },
          content: {
            es: "Los caballos representan poder, gracia, belleza, nobleza, fuerza y libertad. La pila inferior en Crema Marfil abujardado completa esta obra maestra escultórica.",
            en: "The horses represent power, grace, beauty, nobility, strength and freedom. The lower basin in bush-hammered Crema Marfil completes this sculptural masterpiece.",
          },
        },
      ],
      materials: ["Caliza Paloma", "Crema Marfil", "Emperador Dark"],
    },
  },
  {
    //FUENTE DE LOS LEONES EN MACAEL :checked:
    projectName: {
      es: "Fuente de los Leones en Macael",
      en: "Lions Fountain in Macael",
    },
    title: {
      es: "Fuente de los Leones en Macael",
      en: "Lions Fountain in Macael",
    },
    projectLocation: { es: "Macael, España", en: "Macael, Spain" },
    bgImage: `${cdnUrl}leones-macael/pr-leones-macael-1.webp`,
    mainImage: `${cdnUrl}leones-macael/pr-leones-macael-2.webp`,
    type: ["fuentes"],
    projectPage: {
      filtro: "Fuente",
      pageTitle: {
        es: "Fuente de los Leones en Macael | Réplica de la Alhambra | Camar",
        en: "Lions Fountain in Macael | Alhambra Replica | Camar",
      },
      pageDescription: {
        es: "Descubre la Fuente de los Leones en Macael, una réplica exacta de la emblemática fuente de la Alhambra de Granada. Realizada en Blanco Macael con 12 leones esculpidos y poema en árabe clásico.",
        en: "Discover the Lions Fountain in Macael, an exact replica of the emblematic fountain of the Alhambra of Granada. Made in Blanco Macael with 12 sculpted lions and a poem in classical Arabic.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}leones-macael/pr-leones-macael-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}leones-macael/pr-leones-macael-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}leones-macael/pr-leones-macael-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}leones-macael/pr-leones-macael-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}leones-macael/pr-leones-macael-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}leones-macael/pr-leones-macael-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}leones-macael/pr-leones-macael-7.webp`,
        },
      ],
      sobreElProyecto: {
        es: "En el centro histórico del pueblo de Macael, lugar de origen del mármol blanco que lleva su nombre y que ha sido utilizado durante siglos por innumerables culturas a lo largo del tiempo, se alza una réplica de la Fuente de los Leones realizada por Camar en homenaje al mármol con el que se construyeron los palacios de la Alhambra de Granada.<br><br>La fuente está formada por la pila principal de 260 cm de diámetro en forma dodecagonal, rodeada por los 12 leones (6 machos y 6 hembras según las leyendas de la Alhambra). Alrededor discurre un pequeño canal de agua también realizado en mármol Blanco Macael.<br><br>Durante su visita, podrá leer la traducción del árabe clásico de los 12 versos del poema tallado en el canto de la balsa principal, realizada por los profesores de la Universidad de Granada Darío Cabanelas y Antonio Fernández Puertas.",
        en: "In the historic center of the town of Macael, the birthplace of the white marble that bears its name and that has been used for centuries by countless cultures, stands a replica of the Lions Fountain made by Camar in tribute to the marble used to build the palaces of the Alhambra of Granada.<br><br>The fountain consists of the main 260 cm diameter dodecagonal basin, surrounded by 12 lions (6 males and 6 females according to Alhambra legends). Around it, a small water channel is also made of Blanco Macael marble.<br><br>During your visit, you can read the translation of the classical Arabic of the 12 verses of the poem carved on the rim of the main basin, done by professors from the University of Granada Darío Cabanelas and Antonio Fernández Puertas.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Fuentes", en: "Fountains" },
        },
        {
          label: { es: "Ubicación", en: "Location" },
          value: { es: "Macael, Almería", en: "Macael, Almería" },
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Réplica de la Alhambra",
            en: "Alhambra Replica",
          },
          content: {
            es: "Réplica exacta de la emblemática Fuente de los Leones de la Alhambra de Granada, símbolo del arte nazarí y del esplendor del Al-Ándalus.",
            en: "Exact replica of the emblematic Lions Fountain of the Alhambra of Granada, symbol of Nasrid art and the splendor of Al-Andalus.",
          },
        },
        {
          title: {
            es: "12 leones esculpidos",
            en: "12 Sculpted Lions",
          },
          content: {
            es: "Pila dodecagonal de 260 cm de diámetro rodeada por 12 esculturas de leones (6 machos y 6 hembras) tallados en Blanco Macael, con canal de agua perimetral.",
            en: "260 cm diameter dodecagonal basin surrounded by 12 lion sculptures (6 males and 6 females) carved in Blanco Macael, with perimeter water channel.",
          },
        },
        {
          title: {
            es: "Poema en árabe clásico",
            en: "Poem in Classical Arabic",
          },
          content: {
            es: "Los 12 versos del poema original tallados en el canto de la pila principal, con traducción de los profesores Darío Cabanelas y Antonio Fernández Puertas de la Universidad de Granada.",
            en: "The 12 verses of the original poem carved on the rim of the main basin, with translation by professors Darío Cabanelas and Antonio Fernández Puertas from the University of Granada.",
          },
        },
      ],
      materials: ["Blanco Macael"],
    },
  },
  {
    //FUENTE EN TORREMOLINOS :checked:
    projectName: {
      es: "Fuente en Torremolinos",
      en: "Fountain in Torremolinos",
    },
    title: { es: "Fuente en Torremolinos", en: "Fountain in Torremolinos" },
    projectLocation: { es: "Torremolinos, España", en: "Torremolinos, Spain" },
    bgImage: `${cdnUrl}torremolinos/pr-torremolinos-1.webp`,
    mainImage: `${cdnUrl}torremolinos/pr-torremolinos-2.webp`,
    type: ["fuentes", "empresas"],
    projectPage: {
      filtro: "Fuente",
      pageTitle: {
        es: "Fuente en Torremolinos | Mármol para fuentes urbanas | Camar",
        en: "Fountain in Torremolinos | Marble for Urban Fountains | Camar",
      },
      pageDescription: {
        es: "Descubre la Fuente en Torremolinos, un proyecto urbano que embellece la Costa del Sol con mármol y piedra natural. Explora cómo Camar ha transformado este espacio público costero.",
        en: "Discover the Torremolinos Fountain, an urban project that beautifies the Costa del Sol with marble and natural stone. Explore how Camar transformed this coastal public space.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}torremolinos/pr-torremolinos-1.webp` },
        { type: "image", src: `${cdnUrl}torremolinos/pr-torremolinos-2.webp` },
        { type: "image", src: `${cdnUrl}torremolinos/pr-torremolinos-3.webp` },
        { type: "image", src: `${cdnUrl}torremolinos/pr-torremolinos-4.webp` },
        { type: "image", src: `${cdnUrl}torremolinos/pr-torremolinos-5.webp` },
      ],
      sobreElProyecto: {
        es: "La Fuente en Torremolinos es un proyecto de embellecimiento urbano situado en una de las zonas turísticas más populares de la Costa del Sol. Esta fuente ornamental se ha convertido en un punto de referencia para residentes y turistas.<br><br>El diseño incorpora mármol local que resiste perfectamente las condiciones climáticas de la costa mediterránea, incluyendo la exposición solar intensa y la brisa marina.",
        en: "The Torremolinos Fountain is an urban beautification project located in one of the most popular tourist areas of the Costa del Sol. This ornamental fountain has become a landmark for residents and tourists.<br><br>The design incorporates local marble that withstands the Mediterranean coastal conditions, including intense sun exposure and sea breeze.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Fuentes", en: "Fountains" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2017",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: { es: "Diseño mediterráneo", en: "Mediterranean Design" },
          content: {
            es: "Fuente que captura la esencia del estilo arquitectónico de la Costa del Sol.",
            en: "A fountain that captures the essence of Costa del Sol's architectural style.",
          },
        },
        {
          title: { es: "Resistencia costera", en: "Coastal Resistance" },
          content: {
            es: "Mármol seleccionado específicamente por su resistencia a las condiciones marinas y la exposición solar.",
            en: "Marble specifically selected for its resistance to marine conditions and sun exposure.",
          },
        },
        {
          title: { es: "Atractivo turístico", en: "Tourist Attraction" },
          content: {
            es: "Proyecto que contribuye al embellecimiento de una de las zonas turísticas más visitadas de Andalucía.",
            en: "A project that contributes to the beautification of one of Andalusia's most visited tourist areas.",
          },
        },
      ],
      materials: ["Anasol Macael"],
    },
  },
  {
    //OFICINAS PRIVADAS EN SHENZEN :checked:
    projectName: {
      es: "Oficinas Privadas en Shenzen",
      en: "Private Offices in Shenzhen",
    },
    title: {
      es: "Oficinas Privadas en Shenzen",
      en: "Private Offices in Shenzhen",
    },
    projectLocation: { es: "Shenzen, China", en: "Shenzhen, China" },
    bgImage: `${cdnUrl}oficinas-shenzen.webp`,
    mainImage: `${cdnUrl}oficinas-shenzen-main.webp`,
    type: ["suelos", "empresas"],
    projectPage: {
      hideFromGallery: true,
    },
  },
  {
    //OFICINAS PRIVADAS EN DACA :checked:
    projectName: {
      es: "Oficinas Privadas en Daca",
      en: "Private Offices in Dhaka",
    },
    title: { es: "Oficinas Privadas en Daca", en: "Private Offices in Dhaka" },
    projectLocation: { es: "Daca, Bangladesh", en: "Dhaka, Bangladesh" },
    bgImage: `${cdnUrl}oficinas-daca.webp`,
    mainImage: `${cdnUrl}oficinas-daca-main.webp`,
    type: ["suelos", "empresas"],
    projectPage: {
      hideFromGallery: true,
    },
  },
  {
    //CRISTO DE LA BUENA MUERTE :checked:
    projectName: {
      es: "Cristo de la buena muerte",
      en: "Christ of the Good Death",
    },
    title: { es: "Cristo de la buena muerte", en: "Christ of the Good Death" },
    projectLocation: { es: "Málaga, España", en: "Málaga, Spain" },
    bgImage: `${cdnUrl}buena-muerte/pr-buena-muerte-1.webp`,
    mainImage: `${cdnUrl}buena-muerte/pr-buena-muerte-2.webp`,
    type: ["religiosos", "empresas"],
    projectPage: {
      filtro: "Religioso",
      pageTitle: {
        es: "Cristo de la Buena Muerte | Mármol para proyectos religiosos | Camar",
        en: "Christ of the Good Death | Marble for Religious Projects | Camar",
      },
      pageDescription: {
        es: "Descubre el Cristo de la Buena Muerte en Málaga, un proyecto religioso que combina devoción y arte con mármol de la más alta calidad. Explora cómo Camar ha contribuido a este emblema de la Semana Santa malagueña.",
        en: "Discover the Cristo de la Buena Muerte in Málaga, a religious project that combines devotion and art with the highest quality marble. Explore how Camar contributed to this emblem of Málaga's Holy Week.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}buena-muerte/pr-buena-muerte-1.webp` },
        { type: "image", src: `${cdnUrl}buena-muerte/pr-buena-muerte-2.webp` },
        { type: "image", src: `${cdnUrl}buena-muerte/pr-buena-muerte-3.webp` },
        { type: "image", src: `${cdnUrl}buena-muerte/pr-buena-muerte-4.webp` },
        { type: "image", src: `${cdnUrl}buena-muerte/pr-buena-muerte-5.webp` },
        { type: "image", src: `${cdnUrl}buena-muerte/pr-buena-muerte-6.webp` },
        { type: "image", src: `${cdnUrl}buena-muerte/pr-buena-muerte-7.webp` },
      ],
      sobreElProyecto: {
        es: "El Cristo de la Buena Muerte es uno de los pasos más venerados de la Semana Santa de Málaga, perteneciente a la Legión Española. Nuestra participación en este proyecto religioso representa un honor especial debido a su profundo significado cultural y espiritual.<br><br>Hemos realizado trabajos de restauración y conservación en elementos de mármol del paso procesional, asegurando que esta joya del patrimonio religioso malagueño se mantenga en perfectas condiciones para las generaciones futuras.",
        en: "The Cristo de la Buena Muerte is one of the most venerated floats of Málaga's Holy Week, belonging to the Spanish Legion. Our participation in this religious project is a special honor due to its deep cultural and spiritual significance.<br><br>We carried out restoration and conservation work on the marble elements of the procession float, ensuring this jewel of Málaga's religious heritage remains in perfect condition for future generations.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Religiosos", en: "Religious" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2016",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: { es: "Patrimonio de Semana Santa", en: "Holy Week Heritage" },
          content: {
            es: "Trabajo de restauración en uno de los pasos más emblemáticos de la Semana Santa malagueña.",
            en: "Restoration work on one of the most emblematic floats of Málaga's Holy Week.",
          },
        },
        {
          title: { es: "Conservación artística", en: "Artistic Conservation" },
          content: {
            es: "Técnicas especializadas de conservación y restauración de mármol aplicadas a elementos históricos.",
            en: "Specialized techniques for marble conservation and restoration applied to historic elements.",
          },
        },
        {
          title: { es: "Significado cultural", en: "Cultural Significance" },
          content: {
            es: "Contribución a la preservación de una tradición centenaria de gran valor espiritual y artístico.",
            en: "Contribution to the preservation of a century-old tradition of great spiritual and artistic value.",
          },
        },
      ],
      materials: ["Blanco Macael"],
    },
  },
  {
    //PIEDAD MONUMENTAL EN AYAMONTE :checked:
    projectName: {
      es: "Piedad Monumental en Ayamonte",
      en: "Monumental Pietà in Ayamonte",
    },
    title: {
      es: "Piedad Monumental en Ayamonte",
      en: "Monumental Pietà in Ayamonte",
    },
    projectLocation: { es: "Ayamonte, España", en: "Ayamonte, Spain" },
    bgImage: `${cdnUrl}ayamonte/pr-ayamonte-1.webp`,
    mainImage: `${cdnUrl}ayamonte/pr-ayamonte-2.webp`,
    type: ["religiosos", "empresas"],
    projectPage: {
      filtro: "Religioso",
      pageTitle: {
        es: "Piedad Monumental en Ayamonte | Mármol para esculturas religiosas | Camar",
        en: "Monumental Pietà in Ayamonte | Marble for Religious Sculptures | Camar",
      },
      pageDescription: {
        es: "Descubre la Piedad Monumental en Ayamonte, una escultura religiosa de gran envergadura realizada en mármol. Explora cómo Camar ha materializado esta obra de arte sacro con piedra natural de primera calidad.",
        en: "Discover the Monumental Pietà in Ayamonte, a large-scale religious sculpture made in marble. Explore how Camar brought this work of sacred art to life with premium natural stone.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}ayamonte/pr-ayamonte-1.webp` },
        { type: "image", src: `${cdnUrl}ayamonte/pr-ayamonte-2.webp` },
        { type: "image", src: `${cdnUrl}ayamonte/pr-ayamonte-3.webp` },
        { type: "image", src: `${cdnUrl}ayamonte/pr-ayamonte-4.webp` },
        { type: "image", src: `${cdnUrl}ayamonte/pr-ayamonte-5.webp` },
        { type: "image", src: `${cdnUrl}ayamonte/pr-ayamonte-6.webp` },
        { type: "image", src: `${cdnUrl}ayamonte/pr-ayamonte-7.webp` },
        { type: "image", src: `${cdnUrl}ayamonte/pr-ayamonte-8.webp` },
        { type: "image", src: `${cdnUrl}ayamonte/pr-ayamonte-9.webp` },
      ],
      sobreElProyecto: {
        es: "La Piedad Monumental en Ayamonte es una escultura religiosa de grandes dimensiones que representa uno de los temas más conmovedores del arte sacro cristiano. Este proyecto combina nuestra experiencia en el trabajo del mármol con la sensibilidad artística necesaria para obras de contenido espiritual.<br><br>El grupo escultórico fue tallado en bloques de mármol blanco de primera calidad, requiriendo un trabajo meticuloso de varios meses para lograr la expresividad y el detalle que caracterizan a esta obra.",
        en: "The Monumental Pietà in Ayamonte is a large religious sculpture representing one of the most moving themes of Christian sacred art. This project combines our marble-working expertise with the artistic sensitivity required for spiritually themed works.<br><br>The sculptural group was carved from high-quality white marble blocks, requiring meticulous work over several months to achieve the expressiveness and detail that characterize this piece.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Religiosos", en: "Religious" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2014",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: { es: "Escultura monumental", en: "Monumental Sculpture" },
          content: {
            es: "Grupo escultórico de grandes dimensiones tallado en bloques de mármol de primera calidad.",
            en: "Large sculptural group carved from high-quality marble blocks.",
          },
        },
        {
          title: {
            es: "Trabajo artístico especializado",
            en: "Specialized Artistic Work",
          },
          content: {
            es: "Talla escultórica que requiere técnicas avanzadas y gran sensibilidad artística para capturar la emotividad de la escena.",
            en: "Sculptural carving requiring advanced techniques and great artistic sensitivity to capture the scene's emotion.",
          },
        },
        {
          title: { es: "Arte sacro permanente", en: "Permanent Sacred Art" },
          content: {
            es: "Obra destinada a perdurar en el tiempo como testimonio de fe y arte religioso en Ayamonte.",
            en: "A work intended to endure over time as a testimony of faith and religious art in Ayamonte.",
          },
        },
      ],
      materials: ["Anasol Macael", "Blanco Carrara C"],
    },
  },
  {
    //FUENTE EN ENCINAREJO :checked:
    projectName: { es: "Fuente en Encinarejo", en: "Fountain in Encinarejo" },
    title: { es: "Fuente en Encinarejo", en: "Fountain in Encinarejo" },
    projectLocation: { es: "Córdoba, España", en: "Córdoba, Spain" },
    bgImage: `${cdnUrl}encinarejo/pr-encinarejo-1.webp`,
    mainImage: `${cdnUrl}encinarejo/pr-encinarejo-2.webp`,
    type: ["fuentes", "empresas"],
    projectPage: {
      filtro: "Fuente",
      pageTitle: {
        es: "Fuente en Encinarejo | Mármol para fuentes públicas | Camar",
        en: "Fountain in Encinarejo | Marble for Public Fountains | Camar",
      },
      pageDescription: {
        es: "Fuente en Encinarejo, Córdoba. Descubre cómo Camar ha transformado espacios públicos con mármol y piedra natural de alta calidad. Explora nuestro proyecto de fuente en Encinarejo y conoce los detalles de su diseño y construcción.",
        en: "Encinarejo Fountain, Córdoba. Discover how Camar transformed public spaces with high-quality marble and natural stone. Explore our Encinarejo fountain project and learn about its design and construction details.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}encinarejo/pr-encinarejo-1.webp` },
        { type: "image", src: `${cdnUrl}encinarejo/pr-encinarejo-2.webp` },
        { type: "image", src: `${cdnUrl}encinarejo/pr-encinarejo-3.webp` },
        { type: "image", src: `${cdnUrl}encinarejo/pr-encinarejo-4.webp` },
        { type: "image", src: `${cdnUrl}encinarejo/pr-encinarejo-5.webp` },
        { type: "image", src: `${cdnUrl}encinarejo/pr-encinarejo-6.webp` },
        { type: "image", src: `${cdnUrl}encinarejo/pr-encinarejo-7.webp` },
        { type: "image", src: `${cdnUrl}encinarejo/pr-encinarejo-8.webp` },
        { type: "image", src: `${cdnUrl}encinarejo/pr-encinarejo-9.webp` },
      ],
      sobreElProyecto: {
        es: "Fuente pilón monumental realizada en mármol Anasol de Macael, situada en la plaza del pueblo Encinarejo de Córdoba con 7m de longitud y 350 cm de ancho.<br><br> Compuesta por piezas monolíticas cóncavas y convexas en las que el mármol Anasol dibuja curvas naturales e imprevisibles que sin duda realzan la belleza de la pieza.",
        en: "Monumental trough fountain made in Anasol marble from Macael, located in the village square of Encinarejo, Córdoba, measuring 7m long and 350 cm wide.<br><br>Composed of monolithic concave and convex pieces in which Anasol marble draws natural and unpredictable curves that undoubtedly enhance the beauty of the piece.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Fuentes", en: "Fountains" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2015",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Piezas monolíticas únicas",
            en: "Unique Monolithic Pieces",
          },
          content: {
            es: "Fuente compuesta por grandes bloques de mármol tallados en formas cóncavas y convexas que crean un juego visual único.",
            en: "Fountain composed of large marble blocks carved into concave and convex shapes that create a unique visual play.",
          },
        },
        {
          title: {
            es: "Mármol Anasol de Macael",
            en: "Anasol Marble from Macael",
          },
          content: {
            es: "Utilización de uno de los mármoles más apreciados de España, conocido por sus vetas naturales y su belleza atemporal.",
            en: "Use of one of Spain's most prized marbles, known for its natural veining and timeless beauty.",
          },
        },
        {
          title: {
            es: "Monumentalidad y funcionalidad",
            en: "Monumentality and Functionality",
          },
          content: {
            es: "Diseño que combina la función práctica de fuente pública con el valor artístico de una escultura monumental.",
            en: "Design that combines the practical function of a public fountain with the artistic value of a monumental sculpture.",
          },
        },
      ],
      materials: ["Anasol Macael"],
    },
  },
  {
    //RETABLO RENACENTISTA :checked:
    projectName: { es: "Retablo renacentista", en: "Renaissance Altarpiece" },
    title: { es: "Retablo renacentista", en: "Renaissance Altarpiece" },
    projectLocation: { es: "Castellón, España", en: "Castellón, Spain" },
    bgImage: `${cdnUrl}retablo-renacentista/pr-retablo-renacentista-1.webp`,
    mainImage: `${cdnUrl}retablo-renacentista/pr-retablo-renacentista-2.webp`,
    type: ["religiosos"],
    projectPage: {
      filtro: "Religioso",
      pageTitle: {
        es: "Retablo renacentista | Restauración en piedra natural | Camar",
        en: "Renaissance Altarpiece | Natural Stone Restoration | Camar",
      },
      pageDescription: {
        es: "Restauración integral de un retablo renacentista, utilizando piedra natural y técnicas tradicionales para recuperar la esencia original de la obra.",
        en: "Comprehensive restoration of a Renaissance altarpiece, using natural stone and traditional techniques to recover the original essence of the work.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}retablo-renacentista/pr-retablo-renacentista-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}retablo-renacentista/pr-retablo-renacentista-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}retablo-renacentista/pr-retablo-renacentista-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}retablo-renacentista/pr-retablo-renacentista-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}retablo-renacentista/pr-retablo-renacentista-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}retablo-renacentista/pr-retablo-renacentista-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}retablo-renacentista/pr-retablo-renacentista-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}retablo-renacentista/pr-retablo-renacentista-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}retablo-renacentista/pr-retablo-renacentista-9.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}retablo-renacentista/pr-retablo-renacentista-10.webp`,
        },
      ],
      sobreElProyecto: {
        es: "Retablo monumental clásico inspirado en el Retablo de la Basílica del Escorial de Madrid, realizado en mármol Verde India y Rosa Valencia. Esta obra maestra está compuesta por columnas estriadas con éntasis y capiteles dóricos, jónicos, corintios y compuestos, además de otros elementos decorativos de gran riqueza ornamental.<br><br>El proyecto representa un trabajo excepcional de cantería y escultura en piedra natural, donde cada elemento fue cuidadosamente tallado siguiendo las proporciones y técnicas del Renacimiento español. La combinación de mármoles verdes y rosas crea un juego cromático que realza la monumentalidad de la pieza.",
        en: "A monumental classical altarpiece inspired by the Altarpiece of the Basilica of El Escorial in Madrid, executed in Verde India and Rosa Valencia marble. This masterpiece is composed of fluted columns with entasis and Doric, Ionic, Corinthian and composite capitals, along with other richly ornamental decorative elements.<br><br>The project represents exceptional stonemasonry and sculptural work in natural stone, where each element was carefully carved following Renaissance Spanish proportions and techniques. The combination of green and pink marbles creates a chromatic contrast that enhances the piece's monumentality.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Religiosos", en: "Religious" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2020",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Inspiración renacentista",
            en: "Renaissance Inspiration",
          },
          content: {
            es: "Proyecto basado en el emblemático Retablo de la Basílica del Escorial, respetando las proporciones y órdenes clásicos.",
            en: "Project based on the emblematic Altarpiece of the Basilica of El Escorial, respecting classical proportions and orders.",
          },
        },
        {
          title: { es: "Columnas monumentales", en: "Monumental Columns" },
          content: {
            es: "Columnas estriadas con éntasis talladas en piezas únicas, con capiteles de diferentes órdenes arquitectónicos clásicos.",
            en: "Fluted columns with entasis carved as unique pieces, with capitals from different classical architectural orders.",
          },
        },
        {
          title: { es: "Mármoles nobles", en: "Noble Marbles" },
          content: {
            es: "Uso de Verde India y Rosa Valencia para crear un contraste cromático de gran belleza y solemnidad.",
            en: "Use of Verde India and Rosa Valencia to create a chromatic contrast of great beauty and solemnity.",
          },
        },
      ],
      materials: [
        "Blanco Macael",
        "Rosa Valencia",
        "Rojo Alicante",
        "Verde India",
      ],
    },
  },
  {
    //CATEDRAL DE SIGÜENZA :checked:
    projectName: { es: "Catedral de Siguenza", en: "Siguenza Cathedral" },
    title: { es: "Catedral de Sigüenza", en: "Sigüenza Cathedral" },
    projectLocation: { es: "España", en: "Spain" },
    bgImage: `${cdnUrl}catedral-siguenza/pr-catedral-siguenza-1.webp`,
    mainImage: `${cdnUrl}catedral-siguenza/pr-catedral-siguenza-3.webp`,
    type: ["religiosos"],
    projectPage: {
      filtro: "Religioso",
      pageTitle: {
        es: "Catedral de Sigüenza | Restauración en piedra natural | Camar",
        en: "Sigüenza Cathedral | Natural Stone Restoration | Camar",
      },
      pageDescription: {
        es: "Intervención en uno de los templos más emblemáticos de Castilla-La Mancha, preservando su arquitectura medieval y renacentista.",
        en: "Intervention in one of the most emblematic temples of Castilla-La Mancha, preserving its medieval and Renaissance architecture.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}catedral-siguenza/pr-catedral-siguenza-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-siguenza/pr-catedral-siguenza-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-siguenza/pr-catedral-siguenza-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-siguenza/pr-catedral-siguenza-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-siguenza/pr-catedral-siguenza-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-siguenza/pr-catedral-singueza-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-siguenza/pr-catedral-siguenza-9.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-siguenza/pr-catedral-singueza-10.webp`,
        },
      ],
      sobreElProyecto: {
        es: "La Catedral de Sigüenza, joya del arte gótico español, fue objeto de trabajos de conservación especializados debido al grave desgaste que el paso de los siglos había provocado en diferentes elementos arquitectónicos. Los ventanales ojivales calados con celosías de tracería gótica presentaban un alto grado de deterioro, especialmente aquellos orientados hacia el norte, donde la piedra arenisca estaba severamente afectada por la erosión y la humedad.<br><br>Nuestro trabajo incluyó la fabricación y reposición de elementos arquitectónicos siguiendo fielmente los diseños originales del siglo XIII, respetando las técnicas de cantería medieval y utilizando piedras compatibles con las originales.",
        en: "Sigüenza Cathedral, a jewel of Spanish Gothic art, underwent specialized conservation work due to severe deterioration that centuries had caused to different architectural elements. The ogival windows with Gothic tracery lattices showed a high degree of deterioration, especially those facing north, where the sandstone was severely affected by erosion and humidity.<br><br>Our work included the manufacture and replacement of architectural elements faithfully following the original 13th-century designs, respecting medieval stonemasonry techniques and using stones compatible with the originals.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Patrimonio histórico", en: "Historic Heritage" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2016",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Restauración gótica",
            en: "Gothic Restoration",
          },
          content: {
            es: "Intervención especializada en elementos góticos deteriorados, respetando las técnicas constructivas medievales.",
            en: "Specialized intervention on deteriorated Gothic elements, respecting medieval construction techniques.",
          },
        },
        {
          title: {
            es: "Celosías y tracerías",
            en: "Lattices and Tracery",
          },
          content: {
            es: "Fabricación de nuevos ventanales ojivales con celosías caladas siguiendo los diseños originales del siglo XIII.",
            en: "Manufacturing of new ogival windows with carved lattices following original 13th-century designs.",
          },
        },
        {
          title: {
            es: "Conservación patrimonial",
            en: "Heritage Conservation",
          },
          content: {
            es: "Trabajo que garantiza la preservación de uno de los monumentos góticos más importantes de España para futuras generaciones.",
            en: "Work that ensures the preservation of one of Spain's most important Gothic monuments for future generations.",
          },
        },
      ],
      materials: ["Piedra Caliza", "Arenisca"],
    },
  },
  {
    //CATEDRAL DE LEÓN :checked:
    projectName: { es: "Catedral de Leon", en: "Leon Cathedral" },
    title: { es: "Catedral de León", en: "León Cathedral" },
    projectLocation: { es: "León, España", en: "León, Spain" },
    bgImage: `${cdnUrl}catedral-leon/pr-catedral-de-len-1.webp`,
    mainImage: `${cdnUrl}catedral-leon/pr-catedral-de-len-5.webp`,
    type: ["religiosos"],
    projectPage: {
      filtro: "Religioso",
      pageTitle: {
        es: "Catedral de León | Intervención en piedra natural | Camar",
        en: "León Cathedral | Natural Stone Intervention | Camar",
      },
      pageDescription: {
        es: "Restauración en una de las catedrales góticas más importantes de Europa.",
        en: "Restoration in one of the most important Gothic cathedrals in Europe.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}catedral-leon/pr-catedral-de-len-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-leon/pr-catedral-de-len-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-leon/pr-catedral-de-len-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-leon/pr-catedral-de-len-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-leon/pr-catedral-de-len-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-leon/pr-catedral-de-len-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-leon/pr-catedral-de-len-9.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}catedral-leon/pr-catedral-de-len-10.webp`,
        },
      ],
      sobreElProyecto: {
        es: "La Catedral de León, una de las joyas más resplandecientes del arte gótico europeo, conocida como la 'Pulchra Leonina' por su extraordinaria belleza. En Camar recibimos el encargo de realizar réplicas exactas de dos esculturas que originalmente estuvieron situadas en la portada de la Catedral y que desde hace años se conservan protegidas en el interior del Claustro.<br><br>Mediante nuestro Servicio de Escaneo 3D para escultura, realizamos un escaneo de alta precisión del Anciano Simeón y Juan el Evangelista, piezas maestras esculpidas entre los años 1290 y 1295. Este proyecto permite conservar las originales mientras se exhiben réplicas exactas que mantienen vivo el legado artístico de la catedral para las futuras generaciones.",
        en: "León Cathedral, one of the most resplendent jewels of European Gothic art, known as the 'Pulchra Leonina' for its extraordinary beauty. At Camar, we received the commission to create exact replicas of two sculptures originally located on the Cathedral's façade and which have been preserved for years inside the Cloister.<br><br>Using our 3D Scanning Service for sculpture, we performed high-precision scanning of the Elder Simeon and John the Evangelist, masterpieces sculpted between 1290 and 1295. This project allows the originals to be preserved while exact replicas are displayed, keeping the cathedral's artistic legacy alive for future generations.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Patrimonio histórico", en: "Historic Heritage" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2017",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Tecnología 3D aplicada al patrimonio",
            en: "3D Technology Applied to Heritage",
          },
          content: {
            es: "Escaneo tridimensional de alta precisión para capturar cada detalle de las esculturas góticas del siglo XIII.",
            en: "High-precision three-dimensional scanning to capture every detail of 13th-century Gothic sculptures.",
          },
        },
        {
          title: {
            es: "Réplicas exactas",
            en: "Exact Replicas",
          },
          content: {
            es: "Fabricación de copias idénticas que permiten conservar las originales mientras se mantiene la experiencia visual completa.",
            en: "Manufacturing of identical copies that allow the originals to be preserved while maintaining the complete visual experience.",
          },
        },
        {
          title: {
            es: "Conservación y divulgación",
            en: "Conservation and Dissemination",
          },
          content: {
            es: "Proyecto que equilibra la necesidad de proteger obras maestras medievales con el deseo de hacerlas accesibles al público.",
            en: "A project that balances the need to protect medieval masterpieces with the desire to make them accessible to the public.",
          },
        },
      ],
      materials: ["Piedra Caliza"],
    },
  },
  {
    //HAMMAM GLENT :checked:
    projectName: { es: "Hammam Glent", en: "Hammam Glent" },
    title: { es: "Hammam Glent", en: "Hammam Glent" },
    projectLocation: { es: "Moscú, Rusia", en: "Moscow, Russia" },
    bgImage: `${cdnUrl}hammam-glent/pr-hammam-glent-1.webp`,
    mainImage: `${cdnUrl}hammam-glent/pr-hammam-glent-2.webp`,
    type: [],
    projectPage: {
      filtro: "Singular",
      pageTitle: {
        es: "Hammam Glent | Mármol para spas de lujo | Camar",
        en: "Hammam Glent | Marble for Luxury Spas | Camar",
      },
      pageDescription: {
        es: "Diseño y ejecución de un hammam exclusivo, combinando mármol natural Azul Macaubas y Blanco Carrara con soluciones arquitectónicas contemporáneas para crear un espacio de bienestar único.",
        en: "Design and execution of an exclusive hammam, combining natural Azul Macaubas and Blanco Carrara marble with contemporary architectural solutions to create a unique wellness space.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}hammam-glent/pr-hammam-glent-1.webp` },
        { type: "image", src: `${cdnUrl}hammam-glent/pr-hammam-glent-2.webp` },
        { type: "image", src: `${cdnUrl}hammam-glent/pr-hammam-glent-3.webp` },
        { type: "image", src: `${cdnUrl}hammam-glent/pr-hammam-glent-4.webp` },
      ],
      sobreElProyecto: {
        es: "El Hammam Glent es un proyecto excepcional que combina la tradición del baño turco con el diseño contemporáneo y materiales nobles. Ubicado en un entorno de lujo, este hammam fue diseñado para ofrecer una experiencia sensorial completa donde el mármol natural juega un papel protagonista.<br><br>Utilizamos Azul Macaubas y Blanco Carrara C para crear un contraste cromático sofisticado que, combinado con un sistema de iluminación especializado, transforma el espacio en un santuario de bienestar. Cada superficie fue cuidadosamente seleccionada y tratada para resistir las condiciones de alta humedad y temperatura propias de un hammam.",
        en: "Hammam Glent is an exceptional project that combines the tradition of Turkish baths with contemporary design and noble materials. Located in a luxury setting, this hammam was designed to offer a complete sensory experience where natural marble plays a leading role.<br><br>We used Azul Macaubas and Blanco Carrara C to create a sophisticated chromatic contrast that, combined with a specialized lighting system, transforms the space into a wellness sanctuary. Each surface was carefully selected and treated to withstand the high humidity and temperature conditions typical of a hammam.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Spa y bienestar", en: "Spa and Wellness" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2019",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Rusia", en: "Russia" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Mármoles para ambientes húmedos",
            en: "Marbles for Humid Environments",
          },
          content: {
            es: "Selección especializada de Azul Macaubas y Blanco Carrara con tratamientos impermeabilizantes para garantizar durabilidad en entornos de spa.",
            en: "Specialized selection of Azul Macaubas and Blanco Carrara with waterproofing treatments to ensure durability in spa environments.",
          },
        },
        {
          title: {
            es: "Iluminación arquitectónica",
            en: "Architectural Lighting",
          },
          content: {
            es: "Sistema de luz LED integrado que realza las vetas naturales del mármol y crea una atmósfera relajante.",
            en: "Integrated LED lighting system that enhances the natural veining of marble and creates a relaxing atmosphere.",
          },
        },
        {
          title: {
            es: "Diseño sensorial",
            en: "Sensory Design",
          },
          content: {
            es: "Proyecto que combina temperatura, humedad, texturas y luz para crear una experiencia de bienestar completa.",
            en: "A project that combines temperature, humidity, textures and light to create a complete wellness experience.",
          },
        },
      ],
      materials: ["Azul Macaubas", "Blanco Carrara C"],
    },
  },
  {
    //HAMMAM DUBROVKA :checked:
    projectName: { es: "Hammam Dubrovka", en: "Hammam Dubrovka" },
    title: { es: "Hammam Dubrovka", en: "Hammam Dubrovka" },
    projectLocation: { es: "Moscú, Rusia", en: "Moscow, Russia" },
    bgImage: `${cdnUrl}hammam-dubrovka/pr-hammam-dubrovka-1.webp`,
    mainImage: `${cdnUrl}hammam-dubrovka/pr-hammam-dubrovka-2.webp`,
    type: [],
    projectPage: {
      filtro: "Singular",
      pageTitle: {
        es: "Hammam Dubrovka | Spa de lujo con mármol | Camar",
        en: "Hammam Dubrovka | Luxury Spa with Marble | Camar",
      },
      pageDescription: {
        es: "Diseño de un hammam de alto nivel con mármol blanco natural y soluciones contemporáneas de iluminación LED para crear un espacio de bienestar excepcional.",
        en: "Design of a high-end hammam with natural white marble and contemporary LED lighting solutions to create an exceptional wellness space.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}hammam-dubrovka/pr-hammam-dubrovka-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hammam-dubrovka/pr-hammam-dubrovka-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hammam-dubrovka/pr-hammam-dubrovka-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hammam-dubrovka/pr-hammam-dubrovka-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hammam-dubrovka/pr-hammam-dubrovka-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hammam-dubrovka/pr-hammam-dubrovka-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hammam-dubrovka/pr-hammam-dubrovka-7.webp`,
        },
      ],
      sobreElProyecto: {
        es: "El Hammam Dubrovka representa la evolución del concepto tradicional de baño turco hacia una experiencia contemporánea de wellness. Este proyecto destaca por su uso exclusivo de mármol blanco de primera calidad, creando un ambiente luminoso y sereno que invita a la relajación absoluta.<br><br>Cada pieza de mármol fue cortada y pulida según especificaciones exactas para lograr continuidad visual perfecta. El sistema de iluminación LED retroiluminada integrada en el mármol crea efectos visuales impactantes, mientras que la acústica del espacio fue cuidadosamente diseñada para complementar la experiencia sensorial del agua y el vapor.",
        en: "Hammam Dubrovka represents the evolution of the traditional Turkish bath concept towards a contemporary wellness experience. This project stands out for its exclusive use of premium white marble, creating a bright and serene atmosphere that invites absolute relaxation.<br><br>Each piece of marble was cut and polished to exact specifications to achieve perfect visual continuity. The backlit LED lighting system integrated into the marble creates stunning visual effects, while the acoustics of the space were carefully designed to complement the sensory experience of water and steam.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Spa y bienestar", en: "Spa and Wellness" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2020",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Rusia", en: "Russia" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Mármol con iluminación integrada",
            en: "Marble with Integrated Lighting",
          },
          content: {
            es: "Piezas de mármol blanco especialmente preparadas para integrar sistemas LED retroiluminados que crean efectos lumínicos únicos.",
            en: "White marble pieces specially prepared to integrate backlit LED systems that create unique lighting effects.",
          },
        },
        {
          title: {
            es: "Corte y pulido de precisión",
            en: "Precision Cutting and Polishing",
          },
          content: {
            es: "Fabricación a medida de cada elemento con acabados que garantizan continuidad visual y resistencia al ambiente húmedo.",
            en: "Custom manufacturing of each element with finishes that ensure visual continuity and resistance to humid environments.",
          },
        },
        {
          title: {
            es: "Experiencia multisensorial",
            en: "Multisensory Experience",
          },
          content: {
            es: "Integración de sonido, luz, agua y vapor para crear un santuario de bienestar completo.",
            en: "Integration of sound, light, water and steam to create a complete wellness sanctuary.",
          },
        },
      ],
      materials: ["Travertino Clasico"],
    },
  },
  {
    //HAMMAM LUKOMORIE :checked:
    projectName: { es: "Hammam Lukomorie", en: "Hammam Lukomorie" },
    title: { es: "Hammam Lukomorie", en: "Hammam Lukomorie" },
    projectLocation: { es: "Moscú, Rusia", en: "Moscow, Russia" },
    bgImage: `${cdnUrl}hammam-lukomorie/pr-hammam-lukomorie-1.webp`,
    mainImage: `${cdnUrl}hammam-lukomorie/pr-hammam-lukomorie-2.webp`,
    type: [],
    projectPage: {
      filtro: "Singular",
      pageTitle: {
        es: "Hammam Lukomorie | Spa exclusivo con mármol | Camar",
        en: "Hammam Lukomorie | Exclusive Spa with Marble | Camar",
      },
      pageDescription: {
        es: "Creación de un hammam exclusivo combinando mármol blanco natural, agua, vapor y luz ambiental para una experiencia de bienestar incomparable.",
        en: "Creation of an exclusive hammam combining natural white marble, water, steam and ambient lighting for an incomparable wellness experience.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}hammam-lukomorie/pr-hammam-lukomorie-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hammam-lukomorie/pr-hammam-lukomorie-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hammam-lukomorie/pr-hammam-lukomorie-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hammam-lukomorie/pr-hammam-lukomorie-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hammam-lukomorie/pr-hammam-lukomorie-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hammam-lukomorie/pr-hammam-lukomorie-7.webp`,
        },
      ],
      sobreElProyecto: {
        es: "El Hammam Lukomorie es un proyecto que celebra la pureza y simplicidad del mármol blanco como protagonista absoluto del espacio. Diseñado con una filosofía minimalista, este hammam crea una experiencia de bienestar donde la belleza natural de la piedra se combina con formas orgánicas y fluidas.<br><br>La selección artesanal del mármol garantizó vetas sutiles y tonalidades uniformes que aportan serenidad visual. El sistema de iluminación ambiental fue diseñado para crear gradientes de luz que cambian según el momento del día, mientras que las superficies pulidas del mármol reflejan y amplifican la calidez del espacio.",
        en: "Hammam Lukomorie is a project that celebrates the purity and simplicity of white marble as the absolute protagonist of the space. Designed with a minimalist philosophy, this hammam creates a wellness experience where the natural beauty of stone combines with organic and fluid forms.<br><br>The artisanal selection of marble ensured subtle veining and uniform tones that provide visual serenity. The ambient lighting system was designed to create light gradients that change according to the time of day, while the polished marble surfaces reflect and amplify the warmth of the space.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Spa y bienestar", en: "Spa and Wellness" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2020",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Rusia", en: "Russia" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Filosofía minimalista",
            en: "Minimalist Philosophy",
          },
          content: {
            es: "Diseño que celebra la pureza del mármol blanco con formas orgánicas y acabados que transmiten serenidad.",
            en: "Design that celebrates the purity of white marble with organic forms and finishes that convey serenity.",
          },
        },
        {
          title: {
            es: "Selección artesanal",
            en: "Artisanal Selection",
          },
          content: {
            es: "Cada pieza de mármol fue seleccionada por su uniformidad cromática y vetas sutiles para crear un ambiente cohesivo.",
            en: "Each piece of marble was selected for its chromatic uniformity and subtle veining to create a cohesive environment.",
          },
        },
        {
          title: {
            es: "Luz y reflejo",
            en: "Light and Reflection",
          },
          content: {
            es: "Sistema de iluminación ambiental que interactúa con las superficies pulidas del mármol para amplificar la sensación de amplitud.",
            en: "Ambient lighting system that interacts with polished marble surfaces to amplify the sense of spaciousness.",
          },
        },
      ],
      materials: ["Mármol Blanco", "Sistema de Iluminación Ambiental"],
    },
  },
  {
    //CASA PRIVADA EN ÁVILA :checked:
    projectName: { es: "Casa privada en Avila", en: "Private Home in Avila" },
    title: { es: "Casa privada en Ávila", en: "Private Home in Ávila" },
    projectLocation: { es: "Ávila, España", en: "Ávila, Spain" },
    bgImage: `${cdnUrl}casa-privada-avila/pr-casa-privada-en-vila-1.webp`,
    mainImage: `${cdnUrl}casa-privada-avila/pr-casa-privada-en-vila-2.webp`,
    type: ["hogar"],
    projectPage: {
      filtro: "Vivienda Privada",
      pageTitle: {
        es: "Casa privada en Ávila | Diseño residencial de lujo | Camar",
        en: "Private Home in Ávila | Luxury Residential Design | Camar",
      },
      pageDescription: {
        es: "Proyecto de vivienda privada donde se combina mármol Verde Azulado y Blanco Macael con diseño contemporáneo, creando espacios de gran elegancia y confort.",
        en: "Private residence project combining Verde Azulado and Blanco Macael marble with contemporary design, creating spaces of great elegance and comfort.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}casa-privada-avila/pr-casa-privada-en-vila-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-avila/pr-casa-privada-en-vila-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-avila/pr-casa-privada-en-vila-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-avila/pr-casa-privada-en-vila-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-avila/pr-casa-privada-en-vila-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-avila/pr-casa-privada-en-vila-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-avila/pr-casa-privada-en-vila-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-avila/pr-casa-privada-en-vila-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-avila/pr-casa-privada-en-vila-9.webp`,
        },
      ],
      sobreElProyecto: {
        es: "Vivienda situada en Ávila, al norte de Madrid, que destaca por el uso magistral del Mármol Verde Azulado en combinación con el mármol Blanco Macael. Esta residencia contemporánea muestra cómo dos mármoles de carácter tan diferente pueden dialogar armoniosamente creando espacios de gran personalidad.<br><br>El Verde Azulado aporta profundidad y sofisticación a zonas como baños y cocina, mientras que el Blanco Macael se utiliza en áreas comunes aportando luminosidad y amplitud. El recorrido por todas las estancias revela un hilo conductor marcado por estos nobles materiales que unifican el diseño interior de la vivienda.",
        en: "A home located in Ávila, north of Madrid, that stands out for its masterful use of Verde Azulado Marble in combination with Blanco Macael marble. This contemporary residence shows how two marbles of such different character can dialogue harmoniously, creating spaces of great personality.<br><br>The Verde Azulado brings depth and sophistication to areas like bathrooms and kitchen, while Blanco Macael is used in common areas providing brightness and spaciousness. The journey through all rooms reveals a connecting thread marked by these noble materials that unify the home's interior design.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Vivienda particular", en: "Private Residence" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2019",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Contraste cromático",
            en: "Chromatic Contrast",
          },
          content: {
            es: "Combinación de Verde Azulado y Blanco Macael que crea un diálogo visual sofisticado entre profundidad y luminosidad.",
            en: "Combination of Verde Azulado and Blanco Macael that creates a sophisticated visual dialogue between depth and luminosity.",
          },
        },
        {
          title: {
            es: "Mármol integral",
            en: "Comprehensive Marble",
          },
          content: {
            es: "Uso de mármol natural en suelos, encimeras, baños y elementos decorativos, creando continuidad visual en toda la vivienda.",
            en: "Use of natural marble in floors, countertops, bathrooms and decorative elements, creating visual continuity throughout the home.",
          },
        },
        {
          title: {
            es: "Diseño personalizado",
            en: "Personalized Design",
          },
          content: {
            es: "Cada estancia fue diseñada específicamente según las necesidades y el estilo de vida de los propietarios.",
            en: "Each room was designed specifically according to the owners' needs and lifestyle.",
          },
        },
      ],
      materials: [
        "Blanco Macael",
        "Crema Marfil",
        "Verde Azulado",
        "Verde India",
        "Rosa Portugues",
      ],
    },
  },
  {
    //PROYECTO KOTELNICHESKAYA :checked:
    projectName: {
      es: "Proyecto Kotelnicheskaya",
      en: "Kotelnicheskaya Project",
    },
    title: { es: "Proyecto Kotelnicheskaya", en: "Kotelnicheskaya Project" },
    projectLocation: { es: "Moscú, Rusia", en: "Moscow, Russia" },
    bgImage: `${cdnUrl}proyecto-kotelnicheskaya/pr-kotelnicheskaya-1.webp`,
    mainImage: `${cdnUrl}proyecto-kotelnicheskaya/pr-kotelnicheskaya-2.webp`,
    type: ["hogar"],
    projectPage: {
      filtro: "Vivienda Privada",
      pageTitle: {
        es: "Proyecto Kotelnicheskaya | Residencial de lujo en Moscú | Camar",
        en: "Kotelnicheskaya Project | Luxury Residential in Moscow | Camar",
      },
      pageDescription: {
        es: "Espectacular complejo residencial de lujo en Moscú con paneles moldurados en piedra natural a modo de boiserie, combinando tradición y modernidad en un proyecto arquitectónico excepcional.",
        en: "Spectacular luxury residential complex in Moscow with molded natural stone panels resembling boiserie, combining tradition and modernity in an exceptional architectural project.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}proyecto-kotelnicheskaya/pr-kotelnicheskaya-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}proyecto-kotelnicheskaya/pr-kotelnicheskaya-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}proyecto-kotelnicheskaya/pr-kotelnicheskaya-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}proyecto-kotelnicheskaya/pr-kotelnicheskaya-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}proyecto-kotelnicheskaya/pr-kotelnicheskaya-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}proyecto-kotelnicheskaya/pr-kotelnicheskaya-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}proyecto-kotelnicheskaya/pr-kotelnicheskaya-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}proyecto-kotelnicheskaya/pr-kotelnicheskaya-8.webp`,
        },
      ],
      sobreElProyecto: {
        es: "El Proyecto Kotelnicheskaya es un espectacular complejo residencial de lujo ubicado en una zona pintoresca de Moscú. Este ambicioso proyecto está formado por cuatro edificios diferentes de ocho plantas cada uno, donde Camar realizó los aplacados de paredes con paneles moldurados en altos relieves a modo de boiserie clásica.<br><br>Los paneles decorativos fueron fabricados en piedra natural con molduras y relieves inspirados en la tradición arquitectónica europea, creando interiores de gran elegancia. El trabajo requirió una coordinación excepcional entre diseño, fabricación y montaje para garantizar la continuidad de los patrones decorativos a lo largo de todos los espacios comunes del complejo.",
        en: "The Kotelnicheskaya Project is a spectacular luxury residential complex located in a picturesque area of Moscow. This ambitious project consists of four different eight-story buildings, where Camar executed wall cladding with molded panels in high relief resembling classical boiserie.<br><br>The decorative panels were manufactured in natural stone with moldings and reliefs inspired by European architectural tradition, creating elegant interiors. The work required exceptional coordination between design, manufacturing and installation to ensure continuity of decorative patterns throughout all common areas of the complex.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Residencial de lujo", en: "Luxury Residential" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2021",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Rusia", en: "Russia" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Paneles moldurados en piedra",
            en: "Molded Stone Panels",
          },
          content: {
            es: "Fabricación de paneles decorativos con molduras y altos relieves que recrean la elegancia de las boiseries clásicas.",
            en: "Manufacturing of decorative panels with moldings and high reliefs that recreate the elegance of classical boiseries.",
          },
        },
        {
          title: {
            es: "Complejo de gran escala",
            en: "Large-Scale Complex",
          },
          content: {
            es: "Proyecto que abarca cuatro edificios de ocho plantas con espacios comunes de alto standing.",
            en: "A project encompassing four eight-story buildings with high-end common areas.",
          },
        },
        {
          title: {
            es: "Integración de materiales nobles",
            en: "Integration of Noble Materials",
          },
          content: {
            es: "Combinación de piedra natural con madera y elementos metálicos para crear interiores sofisticados.",
            en: "Combination of natural stone with wood and metallic elements to create sophisticated interiors.",
          },
        },
      ],
      materials: ["Bottichino Fiorito", "Crema Marfil", "Negro Bamboo"],
    },
  },
  {
    //ÁTICO PRIVADO :checked:
    projectName: { es: "Atico privado", en: "Private Penthouse" },
    title: { es: "Ático privado", en: "Private Penthouse" },
    projectLocation: { es: "Moscú, Rusia", en: "Moscow, Russia" },
    bgImage: `${cdnUrl}atico-privado/pr-tico-privado-mosc-8.webp`,
    mainImage: `${cdnUrl}atico-privado/pr-tico-privado-mosc-11.webp`,
    type: ["hogar"],
    projectPage: {
      filtro: "Vivienda Privada",
      pageTitle: {
        es: "Ático privado en Moscú | Residencia de lujo | Camar",
        en: "Private Penthouse in Moscow | Luxury Residence | Camar",
      },
      pageDescription: {
        es: "Lujoso ático de dos plantas con vistas al Kremlin, donde se combinan ónices, mármoles, madera y latón usando técnica Water Jet para crear un espacio exclusivo de más de 200 m².",
        en: "Luxurious two-floor penthouse with views of the Kremlin, combining onyx, marble, wood and brass using Water Jet technique to create an exclusive space of over 200 m².",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}atico-privado/pr-tico-privado-mosc-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}atico-privado/pr-tico-privado-mosc-11.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}atico-privado/pr-tico-privado-mosc-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}atico-privado/pr-tico-privado-mosc-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}atico-privado/pr-tico-privado-mosc-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}atico-privado/pr-tico-privado-mosc-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}atico-privado/pr-tico-privado-mosc-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}atico-privado/pr-tico-privado-mosc-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}atico-privado/pr-tico-privado-mosc-9.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}atico-privado/pr-tico-privado-mosc-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}atico-privado/pr-tico-privado-mosc-10.webp`,
        },
      ],
      sobreElProyecto: {
        es: "Un lujoso ático de dos plantas en Moscú con vistas privilegiadas a la Plaza Roja, el Kremlin y la Catedral de San Basilio. Este proyecto excepcional empleó diferentes tipos de ónices y mármoles combinados magistralmente con madera noble y latón, creando espacios de gran sofisticación y calidez.<br><br>Suministramos más de 200 m² de piedra natural para suelos, escaleras y encimeras de lavabo, utilizando la avanzada técnica de corte por agua a presión (Water Jet) que permite crear diseños complejos e incrustaciones decorativas con precisión milimétrica. El resultado es una residencia que equilibra perfectamente lujo contemporáneo con la calidez de los materiales naturales.",
        en: "A luxurious two-floor penthouse in Moscow with privileged views of Red Square, the Kremlin and St. Basil's Cathedral. This exceptional project employed different types of onyx and marble masterfully combined with noble wood and brass, creating spaces of great sophistication and warmth.<br><br>We supplied over 200 m² of natural stone for floors, stairs and bathroom countertops, using the advanced water jet cutting technique that allows creating complex designs and decorative inlays with millimetric precision. The result is a residence that perfectly balances contemporary luxury with the warmth of natural materials.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Vivienda particular", en: "Private Residence" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2020",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Rusia", en: "Russia" },
        },
      ],
      masInformacion: [
        {
          title: { es: "Vistas privilegiadas", en: "Privileged Views" },
          content: {
            es: "Ubicación excepcional con vistas panorámicas a los monumentos más emblemáticos de Moscú: Plaza Roja, Kremlin y Catedral de San Basilio.",
            en: "Exceptional location with panoramic views of Moscow's most emblematic monuments: Red Square, Kremlin and St. Basil's Cathedral.",
          },
        },
        {
          title: { es: "Técnica Water Jet", en: "Water Jet Technique" },
          content: {
            es: "Uso de corte por agua a presión para crear diseños complejos, incrustaciones y patrones decorativos con precisión milimétrica.",
            en: "Use of water jet cutting to create complex designs, inlays and decorative patterns with millimetric precision.",
          },
        },
        {
          title: {
            es: "Combinación de materiales nobles",
            en: "Noble Materials Combination",
          },
          content: {
            es: "Integración armoniosa de ónices, mármoles, madera y latón en más de 200 m² de superficies.",
            en: "Harmonious integration of onyx, marble, wood and brass across over 200 m² of surfaces.",
          },
        },
      ],
      materials: [
        "Giallo Reale",
        "Onix Rojo Multicolor",
        "Onix Verde Irani",
        "Rojo Verona",
        "Verde India",
        "Verde Sabana",
      ],
    },
  },
  {
    //ESCALERA ONIX :checked:
    projectName: { es: "Escalera Onix", en: "Onyx Staircase" },
    title: { es: "Escalera Onix", en: "Onyx Staircase" },
    projectLocation: { es: "Budapest, Hungría", en: "Budapest, Hungary" },
    bgImage: `${cdnUrl}escalera-onix/pr-escalera-onix-2.webp`,
    mainImage: `${cdnUrl}escalera-onix/pr-escalera-onix-10.webp`,
    type: ["hogar"],
    projectPage: {
      filtro: "Vivienda Privada",
      pageTitle: {
        es: "Escalera Onix | Escultura arquitectónica en mármol | Camar",
        en: "Onyx Staircase | Architectural Marble Sculpture | Camar",
      },
      pageDescription: {
        es: "Escalera de cinco plantas realizada íntegramente en Ónix Miel con técnica Book Match, creando una pieza escultórica que conecta todos los niveles de una vivienda privada en Budapest.",
        en: "Five-story staircase made entirely of Honey Onyx with Book Match technique, creating a sculptural piece that connects all levels of a private residence in Budapest.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}escalera-onix/pr-escalera-onix-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}escalera-onix/pr-escalera-onix-10.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}escalera-onix/pr-escalera-onix-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}escalera-onix/pr-escalera-onix-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}escalera-onix/pr-escalera-onix-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}escalera-onix/pr-escalera-onix-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}escalera-onix/pr-escalera-onix-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}escalera-onix/pr-escalera-onix-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}escalera-onix/pr-escalera-onix-9.webp`,
        },
      ],
      sobreElProyecto: {
        es: "Uno de los proyectos más bellos y técnicamente complejos realizados por Camar. Se trata de una escalera monumental de cinco plantas instalada en una vivienda privada de Budapest, Hungría, realizada íntegramente en Ónix Miel. Esta piedra semipreciosa fue seleccionada por su extraordinaria translucidez y sus tonalidades cálidas que van del dorado al ámbar.<br><br>En su elaboración se utilizó la sofisticada técnica de Book Match, que consiste en cortar bloques consecutivos del mismo bloque de ónix y colocarlos como páginas de un libro para crear simetría especular. Esto asegura que el veteado natural continúe de forma ininterrumpida por todos los elementos de la escalera, creando una continuidad visual espectacular a lo largo de los cinco niveles.",
        en: "One of the most beautiful and technically complex projects carried out by Camar. It is a monumental five-story staircase installed in a private residence in Budapest, Hungary, made entirely of Honey Onyx. This semi-precious stone was selected for its extraordinary translucency and warm tones ranging from gold to amber.<br><br>Its elaboration used the sophisticated Book Match technique, which consists of cutting consecutive blocks from the same onyx block and placing them like pages of a book to create mirror symmetry. This ensures that the natural veining continues uninterruptedly through all elements of the staircase, creating spectacular visual continuity across all five levels.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Proyecto singular", en: "Unique Project" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2018",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Hungría", en: "Hungary" },
        },
      ],
      masInformacion: [
        {
          title: { es: "Técnica Book Match", en: "Book Match Technique" },
          content: {
            es: "Corte y colocación especular de láminas consecutivas de ónix para crear simetría perfecta y continuidad del veteado natural.",
            en: "Cutting and mirror placement of consecutive onyx slabs to create perfect symmetry and continuity of natural veining.",
          },
        },
        {
          title: { es: "Ónix Miel translúcido", en: "Translucent Honey Onyx" },
          content: {
            es: "Piedra semipreciosa seleccionada por su translucidez excepcional que permite el paso de la luz, creando efectos lumínicos mágicos.",
            en: "Semi-precious stone selected for its exceptional translucency that allows light to pass through, creating magical lighting effects.",
          },
        },
        {
          title: { es: "Escalera escultórica", en: "Sculptural Staircase" },
          content: {
            es: "Pieza arquitectónica que funciona como escultura habitable, conectando cinco plantas con belleza y funcionalidad.",
            en: "Architectural piece that functions as a habitable sculpture, connecting five floors with beauty and functionality.",
          },
        },
      ],
      materials: ["Onix Miel"],
    },
  },
  {
    //HOTEL HILTON :checked:
    projectName: { es: "Hotel Hilton", en: "Hilton Hotel" },
    title: { es: "Hotel Hilton", en: "Hilton Hotel" },
    projectLocation: { es: "Toledo, España", en: "Toledo, Spain" },
    bgImage: `${cdnUrl}hotel-hilton/pr-hotel-hilton-2.webp`,
    mainImage: `${cdnUrl}hotel-hilton/pr-hotel-hilton-3.webp`,
    type: ["hoteles"],
    projectPage: {
      filtro: "Hotel",
      pageTitle: {
        es: "Hotel Hilton España | Boiserie en Caliza Blanca | Camar Mármoles",
        en: "Hilton Hotel Spain | White Limestone Boiserie | Camar Marble",
      },
      pageDescription: {
        es: "Revestimientos versallescos en Caliza Blanca para el Hotel Hilton. Boiseries molduradas, embocaduras y aplacados de gran formato con terminaciones apomazadas y pulidas.",
        en: "Versailles-style cladding in White Limestone for the Hilton Hotel. Molded boiseries, door frames and large-format cladding with honed and polished finishes.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}hotel-hilton/pr-hotel-hilton-2.webp` },
        { type: "image", src: `${cdnUrl}hotel-hilton/pr-hotel-hilton-3.webp` },
        { type: "image", src: `${cdnUrl}hotel-hilton/pr-hotel-hilton-4.webp` },
        { type: "image", src: `${cdnUrl}hotel-hilton/pr-hotel-hilton-5.webp` },
        { type: "image", src: `${cdnUrl}hotel-hilton/pr-hotel-hilton-1.webp` },
        { type: "image", src: `${cdnUrl}hotel-hilton/pr-hotel-hilton-6.webp` },
        { type: "image", src: `${cdnUrl}hotel-hilton/pr-hotel-hilton-7.webp` },
        { type: "image", src: `${cdnUrl}hotel-hilton/pr-hotel-hilton-8.webp` },
        { type: "image", src: `${cdnUrl}hotel-hilton/pr-hotel-hilton-9.webp` },
        { type: "image", src: `${cdnUrl}hotel-hilton/pr-hotel-hilton-10.webp` },
      ],
      sobreElProyecto: {
        es: "En este magno hotel destacan los imponentes aplacados ejecutados en Boiseries moldurada en piedra Caliza Blanca en terminaciones apomazada y pulida con revestimientos de todas las zonas principales además de embocaduras, pasos de puertas, ventanales, embocaduras de ascensores y revestimientos de pilares, todo ello ejecutado con una fina terminación que permite un ambiente versallesco al más puro estilo de los palacios franceses.<br><br>La magnitud del proyecto exigió una coordinación perfecta entre tallado, pulido y montaje. Cada pieza de boiserie fue elaborada con precisión milimétrica para garantizar el perfecto ensamblaje de molduras, capiteles y recuadros decorativos. El resultado es un espacio hotelero que evoca el esplendor de Versalles con la funcionalidad contemporánea.<br><br>Los revestimientos de pilares y embocaduras configuran una arquitectura interior coherente donde la Caliza Blanca aporta luminosidad y elegancia. Las terminaciones apomazadas y pulidas contrastan sutilmente creando juegos de luz que realzan la nobleza del material pétreo en todo el establecimiento.",
        en: "In this magnificent hotel, the imposing cladding executed in molded White Limestone Boiseries with honed and polished finishes stands out, covering all main areas as well as door frames, passageways, windows, elevator frames and pillar cladding, all executed with fine finishing that creates a Versailles-like atmosphere in the purest style of French palaces.<br><br>The magnitude of the project required perfect coordination between carving, polishing and installation. Each boiserie piece was crafted with millimetric precision to ensure perfect assembly of moldings, capitals and decorative panels. The result is a hotel space that evokes the splendor of Versailles with contemporary functionality.<br><br>The pillar and door frame cladding configure a coherent interior architecture where White Limestone provides luminosity and elegance. The honed and polished finishes contrast subtly, creating plays of light that enhance the nobility of the stone material throughout the establishment.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Hotel de lujo", en: "Luxury Hotel" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2015",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: { es: "Boiserie versallesca", en: "Versailles Boiserie" },
          content: {
            es: "Paneles moldurados en Caliza Blanca con diseño inspirado en los palacios franceses del siglo XVIII. Incluyen capiteles, molduras perimetrales y recuadros decorativos tallados a medida que configuran una arquitectura interior de gran prestancia.",
            en: "Molded panels in White Limestone with design inspired by 18th century French palaces. Include capitals, perimeter moldings and custom-carved decorative panels that create a grand interior architecture.",
          },
        },
        {
          title: { es: "Embocaduras monumentales", en: "Monumental Frames" },
          content: {
            es: "Marcos de puertas, ventanales y ascensores revestidos en piedra con molduras clásicas. Cada embocadura funciona como elemento arquitectónico que aporta continuidad visual y solemnidad al conjunto, destacando la calidad constructiva del hotel.",
            en: "Door, window and elevator frames clad in stone with classical moldings. Each frame functions as an architectural element that provides visual continuity and solemnity to the ensemble, highlighting the hotel's construction quality.",
          },
        },
        {
          title: { es: "Doble terminación", en: "Double Finish" },
          content: {
            es: "Combinación de acabados apomazados (mate sedoso) y pulidos (brillo espejo) sobre la misma Caliza Blanca. Esta técnica genera contrastes lumínicos sutiles que enriquecen visualmente los espacios sin romper la armonía cromática del conjunto.",
            en: "Combination of honed (silky matte) and polished (mirror shine) finishes on the same White Limestone. This technique generates subtle lighting contrasts that visually enrich the spaces without breaking the chromatic harmony of the ensemble.",
          },
        },
      ],
      materials: [
        "Azul Macaubas",
        "Blanco Sivec",
        "Caliza Lumaquela",
        "Emperador Dark",
        "Travertino Gold",
      ],
    },
  },
  {
    //HOTEL DOÑA XIMENA :checked:
    projectName: { es: "Hotel Dona Ximena", en: "Dona Ximena Hotel" },
    title: { es: "Hotel Doña Ximena", en: "Doña Ximena Hotel" },
    projectLocation: { es: "Ávila, España", en: "Ávila, Spain" },
    bgImage: `${cdnUrl}hotel-dona-ximena/pr-hotel-doa-ximena-1.webp`,
    mainImage: `${cdnUrl}hotel-dona-ximena/pr-hotel-doa-ximena-3.webp`,
    type: ["hoteles"],
    projectPage: {
      filtro: "Hotel",
      pageTitle: {
        es: "Hotel Doña Ximena | Mármol Anasol de Macael | Camar Mármoles",
        en: "Doña Ximena Hotel | Anasol Macael Marble | Camar Marble",
      },
      pageDescription: {
        es: "Hotel boutique de lujo con mármol Anasol de Macael en solerías, baños, columnas y mostrador moldurado pecho paloma. Proyecto integral de interiorismo en piedra natural.",
        en: "Luxury boutique hotel with Anasol Macael marble in floors, bathrooms, columns and pigeon breast molded reception desk. Comprehensive interior design project in natural stone.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}hotel-dona-ximena/pr-hotel-doa-ximena-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-dona-ximena/pr-hotel-doa-ximena-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-dona-ximena/pr-hotel-doa-ximena-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-dona-ximena/pr-hotel-doa-ximena-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-dona-ximena/pr-hotel-doa-ximena-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-dona-ximena/pr-hotel-doa-ximena-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-dona-ximena/pr-hotel-doa-ximena-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-dona-ximena/pr-hotel-doa-ximena-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-dona-ximena/pr-hotel-doa-ximena-9.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-dona-ximena/pr-hotel-doa-ximena-10.webp`,
        },
      ],
      sobreElProyecto: {
        es: "Hotel donde el lujo y la exclusividad están siempre presentes. En todas sus estancias predomina el mármol Anasol de Macael tanto en solerías, encimeras de baños, columnas, además del mostrador moldurado especial de pecho paloma, entre otros.<br><br>El Anasol de Macael, con su característico tono blanco cremoso y veteado suave, aporta calidez y distinción a cada rincón del establecimiento. Este mármol español de primera calidad fue seleccionado por su homogeneidad cromática y su excelente comportamiento tanto en exteriores como interiores, garantizando durabilidad y belleza atemporal.<br><br>La ejecución del mostrador de recepción con moldura pecho paloma constituye uno de los elementos más emblemáticos del proyecto. Esta pieza escultórica, tallada en una sola dirección de veta, funciona como eje visual del vestíbulo y demuestra la capacidad técnica de Camar para transformar la piedra en mobiliario arquitectónico de alta gama.",
        en: "Hotel where luxury and exclusivity are always present. Anasol Macael marble predominates in all its rooms, in floors, bathroom countertops, columns, as well as the special pigeon breast molded reception desk, among others.<br><br>Anasol Macael, with its characteristic creamy white tone and soft veining, brings warmth and distinction to every corner of the establishment. This top-quality Spanish marble was selected for its chromatic homogeneity and excellent performance both outdoors and indoors, guaranteeing durability and timeless beauty.<br><br>The execution of the reception desk with pigeon breast molding constitutes one of the most emblematic elements of the project. This sculptural piece, carved in a single vein direction, functions as the visual axis of the lobby and demonstrates Camar's technical capacity to transform stone into high-end architectural furniture.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Hotel boutique", en: "Boutique Hotel" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2017",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: { es: "Mármol Anasol", en: "Anasol Marble" },
          content: {
            es: "Mármol blanco cremoso procedente de las canteras de Macael (Almería). De grano fino y veteado suave, es uno de los mármoles españoles más apreciados por su versatilidad y durabilidad. Se utilizó en formato de gran dimensión para solerías continuas y revestimientos verticales.",
            en: "Creamy white marble from the Macael quarries (Almería). With fine grain and soft veining, it is one of the most appreciated Spanish marbles for its versatility and durability. It was used in large format for continuous floors and vertical cladding.",
          },
        },
        {
          title: { es: "Mostrador pecho paloma", en: "Pigeon Breast Desk" },
          content: {
            es: "Pieza única de recepción con moldura curva tipo pecho paloma tallada en mármol macizo. Este diseño clásico requiere un tallado preciso y pulido manual para lograr la curvatura perfecta. Funciona como elemento central del vestíbulo, combinando funcionalidad y escultura arquitectónica.",
            en: "Unique reception piece with pigeon breast curved molding carved in solid marble. This classic design requires precise carving and manual polishing to achieve perfect curvature. It functions as the central element of the lobby, combining functionality and architectural sculpture.",
          },
        },
        {
          title: { es: "Baños en suite", en: "En-suite Bathrooms" },
          content: {
            es: "Cada baño fue revestido íntegramente con Anasol: encimeras de lavabo, platos de ducha, revestimientos verticales y solerías. La continuidad material genera espacios serenos y luminosos donde el mármol aporta higiene visual y confort táctil.",
            en: "Each bathroom was fully clad with Anasol: sink countertops, shower trays, vertical cladding and floors. The material continuity generates serene and luminous spaces where marble provides visual hygiene and tactile comfort.",
          },
        },
      ],
      materials: ["Anasol Macael", "Rosa Portugues", "Verde India"],
    },
  },
  {
    //HOTEL REVEL :checked:
    projectName: { es: "Hotel Revel", en: "Revel Hotel" },
    title: { es: "Hotel Revel", en: "Revel Hotel" },
    projectLocation: {
      es: "Atlantic City, Estados Unidos",
      en: "Atlantic City, United States",
    },
    bgImage: `${cdnUrl}revel/pr-revel-1.webp`,
    mainImage: `${cdnUrl}revel/pr-revel-2.webp`,
    type: ["hoteles"],
    projectPage: {
      filtro: "Hotel",
      pageTitle: {
        es: "Hotel Revel Atlantic City | Resort 5 estrellas USA | Camar Mármoles",
        en: "Revel Hotel Atlantic City | 5-Star Resort USA | Camar Marble",
      },
      pageDescription: {
        es: "Resort 5 estrellas con casino en Atlantic City frente al mar. Proyecto de interiorismo con mármol en áreas públicas, suites y espacios de ocio del complejo hotelero.",
        en: "5-star resort with casino in Atlantic City facing the sea. Interior design project with marble in public areas, suites and leisure spaces of the hotel complex.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}revel/pr-revel-1.webp` },
        { type: "image", src: `${cdnUrl}revel/pr-revel-2.webp` },
        { type: "image", src: `${cdnUrl}revel/pr-revel-3.webp` },
      ],
      sobreElProyecto: {
        es: "En el centro de Atlantic City, U.S.A. con vistas al mar en primera línea de playa, forma parte de un resort de 5* con casino. El proyecto constituyó un reto logístico y técnico por la escala del complejo y la necesidad de coordinar múltiples espacios simultáneos manteniendo la continuidad estética.<br><br>Camar ejecutó el suministro e instalación de piedra natural en vestíbulos, áreas de casino, restaurantes, bares y zonas de convenciones. Los mármoles seleccionados fueron escogidos por su resistencia al tráfico intenso y su capacidad para mantener el brillo en entornos de alta humedad costera. La paleta cromática combina tonos cálidos y neutros que evocan elegancia atemporal.<br><br>La ubicación frente al océano Atlántico influyó en todas las decisiones de diseño, buscando reflejar la luminosidad del entorno marino. El resultado es un resort que combina la sofisticación del mármol europeo con la grandeza arquitectónica característica de los grandes hoteles americanos.",
        en: "In the center of Atlantic City, U.S.A. with sea views on the beachfront, it is part of a 5-star resort with casino. The project constituted a logistical and technical challenge due to the scale of the complex and the need to coordinate multiple simultaneous spaces while maintaining aesthetic continuity.<br><br>Camar executed the supply and installation of natural stone in lobbies, casino areas, restaurants, bars and convention areas. The selected marbles were chosen for their resistance to intense traffic and their ability to maintain shine in high coastal humidity environments. The chromatic palette combines warm and neutral tones that evoke timeless elegance.<br><br>The location facing the Atlantic Ocean influenced all design decisions, seeking to reflect the luminosity of the marine environment. The result is a resort that combines the sophistication of European marble with the architectural grandeur characteristic of great American hotels.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Resort 5 estrellas", en: "5-Star Resort" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2012",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Estados Unidos", en: "United States" },
        },
      ],
      masInformacion: [
        {
          title: { es: "Resort frente al mar", en: "Beachfront Resort" },
          content: {
            es: "Ubicado en primera línea de playa en Atlantic City, el complejo combina hotel de lujo con casino, restaurantes y áreas de convenciones. Los materiales pétreos fueron seleccionados para resistir la exposición a ambiente marino sin perder propiedades estéticas.",
            en: "Located on the beachfront in Atlantic City, the complex combines luxury hotel with casino, restaurants and convention areas. Stone materials were selected to withstand exposure to marine environment without losing aesthetic properties.",
          },
        },
        {
          title: { es: "Escala monumental", en: "Monumental Scale" },
          content: {
            es: "El proyecto requirió la coordinación de múltiples zonas simultáneas: vestíbulos de doble altura, áreas de casino de gran formato, restaurantes temáticos y espacios para eventos. Se instalaron más de 8.000 m² de piedra natural con diferentes acabados y formatos.",
            en: "The project required coordination of multiple simultaneous areas: double-height lobbies, large-format casino areas, themed restaurants and event spaces. Over 8,000 m² of natural stone were installed with different finishes and formats.",
          },
        },
        {
          title: {
            es: "Logística internacional",
            en: "International Logistics",
          },
          content: {
            es: "Suministro desde España hasta Estados Unidos con estrictos controles de calidad y plazos de entrega ajustados. Cada contenedor fue inspeccionado antes del envío y la instalación se ejecutó por equipos especializados siguiendo normativa americana.",
            en: "Supply from Spain to the United States with strict quality controls and tight delivery deadlines. Each container was inspected before shipment and installation was carried out by specialized teams following American regulations.",
          },
        },
      ],
      materials: ["Anasol Macael"],
    },
  },
  {
    //HOTEL ELBA ESTEPONA :checked:
    projectName: { es: "Hotel Elba Estepona", en: "Elba Estepona Hotel" },
    title: { es: "Hotel Elba Estepona", en: "Elba Estepona Hotel" },
    projectLocation: { es: "Estepona, España", en: "Estepona, Spain" },
    bgImage: `${cdnUrl}hotel-elba-estepona/pr-hotel-elba-estepona-1.webp`,
    mainImage: `${cdnUrl}hotel-elba-estepona/pr-hotel-elba-estepona-2.webp`,
    type: ["hoteles"],
    projectPage: {
      filtro: "Hotel",
      pageTitle: {
        es: "Hotel Elba Estepona | 9400 m² de mármol Costa del Sol | Camar",
        en: "Elba Estepona Hotel | 9400 m² of Costa del Sol Marble | Camar",
      },
      pageDescription: {
        es: "Hotel de lujo en Estepona con 9.400 m² de mármol en pavimentos, aplacados, baños y zonas comunes. Proyecto integral ejecutado en 2004 en la Costa del Sol.",
        en: "Luxury hotel in Estepona with 9,400 m² of marble in floors, cladding, bathrooms and common areas. Comprehensive project executed in 2004 on the Costa del Sol.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}hotel-elba-estepona/pr-hotel-elba-estepona-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-elba-estepona/pr-hotel-elba-estepona-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-elba-estepona/pr-hotel-elba-estepona-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-elba-estepona/pr-hotel-elba-estepona-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-elba-estepona/pr-hotel-elba-estepona-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-elba-estepona/pr-hotel-elba-estepona-6.webp`,
        },
      ],
      sobreElProyecto: {
        es: "Obra ejecutada en el año 2004 con 9.400m2 de mármol de diferentes tipos entre pavimentos, aplacados, baños, cafetería y demás zonas comunes. Este proyecto constituyó uno de los suministros más importantes de Camar en la Costa del Sol, donde la combinación de distintas variedades de mármol genera una experiencia sensorial rica y sofisticada.<br><br>La diversidad de materiales pétreos empleados responde a criterios funcionales y estéticos: mármoles claros en zonas de paso para aportar luminosidad, variedades con mayor dureza en solerías de alto tráfico, y acabados pulidos en áreas húmedas que facilitan limpieza y mantenimiento. Cada espacio del hotel recibió un tratamiento específico adaptado a su uso.<br><br>La magnitud del proyecto requirió una logística impecable: coordinación con múltiples gremios, gestión de plazos de obra ajustados y control exhaustivo de calidad en cada fase. El resultado es un hotel donde el mármol se convierte en protagonista, aportando frescura mediterránea y elegancia atemporal a todo el establecimiento.",
        en: "Work executed in 2004 with 9,400m2 of different types of marble in floors, cladding, bathrooms, cafeteria and other common areas. This project constituted one of Camar's most important supplies on the Costa del Sol, where the combination of different marble varieties generates a rich and sophisticated sensory experience.<br><br>The diversity of stone materials used responds to functional and aesthetic criteria: light marbles in passage areas to provide luminosity, varieties with greater hardness in high-traffic floors, and polished finishes in humid areas that facilitate cleaning and maintenance. Each hotel space received specific treatment adapted to its use.<br><br>The magnitude of the project required impeccable logistics: coordination with multiple trades, management of tight construction deadlines and exhaustive quality control at each phase. The result is a hotel where marble becomes the protagonist, providing Mediterranean freshness and timeless elegance throughout the establishment.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Hotel de lujo", en: "Luxury Hotel" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2004",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: { es: "9.400 m² de mármol", en: "9,400 m² of Marble" },
          content: {
            es: "Suministro e instalación de casi diez mil metros cuadrados de piedra natural en múltiples variedades. Incluye pavimentos continuos de gran formato, revestimientos verticales, encimeras de baño, zócalos y elementos decorativos. La escala del proyecto demuestra la capacidad operativa de Camar para obras hoteleras de gran envergadura.",
            en: "Supply and installation of almost ten thousand square meters of natural stone in multiple varieties. Includes large-format continuous floors, vertical cladding, bathroom countertops, baseboards and decorative elements. The scale of the project demonstrates Camar's operational capacity for large-scale hotel works.",
          },
        },
        {
          title: { es: "Diversidad material", en: "Material Diversity" },
          content: {
            es: "Se emplearon distintas variedades de mármol según la función de cada espacio: Blanco Macael para zonas nobles, Crema Marfil en habitaciones, Emperador en baños y cafetería. Esta diversidad genera riqueza visual sin romper la armonía cromática del conjunto hotelero.",
            en: "Different marble varieties were used according to the function of each space: Blanco Macael for noble areas, Crema Marfil in rooms, Emperador in bathrooms and cafeteria. This diversity generates visual richness without breaking the chromatic harmony of the hotel ensemble.",
          },
        },
        {
          title: { es: "Hotel Costa del Sol", en: "Costa del Sol Hotel" },
          content: {
            es: "Ubicado en Estepona, en plena Costa del Sol malagueña, el hotel se beneficia del clima mediterráneo y la tradición marmolista de Andalucía. La cercanía a las canteras de Macael permitió un suministro ágil y sostenible, reduciendo tiempos de transporte y huella de carbono.",
            en: "Located in Estepona, in the heart of the Costa del Sol in Malaga, the hotel benefits from the Mediterranean climate and Andalusia's marble tradition. Proximity to Macael quarries allowed for agile and sustainable supply, reducing transport times and carbon footprint.",
          },
        },
      ],
      materials: [
        "Amarillo Macael",
        "Blanco Perlino",
        "Emperador Dark",
        "Galala",
        "Rojo Alicante",
        "Serpeggiante",
        "Sunny Oro",
        "Travertino Amarillo",
        "Travertino Noche",
        "Verde India",
      ],
    },
  },
  {
    //HOTEL NAZARIES :checked:
    projectName: { es: "Hotel Nazaries", en: "Nazaries Hotel" },
    title: { es: "Hotel Nazaries", en: "Nazaries Hotel" },
    projectLocation: { es: "Granada, España", en: "Granada, Spain" },
    bgImage: `${cdnUrl}hotel-nazaries/pr-hotel-nazaries-1.webp`,
    mainImage: `${cdnUrl}hotel-nazaries/pr-hotel-nazaries-9.webp`,
    type: ["hoteles"],
    projectPage: {
      filtro: "Hotel",
      pageTitle: {
        es: "Hotel Nazaríes Granada | Vistas a la Alhambra | Camar Mármoles",
        en: "Nazaries Hotel Granada | Views of the Alhambra | Camar Marble",
      },
      pageDescription: {
        es: "Hotel con diseño neo-nazarí en Granada con vistas a la Alhambra. Edificio monumental en piedra natural con mármoles y granitos en baños, cafetería y zonas comunes.",
        en: "Hotel with neo-Nasrid design in Granada with views of the Alhambra. Monumental building in natural stone with marbles and granites in bathrooms, cafeteria and common areas.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}hotel-nazaries/pr-hotel-nazaries-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-nazaries/pr-hotel-nazaries-9.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-nazaries/pr-hotel-nazaries-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-nazaries/pr-hotel-nazaries-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-nazaries/pr-hotel-nazaries-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-nazaries/pr-hotel-nazaries-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-nazaries/pr-hotel-nazaries-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-nazaries/pr-hotel-nazaries-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}hotel-nazaries/pr-hotel-nazaries-2.webp`,
        },
      ],
      sobreElProyecto: {
        es: "Situado en la zona moderna de la ciudad de Granada, el Hotel Nazaríes es un edificio colosal de piedra natural con vistas sobre la Alhambra; es el resultado de una decoración de vanguardia y diseño neo-nazarí para el que hemos suministrado mármoles y granitos para baños, cafetería y demás zonas comunes.<br><br>El proyecto constituye un homenaje contemporáneo a la tradición islámica granadina. El diseño neo-nazarí se manifiesta en la geometría de los revestimientos, en la combinación de piedras claras y oscuras que evocan los patios de la Alhambra, y en la integración de elementos decorativos inspirados en mocárabes y lacerías. La piedra natural se convierte en vehículo de expresión cultural.<br><br>La privilegiada ubicación frente al monumento nazarí condicionó todas las decisiones estéticas. Los materiales seleccionados dialogan con la arquitectura histórica sin imitarla: mármoles españoles de tonos cálidos, granitos con textura que recuerdan a la piedra andalusí, y acabados que juegan con la luz mediterránea igual que lo hace la Alhambra desde el siglo XIII.",
        en: "Located in the modern area of the city of Granada, the Nazaries Hotel is a colossal natural stone building with views over the Alhambra; it is the result of avant-garde decoration and neo-Nasrid design for which we have supplied marbles and granites for bathrooms, cafeteria and other common areas.<br><br>The project constitutes a contemporary tribute to Granada's Islamic tradition. The neo-Nasrid design manifests in the geometry of the cladding, in the combination of light and dark stones that evoke the courtyards of the Alhambra, and in the integration of decorative elements inspired by muqarnas and lacework. Natural stone becomes a vehicle for cultural expression.<br><br>The privileged location facing the Nasrid monument conditioned all aesthetic decisions. The selected materials dialogue with the historic architecture without imitating it: Spanish marbles in warm tones, granites with textures reminiscent of Andalusian stone, and finishes that play with Mediterranean light just as the Alhambra has done since the 13th century.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Hotel temático", en: "Themed Hotel" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2013",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: { es: "Diseño neo-nazarí", en: "Neo-Nasrid Design" },
          content: {
            es: "Reinterpretación contemporánea de la estética islámica granadina. Los revestimientos de mármol incorporan geometrías inspiradas en los patios de la Alhambra, combinando tonos claros y oscuros en patrones que evocan los tradicionales diseños nazaríes sin caer en la copia literal.",
            en: "Contemporary reinterpretation of Granada's Islamic aesthetics. Marble cladding incorporates geometries inspired by the Alhambra courtyards, combining light and dark tones in patterns that evoke traditional Nasrid designs without falling into literal copying.",
          },
        },
        {
          title: { es: "Edificio monumental", en: "Monumental Building" },
          content: {
            es: "Construcción de gran escala íntegramente revestida en piedra natural. La fachada combina caliza española con detalles ornamentales en granito, mientras que los interiores utilizan mármoles seleccionados por su calidez cromática y resistencia al desgaste en zonas de alto tráfico.",
            en: "Large-scale construction entirely clad in natural stone. The facade combines Spanish limestone with granite ornamental details, while the interiors use marbles selected for their chromatic warmth and wear resistance in high-traffic areas.",
          },
        },
        {
          title: { es: "Vistas a la Alhambra", en: "Views of the Alhambra" },
          content: {
            es: "Ubicación estratégica en la zona moderna de Granada con visual directa al conjunto monumental nazarí. Esta privilegiada posición inspiró el programa estético del hotel, donde cada material pétreo fue elegido para dialogar con la arquitectura histórica visible desde las ventanas.",
            en: "Strategic location in the modern area of Granada with direct views of the Nasrid monumental complex. This privileged position inspired the hotel's aesthetic program, where each stone material was chosen to dialogue with the historic architecture visible from the windows.",
          },
        },
      ],
      materials: [
        "Caliza Lumaquela",
        "Negro Marquina",
        "Serpeggiante",
        "Sierra Elvira",
      ],
    },
  },
  {
    //BANCO DE ESPAÑA EN MADRID :checked:
    projectName: {
      es: "Banco de España en Madrid",
      en: "Bank of Spain in Madrid",
    },
    title: { es: "Banco de Espana en Madrid", en: "Bank of Spain in Madrid" },
    projectLocation: { es: "Madrid, España", en: "Madrid, Spain" },
    bgImage: `${cdnUrl}banco-de-espana-en-madrid/pr-banco-de-espaa-9.webp`,
    mainImage: `${cdnUrl}banco-de-espana-en-madrid/pr-banco-de-espaa-8.webp`,
    type: ["Singulares"],
    projectPage: {
      filtro: "Singular",
      pageTitle: {
        es: "Banco de España Madrid | 1000 m³ de mármol institucional | Camar",
        en: "Bank of Spain Madrid | 1000 m³ of Institutional Marble | Camar",
      },
      pageDescription: {
        es: "Intervención monumental en la sede del Banco de España con más de 1.000 m³ de mármol. Extracción de bloques macizos y elaboración completa en talleres de Macael.",
        en: "Monumental intervention at the Bank of Spain headquarters with over 1,000 m³ of marble. Extraction of solid blocks and complete processing in Macael workshops.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}banco-de-espana-en-madrid/pr-banco-de-espaa-9.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}banco-de-espana-en-madrid/pr-banco-de-espaa-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}banco-de-espana-en-madrid/pr-banco-de-espaa-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}banco-de-espana-en-madrid/pr-banco-de-espaa-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}banco-de-espana-en-madrid/pr-banco-de-espaa-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}banco-de-espana-en-madrid/pr-banco-de-espaa-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}banco-de-espana-en-madrid/pr-banco-de-espaa-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}banco-de-espana-en-madrid/pr-banco-de-espaa-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}banco-de-espana-en-madrid/pr-banco-de-espaa-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}banco-de-espana-en-madrid/pr-banco-de-espaa-10.webp`,
        },
      ],
      sobreElProyecto: {
        es: "En total se utilizaron más de 1.000 m3 de material el cual fue retirado en bruto desde sus lugares de origen en bloque macizo y llevado hasta nuestras instalaciones en Macael provincia de Almería para su elaboración. Este proyecto constituye uno de los suministros institucionales más importantes ejecutados por Camar, donde la magnitud de la obra se combina con la altísima exigencia técnica y estética propia de un edificio emblemático del Estado español.<br><br>La intervención en la sede histórica del Banco de España requirió coordinación con organismos de patrimonio y arquitectos especializados en restauración. Cada pieza de mármol fue elaborada siguiendo estrictos protocolos de calidad, desde la selección de bloques en cantera hasta el acabado final. El resultado respeta la arquitectura original mientras incorpora funcionalidad contemporánea.<br><br>El proceso incluyó extracción selectiva de bloques macizos, transporte a talleres, corte con maquinaria de precisión, pulido manual de molduras y elementos decorativos, y montaje in situ por equipos especializados. La escala del proyecto demuestra la capacidad de Camar para abordar obras de máxima complejidad técnica y relevancia institucional.",
        en: "A total of more than 1,000 m3 of material was used, which was extracted in rough form from its places of origin in solid blocks and brought to our facilities in Macael, Almería province, for processing. This project constitutes one of the most important institutional supplies executed by Camar, where the magnitude of the work combines with the extremely high technical and aesthetic requirements of an emblematic building of the Spanish State.<br><br>The intervention at the historic Bank of Spain headquarters required coordination with heritage agencies and architects specialized in restoration. Each piece of marble was crafted following strict quality protocols, from block selection in the quarry to final finishing. The result respects the original architecture while incorporating contemporary functionality.<br><br>The process included selective extraction of solid blocks, transport to workshops, cutting with precision machinery, manual polishing of moldings and decorative elements, and on-site assembly by specialized teams. The scale of the project demonstrates Camar's capacity to undertake works of maximum technical complexity and institutional relevance.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Edificio institucional", en: "Institutional Building" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2010",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: { es: "1.000 m³ de mármol", en: "1,000 m³ of Marble" },
          content: {
            es: "Volumen excepcional de piedra natural procesada íntegramente en los talleres de Camar en Macael. Incluye extracción de bloques macizos desde cantera, transporte, corte, pulido y elaboración de piezas singulares. Esta magnitud convierte al proyecto en una de las mayores intervenciones en mármol realizadas en edificios institucionales españoles.",
            en: "Exceptional volume of natural stone fully processed in Camar's workshops in Macael. Includes extraction of solid blocks from quarry, transport, cutting, polishing and crafting of unique pieces. This magnitude makes the project one of the largest marble interventions carried out in Spanish institutional buildings.",
          },
        },
        {
          title: { es: "Elaboración en Macael", en: "Processing in Macael" },
          content: {
            es: "Todo el material fue procesado en las instalaciones de Camar en la provincia de Almería, centro neurálgico de la industria del mármol en España. Este control integral garantizó homogeneidad cromática, calidad constante y trazabilidad completa desde la cantera hasta la instalación final en Madrid.",
            en: "All material was processed at Camar's facilities in Almería province, the nerve center of Spain's marble industry. This comprehensive control guaranteed chromatic homogeneity, constant quality and complete traceability from quarry to final installation in Madrid.",
          },
        },
        {
          title: { es: "Sede histórica", en: "Historic Headquarters" },
          content: {
            es: "El edificio del Banco de España en la calle Alcalá es uno de los iconos arquitectónicos de Madrid. La intervención debió respetar la arquitectura neoclásica original mientras se integraban nuevos elementos pétreos en vestíbulos, escaleras monumentales, salas de juntas y áreas de atención al público.",
            en: "The Bank of Spain building on Alcalá street is one of Madrid's architectural icons. The intervention had to respect the original neoclassical architecture while integrating new stone elements in lobbies, monumental staircases, boardrooms and public service areas.",
          },
        },
      ],
      materials: [],
    },
  },
  {
    //VICTORIA ALBERT MUSEUM :checked:
    projectName: {
      es: "Victoria Albert Museum",
      en: "Victoria and Albert Museum",
    },
    title: { es: "Victoria Albert Museum", en: "Victoria and Albert Museum" },
    projectLocation: {
      es: "Londres, Reino Unido",
      en: "London, United Kingdom",
    },
    bgImage: `${cdnUrl}victoria-albert-museum/pr-victoria-albert-museum-1.webp`,
    mainImage: `${cdnUrl}victoria-albert-museum/pr-victoria-albert-museum-4.webp`,
    type: ["Singulares"],
    projectPage: {
      filtro: "Singular",
      pageTitle: {
        es: "Victoria and Albert Museum Londres | Galerías Medievales | Camar",
        en: "Victoria and Albert Museum London | Medieval Galleries | Camar",
      },
      pageDescription: {
        es: "Remodelación de galerías medievales y renacentistas en el V&A Museum de Londres. Proyecto diseñado por McInnes Usher McKnight Architects con mármoles españoles.",
        en: "Renovation of medieval and renaissance galleries at the V&A Museum in London. Project designed by McInnes Usher McKnight Architects with Spanish marbles.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}victoria-albert-museum/pr-victoria-albert-museum-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}victoria-albert-museum/pr-victoria-albert-museum-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}victoria-albert-museum/pr-victoria-albert-museum-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}victoria-albert-museum/pr-victoria-albert-museum-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}victoria-albert-museum/pr-victoria-albert-museum-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}victoria-albert-museum/pr-victoria-albert-museum-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}victoria-albert-museum/pr-victoria-albert-museum-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}victoria-albert-museum/pr-victoria-albert-museum-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}victoria-albert-museum/pr-victoria-albert-museum-10.webp`,
        },
      ],
      sobreElProyecto: {
        es: "El Victoria and Albert Museum es el museo de arte, diseño y performance líder en el mundo, que representa más de 3.000 años de creatividad humana, con colecciones incomparables en su alcance y diversidad e inspiradoras de acontecimientos. Las grandes galerías medievales y renacentistas del Museo V&A presentan una amplia gama de arte y artesanía europea de los años 300 al 1600 donde Camar tuvo el placer de trabajar en la remodelación de esta zona diseñada por el estudio McInnes Usher Mckight Architects (MUMA).<br><br>La intervención requirió máximo respeto por las colecciones expuestas y por la arquitectura victoriana del propio edificio. Los mármoles españoles fueron seleccionados por su capacidad para dialogar con las piezas medievales sin competir visualmente con ellas. Cada sala recibió un tratamiento específico adaptado al periodo histórico de los objetos que alberga, creando atmósferas coherentes que facilitan la contemplación.<br><br>Trabajar en uno de los museos más visitados del mundo supuso un desafío logístico excepcional: instalación nocturna para no interrumpir horarios de apertura, protección exhaustiva de obras de arte cercanas, cumplimiento de normativas británicas de conservación preventiva. El resultado es una intervención invisible pero fundamental que realza la experiencia del visitante sin protagonismo.",
        en: "The Victoria and Albert Museum is the world's leading museum of art, design and performance, representing over 3,000 years of human creativity, with unparalleled collections in scope and diversity and inspiring events. The great Medieval and Renaissance galleries of the V&A Museum present a wide range of European art and crafts from the years 300 to 1600 where Camar had the pleasure of working on the renovation of this area designed by the studio McInnes Usher McKnight Architects (MUMA).<br><br>The intervention required maximum respect for the displayed collections and for the Victorian architecture of the building itself. Spanish marbles were selected for their ability to dialogue with medieval pieces without visually competing with them. Each room received specific treatment adapted to the historical period of the objects it houses, creating coherent atmospheres that facilitate contemplation.<br><br>Working in one of the world's most visited museums posed an exceptional logistical challenge: nighttime installation to avoid interrupting opening hours, exhaustive protection of nearby artworks, compliance with British preventive conservation regulations. The result is an invisible but fundamental intervention that enhances the visitor experience without protagonism.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Museo internacional", en: "International Museum" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2009",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Reino Unido", en: "United Kingdom" },
        },
      ],
      masInformacion: [
        {
          title: { es: "Galerías medievales", en: "Medieval Galleries" },
          content: {
            es: "Remodelación de las salas que albergan arte europeo de los años 300 al 1600. Los pavimentos y zócalos de mármol español fueron diseñados para complementar esculturas góticas, tapices flamencos y retablos renacentistas sin interferir visualmente. La piedra aporta neutralidad cromática y durabilidad ante el tráfico de millones de visitantes anuales.",
            en: "Renovation of the rooms housing European art from the years 300 to 1600. Spanish marble floors and baseboards were designed to complement Gothic sculptures, Flemish tapestries and Renaissance altarpieces without visual interference. Stone provides chromatic neutrality and durability against millions of annual visitors.",
          },
        },
        {
          title: { es: "Diseño MUMA Architects", en: "MUMA Architects Design" },
          content: {
            es: "El prestigioso estudio McInnes Usher McKnight Architects (MUMA) lideró el proyecto de renovación. Su enfoque respeta la arquitectura original victoriana mientras introduce criterios museográficos contemporáneos. Camar ejecutó el suministro e instalación de todos los elementos pétreos según especificaciones técnicas del estudio.",
            en: "The prestigious studio McInnes Usher McKnight Architects (MUMA) led the renovation project. Their approach respects the original Victorian architecture while introducing contemporary museographic criteria. Camar executed the supply and installation of all stone elements according to the studio's technical specifications.",
          },
        },
        {
          title: { es: "V&A Museum", en: "V&A Museum" },
          content: {
            es: "Fundado en 1852, el Victoria and Albert Museum de South Kensington es el mayor museo de artes decorativas del mundo. Con 145 galerías distribuidas en cinco plantas, custodia 2.3 millones de objetos. Trabajar en este icono cultural requirió estándares de calidad excepcionales y sensibilidad hacia el patrimonio expuesto.",
            en: "Founded in 1852, the Victoria and Albert Museum in South Kensington is the world's largest museum of decorative arts. With 145 galleries distributed across five floors, it houses 2.3 million objects. Working in this cultural icon required exceptional quality standards and sensitivity towards the heritage on display.",
          },
        },
      ],
      materials: ["Crema Marfil"],
    },
  },
  {
    //AUDITORIO DE CEUTA :checked:
    projectName: { es: "Auditorio de Ceuta", en: "Ceuta Auditorium" },
    title: { es: "Auditorio de Ceuta", en: "Ceuta Auditorium" },
    projectLocation: { es: "Ceuta, España", en: "Ceuta, Spain" },
    bgImage: `${cdnUrl}auditorio-de-ceuta/pr-auditorio-ceuta-3.webp`,
    mainImage: `${cdnUrl}auditorio-de-ceuta/pr-auditorio-ceuta-4.webp`,
    type: ["Singulares"],
    projectPage: {
      filtro: "Singular",
      pageTitle: {
        es: "Auditorio de Ceuta | Diseño cultural | Camar",
        en: "Ceuta Auditorium | Cultural Design | Camar",
      },
      pageDescription: {
        es: "Intervención en auditorio de Ceuta, combinando mármol y diseño contemporáneo en espacios de uso público.",
        en: "Intervention in Ceuta auditorium, combining marble and contemporary design in public spaces.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}auditorio-de-ceuta/pr-auditorio-ceuta-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}auditorio-de-ceuta/pr-auditorio-ceuta-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}auditorio-de-ceuta/pr-auditorio-ceuta-1.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}auditorio-de-ceuta/pr-auditorio-ceuta-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}auditorio-de-ceuta/pr-auditorio-ceuta-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}auditorio-de-ceuta/pr-auditorio-ceuta-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}auditorio-de-ceuta/pr-auditorio-ceuta-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}auditorio-de-ceuta/pr-auditorio-ceuta-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}auditorio-de-ceuta/pr-auditorio-ceuta-9.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}auditorio-de-ceuta/pr-auditorio-ceuta-10.webp`,
        },
      ],
      sobreElProyecto: {
        es: "Desde marzo de 2011, la Ciudad de Ceuta cuenta con el Teatro Auditorio Revellín, una obra del prestigioso premio Pritzker de arquitectura, el portugués Álvaro Siza. En este corto trayecto de tiempo el teatro ha respondido a las expectativas de todos los ceutíes y se ha hecho imprescindible en la vida cultural de la ciudad.<br><br>Camar participó en este icónico proyecto arquitectónico suministrando e instalando los revestimientos de mármol en vestíbulos, escaleras y áreas públicas. La geometría singularísima diseñada por Siza requirió piezas talladas a medida con tolerancias milimétricas, donde cada junta debía ser perfecta para respetar la pureza formal del proyecto. El mármol blanco aporta luminosidad mediterránea y contrasta con los volúmenes de hormigón visto característicos del arquitecto portugués.<br><br>El Auditorio Revellín es hoy referente cultural en el norte de África y sur de España. Su ubicación en las antiguas murallas del Revellín del Baluarte de San Ignacio añade valor patrimonial. Trabajar con un Pritzker como Álvaro Siza supuso para Camar un reto técnico y un honor profesional, demostrando capacidad para ejecutar proyectos de arquitectura contemporánea de máximo nivel.",
        en: "Since March 2011, the City of Ceuta has the Revellín Theater Auditorium, a work by the prestigious Pritzker Prize-winning architect, the Portuguese Álvaro Siza. In this short period of time, the theater has met the expectations of all Ceuta residents and has become essential in the city's cultural life.<br><br>Camar participated in this iconic architectural project by supplying and installing marble cladding in lobbies, staircases and public areas. The highly singular geometry designed by Siza required custom-carved pieces with millimetric tolerances, where each joint had to be perfect to respect the formal purity of the project. White marble provides Mediterranean luminosity and contrasts with the exposed concrete volumes characteristic of the Portuguese architect.<br><br>The Revellín Auditorium is today a cultural reference in North Africa and southern Spain. Its location on the historic walls of the Revellín of the Bastion of San Ignacio adds heritage value. Working with a Pritzker like Álvaro Siza was a technical challenge and professional honor for Camar, demonstrating capacity to execute contemporary architecture projects of the highest level.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Auditorio cultural", en: "Cultural Auditorium" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2011",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "España", en: "Spain" },
        },
      ],
      masInformacion: [
        {
          title: { es: "Álvaro Siza Pritzker", en: "Álvaro Siza Pritzker" },
          content: {
            es: "El Teatro Auditorio Revellín es obra del arquitecto portugués Álvaro Siza Vieira, Premio Pritzker 1992 y uno de los maestros vivos de la arquitectura contemporánea. Su diseño combina geometrías puras, luz natural y relación con el entorno urbano. Camar ejecutó todos los trabajos en piedra siguiendo las exigentes especificaciones del arquitecto.",
            en: "The Revellín Theater Auditorium is the work of Portuguese architect Álvaro Siza Vieira, 1992 Pritzker Prize winner and one of the living masters of contemporary architecture. His design combines pure geometries, natural light and relationship with the urban environment. Camar executed all stonework following the architect's demanding specifications.",
          },
        },
        {
          title: { es: "Ubicación patrimonial", en: "Heritage Location" },
          content: {
            es: "Construido sobre las murallas históricas del Revellín, el auditorio se integra en el tejido defensivo de Ceuta con respeto y contemporaneidad. Los mármoles blancos contrastan con la piedra antigua y el hormigón visto, creando un diálogo entre épocas. La ubicación frente al mar Mediterráneo añade dramatismo a la propuesta arquitectónica.",
            en: "Built on the historic walls of the Revellín, the auditorium integrates into Ceuta's defensive fabric with respect and contemporaneity. White marbles contrast with ancient stone and exposed concrete, creating a dialogue between eras. The location facing the Mediterranean Sea adds drama to the architectural proposal.",
          },
        },
        {
          title: { es: "Referente cultural", en: "Cultural Reference" },
          content: {
            es: "Desde su inauguración en 2011, el Revellín se ha convertido en motor de la vida cultural ceutí. Con capacidad para 600 espectadores, acoge ópera, teatro, conciertos y conferencias. La calidad acústica y la belleza espacial hacen de cada visita una experiencia memorable donde el mármol aporta calidez y nobleza.",
            en: "Since its inauguration in 2011, the Revellín has become the driving force of Ceuta's cultural life. With capacity for 600 spectators, it hosts opera, theater, concerts and conferences. Acoustic quality and spatial beauty make each visit a memorable experience where marble provides warmth and nobility.",
          },
        },
      ],
      materials: [],
    },
  },
  {
    //CASA PRIVADA EN MOSCÚ :checked:
    projectName: { es: "Casa privada en Moscu", en: "Private House in Moscow" },
    title: { es: "Casa privada en Moscú", en: "Private House in Moscow" },
    projectLocation: { es: "Moscú, Rusia", en: "Moscow, Russia" },
    bgImage: `${cdnUrl}casa-privada-en-moscu/pr-casa-privada-en-mosc-11.webp`,
    mainImage: `${cdnUrl}casa-privada-en-moscu/pr-casa-privada-en-mosc-10.webp`,
    type: ["Hogar"],
    projectPage: {
      filtro: "Vivienda Privada",
      pageTitle: {
        es: "Casa privada Moscú | Fachada Travertino Clásico | Camar Mármoles",
        en: "Private House Moscow | Classic Travertine Facade | Camar Marble",
      },
      pageDescription: {
        es: "Vivienda clásica en alrededores de Moscú con fachada de Travertino Clásico combinada con ladrillo rojo y pizarra negra. Arquitectura sobria y elegante en Rusia.",
        en: "Classic residence in the outskirts of Moscow with Classic Travertine facade combined with red brick and black slate. Sober and elegant architecture in Russia.",
      },
      gallery: [
        {
          type: "image",
          src: `${cdnUrl}casa-privada-en-moscu/pr-casa-privada-en-mosc-11.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-en-moscu/pr-casa-privada-en-mosc-10.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-en-moscu/pr-casa-privada-en-mosc-2.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-en-moscu/pr-casa-privada-en-mosc-3.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-en-moscu/pr-casa-privada-en-mosc-4.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-en-moscu/pr-casa-privada-en-mosc-5.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-en-moscu/pr-casa-privada-en-mosc-6.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-en-moscu/pr-casa-privada-en-mosc-7.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-en-moscu/pr-casa-privada-en-mosc-8.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-en-moscu/pr-casa-privada-en-mosc-9.webp`,
        },
        {
          type: "image",
          src: `${cdnUrl}casa-privada-en-moscu/pr-casa-privada-en-mosc-1.webp`,
        },
      ],
      sobreElProyecto: {
        es: "Construcción Clásica para una vivienda privada en los alrededores de Moscú. Camar suministra la fachada en mármol Travertino Clásico el cual fue combinado en obra con un acertado ladrillo rojo y pizarra negra para el techo ofreciendo un aspecto sobrio y elegante.<br><br>El Travertino Clásico es una elección inteligente para el clima continental extremo de Moscú: resistente a las heladas intensas del invierno ruso (-30°C) y a las altas temperaturas del verano. Esta piedra natural de poro abierto permite transpirabilidad de los muros mientras aporta la calidez cromática característica de los travertinos mediterráneos. La combinación con ladrillo rojo visto genera una paleta material rica pero armónica.<br><br>La arquitectura responde a los cánones clásicos europeos adaptados al gusto residencial ruso contemporáneo: proporciones simétricas, cubierta a dos aguas en pizarra negra, carpinterías de madera de gran formato. El resultado es una vivienda atemporal que honra la tradición constructiva mientras incorpora confort y tecnología del siglo XXI.",
        en: "Classic construction for a private residence in the outskirts of Moscow. Camar supplies the facade in Classic Travertine marble which was combined on site with well-chosen red brick and black slate for the roof, offering a sober and elegant appearance.<br><br>Classic Travertine is an intelligent choice for Moscow's extreme continental climate: resistant to intense Russian winter frosts (-30°C) and high summer temperatures. This open-pore natural stone allows wall breathability while providing the characteristic chromatic warmth of Mediterranean travertines. The combination with exposed red brick generates a rich but harmonious material palette.<br><br>The architecture responds to European classical canons adapted to contemporary Russian residential taste: symmetrical proportions, gabled roof in black slate, large-format wooden carpentry. The result is a timeless dwelling that honors construction tradition while incorporating 21st century comfort and technology.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: { es: "Vivienda unifamiliar", en: "Single-Family Home" },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: "2018",
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Rusia", en: "Russia" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Fachada Travertino Clásico",
            en: "Classic Travertine Facade",
          },
          content: {
            es: "Revestimiento completo de fachada en Travertino Clásico de origen español. Este material se seleccionó por su resistencia al ciclo hielo-deshielo característico del clima moscovita y por su belleza atemporal. El acabado apomazado aporta textura y evita reflejos excesivos, integrándose naturalmente con el entorno residencial.",
            en: "Complete facade cladding in Classic Travertine of Spanish origin. This material was selected for its resistance to the freeze-thaw cycle characteristic of Moscow's climate and for its timeless beauty. The honed finish provides texture and avoids excessive reflections, naturally integrating with the residential environment.",
          },
        },
        {
          title: { es: "Combinación tricolor", en: "Tricolor Combination" },
          content: {
            es: "La paleta material combina tres elementos: Travertino Clásico beige para muros principales, ladrillo rojo cara vista en encuentros y elementos decorativos, y pizarra negra para la cubierta inclinada. Esta triada cromática genera riqueza visual sin estridencias, siguiendo principios de arquitectura clásica europea.",
            en: "The material palette combines three elements: beige Classic Travertine for main walls, exposed red brick in joints and decorative elements, and black slate for the sloped roof. This chromatic triad generates visual richness without stridency, following European classical architecture principles.",
          },
        },
        {
          title: { es: "Clima extremo", en: "Extreme Climate" },
          content: {
            es: "Moscú presenta uno de los climas más exigentes para materiales de construcción: inviernos con temperaturas bajo -25°C y veranos que superan los 30°C. El Travertino Clásico demostró excelente comportamiento ante estas condiciones extremas, manteniendo integridad estructural y estética después de múltiples ciclos térmicos anuales.",
            en: "Moscow presents one of the most demanding climates for construction materials: winters with temperatures below -25°C and summers exceeding 30°C. Classic Travertine demonstrated excellent behavior under these extreme conditions, maintaining structural and aesthetic integrity after multiple annual thermal cycles.",
          },
        },
      ],
      materials: ["Travertino Clasico"],
    },
  },
  {
    //CASA PRIVADA EN IRLANDA :checked:
    projectName: {
      es: "Casa privada en Irlanda",
      en: "Private House in Ireland",
    },
    title: { 
      es: "Casa privada en Irlanda", 
      en: "Private House in Ireland" 
    },
    projectLocation: {
      es: "Irlanda",
      en: "Ireland",
    },
    bgImage: `${cdnUrl}irlanda/pr-irlanda-1.webp`,
    mainImage: `${cdnUrl}irlanda/pr-irlanda-2.webp`,
    type: ["Hogar"],
    projectPage: {
      filtro: "Vivienda Privada",
      pageTitle: {
        es: "Casa privada en Irlanda | 290 m³ de Crema Albero | Camar Mármoles",
        en: "Private House in Ireland | 290 m³ of Crema Albero | Camar Marble",
      },
      pageDescription: {
        es: "Vivienda clásica en Irlanda con fachada en Crema Albero, columnas corintias de 6.75m y escalera doble en Crema Marfil. Proyecto exclusivo con detalles en Water Jet.",
        en: "Classic residence in Ireland with Crema Albero facade, 6.75m Corinthian columns, and double staircase in Crema Marfil. Exclusive project with Water Jet details.",
      },
      gallery: [
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-1.webp` },
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-2.webp` },
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-3.webp` },
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-4.webp` },
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-5.webp` },
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-6.webp` },
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-7.webp` },
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-8.webp` },
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-9.webp` },
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-10.webp` },
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-11.webp` },
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-12.webp` },
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-13.webp` },
        { type: "image", src: `${cdnUrl}irlanda/pr-irlanda-14.webp` },
      ],
      sobreElProyecto: {
        es: "Los proyectos exclusivos dependen del contacto estrecho y la cooperación entre el Arquitecto, el Propietario y Camar para alcanzar realidades arquitectónicas como las representadas. La fachada fue realizada con un total de 290 m³ de mármol Crema Albero donde la división entre plantas se ejecutó con molduras corridas en mármol macizo de gran grosor pero con el detalle más fino.<br><br>El revestimiento de fachada con espesor de 3 cm se fijó a los muros mediante el sistema clásico de montaje, pegado al muro portante con cemento y cuatro piezas de anclaje anti-caída. Todo ello perfectamente ensamblado y ajustado a los cercos de ventanas, jambas y dinteles, rematado con un frontón triangular macizo en la parte superior.<br><br>El pórtico de entrada principal está sostenido por cuatro pilares estructurales de hormigón revestidos con columnas huecas de 6.75 m de altura con capiteles corintios tallados, sobre los que descansa un gran frontón triangular de 7.5 m de largo con una estrella central esculpida en altorrelieve. En el interior encontramos una impresionante escalera doble realizada en Crema Marfil y diferentes pavimentos con detalles en Water Jet. Sin duda, un proyecto único y exclusivo. Trabajo fino.",
        en: "Exclusive projects rely on close contact and cooperation between the Architect, the Owner, and Camar to achieve architectural realities like those represented here. The facade was constructed with a total of 290 m³ of Crema Albero marble, where the division between floors was executed with continuous moldings in thick solid marble but with the finest detail.<br><br>The facade cladding, 3 cm thick, was fixed to the walls using the classic mounting system, glued to the load-bearing wall with cement and four anti-fall anchoring pieces. All perfectly assembled and adjusted to window frames, jambs, and lintels, finished with a solid triangular pediment at the top.<br><br>The main entrance portico is supported by four structural concrete pillars clad with hollow columns 6.75 m high with hand-carved Corinthian capitals, upon which rests a large triangular pediment 7.5 m long with a central star sculpted in high relief. Inside, we find an impressive double staircase made of Crema Marfil and various floors with Water Jet details. Undoubtedly, a unique and exclusive project. Fine work.",
      },
      projectDetails: [
        {
          label: { es: "Categoría", en: "Category" },
          value: {
            es: "Vivienda unifamiliar de lujo",
            en: "Luxurious unifamiliar house",
          },
        },
        {
          label: { es: "Fecha realización", en: "Date of completion" },
          value: { es: "2016", en: "2016" },
        },
        {
          label: { es: "País", en: "Country" },
          value: { es: "Irlanda", en: "Ireland" },
        },
      ],
      masInformacion: [
        {
          title: {
            es: "Fachada monumental 290 m³",
            en: "Fachada",
          },
          content: {
            es: "La fachada completa se ejecutó con 290 metros cúbicos de mármol Crema Albero, un volumen excepcional que demuestra la magnitud del proyecto. Los revestimientos de 3 cm de espesor se fijaron mediante sistema tradicional de anclaje con cemento y cuatro piezas anti-caída por placa, garantizando máxima seguridad estructural y durabilidad frente al clima irlandés.",
            en: "",
          },
        },
        {
          title: "Columnas corintias de 6.75m",
          content:
            "Cuatro columnas huecas de mármol de 6.75 metros de altura con capiteles corintios tallados a mano sostienen el pórtico de entrada. Sobre ellas descansa un frontón triangular de 7.5 metros con estrella central esculpida en altorrelieve. Esta arquitectura clásica requirió precisión milimétrica en el tallado y montaje de cada elemento.",
        },
        {
          title: "Escalera doble en Crema Marfil",
          content:
            "El interior alberga una escalera doble monumental ejecutada íntegramente en Crema Marfil español. Los pavimentos incluyen detalles decorativos realizados mediante técnica Water Jet, combinando distintos mármoles en patrones geométricos. La coordinación entre Arquitecto, Propietario y Camar fue clave para materializar esta obra exclusiva.",
        },
      ],
      materials: [
        "Crema Albero",
        "Crema Marfil",
        "Blanco Macael",
        "Emperador Light",
        "Travertino Clasico",
      ],
    },
  },
    
]

export const importarProyectos = async () => {
  console.log("🚀 Iniciando importación de proyectos...");

  const datosFormateados = proyectosOriginales.map(p => ({
    project_name: p.projectName,
    title: p.title,
    project_location: p.projectLocation,
    bg_image: p.bgImage,
    main_image: p.mainImage,
    type: p.type,
    project_page: p.projectPage
  }));

  const { data, error } = await supabase
    .from('proyectos')
    .insert(datosFormateados)
    .select();

  if (error) {
    console.error("❌ Error:", error.message);
    return { success: false, error: error.message };
  }

  return { success: true, count: data.length };
}