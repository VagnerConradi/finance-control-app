document.addEventListener("DOMContentLoaded", function() {
    // Função para criar um gráfico de pizza
    const createPieChart = (data, containerId) => {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Limpar qualquer gráfico existente
        let totalValue = data.reduce((acc, item) => acc + item.value, 0);
        let currentAngle = 0;

        data.forEach(item => {
            const slice = document.createElement("div");
            slice.classList.add("slice");
            slice.style.backgroundColor = item.color;

            const sliceAngle = (item.value / totalValue) * 360;
            slice.style.transform = `rotate(${currentAngle}deg)`;
            currentAngle += sliceAngle;
            slice.style.background = `conic-gradient(
                ${item.color} ${currentAngle - sliceAngle}deg ${currentAngle}deg,
                transparent ${currentAngle}deg
            )`;

            container.appendChild(slice);
        });
    };

    // Função para carregar dados do localStorage
    const loadData = () => {
        return JSON.parse(localStorage.getItem('data')) || [];
    };

    // Dados do localStorage
    const chartData = loadData().map(item => ({
        label: item.expense,
        value: item.amount,
        color: getRandomColor()
    }));

    // Criar os gráficos
    createPieChart(chartData, "chart1");

    // Exemplos de dados fixos para os outros gráficos
    const exampleData2 = [
        { label: "Comida", value: 50, color: "purple" },
        { label: "Transporte", value: 20, color: "yellow" },
        { label: "Entretenimento", value: 20, color: "pink" },
        { label: "Outros", value: 10, color: "gray" }
    ];
    const exampleData3 = [
        { label: "Investimentos", value: 30, color: "gold" },
        { label: "Aluguel", value: 40, color: "silver" },
        { label: "Lazer", value: 20, color: "cyan" },
        { label: "Outros", value: 10, color: "magenta" }
    ];

    createPieChart(exampleData2, "chart2");
    createPieChart(exampleData3, "chart3");
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function logout() {
    // Lógica para deslogar o usuário
    alert("Usuário deslogado");
}
