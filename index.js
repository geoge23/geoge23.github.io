const type = document.getElementsByClassName('type')[0]

const typewriter = new Typewriter(type, {
    loop: true
})

typewriter.typeString('I do ')
    .typeString('Data recovery')
    .pauseFor(2500)
    .deleteChars(13)
    .typeString('Tech Setup')
    .pauseFor(2500)
    .deleteChars(10)
    .typeString('Smart Homes')
    .pauseFor(2500)
    .deleteChars(11)
    .typeString('Backups')
    .pauseFor(2500)
    .deleteChars(7)
    .start();