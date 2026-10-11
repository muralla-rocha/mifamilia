/**
 * Regenera public/images/map-*.png (mapas de OpenStreetMap con un pin).
 * Uso: node src/scripts/render-maps.mjs
 * Requiere Google Chrome; otra ruta: CHROME_PATH=/ruta/al/binario node ...
 * Las coordenadas salen de https://nominatim.openstreetmap.org (geocodificación).
 */
import { chromium } from '@playwright/test'

const places = [
  { file: 'map-san-anselmo.png', lat: 37.9767667, lon: -122.5604409 },
  { file: 'map-san-rafael.png', lat: 37.9591305, lon: -122.5073916 },
]

const html = (lat, lon) => `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<style>html,body,#map{margin:0;height:100%;width:100%}
.pin{width:26px;height:26px;border-radius:50% 50% 50% 0;background:#c8322b;border:3px solid #fbf4e2;
transform:rotate(-45deg);box-shadow:0 3px 8px rgba(0,0,0,.35)}
.pin::after{content:"";position:absolute;inset:6px;border-radius:50%;background:#fbf4e2}
.leaflet-control-zoom{display:none}</style></head><body><div id="map"></div><script>
const map = L.map('map',{zoomControl:false,attributionControl:true}).setView([${lat},${lon}],16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,
attribution:'© OpenStreetMap contributors'}).addTo(map);
L.marker([${lat},${lon}],{icon:L.divIcon({className:'',html:'<div class="pin"></div>',iconSize:[26,26],iconAnchor:[13,26]})}).addTo(map);
</script></body></html>`

const browser = await chromium.launch({
  executablePath:
    process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
})
for (const p of places) {
  const page = await browser.newPage({
    viewport: { width: 582, height: 260 },
    deviceScaleFactor: 2,
  })
  await page.route('https://mifamilia.local/**', (route) =>
    route.fulfill({ body: html(p.lat, p.lon), contentType: 'text/html' }),
  )
  await page.goto('https://mifamilia.local/map')
  await page.waitForFunction(
    () => {
      const t = [...document.querySelectorAll('.leaflet-tile')]
      return t.length > 0 && t.every((i) => i.complete && i.naturalWidth > 0)
    },
    null,
    { timeout: 30000 },
  )
  await page.waitForTimeout(800)
  await page.screenshot({ path: `public/images/${p.file}` })
  console.log('ok', p.file)
  await page.close()
}
await browser.close()
