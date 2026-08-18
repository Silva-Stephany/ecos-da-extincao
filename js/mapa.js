const map = L.map(
    "extinctionMap",
    {
        minZoom: 2,
        worldCopyJump: true
    }
).setView(
    [15, 0],
    2
);


L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 7,

        attribution:
            "&copy; OpenStreetMap contributors"
    }
).addTo(map);


const speciesData = [

    {
        id: "mamute",

        name: "Mamute-lanoso",

        scientific:
            "Mammuthus primigenius",

        period:
            "Pleistoceno",

        region:
            "Europa, Ásia e América do Norte",

        habitat:
            "Estepe-tundra",

        coordinates: [
            [62, 30],
            [65, 90],
            [60, -110]
        ],

        page:
            "mamute.html"
    },


    {
        id: "smilodon",

        name:
            "Tigre-dente-de-sabre",

        scientific:
            "Smilodon fatalis",

        period:
            "Pleistoceno",

        region:
            "Américas",

        habitat:
            "Campos e áreas abertas",

        coordinates: [
            [35, -110],
            [15, -90],
            [-20, -60]
        ],

        page:
            "smilodon.html"
    },


    {
        id: "preguica",

        name:
            "Preguiça-gigante",

        scientific:
            "Megatherium americanum",

        period:
            "Pleistoceno",

        region:
            "América do Sul",

        habitat:
            "Campos e bosques",

        coordinates: [
            [-15, -55],
            [-30, -62],
            [-35, -58]
        ],

        page:
            "preguica-gigante.html"
    },


    {
        id: "megalodonte",

        name:
            "Megalodonte",

        scientific:
            "Otodus megalodon",

        period:
            "Mioceno — Plioceno",

        region:
            "Oceanos de várias regiões",

        habitat:
            "Ambientes marinhos",

        coordinates: [
            [25, -70],
            [10, -25],
            [-20, 90],
            [15, 150]
        ],

        page:
            "mega.html"
    },


    {
        id: "dodo",

        name:
            "Dodô",

        scientific:
            "Raphus cucullatus",

        period:
            "Holoceno",

        region:
            "Ilha de Maurício",

        habitat:
            "Ecossistemas insulares",

        coordinates: [
            [-20.2, 57.5]
        ],

        page:
            "dodo.html"
    },


    {
        id: "tilacino",

        name:
            "Tilacino",

        scientific:
            "Thylacinus cynocephalus",

        period:
            "Extinção recente",

        region:
            "Tasmânia",

        habitat:
            "Bosques e áreas abertas",

        coordinates: [
            [-42, 147]
        ],

        page:
            "tilacino.html"
    },


    {
        id: "gliptodonte",

        name:
            "Gliptodonte",

        scientific:
            "Glyptodon",

        period:
            "Pleistoceno",

        region:
            "Américas",

        habitat:
            "Campos e ambientes abertos",

        coordinates: [
            [-32, -60],
            [-20, -50],
            [20, -100]
        ],

        page:
            "gliptodonte.html"
    }

];


const markerLayer =
    L.layerGroup()
        .addTo(map);


function createPopup(species) {

    return `
        <div class="species-map-popup">

            <small>
                ${species.period}
            </small>

            <h3>
                ${species.name}
            </h3>

            <em>
                ${species.scientific}
            </em>

            <p>
                <strong>Região:</strong>
                ${species.region}
            </p>

            <p>
                <strong>Habitat:</strong>
                ${species.habitat}
            </p>

            <a href="${species.page}">
                Explorar espécie →
            </a>

        </div>
    `;

}


function renderMarkers(filter = "all") {

    markerLayer.clearLayers();


    const visibleSpecies =
        speciesData.filter(
            species =>
                filter === "all" ||
                species.id === filter
        );


    visibleSpecies.forEach(
        species => {

            species.coordinates.forEach(
                coordinate => {

                    const marker =
                        L.circleMarker(
                            coordinate,
                            {
                                radius: 8,

                                weight: 2,

                                opacity: 1,

                                fillOpacity: 0.75
                            }
                        );


                    marker.bindPopup(
                        createPopup(species)
                    );


                    marker.addTo(
                        markerLayer
                    );

                }
            );

        }
    );


    document
        .getElementById(
            "mapSpeciesCount"
        )
        .textContent =
            visibleSpecies.length;


    if (
        filter !== "all" &&
        visibleSpecies.length === 1
    ) {

        const firstCoordinate =
            visibleSpecies[0]
                .coordinates[0];


        map.flyTo(
            firstCoordinate,
            4,
            {
                duration: 1.2
            }
        );

    } else {

        map.flyTo(
            [15, 0],
            2,
            {
                duration: 1.2
            }
        );

    }

}


document
    .getElementById(
        "mapSpeciesFilter"
    )
    .addEventListener(
        "change",
        event => {

            renderMarkers(
                event.target.value
            );

        }
    );


renderMarkers();
