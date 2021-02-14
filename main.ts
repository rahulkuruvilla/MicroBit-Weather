input.onButtonPressed(Button.A, function () {
    basic.showString("Sunny")
    music.playMelody("F G A B C5 - C5 - ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    temp_reading = pins.analogReadPin(AnalogPin.P1)
    temperature = temp_reading * A / B + C
    temperature += -18
    basic.showNumber(temperature)
})
let temperature = 0
let temp_reading = 0
let C = 0
let B = 0
let A = 0
A = 18
B = 115
C = -54
basic.forever(function () {
    led.setBrightness(150 - input.lightLevel())
})
