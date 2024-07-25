// display one section : indoor, city, nature
function showTaskSection () {
    const imgSections = $('.pp-images-wrap');
    const vrSections = $('.vr-image-wrap');
    function showImgSection (sectionId = 't11') {

        const showMap = {
            t11: 0,
            t12: 1,
            t13: 2,
        };
        // hide all
        imgSections.map((index, div) => {
            // if (hideMap[sectionId].includes(index)) { }
            $(div).hide();
        });
        imgSections.map((index, div) => {
            if (showMap[sectionId] === index) {
                $(div).show();
            }
        });
    }
    $('.planar-panorama-wrap .three-button .btn').click(e => {
        // console.log(e.target.dataset)
        const sectionId = e.target.dataset.sectionId;
        showImgSection(sectionId);
    })

    // default show first section
    showImgSection();
}
function show360PanoramaSection () {
    const imgSections = $('.p360-videos-wrap');
    function showImgSection (sectionId = 't11') {

        const showMap = {
            t11: 0,
            t12: 1,
            t13: 2,
        };
        // hide all
        imgSections.map((index, div) => {
            // if (hideMap[sectionId].includes(index)) { }
            $(div).hide();
        });
        imgSections.map((index, div) => {
            if (showMap[sectionId] === index) {
                $(div).show();
            }
        });
    }
    $('.p360-panorama-wrap .three-button .btn').click(e => {
        // console.log(e.target.dataset)
        const sectionId = e.target.dataset.sectionId;
        showImgSection(sectionId);
    })

    // default show first section
    showImgSection();
}
function showVrSection () {
    const imgSections = $('.vr-image-wrap');
    function showImgSection (sectionId = 't11') {

        const showMap = {
            t11: 0,
            t12: 1,
            t13: 2,
        };
        // hide all
        imgSections.map((index, div) => {
            // if (hideMap[sectionId].includes(index)) { }
            $(div).hide();
        });
        imgSections.map((index, div) => {
            if (showMap[sectionId] === index) {
                $(div).show();
            }
        });
    }
    $('.full-panorama-wrap .three-button .btn').click(e => {
        // console.log(e.target.dataset)
        const sectionId = e.target.dataset.sectionId;
        showImgSection(sectionId);
    })

    // default show first section
    showImgSection();
}
function showQRSection () {
    const imgSections = $('.p-res-wrap');
    function showImgSection (sectionId = 't11') {

        const showMap = {
            t11: 0,
            t12: 1,
        };
        // hide all
        imgSections.map((index, div) => {
            // if (hideMap[sectionId].includes(index)) { }
            $(div).hide();
        });
        imgSections.map((index, div) => {
            if (showMap[sectionId] === index) {
                $(div).show();
            }
        });
    }
    $('.q-results-wrap .three-button .btn').click(e => {
        // console.log(e.target.dataset)
        const sectionId = e.target.dataset.sectionId;
        showImgSection(sectionId);
    })

    // default show first section
    showImgSection();
}
function showUsSection () {
    const imgSections = $('.u-img-wrap');
    function showImgSection (sectionId = 't11') {

        const showMap = {
            t11: 0,
            t12: 1,
        };
        // hide all
        imgSections.map((index, div) => {
            // if (hideMap[sectionId].includes(index)) { }
            $(div).hide();
        });
        imgSections.map((index, div) => {
            if (showMap[sectionId] === index) {
                $(div).show();
            }
        });
    }
    $('.user-study-wrap .three-button .btn').click(e => {
        // console.log(e.target.dataset)
        const sectionId = e.target.dataset.sectionId;
        showImgSection(sectionId);
    })

    // default show first section
    showImgSection();
}
