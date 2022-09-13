let RandomNumber = 0
input.onGesture(Gesture.Shake, function () {
    RandomNumber = randint(0, 3)
    if (RandomNumber == 0) {
        basic.showString("Answer Unclear")
    } else if (RandomNumber == 1) {
        basic.showString("no you stupid")
    } else if (RandomNumber == 2) {
        basic.showString("yes smarty")
    }
})
basic.forever(function () {
	
})
