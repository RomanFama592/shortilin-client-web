import { load } from "cheerio"

export const listMetadataToGet = [
    ["property", "og:title"],
    ["property", "og:description"],
    ["name", "description"],
    ["property", "og:image"],
    ["property", "og:image:alt"],
    ["property", "og:url"],
    ["property", "og:type"]
]

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

export async function getDataMeta(url) {

    let response = await fetch(url)
    response = await response.text()
    const $ = load(response)
    return listMetadataToGet
        .map((item) => {
            let content = $(`meta[${item[0]}="${item[1]}"]`).attr("content")
            if (content !== undefined) {
                return [item[0], item[1], content]
            }
            return null
        })
        .filter((item) => item !== null)
}