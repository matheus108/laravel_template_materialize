@props(['size'=>'md', 'title', 'id', 'form'=>null])
<div class="modal fade" role="dialog" id="{{$id}}">
    <div class="modal-dialog modal-{{$size}}" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">
                    {{$title}}
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="modal-body">
                {{$slot}}
            </div>
            @if (isset($form))
            <div class="modal-footer">
                <button type="submit" class="btn btn-success waves-effect" form="{{ $form }}">SALVAR</button>
                <button type="button" class="btn btn-link waves-effect" data-dismiss="modal">FECHAR</button>
            </div>
            @endif
        </div>
    </div>
</div>
