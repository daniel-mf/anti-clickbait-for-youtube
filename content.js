(()=>{
    const fix = ()=>{
        const tbs = [...document.querySelectorAll('#thumbnail[href]:not([fixed])')];
        for(const tb of tbs){
            const [, code] = tb.href.match(/v\=([^&]+)/);
            if(code){
                const t = `https://img.youtube.com/vi/${code}/hq2.jpg`,
                    i = tb.querySelector('.ytd-thumbnail img');
                if(i && i.src){
                    const c = i.cloneNode(true);
                    c.src = t;
                    i.replaceWith(c);
                    tb.setAttribute('fixed', 1);
                }
            }
        }
        requestAnimationFrame(fix);
    };
    fix();
})();