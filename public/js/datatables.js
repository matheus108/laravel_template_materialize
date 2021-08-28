$(function() {
    if (!$.fn.dataTable.isDataTable(".js-exportable")) {
        var table = $(".js-exportable").DataTable({
            dom: "Bt",
            pageLength: 1000,
            responsive: true,
            buttons: [],
            language: { url: "/plugins/jquery-datatable/lang/pt-br.json" }
        });
    }

    $searchBar.find('input[type="text"]').on("keyup", function(e) {
        if (e.keyCode !== 27) {
            table.search(this.value).draw();
        }
    });

    $(".table")
        .parents(".card .body")
        .css("padding", "5px");
});