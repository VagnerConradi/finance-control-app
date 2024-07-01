document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('field-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const fieldName = document.getElementById('field').value;
        if (fieldName) {
            let fields = JSON.parse(localStorage.getItem('fields')) || [];
            fields.push(fieldName);
            localStorage.setItem('fields', JSON.stringify(fields));
            updateFieldList();
            document.getElementById('field').value = '';
            alert('Campo adicionado!');
        }
    });

    updateFieldList();
});

function removeField(fieldName) {
    let fields = JSON.parse(localStorage.getItem('fields')) || [];
    fields = fields.filter(field => field !== fieldName);
    localStorage.setItem('fields', JSON.stringify(fields));
    updateFieldList();
    alert('Campo removido!');
}

function updateFieldList() {
    const fieldList = document.getElementById('field-list');
    fieldList.innerHTML = '';
    let fields = JSON.parse(localStorage.getItem('fields')) || [];
    fields.forEach(field => {
        const li = document.createElement('li');
        li.textContent = field;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function() { removeField(field); };
        li.appendChild(removeButton);
        fieldList.appendChild(li);
    });
}
