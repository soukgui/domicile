window.onload = function(){
    let macarte = L.map("carte").setView([48.852969, 2.349903], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'données OpenStreetMap France',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);

    

    // Icône personnalisée pour data1
    let greenIcon = L.divIcon({
        className: 'custom-icon',
        html: '<div style="background-color: green; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    // Icône personnalisée pour data2
    let blueIcon = L.divIcon({
        className: 'custom-icon',
        html: '<div style="background-color: blue; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    // Icône personnalisée pour data3
    let redIcon = L.divIcon({
        className: 'custom-icon',
        html: '<div style="background-color: red; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    // Icône noire pour le point spécifié
    let blackIcon = L.divIcon({
        className: 'custom-icon',
        html: '<div style="background-color: black; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>',
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    // Ajouter le marqueur noir
    L.marker([48.783051, 1.971936], { icon: blackIcon })
        .addTo(macarte)
        .bindPopup("Eiffage Rail Elancourt");
    // Définir les groupes pour les données
    let data1Markers = L.layerGroup().addTo(macarte);
    let data2Markers = L.layerGroup().addTo(macarte);
    let data3Markers = L.layerGroup().addTo(macarte);

    let data1Polygon = L.layerGroup().addTo(macarte);
    let data2Polygon = L.layerGroup().addTo(macarte);
    let data3Polygon = L.layerGroup().addTo(macarte);


    // Ajouter les marqueurs pour data1
    let data1 = [
        { nom_prenom: "Ahmed ZAHI", latitude: 48.77424, longitude: 2.471591 },
        { nom_prenom: "Amine BENABDELMOUMENE", latitude: 48.77197, longitude: 2.001695 },
        { nom_prenom: "Bidia KONATE", latitude: 48.881018, longitude: 2.337399 },
        { nom_prenom: "Florindo DA COSTA MOREIRA", latitude: 48.700001, longitude: 1.886977 },
        { nom_prenom: "Hicham MOSTEGHANEMI", latitude: 48.954273, longitude: 2.41214 },
        { nom_prenom: "Issam LAK HAL", latitude: 48.708385, longitude: 2.387976 },
        { nom_prenom: "Lannouar CHAMSI", latitude: 48.717718, longitude: 1.365469 },
        { nom_prenom: "Lucas NEVES", latitude: 48.676395, longitude: 1.457469 },
        { nom_prenom: "Miloud BERROUANE", latitude: 48.766308, longitude: 2.486365 },
        { nom_prenom: "Sergio DA SILVA DUARTE", latitude: 48.773133, longitude: 2.006738 },
        { nom_prenom: "Souleymane SACKO", latitude: 48.928738, longitude: 2.508249 },
        { nom_prenom: "Walid HAMDOUN", latitude: 48.875554, longitude: 2.59465 },
        { nom_prenom: "Yossouf ACHCHAFIHI", latitude: 48.686704, longitude: 2.173834 }
    ];

    data1.forEach(function(point) {
        L.marker([point.latitude, point.longitude], { icon: greenIcon })
            .addTo(data1Markers) // Ajouter les marqueurs au groupe data1Markers
            .bindPopup(point.nom_prenom);
    });
    createConvexHull(data1, 'green', data1Polygon);
    
    // Ajouter les marqueurs pour data2
    let data2 = [
        { nom_prenom: "Abdelhadi DRIHMI", latitude: 50.443103, longitude: 3.420986 },
        { nom_prenom: "Abdessamad OUADAH", latitude: 48.94465, longitude: 2.459417 },
        { nom_prenom: "Akin KILIC", latitude: 48.754675, longitude: 0.621151 },
        { nom_prenom: "Alexandre GUILLONNEAU", latitude: 48.798164, longitude: 1.494076 },
        { nom_prenom: "Alexis OPER", latitude: 49.364008, longitude: 0.627551 },
        { nom_prenom: "Angel IVANOV", latitude: 48.485021, longitude: 1.588144 },
        { nom_prenom: "Baba Fofana", latitude: 48.946172, longitude: 2.518865 },
        { nom_prenom: "Bilal DAG", latitude: 48.768693, longitude: 1.955202 },
        { nom_prenom: "Choukrine MEDINI", latitude: 48.829657, longitude: 2.336558 },
        { nom_prenom: "Cyriaque REGIMBART", latitude: 50.087107, longitude: 3.37314 },
        { nom_prenom: "Dominique ROHAT", latitude: 47.974816, longitude: 0.203381 },
        { nom_prenom: "Enzo NEVES", latitude: 48.676263, longitude: 1.457335 },
        { nom_prenom: "Farid MEKKAOUI", latitude: 48.77063, longitude: 1.946678 },
        { nom_prenom: "Gokhan OZTURK", latitude: 48.760012, longitude: 0.625649 },
        { nom_prenom: "Guillaume MICHON", latitude: 48.756968, longitude: 0.59002 },
        { nom_prenom: "Hakan ALACA", latitude: 48.403762, longitude: 1.474818 },
        { nom_prenom: "Halit CAKIR", latitude: 47.791074, longitude: 1.038927 },
        { nom_prenom: "Ibrahima DIABY", latitude: 49.858837, longitude: 2.346096 },
        { nom_prenom: "Ismail LALE", latitude: 48.380624, longitude: 1.456244 },
        { nom_prenom: "Jéremie CHIPAULT", latitude: 48.749779, longitude: 1.922451 },
        { nom_prenom: "Luis DOS SANTOS GONCALVES", latitude: 49.320092, longitude: 2.321133 },
        { nom_prenom: "Mansour BA", latitude: 48.98909, longitude: 1.710836 },
        { nom_prenom: "Mhammed TACHBOUTI", latitude: 48.147019, longitude: 1.873651 },
        { nom_prenom: "Mohamed SEGHAIER", latitude: 48.681104, longitude: 2.418844 },
        { nom_prenom: "Nurettin BATIR", latitude: 47.965873, longitude: 0.211967 },
        { nom_prenom: "Orhan OZCELIK", latitude: 48.768809, longitude: 0.644154 },
        { nom_prenom: "Pascal KLUSKA", latitude: 48.884082, longitude: 1.460286 },
        { nom_prenom: "Sait SONMEZ", latitude: 48.00147, longitude: 0.205843 },
        { nom_prenom: "Sidi Mohammed SEDJAI", latitude: 48.856255, longitude: 2.786668 }
    ];

    data2.forEach(function(point) {
        L.marker([point.latitude, point.longitude], { icon: blueIcon })
            .addTo(data2Markers)
            .bindPopup(point.nom_prenom);
    });
    createConvexHull(data2, 'blue', data2Polygon);


    // Ajouter les marqueurs pour data3
    let data3 = [
        { nom_prenom: "Abilio CARVALHIDO MAIO", latitude: 47.352348, longitude: 0.680093 },
        { nom_prenom: "Benjamin NICOLLE", latitude: 49.623424, longitude: 0.961438 },
        { nom_prenom: "Cédric PEUVION", latitude: 48.715116, longitude: 3.723721 },
        { nom_prenom: "Charles MONSIGNY", latitude: 50.604818, longitude: 2.100263 },
        { nom_prenom: "Devrani FIDAN", latitude: 47.587642, longitude: 1.333893 },
        { nom_prenom: "Joao Cralos ROCHA DIAS", latitude: 47.310234, longitude: 0.881212 },
        { nom_prenom: "Jose Carlos CARDOSO JOAQUIM", latitude: 47.35833, longitude: 0.905363 },
        { nom_prenom: "Manuel FALK", latitude: 47.760013, longitude: 0.401248 },
        { nom_prenom: "Ozgur POLAT", latitude: 48.479221, longitude: 1.478602 },
        { nom_prenom: "Rafael DA SILVA DUARTE", latitude: 48.773133, longitude: 2.006738 },
        { nom_prenom: "Sergio DA SILVA DUARTE", latitude: 48.773133, longitude: 2.006738 },
        { nom_prenom: "Sami HAJJI", latitude: 48.956165, longitude: 2.463982 },
        { nom_prenom: "Vincent ROSSI", latitude: 48.941679, longitude: 2.399554 },
        { nom_prenom: "Ramazan DOGAN", latitude: 48.427302, longitude: 1.494981 },
        { nom_prenom: "Serdar ALTUNBEY", latitude: 48.756935, longitude: 0.589828 },
        { nom_prenom: "Stephane AUBERT", latitude: 48.891726, longitude: 3.910338 },
        { nom_prenom: "Talip ALTUNTERIM", latitude: 48.757172, longitude: 0.592891 },
        { nom_prenom: "Theotime LECLERC", latitude: 49.588793, longitude: 0.644588 },
        { nom_prenom: "Turan GUNER", latitude: 48.030045, longitude: 0.244408 }
    ];

    data3.forEach(function(point) {
        L.marker([point.latitude, point.longitude], { icon: redIcon })
            .addTo(data3Markers)
            .bindPopup(point.nom_prenom);
    });
    createConvexHull(data3, 'red', data3Polygon);


    function createConvexHull(data, color, polygonGroup) {
        // Convertir les points en format [longitude, latitude] pour Turf.js
        let latlngs = data.map(point => [point.longitude, point.latitude]);
    
        // Créer un objet de points avec Turf.js
        let points = turf.points(latlngs);
    
        // Calculer le convex hull
        let hull = turf.convex(points);
    
        // Convertir les coordonnées du convex hull en format [latitude, longitude] pour Leaflet
        let latlngsHull = hull.geometry.coordinates[0].map(coord => [coord[1], coord[0]]);
    
        // Ajouter le polygone au groupe spécifié
        L.polygon(latlngsHull, {
            color: color,
            fillColor: color,
            fillOpacity: 0.2
        }).addTo(polygonGroup);
    }
    

// Ajouter les contrôles de couches
let baseMaps = {
    "Données 1 (vert)": data1Markers,
    "Données 2 (bleu)": data2Markers,
    "Données 3 (rouge)": data3Markers
};

let overlayMaps = {
    "Polygone 1 (vert)": data1Polygon,
    "Polygone 2 (bleu)": data2Polygon,
    "Polygone 3 (rouge)": data3Polygon
};

L.control.layers(baseMaps, overlayMaps).addTo(macarte);

// Gestion du mode plein écran
document.getElementById('fullscreen-btn').addEventListener('click', function() {
    if (!document.fullscreenElement) {
        document.getElementById('carte').requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});


};