function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };

    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.92219342332487, lng: -49.05876688924839, titulo: '3ª Temporada de Exposições do MAB – ano 2024', descricao: 'Evento gratuito' },
        { lat: -26.912424605751887, lng: -49.070048104593525, titulo: 'Curso Assistenciologia', descricao: 'Evento Pago' },
        { lat: -26.918382982594107, lng: -49.06807976226569, titulo: 'Colmeia – 11ª Edição', descricao: 'Evento Gratuito' },
        { lat: -26.912395905058812, lng: -49.07011247761059, titulo: 'Palestra Gratuita: Saúde Consciencial', descricao: 'Evento Gratuito' },
        { lat: -26.927374129823427, lng: -49.06313246226514, titulo: '6ª FECITEC CRE e FEDUCA 2024', descricao: 'Evento Gratuito' },
        { lat: -26.907444959572075, lng: -49.07315671371181, titulo: 'Workshop ELA', descricao: 'Evento Pago' },
        { lat: -26.922307759381212, lng: -49.05698754692079, titulo: 'Festival Balbúrdia 5 anos', descricao: 'Evento Gratuito' },
        { lat: -26.915313677231993, lng: -49.08469396226581, titulo: 'OrquiFest', descricao: 'Evento Pago' },
        { lat: -26.91388500757365, lng: -49.08569867575722, titulo: 'Despertai', descricao: 'Evento Pago' },
        { lat: -26.922145592972935, lng: -49.05878834692074, titulo: '4a. Temporada de Exposições do MAB – TEXNEO NOVUM FESTIVAL', descricao: 'Evento Gratuito' },
        { lat: -26.91844994731411, lng: -49.06804757575715, titulo: 'Realizador de Sonhos o Musical', descricao: 'Evento Pago' },
        { lat: -26.911666602874348, lng: -49.07142163342975, titulo: 'Charles Master TNT Show Nacional – Independencia ou Rock', descricao: 'Evento Pago' },
        { lat: -26.920901925509384, lng: -49.065237675756954, titulo: 'Feira Brique de Blumenau', descricao: 'Evento Gratuito' },
        { lat: -26.914533042249374, lng: -49.069270646921126, titulo: 'Feira da Estação', descricao: 'Evento Gratuito' },
        { lat: -26.90930996360393, lng: -49.033989575757495, titulo: '8X Summit Blumenau', descricao: 'Evento Pago' },
        { lat: -26.903085387706476, lng: -49.09822291993864, titulo: 'Aniversário wood smocked taberna', descricao: 'Evento Gratuito' },
        { lat: -26.911811504764948, lng: -49.07269128924885, titulo: '-49.07269128924885', descricao: 'Evento Gratuito' },
        { lat: -26.809741714045, lng: -49.086994491106836, titulo: 'Aniversário de 10 Anos da Cervejaria Container', descricao: 'Evento Pago' },
        { lat: -26.918460349100073, lng: -49.06812014692087, titulo: '26º FENATIB Festival Nacional de Teatro para Crianças e Jovens de Blumenau', descricao: 'Evento Gratuito' },
        { lat: -26.898083614575892, lng: -49.07772197575806, titulo: 'Velharia Rock festival', descricao: 'Evento Gratuito' },
        { lat: -26.915313677231993, lng: -49.084586673904006, titulo: 'Oktoberfest', descricao: 'Evento Pago' },
        { lat: -26.915307826946595, lng: -49.084684250627525, titulo: 'Jorge e Mateus em Blumenau', descricao: 'Evento Pago' }
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
