input.onButtonPressed(Button.A, function () {
    let totaal = 0
    waarde = 0
    for (let waarde of list) {
        waarde += waarde
    }
    basic.showNumber(totaal)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let waarde = 0
let list: number[] = []
let lijst: number[] = []
for (let index = 0; index < 10; index++) {
    list.push(randint(1, 100))
}
