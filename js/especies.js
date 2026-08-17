const searchInput =
    document.getElementById(
        "searchSpecies"
    );

const typeFilter =
    document.getElementById(
        "filterType"
    );

const dietFilter =
    document.getElementById(
        "filterDiet"
    );

const cards =
    Array.from(
        document.querySelectorAll(
            ".catalog-card"
        )
    );

const count =
    document.getElementById(
        "speciesCount"
    );


function filterSpecies() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();

    const type =
        typeFilter.value;

    const diet =
        dietFilter.value;


    let visible = 0;


    cards.forEach(
        card => {

            const name =
                card.dataset.name
                    .toLowerCase();

            const cardType =
                card.dataset.type;

            const cardDiet =
                card.dataset.diet;


            const matchesSearch =
                !search ||
                name.includes(
                    search
                );

            const matchesType =
                !type ||
                cardType === type;

            const matchesDiet =
                !diet ||
                cardDiet === diet;


            const show =
                matchesSearch &&
                matchesType &&
                matchesDiet;


            card.style.display =
                show
                    ? ""
                    : "none";


            if (show) {
                visible++;
            }

        }
    );


    count.textContent =
        visible === 1
            ? "1 espécie"
            : `${visible} espécies`;

}


searchInput.addEventListener(
    "input",
    filterSpecies
);

typeFilter.addEventListener(
    "change",
    filterSpecies
);

dietFilter.addEventListener(
    "change",
    filterSpecies
);
