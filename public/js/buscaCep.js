$("input[data-type=cep]").on('change', function() {
    if (navigator.onLine) {
        var cep = this.value;
        cep = cep.replace(/\D/g, '');

        if (cep !== '') {
            var validacep = /^[0-9]{8}$/;
            if (validacep.test(cep)) {
                var $time = $(".card").waitMe({
                    effect: 'timer',
                    text: 'Buscando Endereço...',
                    bg: 'rgba(255,255,255,0.90)',
                    color: '#555'
                });
                $.ajax({
                    url: "https://viacep.com.br/ws/" + cep + "/json/",
                    dataType: "json",
                    timeout: 3000,
                    success: function(result) {
                        $time.waitMe('hide');
                        if (result.localidade !== '') {
                            $("input[data-cep=cidade]").val(result.localidade);
                        }
                        if (result.uf !== '') {
                            $("input[data-cep=uf]").val(result.uf);
                        }
                        if (result.logradouro !== '') {
                            $("input[data-cep=endereco]").val(result.logradouro);
                        }
                        if (result.bairro !== '') {
                            $("input[data-cep=bairro]").val(result.bairro);
                        }
                    },
                    error: function(xmlhttprequest, textstatus, message) {
                        $time.waitMe('hide');
                        if (textstatus === "timeout") {
                            Notification.error("Não foi possível baixar as informações");
                        } else {
                            Notification.error(textstatus);
                        }
                    }
                });
            }
        }
    }
});