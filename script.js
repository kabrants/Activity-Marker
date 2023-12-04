const tarefa = document.querySelector("#tarefa");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

// Função para adicionar uma tarefa
function adicionarTarefa() {
    if (tarefa.value === "") {
        alert("Você não digitou nenhuma tarefa!");
    } else {
        lista.innerHTML += 
           `
            <li>
            <i class="fas fa-check-circle check"></i>
            <span>${ tarefa.value }</span>
            <i class="fa-solid fa-trash-can close"></i>
            `;
    }

    tarefa.value = "";

    const close = document.querySelectorAll(".close");
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function() {
            close[i].parentElement.remove();
        });
    }

    lista.addEventListener("click", function(e) {
        e.target.parentElement.querySelector(".check").style.color = "#40623D";
        e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
    });
}

// Adiciona a funcionalidade de pressionar "Enter"
tarefa.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

// Adiciona a funcionalidade de clicar no botão
btn.addEventListener("click", adicionarTarefa);