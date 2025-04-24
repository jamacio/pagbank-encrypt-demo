function copyText(id) {
    const text = document.getElementById(id).value;
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => alert('Copied!'));
    } else {
        const el = document.getElementById(id);
        el.disabled = false;
        el.select();
        document.execCommand('copy');
        el.disabled = true;
        alert('Copied!');
    }
}

$(function () {
    const darkEnabled = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', darkEnabled);
    $('#darkModeToggle').prop('checked', darkEnabled);
    $('#darkModeToggle').change(function () {
        const enabled = $(this).is(':checked');
        document.body.classList.toggle('dark-mode', enabled);
        localStorage.setItem('darkMode', enabled);
    });

    const storedKey = localStorage.getItem('publicKey');
    if (storedKey) $('#public_key').val(storedKey);
    $('#public_key').on('input blur', function () {
        localStorage.setItem('publicKey', $(this).val());
    });

    $('#copyBtn').click(() => copyText('encrypted_value'));

    $('#test_card').change(() => {
        const val = $('#test_card').val().split('|');
        const nextYear = new Date().getFullYear() + 1;
        if (val.length === 4) {
            $('#number').val(val[0]);
            $('#cvc').val(val[1]);
            $('#month').val(val[2]);
            $('#year').val(nextYear);
            $('#holder').val('Tony Stark');
        }
    });

    $('#encrypt').click(() => {
        const card = PagSeguro.encryptCard({
            publicKey: $('#public_key').val().trim(),
            holder: $('#holder').val().trim(),
            number: $('#number').val().replace(/\s/g, ''),
            expMonth: $('#month').val().trim(),
            expYear: $('#year').val().trim(),
            securityCode: $('#cvc').val().trim()
        });
        if (card.hasErrors) {
            $('#encrypted_value').val(card.errors.map(e => e.message).join('\n'));
        }
        else {
            $('#encrypted_value').val(card.encryptedCard);
        }
    });
});