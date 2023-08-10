export function doubleZero(number) {
    if (number < 10) return "0" + number
    return number
}

export function secondsToDDHHMMSS(number) {
    let secs = Math.trunc(number % 60)
    let min = Math.trunc(number / 60 % 60)
    let hours = Math.trunc(number / 60 / 60 % 60)
    let day = Math.trunc(number / 60 / 60 / 24 % 24)

    return `${doubleZero(day)}d ${doubleZero(hours)}:${doubleZero(min)}:${doubleZero(secs)}`
}
