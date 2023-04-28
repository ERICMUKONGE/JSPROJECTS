const sounds = ['Alarming', 'DJ scratch Turntable', 'Horn', 
'Scratch And Rewinds', 'Vinyl Stop', 'Vinyl']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () =>{
        stopSongs()

        document.getElementById(sound).play()
    })
    document.getElementById('buttons').
    appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}