$("input[data-type=cpf]").inputmask("999.999.999-99");
$("input[data-type=cnpj]").inputmask("99.999.999/9999-99");
$("input[data-type=documento]").inputmask({
    mask: ["999.999.999-99", "99.999.999/9999-99"],
    keepStatic: true,
});
$("input[data-type=cep]").inputmask("99.999-999");
$("input[data-type=telefone]").inputmask({
    mask: ["(99) 9999-9999", "(99) 99999-9999"],
    keepStatic: true,
});
$("input[data-type=uf]").inputmask("AA", { placeholder: "" });

//Date Time
$("input[data-type=datetime]").inputmask("d/m/y h:s", {
    placeholder: "__/__/____ __:__",
    alias: "datetime",
    hourFormat: "24",
});

$("input[data-type=time]").inputmask("h:s", {
    placeholder: "__:__",
    alias: "time",
    hourFormat: "24",
});

$("input[data-type=money]").inputmask("currency", {
    autoUnmask: true,
    radixPoint: ",",
    groupSeparator: ".",
    allowMinus: false,
    prefix: "R$ ",
    digits: 2,
    digitsOptional: false,
    rightAlign: true,
    unmaskAsNumber: true,
});

$("input[data-type=decimal]").inputmask({
    alias: "numeric",
    radixPoint: ",",
    prefix: "% ",
    allowMinus: false,
    digits: 2,
    max: 99.99,
});

$("input[data-type=dezenas]").inputmask("99,99,99,99,99,99,99,99,99,99");

$("input[required]").parent().parent().find("label").append('*').css('color', 'red').attr('title', 'Campo obrigatório');