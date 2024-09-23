var scroll = new ScrollWatcher();
scroll.watch('#transportando')
  .on('enter', function (evt) {
    $("#transportando .col-md-12").addClass("animated fadeInDown");
    $("#transportando .transportandoitem").addClass("animated fadeInDown");
  });
  var scroll = new ScrollWatcher();
scroll.watch('#frota')
  .on('enter', function (evt) {
    $("#frota .caminhao").addClass("animated fadeInLeft");
    $("#frota .frotaright .text, #frota .frotaright .title, #frota .frotaright .frotaitems li, #frota .btn").addClass("animated fadeInDown");
  });

  var scroll = new ScrollWatcher();
    scroll.watch('#pracas')
  .on('enter', function (evt) {
    $("#pracas .col-md-5, #pracas .col-md-7").addClass("animated fadeInDown");
  });

    var scroll = new ScrollWatcher();
    scroll.watch('#empresa')
  .on('enter', function (evt) {
    $("#empresa .title, #empresa .title").addClass("animated fadeInDown");
  });

  var scroll = new ScrollWatcher();
    scroll.watch('.collapsing')
  .on('enter', function (evt) {
    $(".nav").addClass("animated fadeInDown");
  });

