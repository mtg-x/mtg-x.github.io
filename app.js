const communityNameDOM = document.querySelector('#communityNameLabel');

async function init() {

    const payload = await fetch('./communities.json');
    let communities = await payload.json();
    communities = communities.sort(() => Math.random() - 0.5);

    new Typewriter(communityNameDOM, {
        strings: communities,
        autoStart: true,
        loop: true,
        delay: 50,
    });
}

init();


