<!-- User Info -->
<div class="user-info">
    <div class="image">
        <img src="{{ asset('images/user.png') }}" alt="" width="48" height="48" />
    </div>
    <div class="info-container">
        <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ Auth::user()->name }}
        </div>
        <div class="email">{{ Auth::user()->email }}</div>
    </div>
</div>
<!-- #User Info -->
