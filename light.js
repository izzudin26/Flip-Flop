const light = document.querySelector("#light")
const LightOn = () => {
    light.classList.remove("hide")
    light.classList.remove("light-off")
    light.classList.add("light-on")
}
const lightOff = () => {
    light.classList.remove("hide")
    light.classList.remove("light-on")
    light.classList.add("light-off")
}