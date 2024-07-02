function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.915294543930294,  lng: 
        ]-49.08464031656164, titulo: 'Oktoberfest', descricao: 'oktoberfest' },
        { lat: -26.91539021042188, lng: -49.08467250306902, titulo: 'Natal', descricao: 'natal' },
        { lat: -26.919502384589425,  lng:  -49.06529742820377, titulo: 'desfile', descricao: 'desfile' },
    ];
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });
    // Adicionando marcadores no mapa
    locaisEventos.forEach(function(evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}