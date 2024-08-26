function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };

    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.90705966244638, lng:  -49.07318650644708, titulo: 'Rosa Mexicano', descricao: '' },
        { lat: -26.918040929084032, lng: -49.06066624603213,  titulo: 'Ataliba', descricao: '' },
        { lat:-26.91900791947636, lng: -49.06048633342936,   titulo: 'Moinho do Vale', descricao: '' },
        { lat:-26.912975440309005,  lng:  -49.08052623157644, titulo: 'Essen Platz', descricao: '' },
        { lat:  -26.936539693124384, lng: -49.07012044034685, titulo: 'Mini Kalzone', descricao: '' },
        { lat:-26.90616732826916,   lng: -49.07440163342997, titulo: 'Mortadella Ristorante e Pizzeria', descricao: '' },
        { lat:-26.89546930026134,   lng: -49.08792583528374, titulo: 'La Vinoteca', descricao: '' },
        { lat: -26.91526041031704, lng:  -49.08446821993821, titulo: 'Choperia e Restaurante Vila Germânica', descricao: '' },
        { lat: -26.92173978856844,   lng: -49.059287177610265, titulo: 'Choperia e Restaurante Thapyoka', descricao: '' },
        { lat:-26.876500308111204,  lng: -49.087462389250454, titulo: 'Castela da Pizza', descricao: '' }
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
