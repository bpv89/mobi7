const convertTime = (miliseconds) => {
    const inSeconds = Math.floor(miliseconds/1000);
    const inMinutes = Math.floor(inSeconds/60);
    const inHour = Math.floor(inMinutes/60);
    
    const seconds = inSeconds % 60;
    const minutes = inMinutes % 60;
    const hour = inHour % 24;
    return `${hour.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
}

module.exports = convertTime;