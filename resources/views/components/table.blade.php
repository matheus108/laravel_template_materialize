@props(['search'=>'hide'])
<div class="table-responsive">
    <table
        {{ $attributes->merge(['class' => "table table-bordered table-striped table-hover dataTable js-exportable"])}}>
        {{ $slot }}
    </table>
</div>

@if($search === 'show')
@push('btn-search')
<li>
    <a href="javascript:void(0);" class="btn btn-default btn-xs js-search" data-close="true">
        <i class="material-icons">search</i>
        <span>BUSCAR</span>
    </a>
</li>
@push('search-bar')
{{-- Search bar --}}
<div class="search-bar">
    <div class="search-icon">
        <i class="material-icons">search</i>
    </div>
    <input id="input-search-table" type="text" name="buscar" form="form-search" placeholder="DIGITE AQUI..."
        data-table="#{{$attributes['id']}}">
    <div class="close-search">
        <i class="material-icons">close</i>
    </div>
</div>
{{-- #Search bar --}}
@endpush
@endpush

@endif

@push('js')
<script src="{{ asset('plugins/jquery-datatable/jquery.dataTables.js') }}"></script>
<script src="{{ asset('plugins/jquery-datatable/skin/bootstrap/js/dataTables.bootstrap.js') }}"></script>
<script src="{{ asset('plugins/jquery-datatable/extensions/export/dataTables.buttons.min.js') }}"></script>
<script src="{{ asset('plugins/jquery-datatable/extensions/export/buttons.flash.min.js') }}"></script>
<script src="{{ asset('plugins/jquery-datatable/extensions/export/buttons.html5.min.js') }}"></script>
<script src="{{ asset('plugins/jquery-datatable/extensions/export/buttons.print.min.js') }}"></script>
<script src="{{ asset('plugins/jquery-datatable/extensions/export/jszip.min.js') }}"></script>
<script src="{{ asset('plugins/jquery-datatable/extensions/export/pdfmake.min.js') }}"></script>
<script src="{{ asset('js/datatables.js?v=19082020') }}"></script>
@endpush

@push('css')
<link rel="stylesheet" href="{{ asset('plugins/jquery-datatable/skin/bootstrap/css/dataTables.bootstrap.css') }}">
@endpush
