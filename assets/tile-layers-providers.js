const thunderForestKey = 'apikey=dcf50cc5d36e405092768251d95d6848';
const tileLayers = {
    default: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    blackWhite: 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
    thunderForest: {
        openCycleMap: `https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?${thunderForestKey}`,
        transport: `https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?${thunderForestKey}`,
        landscape: `https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?${thunderForestKey}`,
        outdoors: `https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?${thunderForestKey}`,
        transportDark: `https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?${thunderForestKey}`,
        spinalMap: `https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?${thunderForestKey}`,
        pioneer: `https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?${thunderForestKey}`,
        mobileAtlas: `https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?${thunderForestKey}`,
        neighbourhood: `https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?${thunderForestKey}`,
        atlas: `https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?${thunderForestKey}`,
    },
    wayMarkedTrails: 'https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png',
    hot: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
}