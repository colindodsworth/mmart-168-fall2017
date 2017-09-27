// colindodsworth
let language
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp

    // this displays the name of the language to be used, based on the language code represented:
    languageCode = code
    if (code === 'ru') {
        language = 'Russian'
    } else if (code === 'es') {
        language = 'Spanish'
    } else if (code === 'am') {
        language = 'Amharic'
    } else if (code === 'ba') {
        language = 'Bashkir'
    } else if (code === 'be') {
        language = 'Belarusian'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language
}
