document.addEventListener('DOMContentLoaded', function() {
  const video = document.querySelector('.video-background video');
  
  // Garante o loop perfeito
  video.addEventListener('ended', function() {
    video.currentTime = 0;
    video.play();
  });
  
  // Inicia o vídeo (para alguns navegadores mobile)
  video.play().catch(e => console.log("Autoplay bloqueado:", e));
});

document.querySelector('.youtube-player').addEventListener('click', function(e) {
  e.preventDefault(); // Evita comportamento padrão
  e.stopPropagation();
});
// Função para mostrar o pedido
function mostrarPedido() {
  const pedido = document.getElementById('pedido');
  
  // Efeito visual antes de mostrar
  document.getElementById('caixaPresente').style.transform = 'scale(1.1)';
  
  setTimeout(() => {
    pedido.style.display = 'block';
    pedido.style.animation = 'fadeIn 0.5s ease-out';
    
    // Rola a página até o pedido
    pedido.scrollIntoView({ behavior: 'smooth' });
  }, 300);
}

// Adiciona o evento de clique
document.getElementById('caixaPresente').addEventListener('click', mostrarPedido);

console.log("Script carregado!");

document.getElementById('caixaPresente').addEventListener('click', function() {
  console.log("Caixa clicada!");
  mostrarPedido();
});

function mostrarPedido() {
  console.log("Função chamada!");
  console.log("Elemento pedido:", document.getElementById('pedido'));
}
function abrirCarta() {
  document.getElementById('cartaAberta').classList.add('mostrar');
  document.body.style.overflow = 'hidden';
}

function fecharCarta() {
  document.getElementById('cartaAberta').classList.remove('mostrar');
  document.body.style.overflow = 'auto';
}

// Fechar com ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    fecharCarta();
  }
});
// Adicione isso no JavaScript
function digitarTexto() {
  const texto = document.querySelector('.texto-carta');
  const frases = texto.innerHTML.split('<p>').map(p => p.replace('</p>','')).filter(p => p);
  texto.innerHTML = '';
  
  frases.forEach((frase, i) => {
    setTimeout(() => {
      const p = document.createElement('p');
      texto.appendChild(p);
      let j = 0;
      const typing = setInterval(() => {
        p.textContent += frase[j];
        j++;
        if (j === frase.length) clearInterval(typing);
      }, 50);
    }, i * 2000);
  });
}

// Chame a função quando abrir a carta
function abrirCarta() {
  // ... código anterior
  digitarTexto();
}

document.addEventListener('DOMContentLoaded', function() {
  const botao = document.getElementById('botaoAceitar');
  const comemoracao = document.getElementById('comemoracao');
  
  // Debug inicial
  console.log("Botão:", botao);
  console.log("Elemento de comemoração:", comemoracao);
  
  if (botao && comemoracao) {
    botao.addEventListener('click', function() {
      console.log("Botão clicado!");
      
      // 1. Efeito visual no botão
      botao.style.transform = 'scale(0.95)';
      botao.style.background = 'linear-gradient(to right, #802a58, #a64d79)';
      
      // 2. Mostra a comemoração após pequeno delay
      setTimeout(() => {
        comemoracao.style.display = 'block';
        
        // 3. Rola a página até a comemoração
        comemoracao.scrollIntoView({ behavior: 'smooth' });
        
        // 4. Confetes! (Efeito extra)
        criarConfetes();
      }, 300);
    });
  } else {
    console.error("Elementos não encontrados! Verifique os IDs.");
  }
});

// Função de confetes (opcional)
function criarConfetes() {
  const cores = ['#ff6b6b', '#a64d79', '#ffb347', '#47b8ff'];
  
  for (let i = 0; i < 100; i++) {
    const confete = document.createElement('div');
    confete.className = 'confete';
    confete.style.left = Math.random() * 100 + 'vw';
    confete.style.backgroundColor = cores[Math.floor(Math.random() * 4)];
    document.body.appendChild(confete);
    
    setTimeout(() => {
      confete.remove();
    }, 3000);
  }
}