(() => {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    function setElemInnerText(id, text) {
        const element = document.getElementById(id);
        element.innerText = text;
    }
    function cd() {
        const now = new Date().getTime();
        const maiday = new Date('February 5, 2021 24:00:00').getTime();
        const unixTimeLeft = maiday - now;
        
        setElemInnerText('days', Math.floor(unixTimeLeft / DAY));
        setElemInnerText('hours', Math.floor(unixTimeLeft % DAY / HOUR));
        setElemInnerText('minutes', Math.floor(unixTimeLeft % HOUR / MINUTE));
        setElemInnerText('seconds', Math.floor(unixTimeLeft % MINUTE / SECOND));
    }
    function run() {
        cd();
        setInterval(cd, SECOND);
    }
    run();
})();
