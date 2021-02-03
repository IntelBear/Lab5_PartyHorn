// main.js
let honk = document.getElementById("honk-btn");
honk.addEventListener("click", playSound);

let sound_range = document.getElementById("volume-slider");
sound_range.addEventListener("input", adjustNumber);

let sound_number = document.getElementById("volume-number");
sound_number.addEventListener("input", adjustSlider);

let air_horn = document.getElementById("radio-air-horn");
air_horn.addEventListener("click",setAirHorn);

let car_horn = document.getElementById("radio-car-horn");
car_horn.addEventListener("click",setCarHorn);

let party_horn = document.getElementById("radio-party-horn");
party_horn.addEventListener("click",setPartyHorn);

function playSound(){
    document.getElementById("horn-sound").play();
    event.preventDefault()
}

function adjustNumber(){
    sound_number.value = sound_range.value;
    let volume = Number(sound_number.value);

    if(volume >= 67){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    }else if(volume >=34){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    }else if(volume >= 1){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    }else{
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }

    let sound = document.getElementById("horn-sound");
    sound.volume = Number(sound_number.value) / 100;
}

function adjustSlider(){
    sound_range.value = sound_number.value;

    let volume = Number(sound_number.value);

    if(volume >= 67){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    }else if(volume >=34){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    }else if(volume >= 1){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    }else{
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }

    let sound = document.getElementById("horn-sound");
    sound.volume = Number(sound_number.value) / 100;
}

function setAirHorn(){
    document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
}

function setPartyHorn(){
    document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
}

function setCarHorn(){
    document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/car.svg";
}