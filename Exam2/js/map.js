//google map
initMap = () => {
  const Bouncy = { lat: 47.8299, lng: 35.1625 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: Bouncy,
    zoom: 18,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  });
  const marker = new google.maps.Marker({
    position: Bouncy,
    map: map,
    title: "Beetroot Academy",
    icon: "./img/map.png"
  });
  const infowindow = new google.maps.InfoWindow({
    content: "<p>You're here!</p>"
  });

  infowindow.open(map, marker);
  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });
};
