const species = {

    mamute: {
        name: "Mamute-lanoso",
        scientific: "Mammuthus primigenius",
        visual: "🦣",
        period: "Pleistoceno",
        environment: "Terrestre",
        habitat: "Estepe-tundra",
        diet: "Herbívoro",
        distribution:
            "Europa, Ásia e América do Norte",
        size:
            "Várias toneladas",
        feature:
            "Adaptação ao frio",
        page:
            "mamute.html"
    },


    smilodon: {
        name:
            "Tigre-dente-de-sabre",

        scientific:
            "Smilodon fatalis",

        visual:
            "🐅",

        period:
            "Pleistoceno",

        environment:
            "Terrestre",

        habitat:
            "Campos e bosques",

        diet:
            "Carnívoro",

        distribution:
            "Américas",

        size:
            "Grande felino",

        feature:
            "Caninos alongados",

        page:
            "smilodon.html"
    },


    preguica: {
        name:
            "Preguiça-gigante",

        scientific:
            "Megatherium americanum",

        visual:
            "◉",

        period:
            "Pleistoceno",

        environment:
            "Terrestre",

        habitat:
            "Campos e bosques",

        diet:
            "Herbívoro",

        distribution:
            "América do Sul",

        size:
            "Até várias toneladas",

        feature:
            "Grande porte terrestre",

        page:
            "preguica-gigante.html"
    },


    megalodonte: {
        name:
            "Megalodonte",

        scientific:
            "Otodus megalodon",

        visual:
            "🦈",

        period:
            "Mioceno — Plioceno",

        environment:
            "Marinho",

        habitat:
            "Oceanos",

        diet:
            "Carnívoro",

        distribution:
            "Diversos oceanos",

        size:
            "Gigantesco",

        feature:
            "Superpredador marinho",

        page:
            "mega.html"
    },


    dodo: {
        name:
            "Dodô",

        scientific:
            "Raphus cucullatus",

        visual:
            "🦤",

        period:
            "Holoceno",

        environment:
            "Terrestre",

        habitat:
            "Ilha tropical",

        diet:
            "Onívoro",

        distribution:
            "Maurício",

        size:
            "Ave terrestre",

        feature:
            "Perda do voo",

        page:
            "dodo.html"
    },


    tilacino: {
        name:
            "Tilacino",

        scientific:
            "Thylacinus cynocephalus",

        visual:
            "◈",

        period:
            "Extinção em 1936",

        environment:
            "Terrestre",

        habitat:
            "Bosques e campos",

        diet:
            "Carnívoro",

        distribution:
            "Tasmânia",

        size:
            "Mamífero médio",

        feature:
            "Marsupial predador",

        page:
            "tilacino.html"
    },


    gliptodonte: {
        name:
            "Gliptodonte",

        scientific:
            "Glyptodon",

        visual:
            "◒",

        period:
            "Pleistoceno",

        environment:
            "Terrestre",

        habitat:
            "Campos e pradarias",

        diet:
            "Herbívoro",

        distribution:
            "Américas",

        size:
            "Até toneladas",

        feature:
            "Armadura óssea",

        page:
            "gliptodonte.html"
    }

};


const selectA =
    document.getElementById(
        "speciesA"
    );


const selectB =
    document.getElementById(
        "speciesB"
    );


function updateSide(
    side,
    animal
) {

    document
        .getElementById(
            `visual${side}`
        )
        .textContent =
            animal.visual;


    document
        .getElementById(
            `name${side}`
        )
        .textContent =
            animal.name;


    document
        .getElementById(
            `scientific${side}`
        )
        .textContent =
            animal.scientific;


    document
        .getElementById(
            `profile${side}`
        )
        .href =
            animal.page;


    document
        .getElementById(
            `header${side}`
        )
        .textContent =
            animal.name;


    document
        .getElementById(
            `period${side}`
        )
        .textContent =
            animal.period;


    document
        .getElementById(
            `environment${side}`
        )
        .textContent =
            animal.environment;


    document
        .getElementById(
            `habitat${side}`
        )
        .textContent =
            animal.habitat;


    document
        .getElementById(
            `diet${side}`
        )
        .textContent =
            animal.diet;


    document
        .getElementById(
            `distribution${side}`
        )
        .textContent =
            animal.distribution;


    document
        .getElementById(
            `size${side}`
        )
        .textContent =
            animal.size;


    document
        .getElementById(
            `feature${side}`
        )
        .textContent =
            animal.feature;

}


function updateComparison() {

    const animalA =
        species[
            selectA.value
        ];


    const animalB =
        species[
            selectB.value
        ];


    updateSide(
        "A",
        animalA
    );


    updateSide(
        "B",
        animalB
    );


    document
        .getElementById(
            "summaryEnvironment"
        )
        .textContent =
            `${animalA.environment} × ${animalB.environment}`;


    document
        .getElementById(
            "summaryDiet"
        )
        .textContent =
            `${animalA.diet} × ${animalB.diet}`;


    const samePeriod =
        animalA.period ===
        animalB.period;


    document
        .getElementById(
            "summaryTime"
        )
        .textContent =
            samePeriod
                ? "Períodos semelhantes"
                : "Épocas diferentes";

}


selectA.addEventListener(
    "change",
    updateComparison
);


selectB.addEventListener(
    "change",
    updateComparison
);


updateComparison();
