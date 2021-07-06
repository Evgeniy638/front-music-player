export const time = {
    transformSecondsToMMSS(seconds: number): string {
        const roundSecons = Math.round(seconds);

        let ssNum: number = roundSecons % 60;
        let mmNum: number = Math.floor(roundSecons / 60);

        let ss: string = ssNum < 10 ?`0${ssNum}` :ssNum.toString();
        let mm: string = mmNum < 10 ?`0${mmNum}` :mmNum.toString();

        return `${mm}:${ss}`;
    }
} 
