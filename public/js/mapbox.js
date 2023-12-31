/*eslint-disable*/

export const displayMap = (x) => {
  const [lat, lng] = x[0].coordinates;

  var map = L.map('map', { scrollWheelZoom: false }).setView([lng, lat], 8);
  var OpenStreetMap_Mapnik = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  ).addTo(map);
  var greenIcon = L.icon({
    iconUrl: '/img/pin.png',

    iconSize: [32, 40],
  });
  const marker = (el) => {
    const [x, y] = el.coordinates;
    var marker = L.marker([y, x], {
      icon: greenIcon,
    })
      .addTo(map)
      .bindPopup(
        L.popup({
          //styling the marker
          maxWidth: 220,
          minWidth: 100,
          autoClose: false,
        })
      )
      .setPopupContent(`Day ${el.day}: ${el.description}`)
      .openPopup();
  };
  x.forEach((el) => {
    marker(el);
  });
};
