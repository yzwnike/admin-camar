// /lib/seed.ts
import { supabase } from './supabase'

// AQUÍ PEGAS TU CONSTANTE DE MATERIALES DEL OTRO PROYECTO
const materialesOriginales = [
  {
        materialType: {es: "Mármol", en: "Marble"},
        materialName: "Arabescato Orobico Grigio",
        location: {es: "Bérgamo - Italia", en: "Bergamo - Italy"},
        description: {
            es: "Mármol italiano de tonalidad gris con vetas elegantes y distintivas. Perfecto para baños y espacios sofisticados que buscan un acabado premium.",
            en: "Italian gray-toned marble with elegant and distinctive veins. Perfect for bathrooms and sophisticated spaces seeking a premium finish."
        },
        use: [ "baños", "hogar"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Cuarcita Monterra",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Cuarcita natural de alta resistencia, ideal para suelos y aplicaciones de alto tráfico. Su durabilidad excepcional la hace perfecta para espacios comerciales.",
            en: "High-resistance natural quartzite, ideal for floors and high-traffic applications. Its exceptional durability makes it perfect for commercial spaces."
        },
        use: ["hogar", "empresas", "suelos"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Brown Antique",
        location: { es: "India", en: "India" },
        description: {
            es: "Granito en tonos marrones cálidos con textura única. Resistente y versátil, perfecto para suelos y encimeras tanto en hogares como espacios comerciales.",
            en: "Warm brown-toned granite with a unique texture. Durable and versatile, perfect for floors and countertops in both homes and commercial spaces."
        },
        use: ["hogar", "empresas", "suelos"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rojo Laguna",
        location: { es: "Turquía", en: "Turkey" },
        description: {
            es: "Mármol rojo intenso con vetas naturales, ideal para crear espacios impactantes. Aporta calidez y elegancia a baños y áreas distinguidas.",
            en: "Intense red marble with natural veins, ideal for creating impactful spaces. Adds warmth and elegance to bathrooms and distinguished areas."
        },
        use: ["hogar", "empresas", "baños"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Marron Cohiba",
        location: { es: "España", en: "Spain" },
        description: {
            es: "Mármol marrón con tonalidades cálidas y veteado natural. Excelente opción para cocinas y encimeras que buscan un acabado elegante y acogedor.",
            en: "Brown marble with warm tones and natural veining. An excellent choice for kitchens and countertops seeking an elegant and cozy finish."
        },
        use: ["hogar", "empresas", "cocinas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Amarillo Macael",
        location: { es: "Macael - España", en: "Macael - Spain" },
        description: {
            es: "Mármol español en tonos amarillos cálidos, característico de las canteras de Macael. Ideal para baños y espacios que buscan luminosidad y elegancia mediterránea.",
            en: "Spanish marble in warm yellow tones, characteristic of the Macael quarries. Ideal for bathrooms and spaces seeking Mediterranean brightness and elegance."
        },
        use: ["hogar", "empresas", "baños"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Allure Quartzite",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Cuarcita de aspecto sofisticado con gran resistencia y durabilidad. Perfecta para encimeras de cocina donde se requiere belleza y funcionalidad.",
            en: "Sophisticated-looking quartzite with great resistance and durability. Perfect for kitchen countertops where beauty and functionality are required."
        },
        use: ["hogar", "empresas", "cocinas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Salome",
        location: { es: "Turquía", en: "Turkey" },
        description: {
            es: "Mármol con vetas distintivas y tonalidades elegantes. Excelente elección para baños que buscan un acabado premium y sofisticado.",
            en: "Marble with distinctive veins and elegant tones. An excellent choice for bathrooms seeking a premium and sophisticated finish."
        },
        use: ["hogar", "empresas", "baños"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Copacabana",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Granito brasileño con movimiento ondulado único que recuerda las olas del mar. Resistente y decorativo, perfecto para baños con carácter.",
            en: "Brazilian granite with a unique wavy movement reminiscent of ocean waves. Durable and decorative, perfect for bathrooms with character."
        },
        use: ["hogar", "empresas", "baños"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Calacatta Oro",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol italiano premium con vetas doradas sobre fondo blanco. Sinónimo de lujo y exclusividad, ideal para baños de alto standing.",
            en: "Premium Italian marble with golden veins on a white background. Synonymous with luxury and exclusivity, ideal for high-end bathrooms."
        },
        use: ["hogar", "empresas", "baños"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rojo Levanto",
        location: { es: "Levanto - Italia", en: "Levanto - Italy" },
        description: {
            es: "Mármol rojo italiano con intenso color y vetas blancas características. Aporta dramatismo y elegancia a cualquier espacio residencial o comercial.",
            en: "Italian red marble with intense color and characteristic white veins. Adds drama and elegance to any residential or commercial space."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Picture Stone",
        location: {es: "China", en: "China"},
        description: {
            es: "Mármol único con patrones naturales que crean verdaderas obras de arte. Cada pieza es irrepetible, ideal para espacios singulares y exclusivos.",
            en: "Unique marble with natural patterns that create true works of art. Each piece is one of a kind, ideal for unique and exclusive spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: {es: "Cuarcita", en: "Quartzite"},
        materialName: "Azul Bahia",
        location: {es: "Bahía - Brasil", en: "Bahia - Brazil"},
        description: {
            es: "Cuarcita de intenso color azul, excepcional y poco común. Su belleza única la hace perfecta para espacios especiales y proyectos religiosos.",
            en: "Intense blue quartzite, exceptional and rare. Its unique beauty makes it perfect for special spaces and religious projects."
        },
        use: ["hogar", "empresas", "religiosos"],
    },
    {
        materialType: {es: "Mármol", en: "Marble"},
        materialName: "Breccia Oniciata",
        location: {es: "Italia", en: "Italy"},
        description: {
            es: "Mármol tipo breccia con fragmentos naturales y tonalidades cálidas. Ofrece un aspecto artístico y único para espacios distinguidos.",
            en: "Breccia-type marble with natural fragments and warm tones. It offers an artistic and unique look for distinguished spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: {es: "Cuarcita", en: "Quartzite"},
        materialName: "Cristallo",
        location: {es: "Brasil", en: "Brazil"},
        description: {
            es: "Cuarcita con acabado cristalino y gran luminosidad. Resistente y elegante, perfecta para encimeras de cocina de alto rendimiento.",
            en: "Sophisticated-looking quartzite with great resistance and durability. Perfect for kitchen countertops where beauty and functionality are required."
        },
        use: ["hogar", "empresas", "cocinas"],
    },
    {
        materialType: {es: "Cuarcita", en: "Quartzite"},
        materialName: "Cristal Ice",
        location: {es: "Brasil", en: "Brazil"},
        description: {
            es: "Cuarcita con tonos blancos helados y brillantes cristales. Aporta frescura y modernidad a cocinas con estilo contemporáneo.",
            en: "Quartzite with icy white tones and bright crystals. It brings freshness and modernity to kitchens with a contemporary style."
        },
        use: ["hogar", "empresas", "cocinas"],
    },
    {
        materialType: {es: "Cuarcita", en: "Quartzite"},
        materialName: "Bronze Armani",
        location: {es: "Brasil", en: "Brazil"},
        description: {
            es: "Cuarcita en tonos bronce con elegancia sofisticada. Su resistencia excepcional la hace ideal para suelos de alto tráfico con estética de lujo.",
            en: "Quartzite in bronze tones with sophisticated elegance. Its exceptional resistance makes it ideal for high-traffic floors with a luxury aesthetic."
        },
        use: ["hogar", "empresas", "suelos"],
    },
    {
        materialType: {es: "Mármol", en: "Marble"},
        materialName: "Fior di Pesco Carnico",
        location: {es: "Alpes Cárnicos - Italia", en: "Carnic Alps - Italy"},
        description: {
            es: "Mármol italiano con delicadas vetas rosadas sobre fondo claro. Su belleza romántica lo hace perfecto para espacios elegantes y refinados.",
            en: "Italian marble with delicate pink veins on a light background. Its romantic beauty makes it perfect for elegant and refined spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: {es: "Cuarcita", en: "Quartzite"},
        materialName: "Super White",
        location: {es: "Brasil", en: "Brazil"},
        description: {
            es: "Cuarcita de blanco puro con sutil veteado gris. Combina la elegancia del mármol con la resistencia superior de la cuarcita.",
            en: "Quartzite of pure white with subtle gray veining. It combines the elegance of marble with the superior resistance of quartzite."
        },
        use: ["hogar", "empresas",],
    },
    {
        materialType: {es: "Pórfido", en: "Porphyry"},
        materialName: "Porfido Rojo",
        location: {es: "Italia", en: "Italy"},
        description: {
            es: "Pórfido de color rojo intenso con textura única y gran dureza. Material volcánico extremadamente resistente, ideal para aplicaciones decorativas durables.",
            en: "Red porphyry with unique texture and great hardness. Extremely durable volcanic material, ideal for long-lasting decorative applications."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Negro Oriente",
        location: { es: "India", en: "India" },
        description: {
            es: "Granito negro profundo con elegancia atemporal. Su color intenso y resistencia lo hacen perfecto para espacios modernos y minimalistas.",
            en: "Deep black granite with timeless elegance. Its intense color and durability make it perfect for modern and minimalist spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Toblerone",
        location: { es: "Turquía", en: "Turkey" },
        description: {
            es: "Mármol con vetas marrones y beige que recuerdan al chocolate. Su calidez y textura lo hacen ideal para espacios acogedores y elegantes.",
            en: "Marble with brown and beige veins reminiscent of chocolate. Its warmth and texture make it ideal for cozy and elegant spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Caliza", en: "Limestone" },
        materialName: "Campaspero",
        location: { es: "Campaspero - España", en: "Campaspero - Spain" },
        description: {
            es: "Caliza española de tono claro con textura natural. Material tradicional y versátil, perfecto para revestimientos interiores y exteriores.",
            en: "Spanish limestone in a light tone with a natural texture. Traditional and versatile material, perfect for interior and exterior cladding."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Negro Portoro",
        location: { es: "Portovenere - Italia", en: "Portovenere - Italy" },
        description: {
            es: "Mármol negro italiano con vetas doradas espectaculares. Material exclusivo y lujoso, ideal para crear espacios de alto impacto visual.",
            en: "Italian black marble with spectacular golden veins. Exclusive and luxurious material, ideal for creating high visual impact spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Lumix Pink",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Cuarcita en tonos rosados con propiedades luminosas únicas. Su resistencia y belleza la hacen perfecta para suelos de alto tránsito con personalidad.",
            en: "Quartzite in pink tones with unique luminous properties. Its resistance and beauty make it perfect for high-traffic floors with personality."
        },
        use: ["hogar", "empresas", "suelos"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Calacatta Classico",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol italiano clásico con vetas grises sobre fondo blanco puro. Sinónimo de elegancia atemporal, ideal para cocinas de lujo.",
            en: "Classic Italian marble with gray veins on a pure white background. A synonym of timeless elegance, ideal for luxury kitchens."
        },
        use: ["hogar", "empresas", "cocinas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Bottichino Fiorito",
        location: { es: "Brescia - Italia", en: "Brescia - Italy" },
        description: {
            es: "Mármol italiano beige con delicadas vetas florales. Su tono cálido y elegante lo hace versátil para múltiples aplicaciones.",
            en: "Italian beige marble with delicate floral veining. Its warm and elegant tone makes it versatile for multiple applications."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Bottichino SemiClassico",
        location: { es: "Brescia - Italia", en: "Brescia - Italy" },
        description: {
            es: "Mármol beige italiano con vetas suaves y apariencia clásica. Versión intermedia del Bottichino, perfecta para espacios elegantes y luminosos.",
            en: "Italian beige marble with soft veining and a classic appearance. Intermediate version of Bottichino, perfect for elegant and bright spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onyx White Persa",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix blanco translucido de origen persa con vetas sutiles. Material exclusivo y luminoso, ideal para proyectos singulares con retroiluminación.",
            en: "Translucent white onyx of Persian origin with subtle veins. Exclusive and luminous material, ideal for singular projects with backlighting."
        },
        use: ["hogar", "empresas", "singulares"],
    },
    {
        materialType: { es: "Travertino", en: "Travertine" },
        materialName: "Travertino Noche",
        location: { es: "Turquía", en: "Turkey" },
        description: {
            es: "Travertino en tonos oscuros con textura natural característica. Aporta calidez y sofisticación a espacios interiores y exteriores.",
            en: "Travertine in dark tones with characteristic natural texture. Adds warmth and sophistication to interior and exterior spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Perlado",
        location: { es: "España", en: "Spain" },
        description: {
            es: "Mármol con brillo perlado y tonalidades suaves. Su acabado luminoso y elegante lo hace ideal para revestimientos interiores refinados.",
            en: "Marble with a pearlescent shine and soft tones. Its luminous and elegant finish makes it ideal for refined interior cladding."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Anasol Macael",
        location: { es: "Macael - España", en: "Macael - Spain" },
        description: {
            es: "Mármol español de Macael con tono claro y uniforme. Material versátil y tradicional, perfecto para hoteles, fuentes y edificios religiosos.",
            en: "Spanish marble from Macael with a light and uniform tone. Versatile and traditional material, perfect for hotels, fountains, and religious buildings."
        },
        use: ["hogar", "empresas", "hoteles", "fuentes", "religiosos"],
    },
    {
        materialType: "Mineral",
        materialName: "Sodalite Blue",
        location: "Brasil",
        description: "Mineral de color azul intenso con vetas blancas y aspecto semiprecioso. Material excepcional para elementos decorativos exclusivos y de alto impacto.",
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Mystic Brown",
        location: { es: "India", en: "India" },
        description: {
            es: "Cuarcita en tonos marrones con patrones místicos y gran resistencia. Perfecta para suelos de alto tránsito que requieren durabilidad y belleza.",
            en: "Quartzite in brown tones with mystical patterns and great resistance. Perfect for high-traffic floors that require durability and beauty."
        },
        use: ["hogar", "empresas", "suelos"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Blanco Bruille",
        location: { es: "Francia", en: "France" },
        description: {
            es: "Mármol blanco con ligeras variaciones de tono y textura suave. Ideal para crear ambientes luminosos y espaciosos con elegancia clásica.",
            en: "White marble with slight tone variations and a smooth texture. Ideal for creating bright and spacious environments with classic elegance."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Kashmire White",
        location: { es: "India", en: "India" },
        description: {
            es: "Granito blanco con pequeños cristales grises y borgonas. Resistente y elegante, perfecto para encimeras y aplicaciones de alto uso.",
            en: "White granite with small gray and burgundy crystals. Durable and elegant, perfect for countertops and high-use applications."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Blanco Turco",
        location: { es: "Turquía", en: "Turkey" },
        description: {
            es: "Mármol blanco turco con vetas grises sutiles y acabado luminoso. Excelente alternativa económica al mármol blanco italiano con gran belleza.",
            en: "Turkish white marble with subtle gray veins and a luminous finish. Excellent economical alternative to Italian white marble with great beauty."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Tan Brown",
        location: { es: "India", en: "India" },
        description: {
            es: "Granito marrón con cristales negros y destellos dorados. Popular y duradero, ideal para encimeras de cocina y baño.",
            en: "Brown granite with black crystals and golden flecks. Popular and durable, ideal for kitchen and bathroom countertops."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Calacatta Macchia Vecchia",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol italiano premium con vetas grises y marrones características. Variedad exclusiva del Calacatta, perfecta para espacios de lujo.",
            en: "Premium Italian marble with characteristic gray and brown veins. Exclusive variety of Calacatta, perfect for luxury spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Crema Silvia",
        location: { es: "España", en: "Spain" },
        description: {
            es: "Mármol en tonos crema con vetas suaves y acabado elegante. Perfecto para crear ambientes cálidos y acogedores en hogares y negocios.",
            en: "Marble in cream tones with soft veining and an elegant finish. Perfect for creating warm and cozy environments in homes and businesses."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Caliza", en: "Limestone" },
        materialName: "Amarillo Mares",
        location: { es: "Almería - España", en: "Almeria - Spain" },
        description: {
            es: "Caliza española en tonos amarillos cálidos y luminosos. Material tradicional y versátil, ideal para revestimientos interiores y exteriores.",
            en: "Spanish limestone in warm and bright yellow tones. Traditional and versatile material, ideal for interior and exterior cladding."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onix Gris",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix en tonalidades grises con translucidez característica. Material exclusivo perfecto para elementos decorativos con retroiluminación.",
            en: "Onyx in gray tones with characteristic translucency. Exclusive material perfect for decorative elements with backlighting."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Negro Marquina",
        location: { es: "España", en: "Spain" },
        description: {
            es: "Mármol negro intenso con vetas blancas características, uno de los más icónicos de España. Aporta sofisticación y contraste dramático en baños, cocinas y espacios contemporáneos.",
            en: "Intense black marble with characteristic white veins, one of the most iconic in Spain. Adds sophistication and dramatic contrast in bathrooms, kitchens, and contemporary spaces."
        },
        use: ["hogar", "empresas", "baños", "cocinas"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Patagonia",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Cuarcita con patrones naturales que evocan paisajes patagónicos. Su resistencia y belleza única la hacen ideal para aplicaciones de alto impacto.",
            en: "Quartzite with natural patterns that evoke Patagonian landscapes. Its resistance and unique beauty make it ideal for high-impact applications."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Siena Brown",
        location: { es: "Toscana - Italia", en: "Tuscany - Italy" },
        description: {
            es: "Mármol marrón con vetas cálidas inspiradas en la Toscana italiana. Perfecto para crear ambientes rústicos y elegantes con carácter mediterráneo.",
            en: "Brown marble with warm veins inspired by the Italian Tuscany. Perfect for creating rustic and elegant environments with Mediterranean character."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Sierra Elvira",
        location: { es: "Granada - España", en: "Granada - Spain" },
        description: {
            es: "Mármol español de la Sierra Elvira con tonos claros y textura natural. Material tradicional ideal para arquitectura y decoración mediterránea.",
            en: "Spanish marble from Sierra Elvira with light tones and natural texture. Traditional material ideal for Mediterranean architecture and decoration."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Opera Fantastico",
        location: { es: "Italia", en: "Italy" },
        description: {
            es: "Mármol con vetas dramáticas y patrones espectaculares. Material de alto impacto visual, perfecto para crear espacios únicos y memorables.",
            en: "Marble with dramatic veins and spectacular patterns. Material with high visual impact, perfect for creating unique and memorable spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rosa Noruegia",
        location: { es: "Noruega", en: "Norway" },
        description: {
            es: "Mármol rosado escandinavo con vetas delicadas y tono cálido. Aporta elegancia y romanticismo a espacios residenciales y comerciales.",
            en: "Scandinavian pink marble with delicate veins and a warm tone. Adds elegance and romanticism to residential and commercial spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Milk White",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix blanco lechoso translucido con suaves vetas. Material exclusivo y luminoso, ideal para elementos decorativos con efecto de iluminación.",
            en: "Milky white translucent onyx with soft veins. Exclusive and luminous material, ideal for decorative elements with lighting effect."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onix Rojo Multicolor",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix con tonos rojos y múltiples colores vibrantes. Material espectacular y único, perfecto para proyectos exclusivos de alto impacto.",
            en: "Onyx with red tones and multiple vibrant colors. Spectacular and unique material, perfect for exclusive high-impact projects."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Multicolor Red",
        location: { es: "India", en: "India" },
        description: {
            es: "Granito con base roja y cristales multicolores. Resistente y colorido, ideal para espacios que buscan vitalidad y durabilidad.",
            en: "Granite with a red base and multicolored crystals. Durable and colorful, ideal for spaces seeking vitality and durability."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Travertino", en: "Travertine" },
        materialName: "Travertino Navona",
        location: { es: "Roma - Italia", en: "Rome - Italy" },
        description: {
            es: "Travertino romano con tono beige y textura porosa característica. Clásico y atemporal, perfecto para ambientes mediterráneos y rústicos.",
            en: "Roman travertine in beige tone with characteristic porous texture. Classic and timeless, perfect for Mediterranean and rustic environments."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Blanco Perlino",
        location: { es: "Grecia", en: "Greece" },
        description: {
            es: "Mármol blanco con brillo perlado y vetas grises sutiles. Elegante y luminoso, ideal para baños y espacios que buscan sofisticación.",
            en: "White marble with a pearlescent shine and subtle gray veins. Elegant and luminous, ideal for bathrooms and spaces seeking sophistication."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rojo Anatolia",
        location: { es: "Anatolia - Turquía", en: "Anatolia - Turkey" },
        description: {
            es: "Mármol rojo turco con intenso color y vetas blancas. Aporta calidez y carácter a espacios residenciales y comerciales.",
            en: "Turkish red marble with intense color and white veins. Adds warmth and character to residential and commercial spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Taj Mahal",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Cuarcita beige con vetas doradas y aspecto exótico. Su elegancia oriental y resistencia la hacen perfecta para suelos de lujo.",
            en: "Beige quartzite with golden veins and an exotic appearance. Its oriental elegance and durability make it perfect for luxury flooring."
        },
        use: ["hogar", "empresas", "suelos"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Blanco Sivec",
        location: { es: "Macedonia", en: "Macedonia" },
        description: {
            es: "Mármol blanco de Macedonia con grano fino y color puro. Material de alta calidad ideal para esculturas y proyectos singulares.",
            en: "White marble from Macedonia with a fine grain and pure color. High-quality material ideal for sculptures and singular projects."
        },
        use: ["hogar", "empresas", "singulares"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Azul Cielo",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Cuarcita en tonos azules celestes con gran resistencia. Su color único y durabilidad la hacen ideal para suelos con personalidad distintiva.",
            en: "Quartzite in sky blue tones with great resistance. Its unique color and durability make it ideal for flooring with distinctive personality."
        },
        use: ["hogar", "empresas", "suelos"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onyx Tiger",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix con franjas doradas y marrones que recuerdan al pelaje de tigre. Material exótico y espectacular para proyectos exclusivos.",
            en: "Onyx with golden and brown stripes reminiscent of tiger fur. Exotic and spectacular material for exclusive projects."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Quarzite Cielo",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Cuarcita en tonos celestes con gran resistencia y belleza. Su color único la hace perfecta para espacios contemporáneos con personalidad.",
            en: "Quartzite in sky blue tones with great resistance and beauty. Its unique color makes it perfect for contemporary spaces with personality."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Giallo Topazio",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Granito amarillo dorado con cristales brillantes como el topacio. Resistente y luminoso, perfecto para encimeras y superficies de alto uso.",
            en: "Golden yellow granite with bright crystals like topaz. Durable and luminous, perfect for countertops and high-use surfaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Moleanos",
        location: { es: "Portugal", en: "Portugal" },
        description: {
            es: "Mármol portugués en tonos beige con textura uniforme. Material versátil y elegante, ideal para pavimentos y revestimientos interiores.",
            en: "Portuguese marble in beige tones with a uniform texture. Versatile and elegant material, ideal for flooring and interior cladding."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Emperador Asiático",
        location: { es: "China", en: "China" },
        description: {
            es: "Mármol marrón asiático con vetas blancas distintivas. Alternativa oriental al clásico Emperador, ideal para espacios elegantes y cálidos.",
            en: "Asian brown marble with distinctive white veins. Oriental alternative to the classic Emperador, ideal for elegant and warm spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Paonazzo",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol italiano con vetas violetas y púrpuras sobre fondo blanco. Material exclusivo y espectacular, perfecto para espacios de lujo y distinción.",
            en: "Italian marble with violet and purple veins on a white background. Exclusive and spectacular material, perfect for luxury and distinguished spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Chamonix",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Granito con tonos grises y cristales blancos que evocan paisajes alpinos. Resistente y elegante, ideal para encimeras y aplicaciones de alto uso.",
            en: "Granite with gray tones and white crystals reminiscent of alpine landscapes. Durable and elegant, perfect for countertops and high-use applications."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rojo Antico de Italia",
        location: { es: "Italia", en: "Italy" },
        description: {
            es: "Mármol rojo italiano antiguo con rica historia y color intenso. Material noble y exclusivo, perfecto para espacios que buscan distinción imperial.",
            en: "Ancient Italian red marble with a rich history and intense color. Noble and exclusive material, perfect for spaces seeking imperial distinction."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Crema Delicato",
        location: { es: "Italia", en: "Italy" },
        description: {
            es: "Mármol crema con vetas delicadas y tono suave. Aporta calidez y serenidad a espacios residenciales y comerciales con elegancia sutil.",
            en: "Cream marble with delicate veining and a soft tone. Adds warmth and serenity to residential and commercial spaces with subtle elegance."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Calacatta Crema",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol italiano con fondo crema y vetas grises elegantes. Variante cálida del Calacatta clásico, perfecta para ambientes acogedores y sofisticados.",
            en: "Italian marble with a cream background and elegant gray veins. Warm variant of the classic Calacatta, perfect for cozy and sophisticated environments."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Marmara",
        location: { es: "Turquía", en: "Turkey" },
        description: {
            es: "Mármol blanco turco del Mar de Mármara con textura fina. Material histórico y elegante, ideal para aplicaciones clásicas y contemporáneas.",
            en: "Turkish white marble from the Sea of Marmara with a fine texture. Historical and elegant material, ideal for classic and contemporary applications."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Blanco Statuario Vena Fina",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol italiano premium con vetas grises finas sobre fondo blanco puro. Material escultórico de máxima calidad, ideal para proyectos de lujo.",
            en: "Premium Italian marble with fine gray veins on a pure white background. Sculptural material of the highest quality, ideal for luxury projects."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Giallo Veneziano Gold",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Granito dorado con cristales brillantes y movimiento elegante. Resistente y lujoso, perfecto para hoteles y espacios comerciales de prestigio.",
            en: "Golden granite with bright crystals and elegant movement. Durable and luxurious, perfect for hotels and prestigious commercial spaces."
        },
        use: ["hogar", "empresas", "hoteles"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onix Orange",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix en tonos naranjas vibrantes con translucidez espectacular. Material exclusivo y energético, ideal para elementos decorativos con retroiluminación.",
            en: "Onyx in vibrant orange tones with spectacular translucency. Exclusive and energetic material, ideal for decorative elements with backlighting."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Giallo Reale",
        location: { es: "Egipto", en: "Egypt" },
        description: {
            es: "Mármol amarillo real con tonalidades cálidas y elegantes. Su color luminoso y único aporta distinción a espacios exclusivos.",
            en: "Royal yellow marble with warm and elegant tones. Its bright and unique color adds distinction to exclusive spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Bardiglio",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol italiano gris oscuro con vetas características. Material clásico y sofisticado, ideal para espacios contemporáneos y elegantes.",
            en: "Italian dark gray marble with characteristic veining. Classic and sophisticated material, ideal for contemporary and elegant spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rojo Francia Classico",
        location: { es: "Francia", en: "France" },
        description: {
            es: "Mármol rojo francés clásico con vetas blancas elegantes. Material noble con historia, perfecto para espacios de alto standing y distinción.",
            en: "Classic French red marble with elegant white veins. Noble material with history, perfect for high-standing spaces and distinction."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Emperador Light",
        location: { es: "España", en: "Spain" },
        description: {
            es: "Mármol marrón claro con vetas blancas, versión suave del clásico Emperador. Perfecto para cocinas y espacios que buscan calidez y elegancia.",
            en: "Light brown marble with white veins, a softer version of the classic Emperador. Perfect for kitchens and spaces seeking warmth and elegance."
        },
        use: ["hogar", "empresas", "cocinas"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Sidney Quartzite",
        location: { es: "Australia", en: "Australia" },
        description: {
            es: "Cuarcita australiana con patrones naturales únicos y gran resistencia. Material de alta calidad ideal para aplicaciones decorativas y funcionales.",
            en: "Australian quartzite with unique natural patterns and great resistance. High-quality material ideal for decorative and functional applications."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rojo Bilbao",
        location: { es: "Bilbao - España", en: "Bilbao - Spain" },
        description: {
            es: "Mármol rojo español del País Vasco con tonalidad intensa. Material tradicional y distintivo, ideal para espacios con carácter ibérico.",
            en: "Spanish red marble from the Basque Country with an intense hue. Traditional and distinctive material, ideal for spaces with Iberian character."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Juparana Classico",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Granito brasileño con patrones ondulados en tonos beige y borgonas. Resistente y decorativo, perfecto para encimeras y aplicaciones de alto uso.",
            en: "Brazilian granite with wavy patterns in beige and burgundy tones. Durable and decorative, perfect for countertops and high-use applications."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Sarrancolin",
        location: { es: "Pirineos - Francia", en: "Pyrenees - France" },
        description: {
            es: "Mármol francés de los Pirineos con vetas multicolores espectaculares. Material histórico y exclusivo, usado en palacios y monumentos.",
            en: "French marble from the Pyrenees with spectacular multicolored veining. Historical and exclusive material, used in palaces and monuments."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Explosion Black",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Granito negro con cristales dorados y blancos explosivos. Material dramático y resistente, perfecto para espacios modernos con alto impacto visual.",
            en: "Black granite with explosive golden and white crystals. Dramatic and durable material, perfect for modern spaces with high visual impact."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Caliza", en: "Limestone" },
        materialName: "Amarillo Cenia",
        location: { es: "Maestrazgo - España", en: "Maestrazgo - Spain" },
        description: {
            es: "Caliza española en tonos amarillos luminosos del Maestrazgo. Material tradicional y cálido, ideal para arquitectura mediterránea.",
            en: "Spanish limestone in bright yellow tones from Maestrazgo. Traditional and warm material, ideal for Mediterranean architecture."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Bidasar Brown",
        location: { es: "India", en: "India" },
        description: {
            es: "Granito indio marrón con patrones ondulados únicos. Resistente y decorativo, perfecto para encimeras y superficies de alto tránsito.",
            en: "Indian brown granite with unique wavy patterns. Durable and decorative, perfect for countertops and high-traffic surfaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Crema Valencia",
        location: { es: "Valencia - España", en: "Valencia - Spain" },
        description: {
            es: "Mármol español en tonos crema suaves de la región valenciana. Material versátil y luminoso, ideal para espacios cálidos y mediterráneos.",
            en: "Spanish marble in soft cream tones from the Valencia region. Versatile and luminous material, ideal for warm and Mediterranean spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: {es: "Mineral", en: "Mineral" },
        materialName: "Lapislazzuli",
        location: {es: "Afganistán", en: "Afghanistan"},
        description: {
            es: "Mineral semiprecioso de color azul intenso con destellos dorados. Material exclusivo y lujoso, ideal para elementos decorativos de alto valor.",
            en: "Semi-precious mineral of intense blue color with golden flecks. Exclusive and luxurious material, ideal for high-value decorative elements."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Grigio Carnico",
        location: { es: "Alpes Cárnicos - Italia", en: "Carnic Alps - Italy" },
        description: {
            es: "Mármol italiano gris de los Alpes Cárnicos con vetas elegantes. Material sofisticado y versátil, perfecto para espacios contemporáneos.",
            en: "Italian gray marble from the Carnic Alps with elegant veining. Sophisticated and versatile material, perfect for contemporary spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Lumix",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Cuarcita con propiedades luminosas únicas y gran resistencia. Material innovador ideal para aplicaciones decorativas con efectos de luz.",
            en: "Quartzite with unique luminous properties and great resistance. Innovative material ideal for decorative applications with light effects."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Sunny Oro",
        location: { es: "Egipto", en: "Egypt" },
        description: {
            es: "Mármol en tonos dorados soleados con vetas cálidas. Aporta luminosidad y calidez a espacios residenciales y comerciales con estilo acogedor.",
            en: "Marble in sunny golden tones with warm veins. Adds brightness and warmth to residential and commercial spaces with a cozy style."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Travertino", en: "Travertine" },
        materialName: "Travertino Clasico",
        location: { es: "Italia", en: "Italy" },
        description: {
            es: "Travertino beige con textura porosa clásica. Material atemporal y versátil, perfecto para arquitectura tradicional y contemporánea.",
            en: "Classic beige travertine with a porous texture. Timeless and versatile material, perfect for traditional and contemporary architecture."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rojo Alicante",
        location: { es: "Alicante - España", en: "Alicante - Spain" },
        description: {
            es: "Mármol rojo español con fósiles marinos y color intenso. Material emblemático de Alicante, ideal para espacios con personalidad mediterránea.",
            en: "Spanish red marble with marine fossils and intense color. Emblematic material from Alicante, ideal for spaces with Mediterranean personality."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Blanco Gioia",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol blanco italiano con brillo alegre y vetas grises suaves. Su nombre 'Gioia' (alegría) refleja su luminosidad y elegancia.",
            en: "Italian white marble with a cheerful shine and soft gray veins. Its name 'Gioia' (joy) reflects its brightness and elegance."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Caliza", en: "Limestone" },
        materialName: "Galala",
        location: { es: "Egipto", en: "Egypt" },
        description: {
            es: "Caliza egipcia en tonos beige claro con textura uniforme. Material económico y versátil, perfecto para grandes superficies interiores y exteriores.",
            en: "Egyptian limestone in light beige tones with a uniform texture. Economical and versatile material, perfect for large interior and exterior surfaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Travertino", en: "Travertine" },
        materialName: "Crema Albero",
        location: { es: "Italia", en: "Italy" },
        description: {
            es: "Travertino en tonos crema suaves con textura natural. Material cálido y acogedor, ideal para revestimientos interiores y exteriores.",
            en: "Travertine in soft cream tones with a natural texture. Warm and cozy material, ideal for interior and exterior cladding."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Calacatta Luchicoso",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol italiano premium con vetas grises y doradas sobre fondo blanco. Variedad exclusiva del Calacatta para proyectos de máximo lujo.",
            en: "Premium Italian marble with gray and golden veins on a white background. Exclusive variety of Calacatta for maximum luxury projects."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onix Verde Pakistani",
        location: { es: "Pakistán", en: "Pakistan" },
        description: {
            es: "Ónix verde pakistaní con translucidez y vetas naturales. Material exótico y exclusivo, perfecto para elementos decorativos iluminados.",
            en: "Pakistani green onyx with translucency and natural veining. Exotic and exclusive material, perfect for illuminated decorative elements."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Arabescato Corchia",
        location: { es: "Corchia - Italia", en: "Corchia - Italy" },
        description: {
            es: "Mármol italiano con vetas grises arabescadas sobre fondo blanco. Material premium de Corchia, ideal para cocinas de alto standing.",
            en: "Italian marble with arabesque gray veining on a white background. Premium material from Corchia, ideal for high-end kitchens."
        },
        use: ["hogar", "empresas", "cocinas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Perlato Royale",
        location: { es: "Sicilia - Italia", en: "Sicily - Italy" },
        description: {
            es: "Mármol italiano con acabado perlado real y tonos beige. Material elegante y luminoso, perfecto para espacios de alto standing.",
            en: "Italian marble with royal pearlescent finish and beige tones. Elegant and luminous material, perfect for high-end spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Gris Perla",
        location: { es: "España", en: "Spain" },
        description: {
            es: "Granito gris con brillo perlado y cristales sutiles. Resistente y elegante, perfecto para encimeras de cocina con acabado sofisticado.",
            en: "Gray granite with a pearlescent shine and subtle crystals. Durable and elegant, perfect for kitchen countertops with a sophisticated finish."
        },
        use: ["hogar", "empresas", "cocinas"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onix Ivory",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix color marfil con translucidez cálida y vetas naturales. Material exclusivo ideal para elementos decorativos con retroiluminación suave.",
            en: "Ivory-colored onyx with warm translucency and natural veining. Exclusive material ideal for decorative elements with soft backlighting."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Baccarat",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix premium con patrones cristalinos como el cristal Baccarat. Material de máxima exclusividad, ideal para proyectos de lujo excepcional.",
            en: "Premium onyx with crystalline patterns like Baccarat crystal. Material of maximum exclusivity, ideal for exceptional luxury projects."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Negro Bamboo",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Granito negro con vetas blancas que recuerdan tallos de bambú. Resistente y decorativo, perfecto para cocinas modernas con estética asiática.",
            en: "Black granite with white veins reminiscent of bamboo stalks. Durable and decorative, perfect for modern kitchens with an Asian aesthetic."
        },
        use: ["hogar", "empresas", "cocinas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Pink Lavkas",
        location: { es: "Grecia", en: "Greece" },
        description: {
            es: "Mármol rosado griego con tonalidades delicadas y vetas suaves. Material romántico y elegante, ideal para espacios con sensibilidad artística.",
            en: "Greek pink marble with delicate hues and soft veining. Romantic and elegant material, ideal for spaces with artistic sensitivity."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Perla Venato",
        location: { es: "Grecia", en: "Greece" },
        description: {
            es: "Mármol con acabado perlado y vetas grises sobre fondo claro. Elegante y luminoso, perfecto para baños y espacios refinados.",
            en: "Marble with a pearlescent finish and gray veining on a light background. Elegant and luminous, perfect for bathrooms and refined spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Shiwakashi",
        location: { es: "Japón", en: "Japan" },
        description: {
            es: "Granito japonés con patrones ondulados y tonos grises. Material exótico y resistente, ideal para espacios con estética zen y minimalista.",
            en: "Japanese granite with wavy patterns and gray tones. Exotic and durable material, ideal for spaces with zen and minimalist aesthetics."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Blanco Carrara",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol italiano clásico con vetas grises sobre fondo blanco. Material icónico usado desde el Renacimiento, ideal para cualquier proyecto elegante.",
            en: "Classic Italian marble with gray veins on a white background. Iconic material used since the Renaissance, ideal for any elegant project."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Gris Macael",
        location: { es: "Macael - España", en: "Macael - Spain" },
        description: {
            es: "Mármol español gris de las canteras de Macael. Material tradicional y elegante, ideal para arquitectura contemporánea y mediterránea.",
            en: "Spanish gray marble from the Macael quarries. Traditional and elegant material, ideal for contemporary and Mediterranean architecture."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Irish Connemarble",
        location: { es: "Connemara - Irlanda", en: "Connemara - Ireland" },
        description: {
            es: "Mármol irlandés con tonos verdes y vetas únicas de Connemara. Material exótico y distintivo, ideal para proyectos exclusivos con carácter céltico.",
            en: "Irish marble with green tones and unique veining from Connemara. Exotic and distinctive material, ideal for exclusive projects with Celtic character."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Cosmus",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Granito con patrones cósmicos y colores profundos. Material espectacular y resistente, perfecto para espacios que buscan un acabado celestial.",
            en: "Granite with cosmic patterns and deep colors. Spectacular and durable material, perfect for spaces seeking a celestial finish."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Rosa Tropical",
        location: { es: "India", en: "India" },
        description: {
            es: "Granito en tonos rosados con cristales tropicales vibrantes. Resistente y colorido, ideal para espacios que buscan calidez y personalidad.",
            en: "Granite in pink tones with vibrant tropical crystals. Durable and colorful, ideal for spaces seeking warmth and personality."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Travertino", en: "Travertine" },
        materialName: "Travertino Amarillo",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Travertino en tonos amarillos cálidos con textura porosa natural. Material luminoso y acogedor, perfecto para ambientes mediterráneos y rústicos.",
            en: "Travertine in warm yellow tones with a natural porous texture. Bright and cozy material, perfect for Mediterranean and rustic environments."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Kashmire Gold",
        location: { es: "India", en: "India" },
        description: {
            es: "Granito indio dorado con cristales marrones y negros. Popular y resistente, ideal para encimeras de cocina con estética cálida.",
            en: "Indian golden granite with brown and black crystals. Popular and durable, ideal for kitchen countertops with a warm aesthetic."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Blanco Carrara C",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol Carrara calidad C con vetas grises más pronunciadas. Material clásico y versátil, ideal para proyectos religiosos y arquitectónicos.",
            en: "Carrara marble quality C with more pronounced gray veins. Classic and versatile material, ideal for religious and architectural projects."
        },
        use: ["hogar", "empresas", "religiosos"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onix Verde Light",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix verde claro con translucidez delicada y vetas suaves. Material elegante y luminoso, perfecto para elementos decorativos con iluminación sutil.",
            en: "Light green onyx with delicate translucency and soft veining. Elegant and luminous material, perfect for decorative elements with subtle lighting."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Alabastro", en: "Alabaster" },
        materialName: "Alabastro Egipcio",
        location: { es: "Egipto", en: "Egypt" },
        description: {
            es: "Alabastro egipcio translucido con historia milenaria. Material exótico y luminoso, ideal para proyectos exclusivos con retroiluminación espectacular.",
            en: "Translucent Egyptian alabaster with a millenary history. Exotic and luminous material, ideal for exclusive projects with spectacular backlighting."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Breccia de Montepulciano",
        location: { es: "Montepulciano - Italia", en: "Montepulciano - Italy" },
        description: {
            es: "Mármol tipo breccia de Toscana con fragmentos rojizos y beige. Material artístico y único, ideal para espacios con carácter italiano.",
            en: "Breccia-type marble from Tuscany with reddish and beige fragments. Artistic and unique material, ideal for spaces with Italian character."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onyx White Classico",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix blanco clásico con translucidez y vetas elegantes. Material atemporal y exclusivo, perfecto para proyectos de lujo con iluminación.",
            en: "Classic white onyx with translucency and elegant veining. Timeless and exclusive material, perfect for luxury projects with lighting."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rojo Lepanto",
        location: { es: "Grecia", en: "Greece" },
        description: {
            es: "Mármol rojo con historia de Lepanto y vetas blancas marcadas. Material heráldico y noble, ideal para espacios con tradición y distinción.",
            en: "Red marble with the history of Lepanto and marked white veins. Heraldic and noble material, ideal for spaces with tradition and distinction."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Oroluce",
        location: { es: "Italia", en: "Italy" },
        description: {
            es: "Mármol con destellos dorados y luminosos que evocan luz de oro. Material exclusivo y brillante, perfecto para espacios de máximo lujo.",
            en: "Marble with golden and luminous sparkles that evoke the light of gold. Exclusive and shiny material, perfect for maximum luxury spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rosa Zarci",
        location: { es: "Portugal", en: "Portugal" },
        description: {
            es: "Mármol rosado portugués con tonalidades delicadas. Material romántico y elegante, ideal para espacios que buscan suavidad y sofisticación.",
            en: "Portuguese pink marble with delicate hues. Romantic and elegant material, ideal for spaces seeking softness and sophistication."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onyx Pink Persa",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix rosado persa con translucidez romántica y vetas suaves. Material exótico y exclusivo, perfecto para elementos decorativos iluminados.",
            en: "Persian pink onyx with romantic translucency and soft veining. Exotic and exclusive material, perfect for illuminated decorative elements."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Azul Macaubas",
        location: { es: "Macaubas - Brasil", en: "Macaubas - Brazil" },
        description: {
            es: "Cuarcita brasileña de color azul extraordinario y gran resistencia. Material excepcional y exclusivo, ideal para hoteles de lujo y proyectos singulares.",
            en: "Brazilian quartzite in an extraordinary blue color with great resistance. Exceptional and exclusive material, ideal for luxury hotels and singular projects."
        },
        use: ["hogar", "empresas", "hoteles"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onix Verde Irani",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix verde iraní con patrones naturales y translucidez profunda. Material exótico de Persia, ideal para proyectos exclusivos con retroiluminación.",
            en: "Iranian green onyx with natural patterns and deep translucency. Exotic material from Persia, ideal for exclusive projects with backlighting."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Crema Loja",
        location: { es: "Loja - España", en: "Loja - Spain" },
        description: {
            es: "Mármol español crema de Loja con tonalidad cálida uniforme. Material tradicional y acogedor, ideal para espacios mediterráneos y clásicos.",
            en: "Spanish cream marble from Loja with a uniform warm hue. Traditional and cozy material, ideal for Mediterranean and classic spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Velvet Grey",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Cuarcita gris con textura aterciopelada y gran resistencia. Material sofisticado y táctil, perfecto para espacios contemporáneos de lujo.",
            en: "Gray quartzite with a velvety texture and great resistance. Sophisticated and tactile material, perfect for contemporary luxury spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Lumix Green",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Cuarcita verde con propiedades luminosas y gran durabilidad. Material innovador y energético, ideal para espacios con personalidad vibrante.",
            en: "Green quartzite with luminous properties and great durability. Innovative and energetic material, ideal for spaces with vibrant personality."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Travertino", en: "Travertine" },
        materialName: "Travertino Gold",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Travertino en tonos dorados cálidos con textura natural. Material lujoso y acogedor, perfecto para hoteles y espacios de alto standing.",
            en: "Travertine in warm golden tones with a natural texture. Luxurious and cozy material, perfect for hotels and high-end spaces."
        },
        use: ["hogar", "empresas", "hoteles"],
    },
    {
        materialType: { es: "Caliza", en: "Limestone" },
        materialName: "Caliza Lumaquela",
        location: { es: "España", en: "Spain" },
        description: {
            es: "Caliza con fósiles marinos visibles y aspecto histórico. Material natural y educativo, ideal para espacios con carácter geológico y cultural.",
            en: "Limestone with visible marine fossils and a historical appearance. Natural and educational material, ideal for spaces with geological and cultural character."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: "Mineral",
        materialName: "Labradorite Blue",
        location: "Madagascar",
        description: "Mineral con iridiscencia azul mágica y efectos de labradorescencia. Material excepcional y místico, ideal para elementos decorativos de alto valor.",
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Breche de Vendome",
        location: { es: "Vendôme - Francia", en: "Vendôme - France" },
        description: {
            es: "Mármol breccia francés con fragmentos marrones y beige. Material histórico y elegante, usado en palacios de Versalles.",
            en: "French breccia marble with brown and beige fragments. Historical and elegant material, used in the palaces of Versailles."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Bottichino Classico",
        location: { es: "Brescia - Italia", en: "Brescia - Italy" },
        description: {
            es: "Mármol beige italiano clásico con vetas elegantes. Versión tradicional del Bottichino, ideal para espacios atemporales y refinados.",
            en: "Classic Italian beige marble with elegant veining. Traditional version of Bottichino, ideal for timeless and refined spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Tartaruga",
        location: { es: "Italia", en: "Italy" },
        description: {
            es: "Mármol con patrones que recuerdan el caparazón de tortuga. Material único y artístico, ideal para espacios con carácter distintivo.",
            en: "Marble with patterns reminiscent of a turtle shell. Unique and artistic material, ideal for spaces with distinctive character."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Azul Aran",
        location: { es: "Pontevedra - España", en: "Pontevedra - Spain" },
        description: {
            es: "Granito azul español con cristales brillantes y color profundo. Material resistente y exclusivo, ideal para encimeras y aplicaciones de alto uso.",
            en: "Spanish blue granite with bright crystals and deep color. Durable and exclusive material, ideal for countertops and high-use applications."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onyx Iris Light",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix claro con tonos iridiscentes sutiles y translucidez delicada. Material exclusivo y luminoso, perfecto para elementos decorativos con iluminación suave.",
            en: "Light onyx with subtle iridescent tones and delicate translucency. Exclusive and luminous material, perfect for decorative elements with soft lighting."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Blanco Statuario Venato Extra",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol italiano de máxima calidad con vetas grises dramáticas sobre blanco puro. Material escultórico premium para proyectos de lujo excepcional.",
            en: "Italian marble of the highest quality with dramatic gray veins on a pure white background. Premium sculptural material for exceptional luxury projects."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Crema Marfil",
        location: { es: "Alicante - España", en: "Alicante - Spain" },
        description: {
            es: "Mármol español crema icónico con tonalidad cálida uniforme. Material clásico y versátil, ideal para fuentes, proyectos singulares y arquitectura de prestigio.",
            en: "Iconic Spanish cream marble with a uniform warm hue. Classic and versatile material, ideal for fountains, singular projects, and prestigious architecture."
        },
        use: ["hogar", "empresas", "singulares", "fuentes"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rosa Valencia",
        location: { es: "Valencia - España", en: "Valencia - Spain" },
        description: {
            es: "Mármol rosado español de Valencia con tonalidades suaves. Material tradicional y espiritual, ideal para edificios religiosos y espacios contemplativos.",
            en: "Spanish pink marble from Valencia with soft tones. Traditional and spiritual material, ideal for religious buildings and contemplative spaces."
        },
        use: ["hogar", "empresas", "religiosos"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Blanco Macael Zebrino",
        location: { es: "Macael - España", en: "Macael - Spain" },
        description: {
            es: "Mármol blanco de Macael con vetas grises tipo cebra. Material español distintivo, perfecto para fuentes y proyectos decorativos únicos.",
            en: "White marble from Macael with zebra-like gray veining. Distinctive Spanish material, perfect for fountains and unique decorative projects."
        },
        use: ["hogar", "empresas", "fuentes"],
    },
    {
        materialType: { es: "Travertino", en: "Travertine" },
        materialName: "Travertino Olivillo",
        location: { es: "España", en: "Spain" },
        description: {
            es: "Travertino en tonos oliva con textura natural y cálida. Material orgánico y acogedor, ideal para espacios rústicos y mediterráneos.",
            en: "Travertine in olive tones with a natural and warm texture. Organic and cozy material, ideal for rustic and Mediterranean spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Caliza", en: "Limestone" },
        materialName: "Caliza Paloma",
        location: { es: "España", en: "Spain" },
        description: {
            es: "Caliza en tonos grises paloma con textura suave. Material sereno y versátil, perfecto para fuentes y revestimientos exteriores.",
            en: "Limestone in dove gray tones with a smooth texture. Serene and versatile material, perfect for fountains and exterior cladding."
        },
        use: ["hogar", "empresas", "fuentes"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Statuario Michelangelo",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol italiano de máxima calidad usado por Miguel Ángel. Material legendario y escultórico, ideal para proyectos de prestigio artístico.",
            en: "Italian marble of the highest quality used by Michelangelo. Legendary and sculptural material, ideal for prestigious artistic projects."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onix Rojo Vulcano",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix rojo volcánico con intensidad de fuego y translucidez dramática. Material explosivo y exclusivo, ideal para proyectos con máximo impacto visual.",
            en: "Volcanic red onyx with fiery intensity and dramatic translucency. Explosive and exclusive material, ideal for projects with maximum visual impact."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Arenisca", en: "Sandstone" },
        materialName: "Teak Wood",
        location: { es: "India", en: "India" },
        description: {
            es: "Arenisca con vetas que imitan madera de teca. Material natural y orgánico, perfecto para espacios que buscan calidez de madera con durabilidad de piedra.",
            en: "Sandstone with veining that mimics teak wood. Natural and organic material, perfect for spaces seeking the warmth of wood with the durability of stone."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Giallo Siena",
        location: { es: "Siena - Italia", en: "Siena - Italy" },
        description: {
            es: "Mármol amarillo de Siena con tonos cálidos toscanos. Material histórico y luminoso, ideal para hoteles y espacios de inspiración italiana.",
            en: "Yellow marble from Siena with warm Tuscan tones. Historical and luminous material, ideal for hotels and spaces with Italian inspiration."
        },
        use: ["hogar", "empresas", "hoteles"],
    },
    {
        materialType: { es: "Travertino", en: "Travertine" },
        materialName: "Travertino Dorado",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Travertino en tonos dorados cálidos con textura natural. Material lujoso y acogedor, ideal para espacios con elegancia mediterránea.",
            en: "Travertine in warm golden tones with a natural texture. Luxurious and cozy material, ideal for spaces with Mediterranean elegance."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Arabescato Vagli",
        location: { es: "Vagli - Italia", en: "Vagli - Italy" },
        description: {
            es: "Mármol italiano de Vagli con vetas arabescadas espectaculares. Material premium y exclusivo, ideal para proyectos de máximo lujo y distinción.",
            en: "Italian marble from Vagli with spectacular arabesque veining. Premium and exclusive material, ideal for maximum luxury and distinction projects."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Blanco Thassos",
        location: { es: "Thassos - Grecia", en: "Thassos - Greece" },
        description: {
            es: "Mármol blanco griego de pureza excepcional sin vetas. Material premium y luminoso de la isla de Thassos, ideal para proyectos que requieren blanco absoluto.",
            en: "Greek white marble of exceptional purity without veining. Premium and luminous material from the island of Thassos, ideal for projects requiring absolute white."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Absolute Black Zimbabwe",
        location: { es: "Zimbabwe", en: "Zimbabwe" },
        description: {
            es: "Granito negro absoluto de Zimbabwe con color uniforme profundo. Material premium y resistente, ideal para encimeras y aplicaciones de máximo contraste.",
            en: "Absolute black granite from Zimbabwe with a deep uniform color. Premium and durable material, ideal for countertops and high-contrast applications."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Black Forest",
        location: { es: "Italia", en: "Italy" },
        description: {
            es: "Mármol italiano oscuro con vetas verdes que evocan un bosque denso. Material dramático y sofisticado, ideal para espacios contemporáneos que buscan profundidad y misterio.",
            en: "Italian dark marble with green veins reminiscent of a dense forest. Dramatic and sophisticated material, ideal for contemporary spaces seeking depth and mystery."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rojo Verona",
        location: { es: "Verona - Italia", en: "Verona - Italy" },
        description: {
            es: "Mármol rojo italiano de Verona con vetas blancas y tonalidad romántica. Material clásico con historia romana, perfecto para espacios apasionados y elegantes.",
            en: "Italian red marble from Verona with white veins and a romantic hue. Classic material with Roman history, perfect for passionate and elegant spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rojo Sevilla",
        location: { es: "Sevilla - España", en: "Seville - Spain" },
        description: {
            es: "Mármol rojo andaluz con pasión sevillana y vetas blancas. Material emblemático español, ideal para espacios con carácter ibérico y flamenco.",
            en: "Andalusian red marble with Sevillian passion and white veins. Emblematic Spanish material, ideal for spaces with Iberian and flamenco character."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Port Sant Laurent",
        location: { es: "Pirineos - Francia", en: "Pyrenees - France" },
        description: {
            es: "Mármol francés con vetas rosadas y grises sobre fondo oscuro. Material sofisticado y exclusivo, ideal para hoteles de lujo y proyectos premium.",
            en: "French marble with pink and gray veins on a dark background. Sophisticated and exclusive material, ideal for luxury hotels and premium projects."
        },
        use: ["hogar", "empresas", "hoteles"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Blanco Statuario Venato",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol italiano premium con vetas grises sobre blanco puro. Material escultórico de alta calidad, ideal para proyectos de lujo y distinción.",
            en: "Premium Italian marble with gray veins on pure white. High-quality sculptural material, ideal for luxury and distinction projects."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Calacatta Carrara",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol que combina la elegancia del Calacatta con el origen de Carrara. Material premium con vetas grises, ideal para espacios de alto standing.",
            en: "Marble that combines the elegance of Calacatta with the origin of Carrara. Premium material with gray veins, ideal for high-standing spaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Absolute Black Belfast",
        location: { es: "Irlanda del Norte", en: "Northern Ireland" },
        description: {
            es: "Granito negro absoluto con acabado profundo y uniforme. Material resistente y elegante, perfecto para encimeras modernas con máximo contraste.",
            en: "Absolute black granite with a deep and uniform finish. Durable and elegant material, perfect for modern countertops with maximum contrast."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Crema Moca",
        location: { es: "Portugal", en: "Portugal" },
        description: {
            es: "Mármol crema con tonos moka y textura suave. Material cálido y acogedor, ideal para espacios que buscan elegancia mediterránea y confort.",
            en: "Cream marble with mocha tones and a smooth texture. Warm and cozy material, ideal for spaces seeking Mediterranean elegance and comfort."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Blanco Macael",
        location: { es: "Macael - España", en: "Macael - Spain" },
        description: {
            es: "Mármol blanco español icónico de Macael, Almería. Material emblemático con siglos de historia, ideal para proyectos singulares y arquitectura de prestigio.",
            en: "Iconic Spanish white marble from Macael, Almeria. Emblematic material with centuries of history, ideal for singular projects and prestigious architecture."
        },
        use: ["hogar", "empresas", "singulares"],
    },
    {
        materialType: { es: "Ónix", en: "Onyx" },
        materialName: "Onix Miel",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Ónix color miel con translucidez cálida y dulce. Material exclusivo y acogedor, perfecto para elementos decorativos con retroiluminación dorada.",
            en: "Honey-colored onyx with warm and sweet translucency. Exclusive and cozy material, perfect for decorative elements with golden backlighting."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Emperador Dark",
        location: { es: "España", en: "Spain" },
        description: {
            es: "Mármol marrón oscuro clásico con vetas blancas. Material icónico español, ideal para espacios elegantes y sofisticados con calidez imperial.",
            en: "Classic dark brown marble with white veins. Iconic Spanish material, ideal for elegant and sophisticated spaces with imperial warmth."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Verde Sabana",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Mármol verde brasileño con vetas blancas y tonos naturales. Material exótico y lujoso, ideal para proyectos que buscan un toque de distinción y naturaleza.",
            en: "Brazilian green marble with white veins and natural tones. Exotic and luxurious material, ideal for projects seeking a touch of distinction and nature."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Crema Nacar",
        location: { es: "España", en: "Spain" },
        description: {
            es: "Mármol crema con brillo nacarado y tonalidades iridiscentes. Material luminoso y sofisticado, ideal para espacios que buscan elegancia perlada.",
            en: "Cream marble with a pearlescent shine and iridescent hues. Luminous and sophisticated material, ideal for spaces seeking pearlescent elegance."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Macauba Cream",
        location: { es: "Macaubas - Brasil", en: "Macaubas - Brazil" },
        description: {
            es: "Cuarcita brasileña en tonos crema con vetas onduladas. Material resistente y elegante, ideal para encimeras y aplicaciones de alto uso con estética refinada.",
            en: "Brazilian quartzite in cream tones with wavy veining. Durable and elegant material, ideal for countertops and high-use applications with a refined aesthetic."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Verde India",
        location: { es: "China", en: "China" },
        description: {
            es: "El mármol verde con vetas blancas y tonos profundos. Material exótico y lujoso, ideal para proyectos que buscan un toque de distinción y naturaleza.",
            en: "Green marble with white veins and deep tones. Exotic and luxurious material, ideal for projects seeking a touch of distinction and nature."
        },
        use: ["hogar", "empresas", "hoteles"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Arabescatto Oro",
        location: { es: "Carrara - Italia", en: "Carrara - Italy" },
        description: {
            es: "Mármol italiano con vetas arabescadas y toques dorados. Material premium y lujoso, ideal para proyectos de máxima distinción y elegancia.",
            en: "Italian marble with arabesque veining and golden touches. Premium and luxurious material, ideal for projects of maximum distinction and elegance."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Serpeggiante",
        location: { es: "Italia", en: "Italy" },
        description: {
            es: "Mármol italiano con vetas verdes serpentinas sobre fondo claro. Material artístico y único, ideal para espacios que buscan carácter natural distintivo.",
            en: "Italian marble with serpentine green veining on a light background. Artistic and unique material, ideal for spaces seeking distinctive natural character."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Alga Green",
        use: ["hogar", "empresas"],
        location: "Las Palmas, España",
        description: "Mármol verde con tonalidades que evocan algas marinas. Material natural y fresco, ideal para espacios que buscan conexión con la naturaleza y serenidad.",
        technicalData: [
            {
                cdg: "6023",
                comprStrenght: "1900 (kg/cm²)",
                afterFreeze: "1720 (kg/cm²)",
                ultiTensileStrenght: "202 (kg/cm²)",
                coefThermalExpansion: "0,0016 (mm/mcm°c)",
                waterAbsortion: "0,43(%)",
                impactTestMinFallHeight: "80 (cm)",
                frictionalWearTest: "0,47 (mm)",
                bulkDensity: "2661 (kg/cm³)",
            }
        ]
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Rosa Portugues",
        location: { es: "Portugal", en: "Portugal" },
        description: {
            es: "Mármol rosado portugués con tonalidades cálidas y elegantes. Material romántico y versátil, ideal para espacios residenciales y comerciales con sensibilidad.",
            en: "Portuguese pink marble with warm and elegant tones. Romantic and versatile material, ideal for residential and commercial spaces with sensitivity."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Black Galaxy",
        location: { es: "India", en: "India" },
        description: {
            es: "Granito negro con destellos dorados que imitan estrellas en el cielo nocturno. Material resistente y espectacular, ideal para encimeras de cocina con efecto cósmico.",
            en: "Black granite with golden specks resembling stars in the night sky. Durable and spectacular material, ideal for kitchen countertops with a cosmic effect."
        },
        use: ["hogar", "empresas", "cocinas"],
    },
    {
        materialType: { es: "Granito", en: "Granite" },
        materialName: "Black Gold",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Granito negro con vetas y cristales dorados. Material lujoso y resistente, perfecto para encimeras y espacios que buscan elegancia con contraste dramático.",
            en: "Black granite with golden veins and crystals. Luxurious and durable material, perfect for countertops and spaces seeking elegance with dramatic contrast."
        },
        use: ["hogar", "empresas", "cocinas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Palissandro Bluette",
        location: { es: "Italia", en: "Italy" },
        description: {
            es: "Mármol italiano con vetas azuladas sobre fondo oscuro. Material sofisticado y elegante, ideal para baños de lujo con personalidad distintiva.",
            en: "Italian marble with bluish veins on a dark background. Sophisticated and elegant material, ideal for luxury bathrooms with distinctive personality."
        },
        use: ["hogar", "empresas", "baños"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Palissandro Classico",
        location: { es: "Italia", en: "Italy" },
        description: {
            es: "Mármol italiano con vetas clásicas en tonos marrones y beige. Material elegante y atemporal, perfecto para espacios que buscan sofisticación italiana.",
            en: "Italian marble with classic veining in brown and beige tones. Elegant and timeless material, perfect for spaces seeking Italian sophistication."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Travertino", en: "Travertine" },
        materialName: "Travertino Onix",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Travertino con apariencia similar al ónix y translucidez parcial. Material híbrido único, ideal para elementos decorativos con efectos de luz especiales.",
            en: "Travertine with an appearance similar to onyx and partial translucency. Unique hybrid material, ideal for decorative elements with special light effects."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Travertino", en: "Travertine" },
        materialName: "Travertino Rojo",
        location: { es: "Irán", en: "Iran" },
        description: {
            es: "Travertino en tonos rojizos cálidos con textura porosa natural. Material vibrante y acogedor, perfecto para espacios con personalidad mediterránea.",
            en: "Travertine in warm reddish tones with a natural porous texture. Vibrant and cozy material, perfect for spaces with Mediterranean personality."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Travertino", en: "Travertine" },
        materialName: "Travertino Rojo Alhama",
        location: { es: "Alhama - España", en: "Alhama - Spain" },
        description: {
            es: "Travertino rojo español de Alhama con tonalidades cálidas intensas. Material tradicional y distintivo, ideal para arquitectura andaluza con carácter.",
            en: "Spanish red travertine from Alhama with intense warm tones. Traditional and distinctive material, ideal for Andalusian architecture with character."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Travertino", en: "Travertine" },
        materialName: "Travertino Silver",
        location: { es: "Turquía", en: "Turkey" },
        description: {
            es: "Travertino en tonos plateados con textura natural elegante. Material moderno y sofisticado, perfecto para espacios contemporáneos con acabado metálico sutil.",
            en: "Travertine in silver tones with an elegant natural texture. Modern and sophisticated material, perfect for contemporary spaces with a subtle metallic finish."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Travertino", en: "Travertine" },
        materialName: "Travertino Turco",
        location: { es: "Turquía", en: "Turkey" },
        description: {
            es: "Travertino turco clásico en tonos beige con textura porosa característica. Material versátil y económico, ideal para grandes superficies interiores y exteriores.",
            en: "Classic Turkish travertine in beige tones with characteristic porous texture. Versatile and economical material, ideal for large interior and exterior surfaces."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Verde Azulado",
        location: { es: "España", en: "Spain" },
        description: {
            es: "Mármol verde con matices azulados y vetas naturales. Material fresco y sereno, ideal para espacios que buscan conexión con naturaleza marina.",
            en: "Green marble with bluish hues and natural veining. Fresh and serene material, ideal for spaces seeking a connection with marine nature."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Verde Eucalipto",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Mármol verde con tonalidades que evocan hojas de eucalipto. Material natural y refrescante, perfecto para baños y espacios wellness con ambiente botánico.",
            en: "Green marble with tones reminiscent of eucalyptus leaves. Natural and refreshing material, perfect for bathrooms and wellness spaces with a botanical atmosphere."
        },
        use: ["hogar", "empresas", "baños"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Verde Macael",
        location: { es: "Macael - España", en: "Macael - Spain" },
        description: {
            es: "Mármol verde español de las canteras de Macael con vetas características. Material tradicional andaluz, ideal para proyectos con identidad mediterránea.",
            en: "Spanish green marble from the Macael quarries with characteristic veining. Traditional Andalusian material, ideal for projects with Mediterranean identity."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Verde Malachita",
        location: { es: "Grecia", en: "Greece" },
        description: {
            es: "Mármol con patrones que imitan la malaquita mineral. Material artístico y exclusivo, perfecto para espacios que buscan máximo impacto visual decorativo.",
            en: "Marble with patterns resembling malachite mineral. Artistic and exclusive material, perfect for spaces seeking maximum decorative visual impact."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Verde Ming",
        location: { es: "China", en: "China" },
        description: {
            es: "Mármol verde con tonalidades jade y vetas blancas delicadas. Material oriental y elegante, ideal para espacios con estética asiática refinada.",
            en: "Green marble with jade-like tones and delicate white veining. Oriental and elegant material, ideal for spaces with refined Asian aesthetics."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Verde Smeraldo",
        location: { es: "Italia", en: "Italy" },
        description: {
            es: "Mármol verde esmeralda italiano con color intenso y lujoso. Material precioso y exclusivo, perfecto para proyectos de máximo prestigio y distinción.",
            en: "Italian emerald green marble with intense and luxurious color. Precious and exclusive material, perfect for projects of maximum prestige and distinction."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Verde Venezia",
        location: { es: "Venecia - Italia", en: "Venice - Italy" },
        description: {
            es: "Mármol verde veneciano con vetas elegantes y tonalidades profundas. Material noble con historia italiana, ideal para espacios con carácter renacentista.",
            en: "Venetian green marble with elegant veining and deep tones. Noble material with Italian history, ideal for spaces with Renaissance character."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "Via Lactea",
        location: { es: "Brasil", en: "Brazil" },
        description: {
            es: "Cuarcita con vetas blancas sobre fondo oscuro que imitan la Vía Láctea. Material cósmico y espectacular, ideal para espacios con efecto celestial.",
            en: "Quartzite with white veins on a dark background resembling the Milky Way. Cosmic and spectacular material, ideal for spaces with a celestial effect."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "Volakas",
        location: { es: "Grecia", en: "Greece" },
        description: {
            es: "Mármol blanco griego con vetas grises dramáticas. Material premium y elegante, perfecto para espacios que buscan sofisticación helénica clásica.",
            en: "Greek white marble with dramatic gray veining. Premium and elegant material, perfect for spaces seeking classic Hellenic sophistication."
        },
        use: ["hogar", "empresas"],
    },
    {
        materialType: { es: "Cuarcita", en: "Quartzite" },
        materialName: "White Macauba",
        location: { es: "Macaubas - Brasil", en: "Macaubas - Brazil" },
        description: {
            es: "Cuarcita blanca brasileña con vetas grises sutiles y gran resistencia. Material elegante y duradero, ideal para encimeras de cocina de alto rendimiento.",
            en: "Brazilian white quartzite with subtle gray veining and great resistance. Elegant and durable material, ideal for high-performance kitchen countertops."
        },
        use: ["hogar", "empresas", "cocinas"],
    },
    {
        materialType: { es: "Mármol", en: "Marble" },
        materialName: "White Princess",
        location: { es: "Turquía", en: "Turkey" },
        description: {
            es: "Mármol blanco turco con delicadas vetas grises y acabado real. Material elegante y luminoso, perfecto para baños y espacios que buscan pureza sofisticada.",
            en: "Turkish white marble with delicate gray veining and a royal finish. Elegant and luminous material, perfect for bathrooms and spaces seeking sophisticated purity."
        },
        use: ["hogar", "empresas", "baños"],
    },
  
]

export const ejecutarImportacion = async () => {
  console.log("🚀 Iniciando importación de materiales por lotes...")

  // 1. Formateamos los datos asegurando que las llaves coincidan con las columnas
  // Usamos (m: any) para evitar errores de TypeScript durante el mapeo
  const datosParaInsertar = materialesOriginales.map((m: any) => ({
    material_name: m.materialName,
    material_type: m.materialType,
    location: m.location,
    description: m.description,
    use: m.use,
    main_image: m.mainImage || '',
    // Si tienes un slug único para materiales, inclúyelo aquí para el ON CONFLICT
    // slug: m.slug || m.materialName.toLowerCase().replace(/\s+/g, '-')
  }))

  try {
    // 2. Inserción masiva con SQL puro
    // Si tu tabla no tiene una restricción UNIQUE para hacer ON CONFLICT, 
    // puedes quitar esa parte, pero es recomendable para evitar duplicados.
    const data = await supabase`
      INSERT INTO materiales ${supabase(datosParaInsertar)}
      ON CONFLICT (material_name) 
      DO UPDATE SET
        material_type = EXCLUDED.material_type,
        location = EXCLUDED.location,
        description = EXCLUDED.description,
        use = EXCLUDED.use,
        main_image = EXCLUDED.main_image
      RETURNING *
    `;

    console.log(`✅ ¡Éxito! ${data.length} materiales importados.`);
    return { success: true, count: data.length };

  } catch (error: any) {
    console.error("❌ Error de Base de Datos:", error.message);
    return { success: false, error: error.message };
  }
}