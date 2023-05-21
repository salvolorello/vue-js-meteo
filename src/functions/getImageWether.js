export const getImagewether = (nowMeteo) => {
  let imgSrc = "";
  let text_meteo = "";
  const img_rain_cloud =
    "https://meteo.imgw.pl/resx/synop-phen-class/ico/light/svg/day/n8z80.svg";
  const img_cloud =
    "https://meteo.imgw.pl/resx/synop-phen-class/ico/light/svg/night/n8z00.svg";
  const img_sun_rain =
    "https://meteo.imgw.pl/resx/synop-phen-class/ico/light/svg/day/n5z00.svg";
  const img_sun =
    "https://meteo.imgw.pl/resx/synop-phen-class/ico/light/svg/day/n0z00.svg";

  let nuvoloso = false;
  let rain = false;

  if (+nowMeteo.cloudcover > 40) {
    nuvoloso = true;
  }
  if (nowMeteo.precipitation_probability > 40) {
    rain = true;
  }

  if (nuvoloso && rain) {
    imgSrc = img_rain_cloud;
    text_meteo = "Nuvoloso con pioggie sparse";
  }
  if (nuvoloso && !rain) {
    imgSrc = img_cloud;
    text_meteo = "Molto nuvoloso";
  }
  if (!nuvoloso && rain) {
    imgSrc = img_sun_rain;
    text_meteo = "Pioggie sparse";
  }
  if (!nuvoloso && !rain) {
    imgSrc = img_sun;
    text_meteo = "Prevalentemente soleggiato";
  }
  return { imgSrc, text_meteo };
};
