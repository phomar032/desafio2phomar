var config = {
    style: 'mapbox://styles/phomar/cmi6c2mj1001i01s8g4yb075c',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicGhvbWFyIiwiYSI6ImNtaTY5czVhZjBhenUyaXNkdXg4YWRpMngifQ.x09qIcQ9gOqbD9L3rDo6oA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Centros Culturales Alicante',
    subtitle: 'Desafío 2: Una exploración visual a través de StoryMaps',
    byline: 'Pau Homar Sampietro',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'La Marina Alta (Capital: Dénia)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Mapa_de_la_Marina_Alta.svg',
            description: "Zona norte de la provincia, con gran atractivo turístico y patrimonial. Dénia es conocida por su castillo y su gastronomía, y la comarca cuenta con numerosos espacios culturales orientados a la conservación del patrimonio y la promoción artística.",
            location: {
                center: [0.099309, 38.839828],
                zoom: 9.59,
                pitch: 45,
                bearing: 28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'La Marina Baixa (Capital: La Vila Joiosa)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Mapa_de_la_Marina_Baja.svg',
            description: "Comarca costera con fuerte desarrollo turístico, especialmente en Benidorm. La Vila Joiosa destaca por su tradición pesquera y su patrimonio histórico. Los centros culturales combinan actividades comunitarias con programación escénica y musical.",
            location: {
                center: [-0.23280, 38.50607],
                zoom: 9.59,
                pitch: 45,
                bearing: 28,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'El Comptat (Capital: Cocentaina)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Mapa_del_Condado_de_Cocentaina.svg',
            description: "Comarca interior con marcado carácter rural y patrimonial. Cocentaina es conocida por su feria medieval y su arquitectura histórica. Los centros culturales se orientan a la preservación de tradiciones y a la dinamización social.",
            location: {
                center: [-0.43856, 38.74203],
                zoom: 9.5,
                pitch: 1,
                bearing: -36
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth',
            alignment: 'right',
            hidden: false,
            title: "L'Alcoià (Capital: Alcoi)",
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Mapa_del_Alcoiá.svg',
            description: "Zona industrial con una rica tradición cultural vinculada a las fiestas de Moros y Cristianos. Alcoi cuenta con museos, teatros y espacios dedicados a la memoria histórica. La oferta cultural combina innovación y tradición.",
            location: {
                center: [-0.47716, 38.69667],
                zoom: 9.7,
                pitch: 0,
                bearing: 18
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: "L'Alacantí (Capital: Alacant)",
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Mapa_del_Campo_de_Alicante.svg',
            description: "Comarca costera con fuerte peso urbano y económico. Alicante es la capital provincial y concentra gran parte de la oferta cultural: museos, teatros, auditorios y centros cívicos. Destaca por su papel como nodo de comunicación y su diversidad cultural.",
            location: {
                center: [-0.48470, 38.34553],
                zoom: 9.50,
                pitch: 45,
                bearing: 18
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter',
            alignment: 'left',
            hidden: false,
            title: "L'Alt Vinalopó (Capital: Villena)",
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Mapa_del_Alto_Vinalopó.svg',
            description: "Comarca interior con fuerte identidad histórica. Villena destaca por su castillo y su patrimonio arqueológico. Los centros culturales se centran en la difusión del patrimonio y en actividades educativas y comunitarias.",
            location: {
                center: [-0.86488, 38.63229],
                zoom: 10,
                pitch: 0,
                bearing: -36
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'hafour',
            alignment: 'right',
            hidden: false,
            title: "El Vinalopó Mitjà (Capital: Elda)",
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Mapa_del_Vinalopó_Mitjà.svg',
            description: "Área con tradición industrial y comercial. Elda es conocida por su industria del calzado y su dinamismo cultural. Los equipamientos incluyen auditorios, bibliotecas y espacios polivalentes para actividades sociales y artísticas.",
            location: {
                center: [-0.79385, 38.47562],
                zoom: 9,
                pitch: 1,
                bearing: -18
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fo',
            alignment: 'right',
            hidden: false,
            title: "El Baix Vinalopó (Capital: Elx)",
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Mapa_del_Bajo_Vinalopó.svg',
            description: "Comarca con gran peso demográfico y cultural. Elche es Patrimonio de la Humanidad por su palmeral y el Misteri d’Elx. La oferta cultural es amplia y diversa, con museos, teatros y centros cívicos de referencia.",
            location: {
                center: [-0.69792, 38.26602],
                zoom: 10,
                pitch: 45,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ter',
            alignment: 'left',
            hidden: false,
            title: "El Baix Segura (Capital: Oriola)",
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Mapa_de_la_Vega_Baja_del_Segura.svg',
            description: "Comarca meridional con fuerte tradición agrícola y patrimonial. Orihuela destaca por su casco histórico y su legado literario. Los centros culturales se orientan a la promoción artística y a la participación comunitaria.",
            location: {
                center: [-0.94698, 38.08539],
                zoom: 9.5,
                pitch: 18,
                bearing: 30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};