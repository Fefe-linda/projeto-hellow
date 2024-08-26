function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };

    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.920744620623434, lng: -49.064899389248424 ,titulo: 'Ibis Blumenau', descricao: 'Fabuloso.(8,6)' },
        { lat: -26.78888588869468,  lng:-49.08569041994388,  titulo: 'Presto Hotel', descricao: 'Fabuloso. (8,7)' },
        { lat:-26.877427809759386,   lng: -49.129876875758946,  titulo: 'Chá Mime Hotel', descricao: 'Bom. (7.7)' },
        { lat:-26.912141172201167,  lng:  -49.06701059110204,  titulo: 'Chalé Boutique-Blumenau', descricao: 'Bom. (7.3)' },
        { lat:-26.859376520842137,  lng: -49.091022318087546,  titulo: 'Hotel Nortte Blu', descricao: 'Fabuloso.(8.6)' },
        { lat:  -26.919942420407196, lng: -49.06573259110179,  titulo: 'Hotel Europa', descricao: 'Soberbo. (9.0)' },
        { lat: -26.934990591809783,  lng: -49.06753918924778, titulo: 'Quality Hotel Blumenau', descricao: 'Soberbo. (9.1)' },
        { lat: -26.92129345552032,  lng:-49.06604941993783,  titulo: 'Hotel Glória Blumenau', descricao: 'Soberbo. (9.3)' },
        { lat: -26.92275276036192, lng: -49.0630007469207,  titulo: 'Slaviero Hoel Blumenau', descricao: 'Soberbo. (9.0)' },
        { lat:-26.918174815009234,  lng:  -49.07593793528265, titulo: 'Villa do Vale Boutique de Blumenau', descricao: 'Excecional. (9.7)' },
       
       
    ];

    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });

    // Adicionando marcadores no mapa
    locaisEventos.forEach(function (evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });

        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });
}
