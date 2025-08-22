// Funcionalidades do site
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const searchBox = document.querySelector('.search-box');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('show');
            searchBox.classList.toggle('show');
            
            if (mainNav.classList.contains('show')) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
    
    // Dados das notícias (simulando uma API)
    const newsData = {
        1: {
            title: "Governo anuncia novo pacote de medidas econômicas para o próximo ano",
            category: "Política",
            date: "15/11/2023",
            image: "https://picsum.photos/800/500?random=1",
            content: `<p>O governo federal anunciou nesta quarta-feira um novo pacote de medidas econômicas que entrará em vigor no próximo ano. As medidas incluem redução de impostos para setores específicos e aumento do investimento em infraestrutura.</p>
                     <p>De acordo com o ministro da Economia, as medidas visam estimular o crescimento econômico e a geração de empregos. "Estamos focados em criar um ambiente favorável para os negócios e para o desenvolvimento do país", afirmou.</p>
                     <p>Entre as principais medidas estão a redução do imposto para empresas de tecnologia, incentivos fiscais para a indústria verde e aumento de 30% nos investimentos em infraestrutura de transporte.</p>
                     <p>Especialistas avaliam que as medidas podem ter impacto positivo na economia, mas alertam para a necessidade de acompanhamento rigoroso da execução orçamentária.</p>`
        },
        2: {
            title: "Nova inteligência artificial promete revolucionar busca na internet",
            category: "Tecnologia",
            date: "15/11/2023",
            image: "https://picsum.photos/300/200?random=2",
            content: `<p>Uma nova inteligência artificial desenvolvida por pesquisadores brasileiros promete revolucionar a forma como buscamos informações na internet. O sistema, batizado de "SearchMind", utiliza algoritmos de aprendizado profundo para entender melhor a intenção por trás das pesquisas.</p>
                     <p>Diferente dos sistemas atuais, que se baseiam principalmente em palavras-chave, o SearchMind analisa o contexto e o significado das consultas, oferecendo resultados mais relevantes e precisos.</p>
                     <p>O projeto levou três anos para ser desenvolvido e já recebeu investimentos de grandes empresas de tecnologia. A expectativa é que a ferramenta esteja disponível para uso comercial no próximo ano.</p>`
        },
        3: {
            title: "Time local vence campeonato após 10 anos de espera",
            category: "Esportes",
            date: "15/11/2023",
            image: "https://picsum.photos/300/200?random=3",
            content: `<p>O time local conquistou o campeonato estadual após 10 anos de espera. A vitória por 3 a 1 na final contra o tradicional rival garantiu o título tão esperado pelos torcedores.</p>
                     <p>O jogo foi marcado por emoções intensas, com o time abrindo o placar ainda no primeiro tempo, sofrendo o empate no segundo tempo e garantindo a vitória com dois gols nos minutos finais.</p>
                     <p>O técnico do time dedicou a vitória aos torcedores: "Essa conquista é para nossa torcida, que nunca deixou de acreditar mesmo nos momentos mais difíceis".</p>
                     <p>A comemoração tomou conta da cidade, com milhares de pessoas saindo às ruas para celebrar o título.</p>`
        },
        4: {
            title: "Pesquisadores descobrem novo tratamento para doença rara",
            category: "Saúde",
            date: "15/11/2023",
            image: "https://picsum.photos/300/200?random=4",
            content: `<p>Pesquisadores brasileiros anunciaram a descoberta de um novo tratamento para uma doença rara que afeta o sistema nervoso. O tratamento, baseado em terapia genética, mostrou resultados promissores em testes clínicos.</p>
                     <p>A doença, que até então não tinha tratamento eficaz, afeta aproximadamente 1 a cada 100.000 pessoas no mundo. Os pacientes apresentam degeneração progressiva das funções motoras e cognitivas.</p>
                     <p>O novo tratamento utiliza vírus modificados para entregar genes saudáveis às células afetadas, revertendo parte dos danos causados pela doença. Nos testes iniciais, 70% dos pacientes apresentaram melhora significativa nos sintomas.</p>
                     <p>A expectativa é que o tratamento esteja disponível no sistema público de saúde dentro de dois anos, após a conclusão dos testes e aprovação dos órgãos reguladores.</p>`
        },
        5: {
            title: "Mercado financeiro reage positivamente aos indicadores econômicos",
            category: "Economia",
            date: "15/11/2023",
            image: "https://picsum.photos/400/250?random=5",
            content: `<p>O mercado financeiro reagiu com otimismo aos últimos indicadores econômicos divulgados pelo governo. A bolsa de valores registrou alta recorde, com o índice principal subindo 3,5% em um único dia.</p>
                     <p>Os dados mostram crescimento do PIB, redução da inflação e aumento da confiança do consumidor. Para analistas, os números indicam que a economia está em trajetória de recuperação consistente.</p>
                     <p>O setor industrial foi o que apresentou o melhor desempenho, com crescimento de 5,2% no último trimestre. O comércio varejista também registrou alta, impulsionado pelo aumento da renda e do crédito.</p>
                     <p>Especialistas projetam que, mantido o ritmo atual, a economia pode fechar o ano com crescimento acima das expectativas iniciais.</p>`
        }
        // Outras notícias podem ser adicionadas aqui
    };
    
    // Modal de notícia
    const modal = document.getElementById('newsModal');
    const closeModal = document.querySelector('.close-modal');
    const newsCards = document.querySelectorAll('.featured-card, .secondary-card, .news-card');
    
    // Abrir modal ao clicar em uma notícia
    newsCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const newsId = this.getAttribute('data-id');
            const news = newsData[newsId];
            
            if (news) {
                document.getElementById('modal-title').textContent = news.title;
                document.getElementById('modal-category').textContent = news.category;
                document.getElementById('modal-date').textContent = news.date;
                document.getElementById('modal-image').src = news.image;
                document.getElementById('modal-image').alt = news.title;
                document.getElementById('modal-content').innerHTML = news.content;
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Fechar modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Fechar modal ao clicar fora dele
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Carregar mais notícias
    const loadMoreBtn = document.querySelector('.load-more button');
    const newsGrid = document.querySelector('.news-grid');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simulação de carregamento de mais notícias
            this.textContent = 'Carregando...';
            this.disabled = true;
            
            setTimeout(() => {
                // Adicionando notícias fictícias
                for (let i = 0; i < 3; i++) {
                    const randomId = Math.floor(Math.random() * 100) + 11;
                    const categories = ['Tecnologia', 'Economia', 'Esportes', 'Cultura', 'Saúde'];
                    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
                    const today = new Date();
                    const dateString = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
                    
                    const newsArticle = document.createElement('a');
                    newsArticle.className = 'news-card';
                    newsArticle.href = '#';
                    newsArticle.setAttribute('data-id', randomId);
                    newsArticle.innerHTML = `
                        <img src="https://picsum.photos/400/250?random=${randomId}" alt="Notícia">
                        <div class="card-content">
                            <span class="category">${randomCategory}</span>
                            <h3>Nova notícia carregada dinamicamente</h3>
                            <p>Esta é uma notícia adicional carregada quando você clica no botão "Carregar mais notícias".</p>
                            <div class="news-meta">
                                <span><i class="far fa-clock"></i> ${dateString}</span>
                                <span class="read-more">Leia mais</span>
                            </div>
                        </div>
                    `;
                    
                    // Adicionar evento de clique para a nova notícia
                    newsArticle.addEventListener('click', function(e) {
                        e.preventDefault();
                        // Aqui você pode adicionar lógica para mostrar uma notícia genérica
                        // já que não temos dados específicos para essas notícias carregadas dinamicamente
                        document.getElementById('modal-title').textContent = "Nova notícia carregada dinamicamente";
                        document.getElementById('modal-category').textContent = randomCategory;
                        document.getElementById('modal-date').textContent = dateString;
                        document.getElementById('modal-image').src = `https://picsum.photos/400/250?random=${randomId}`;
                        document.getElementById('modal-image').alt = "Notícia";
                        document.getElementById('modal-content').innerHTML = `
                            <p>Esta é uma notícia carregada dinamicamente quando você clicou no botão "Carregar mais notícias".</p>
                            <p>Em um site real, estas notícias viriam de uma base de dados ou API, garantindo conteúdo atualizado diariamente.</p>
                            <p>O sistema está funcionando perfeitamente, demonstrando como novas notícias podem ser adicionadas regularmente.</p>
                        `;
                        
                        modal.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                    });
                    
                    newsGrid.appendChild(newsArticle);
                }
                
                this.textContent = 'Carregar mais notícias';
                this.disabled = false;
                
            }, 1000);
        });
    }
    
    // Formulário de newsletter
    const newsletterForm = document.querySelector('.newsletter form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                // Simulação de envio
                this.innerHTML = '<p class="success-message">Obrigado por se inscrever!</p>';
                
                setTimeout(() => {
                    this.innerHTML = `
                        <input type="email" placeholder="Seu melhor e-mail" required>
                        <button type="submit">Inscrever</button>
                    `;
                }, 3000);
            }
        });
    }
    
    // Atualizar data das notícias para o dia atual
    function updateNewsDates() {
        const today = new Date();
        const dateString = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
        
        // Atualizar datas nas notícias
        const timeElements = document.querySelectorAll('time');
        timeElements.forEach(el => {
            el.textContent = dateString;
        });
    }
    
    updateNewsDates();
    
    // Simulação de notícias em tempo real
    const newsTicker = document.createElement('div');
    newsTicker.className = 'news-ticker';
    newsTicker.innerHTML = `
        <div class="ticker-content">
            <span>Última hora: </span>
            <span class="ticker-text">Novo acordo comercial entre países é anunciado - Mercado reage positivamente às notícias econômicas - Descoberta científica promete avanços no tratamento de doenças</span>
        </div>
    `;
    
    document.body.insertBefore(newsTicker, document.querySelector('header').nextSibling);
    
    // Estilos para o news ticker
    const tickerStyles = `
        .news-ticker {
            background: #e74c3c;
            color: white;
            padding: 8px 0;
            overflow: hidden;
            position: relative;
        }
        
        .ticker-content {
            display: flex;
            align-items: center;
            white-space: nowrap;
            padding-left: 100%;
            animation: ticker 30s linear infinite;
        }
        
        .ticker-content span:first-child {
            font-weight: bold;
            margin-right: 10px;
        }
        
        @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = tickerStyles;
    document.head.appendChild(styleSheet);
});