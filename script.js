const numReadable = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 12
});

function toKg(num) {
    num = num / 2.2046226218;
    num = num.toFixed(3);
    return num;
}

$("img").hide();
$(".FD-header").hide();
$(".fortune-display").hide();

$("button").click(function() {
    $(".FD-header").show();
    $(".fortune-display").show();
    $(".fortune-display-text").remove();
    $("img").hide();
    let name = $("#q1").val();
    let weight = Number($("#q2").val());
    let planet = $("#q3").val();
    planet = planet.toLowerCase();
    let newWeight;

    //Blank input detection
    if (name === "" || weight === 0 || planet === "") {
        $("#q1").val("");
        $("#q2").val("");
        $("#q3").val("");
    } else {
        switch (planet) {
            case "sun":
                newWeight = (weight * 28.020).toFixed(3);
                $("img").attr("src", "https://solarsystem.nasa.gov/system/resources/detail_files/768_oct_1_2015_flare.jpg");
                $("img").show();
                break;

            case "mercury":
                newWeight = (weight * 0.377).toFixed(3);
                $("img").attr("src", "https://solarsystem.nasa.gov/system/resources/detail_files/771_PIA16853.jpg");
                $("img").show();
                break;

            case "venus":
                newWeight = (weight * 0.905).toFixed(3);
                $("img").attr("src", "https://i.ibb.co/nM0W1Fg/2524-PIA23791.jpg");
                $("img").show();
                break;

            case "moon":
                newWeight = (weight * 0.165).toFixed(3);
                $("img").attr("src", "https://solarsystem.nasa.gov/system/resources/detail_files/2460_lro_nearside_800.jpg");
                $("img").show();
                break;

            case "mars":
                newWeight = (weight * 0.379).toFixed(3);
                $("img").attr("src", "https://solarsystem.nasa.gov/system/resources/detail_files/683_6453_mars-globe-valles-marineris-enhanced-full2.jpg");
                $("img").show();
                break;

            case "jupiter":
                newWeight = (weight * 2.528).toFixed(3);
                $("img").attr("src", "https://solarsystem.nasa.gov/system/resources/detail_files/2486_stsci-h-p1936a_1800.jpg");
                $("img").show();
                break;

            case "saturn":
                newWeight = (weight * 1.065).toFixed(3);
                $("img").attr("src", "https://solarsystem.nasa.gov/system/resources/detail_files/2490_stsci-h-p1943a-f_1200.jpg");
                $("img").show();
                break;

            case "uranus":
                newWeight = (weight * 0.886).toFixed(3);
                $("img").attr("src", "https://solarsystem.nasa.gov/system/resources/detail_files/454_Hubble_Uranus.jpg");
                $("img").show();
                break;

            case "neptune":
                newWeight = (weight * 1.137).toFixed(3);
                $("img").attr("src", "https://solarsystem.nasa.gov/system/resources/detail_files/611_PIA01492.jpg");
                $("img").show();
                break;

            case "pluto":
                newWeight = (weight * 0.063).toFixed(3);
                $("img").attr("src", "https://solarsystem.nasa.gov/system/resources/detail_files/795_crop_p_color2_enhanced_release_detail.jpg");
                $("img").show();
                break;
        }

        $(".fortune-display").prepend(`<p class="fortune-display-text" id="FDT-1">${name}, you currently weigh ${weight} lbs \(${toKg(weight)} kg\) on Earth.</p>`);

        if (planet === "sun" || planet === "moon") {
            $(".fortune-display").append(`<p class="fortune-display-text" id="FDT-2">On the ${planet}, you would weigh ${newWeight} lbs \(${toKg(newWeight)} kg\)!!</p>`);
        } else {
            $(".fortune-display").append(`<p class="fortune-display-text" id="FDT-2">On the planet ${planet}, you would weigh ${newWeight} lbs \(${toKg(newWeight)} kg\)!!</p>`);
        }
    }
});

