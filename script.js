const chatbotButton = document.getElementById("chatbot-button");
const chatbotContainer = document.getElementById("chatbot-container");
const closeChat = document.getElementById("close-chat");

chatbotButton.addEventListener("click", () => {
    chatbotContainer.style.display = "flex";
});

closeChat.addEventListener("click", () => {
    chatbotContainer.style.display = "none";
});

const sendChat = document.getElementById("send-chat");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chatbot-messages");

let chatState = "normal";

sendChat.addEventListener("click", () => {

    const mensagem = chatInput.value;

    if (mensagem === "") {
        return;
    }

    // mensagem do usuário
    const novaMensagem = document.createElement("div");

    novaMensagem.textContent = mensagem;

    novaMensagem.style.background = "#216c3b";
    novaMensagem.style.color = "white";
    novaMensagem.style.padding = "10px";
    novaMensagem.style.marginBottom = "10px";
    novaMensagem.style.borderRadius = "10px";
    novaMensagem.style.width = "fit-content";
    novaMensagem.style.marginLeft = "auto";

    chatMessages.appendChild(novaMensagem);

    // limpa input
    chatInput.value = "";

    // fluxo de agendamento
if (chatState === "waiting_schedule") {

    if (
        mensagem.toLowerCase().includes("sim")
    ) {

        const respostaBot = document.createElement("div");

        respostaBot.textContent =
        "Perfeito! Vou transferir você para nosso atendimento no WhatsApp.";

        respostaBot.style.background = "black";
        respostaBot.style.padding = "10px";
        respostaBot.style.marginBottom = "10px";
        respostaBot.style.borderRadius = "10px";
        respostaBot.style.width = "fit-content";

        chatMessages.appendChild(respostaBot);

        window.open(
            "https://wa.me/5571982905351",
            "_blank"
        );

        chatState = "normal";

        return;
    }

    if (
        mensagem.toLowerCase().includes("não") ||
        mensagem.toLowerCase().includes("nao")
    ) {

        const respostaBot = document.createElement("div");

        respostaBot.textContent =
        "Certo 😊 Quer mais alguma informação?";

        respostaBot.style.background = "black";
        respostaBot.style.padding = "10px";
        respostaBot.style.marginBottom = "10px";
        respostaBot.style.borderRadius = "10px";
        respostaBot.style.width = "fit-content";

        chatMessages.appendChild(respostaBot);

        chatState = "waiting_more_info";

        return;
    }
}

if (chatState === "waiting_more_info") {

    if (
        mensagem.toLowerCase().includes("não") ||
        mensagem.toLowerCase().includes("nao")
    ) {

        const respostaBot = document.createElement("div");

        respostaBot.textContent =
        "Obrigado pelo contato! Até logo 👋";

        respostaBot.style.background = "black";
        respostaBot.style.padding = "10px";
        respostaBot.style.marginBottom = "10px";
        respostaBot.style.borderRadius = "10px";
        respostaBot.style.width = "fit-content";

        chatMessages.appendChild(respostaBot);

        setTimeout(() => {

            document.getElementById("chatbot")
            .style.display = "none";

        }, 2000);

        return;
    }
}

    // resposta automática fake
    setTimeout(() => {

        const respostaBot = document.createElement("div");

        let resposta = "";

if (
    mensagem.toLowerCase().includes("preço") ||
    mensagem.toLowerCase().includes("serviços")
) {

    resposta =
    "Esses são nossos serviços: Corte: Adulto - R$ 70,00 | Infantil - R$ 45,00; Barba: R$ 50,00; Corte + Barba; R$ 110,00";

}

else if (
    mensagem.toLowerCase().includes("localização") ||
    mensagem.toLowerCase().includes("endereço")
) {

    resposta =
    "Estamos na Rua Alcateia, número 518, Boca do Rio. Fica ao lado da Sorveteria Pimenta";

}

else if (
    mensagem.toLowerCase().includes("horário") ||
    mensagem.toLowerCase().includes("funciona") ||
    mensagem.toLowerCase().includes("abertos") ||
    mensagem.toLowerCase().includes("aberta")
) {

    resposta =
    "Funcionamos de Terça a Sexta: das 10h às 19h; aos Sábados e Domingos: das 11h às 20h; Será uma satisfação atendê-lo!"

}

else {

    resposta =
    "Olá 😄 Aqui você recerá o atendimento diferenciado que merece.";

}

respostaBot.textContent = resposta;

        respostaBot.style.background = "black";
        respostaBot.style.padding = "10px";
        respostaBot.style.marginBottom = "10px";
        respostaBot.style.borderRadius = "10px";
        respostaBot.style.width = "fit-content";

        chatMessages.appendChild(respostaBot);

        setTimeout(() => {

        const perguntaBot = document.createElement("div");

        perguntaBot.textContent =
        "Quer agendar horário?";

        perguntaBot.style.background = "black";
        perguntaBot.style.padding = "10px";
        perguntaBot.style.marginBottom = "10px";
        perguntaBot.style.borderRadius = "10px";
        perguntaBot.style.width = "fit-content";

        chatMessages.appendChild(perguntaBot);

        chatState = "waiting_schedule";

        }, 1000); 

    }, 500);

});