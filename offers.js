const offerButtons = Array.from(document.getElementsByClassName("offer-cta axp-offers__global__fluid___15Bk5 css-1duq00z")).filter(btn => btn.title == "Add to Card");
for (let idx = 0; idx < offerButtons.length; idx++) {
    console.log("Clicking offer button");
    offerButtons[idx].click();
    let randomTime = 1000 * Math.floor(Math.random()*6)
    await new Promise(r => setTimeout(r, randomTime));
    console.log(randomTime)
}