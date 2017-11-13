cApp.controller("MainCtrl", [
  "$scope",
  "$http",
  function($scope, $http, $translate) {
    $scope.btnSubmit = false;
    // $scope.setTitleNav("Página Inicial - Main");
    // $scope.setActive('main');
    $scope.modalInscricao = "templates/includes/modalinsc.html";
    $scope.navBar = "templates/includes/navbar.html";
    $scope.fullBanner = "templates/includes/fullbanner.html";
    $scope.oqueSao = "templates/includes/oquesao.html";
    $scope.organizadores = "templates/includes/organizadores.html";
    $scope.presidentes = "templates/includes/presidentes.html";
    $scope.programa = "templates/includes/programa.html";
    $scope.organizacoes = "templates/includes/organizacoes.html";
    $scope.footer = "templates/includes/footer.html";
    
    
    $scope.abrirModalInscricao = function() {
        $("#modalInsc").modal("open");
    };

    $scope.salvarInscricao = function(){
        $scope.btnSubmit = true;
        $scope.inscrito = "Enviando...";
        // setTimeout(function() {
            console.debug('asdfasdfsfda 12');
            $scope.inscricao.nome = '';
            $scope.inscricao.email = '';
            $scope.inscrito = "Inscrição salva com sucesso!";
            $scope.btnSubmit = false;
        // }, 5000);
    }

    $scope.carregarMenu = function(){
        $http.get('js/menu.json').then(function(response){
            $scope.itensMenu = response.data.menu;
            $scope.itensMenu2 = response.data.menu;
        },function(err){
            alert('Ocorreu um erro ao consultar o menu!');
        });
    }
  }
]);
