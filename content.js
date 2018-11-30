(() => {
    const fix = () => {
        const thumbnails = [...document.querySelectorAll('#thumbnail[href]:not([better-thumb])')];
        for (const thumbnail of thumbnails) {
            const [, videoId] = thumbnail.href.match(/v=([^&]+)/);
            if (videoId) {
                const screenshot = `https://img.youtube.com/vi/${videoId}/hq2.jpg`,
                    img = thumbnail.querySelector('.ytd-thumbnail img');
                if (img && img.src) {
                    const imgClone = img.cloneNode(true);
                    imgClone.src = screenshot;
                    img.replaceWith(imgClone);
                    thumbnail.setAttribute('better-thumb', 1);
                }
            }
        }
        requestAnimationFrame(fix);
    };
    fix();
})();