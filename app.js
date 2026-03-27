const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');
const modelCount = document.getElementById('modelCount');

function render(filter = '') {
    const data = dsModels.filter(m => 
        m.commonName.toLowerCase().includes(filter.toLowerCase()) ||
        m.type.toLowerCase().includes(filter.toLowerCase())
    );
    modelCount.innerText = data.length;
    tableBody.innerHTML = data.map(m => `
        <tr>
            <td><strong>${m.commonName}</strong></td>
            <td>${m.type}</td>
            <td><span class="rrid-tag">${m.rrid || 'N/A'}</span></td>
            <td>${m.genes}</td>
            <td><a href="${m.availability}" target="_blank">Source</a></td>
        </tr>
    `).join('');
}

searchInput.addEventListener('input', (e) => render(e.target.value));
render();