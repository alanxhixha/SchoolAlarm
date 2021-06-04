radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -60) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 6; index++) {
        timer = 30
        for (let index = 0; index < 30; index++) {
            timer += -1
            basic.showNumber(timer)
            if (timer > 9) {
                basic.pause(54000)
            } else {
                basic.pause(60000)
            }
        }
    }
})
let timer = 0
timer = 30
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
    if (timer == 0) {
        for (let index = 0; index < 8; index++) {
            music.playTone(740, music.beat(BeatFraction.Half))
            basic.pause(10)
            music.playTone(740, music.beat(BeatFraction.Half))
            basic.pause(10)
            music.playTone(740, music.beat(BeatFraction.Half))
            basic.pause(10)
            music.playTone(740, music.beat(BeatFraction.Half))
            basic.pause(10)
            music.playTone(740, music.beat(BeatFraction.Half))
        }
    }
})
