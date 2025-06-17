let map: google.maps.Map;

async function initMap(): Promise<void> {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 35.6523016, lng: 139.7312395 },
    zoom: 13,
  });
}

initMap();