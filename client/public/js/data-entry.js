document.addEventListener("DOMContentLoaded", function() {
    loadFields();

    document.getElementById('data-entry-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const expense = document.getElementById('expense').value;
        const amount = parseFloat(document.getElementById('amount').value);
        if (expense && amount) {
            let data = JSON.parse(localStorage.getItem('data')) || [];
            data.push({ expense, amount });
            localStorage.setItem('data', JSON.stringify(data));
            alert('Dados salvos com sucesso!');
            document.getElementById('data-entry-form').reset();
        }
    });
});

function loadFields() {
    let fields = JSON.parse(localStorage.getItem('fields')) || [];
    const form = document.getElementById('data-entry-form');
    fields.forEach(field => {
        const label = document.createElement('label');
        label.setAttribute('for', field);
        label.textContent = field + ':';
        const input = document.createElement('input');
        input.type = 'text';
        input.id = field;
        input.name = field;
        form.appendChild(label);
        form.appendChild(input);
    });
}
