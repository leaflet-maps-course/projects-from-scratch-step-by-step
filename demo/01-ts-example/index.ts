import { Map, tileLayer } from 'leaflet';

const map = new Map('map', { center: [43.1736976, -2.4173474], zoom: 9 });

tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);