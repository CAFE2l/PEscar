   // Dados dos peixes
        const fishData = [
            {
                id: 1,
                name: "Dourado",
                scientificName: "Salminus brasiliensis",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.portaldasmissoes.com.br%2Fuploads%2Fempreendimentos%2F1782%2F0051301_regular_lenda-peixe-dourado-conto-missioneiro-historia-missioneira-dourado-conto-lenda-(0)b.jpg&f=1&nofb=1&ipt=33538d43f5cf4ebb4729c646d9bb76212a5d002a50cfe609814d29475b0f52c8",
                type: "freshwater",
                bait: "Peixes pequenos, iscas artificiais",
                seasons: ["spring", "summer"],
                rarity: "uncommon",
                description: "O dourado é um peixe de água doce muito valorizado por pescadores esportivos. Conhecido como 'rei do rio', possui bela coloração dourada e é um lutador forte.",
                size: "Até 1m",
                weight: "Até 30kg"
            },
            {
                id: 2,
                name: "Atum Azul",
                scientificName: "Thunnus thynnus",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffotos-premium%2Fo-atum-azul-gigante-nada-na-agua-do-oceano_978585-795.jpg&f=1&nofb=1&ipt=8119734677b129fc8c2086b3874385207ecb0a355e55fcb8c919c4fee8a6de4c",
                type: "saltwater",
                bait: "Sardinhas, lulas, iscas artificiais",
                seasons: ["summer", "autumn"],
                rarity: "rare",
                description: "O atum azul é um dos peixes mais impressionantes dos oceanos. Conhecido por sua velocidade e tamanho, é altamente valorizado na culinária.",
                size: "Até 4.5m",
                weight: "Até 680kg"
            },
            {
                id: 3,
                name: "Truta Arco-Íris",
                scientificName: "Oncorhynchus mykiss",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Ftruta-arco-%25C3%25ADris-no-chuveiro-187707553.jpg&f=1&nofb=1&ipt=01f3c4ed4e5517b86c68c6fb90f9ad2978b4152a4a33dcc576174dc5999a1705",
                type: "freshwater",
                bait: "Iscas artificiais, minhocas, moscas",
                seasons: ["spring", "autumn"],
                rarity: "common",
                description: "A truta arco-íris é um peixe popular entre pescadores. Originária da América do Norte, foi introduzida em rios de água fria em todo o mundo.",
                size: "Até 60cm",
                weight: "Até 5kg"
            },
            {
                id: 4,
                name: "Peixe-Palhaço",
                scientificName: "Amphiprioninae",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.pescagerais.com.br%2Fwp-content%2Fuploads%2F2021%2F02%2Fpeixe-palhaco-procurando-nemo.jpg&f=1&nofb=1&ipt=ad148c6542582c871ba112a334f799e14ec299db31fc55c05179f3eb777d574e",
                type: "saltwater",
                bait: "Plâncton, pequenos crustáceos",
                seasons: ["spring", "summer"],
                rarity: "common",
                description: "O peixe-palhaço é conhecido por suas cores vibrantes e relação simbiótica com anêmonas-do-mar. Popularizado pelo filme 'Procurando Nemo'.",
                size: "Até 15cm",
                weight: "Até 200g"
            },
            {
                id: 5,
                name: "Tubarão-Martelo",
                scientificName: "Sphyrnidae",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogdopescador.com%2Fwp-content%2Fuploads%2F2022%2F10%2Ftubarao-martelo-2.jpg&f=1&nofb=1&ipt=2ec330eec3f7ada35c2b919388300e1bc055f6bdb768e5bfd64470722f264772",
                type: "saltwater",
                bait: "Peixes, lulas, polvos",
                seasons: ["summer"],
                rarity: "rare",
                description: "O tubarão-martelo é facilmente reconhecido pela forma peculiar de sua cabeça. São caçadores eficientes e possuem excelente senso de detecção de presas.",
                size: "Até 6m",
                weight: "Até 450kg"
            },
            {
                id: 6,
                name: "Pirarucu",
                scientificName: "Arapaima gigas",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-0t5LZ5qt8uM%2FUdTOl8X_4AI%2FAAAAAAAAD6s%2Fu19lTx52_os%2Fs1400%2Fpirarucu.jpg&f=1&nofb=1&ipt=b9e40bfc0b33a0c34539a8b472847530766b1cde6e77a9953dbef4301b656ea0",
                type: "freshwater",
                bait: "Peixes pequenos, iscas artificiais",
                seasons: ["summer", "autumn"],
                rarity: "uncommon",
                description: "O pirarucu é um dos maiores peixes de água doce do mundo. Nativo da Amazônia, pode respirar ar atmosférico, adaptação útil em águas com baixo oxigênio.",
                size: "Até 3m",
                weight: "Até 200kg"
            },
            {
                id: 7,
                name: "Mero",
                scientificName: "Epinephelus itajara",
                image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Foperacionbikini.es%2Fwp-content%2Fuploads%2F2012%2F11%2Fmero.jpg&f=1&nofb=1&ipt=35bc24094947e7100e22d5a12aeac252ab265b475c64d039109b041c498d5ea5",
                type: "saltwater",
                bait: "Polvos, peixes, lagostas",
                seasons: ["summer"],
                rarity: "rare",
                description: "O mero é um dos maiores peixes de recife. Conhecido por sua boca grande e comportamento curioso, infelizmente está ameaçado de extinção em muitas áreas.",
                size: "Até 2.5m",
                weight: "Até 400kg"
            },
            {
                id: 8,
                name: "Aruanã",
                scientificName: "Osteoglossum bicirrhosum",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faquaponia-urbana.com%2Fwp-content%2Fuploads%2F2023%2F09%2FAruana-Caracteristicas-e-Dicas-de-Criacao.jpg&f=1&nofb=1&ipt=ae8288fb65c18c2636c45c75a2ac2de15689039aad671ae630309cc00e273882",
                type: "freshwater",
                bait: "Insetos, pequenos peixes",
                seasons: ["spring", "summer"],
                rarity: "uncommon",
                description: "A aruanã é um peixe elegante conhecido por saltar para capturar insetos. É considerado um símbolo de boa sorte em algumas culturas asiáticas.",
                size: "Até 1.2m",
                weight: "Até 6kg"
            },
            {
                id: 9,
                name: "Peixe-Lua",
                scientificName: "Mola mola",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.aquaristz.com%2Fwp-content%2Fuploads%2F2018%2F11%2Fpeixe-lua-mola-mola.jpg&f=1&nofb=1&ipt=26d48f17ebde2237eeff8aa39bea30a082987b77f0cef64d95663965cb91f674",
                type: "saltwater",
                bait: "Águas-vivas, zooplâncton",
                seasons: ["summer", "autumn"],
                rarity: "rare",
                description: "O peixe-lua é o peixe ósseo mais pesado do mundo, podendo atingir mais de 2 toneladas. Tem formato circular único e é um nadador lento.",
                size: "Até 3.3m",
                weight: "Até 2.3t"
            },
            {
                id: 10,
                name: "Tucunaré",
                scientificName: "Cichla spp.",
                image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F_8Oz1SX8aGnw%2FS_gcwachfgI%2FAAAAAAAALpA%2FyqDDgaPU9NU%2Fw1200-h630-p-k-no-nu%2Ftucunar%25C3%25A9.jpg&f=1&nofb=1&ipt=24e6fac8fc4bb602d7534835d99366a0b2896da7a8f7e49b451347a3474ddaba",
                type: "freshwater",
                bait: "Iscas artificiais, peixes pequenos",
                seasons: ["spring", "summer", "autumn"],
                rarity: "common",
                description: "O tucunaré é um peixe esportivo muito popular no Brasil. Conhecido por sua agressividade ao atacar iscas, proporciona emocionantes pescarias.",
                size: "Até 1m",
                weight: "Até 10kg"
            },
            {
                id: 11,
                name: "Cavalo-Marinho",
                scientificName: "Hippocampus",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.QNAuKGM3M9muM7Fk3XWPUQHaE8%3Fpid%3DApi&f=1&ipt=22aeb49b1c7c2474a779cfef91103574e0948e9e4eb9a94638f306dc595fb0cf&ipo=images",
                type: "saltwater",
                bait: "Pequenos crustáceos",
                seasons: ["spring", "summer"],
                rarity: "uncommon",
                description: "O cavalo-marinho é um peixe único com cabeça similar a de cavalo e corpo segmentado. Os machos carregam os ovos fertilizados em uma bolsa especial.",
                size: "Até 30cm",
                weight: "Até 200g"
            },
            {
                id: 12,
                name: "Piraíba",
                scientificName: "Brachyplatystoma filamentosum",
                image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpescanapraia.com%2Fwp-content%2Fuploads%2F2014%2F08%2FPiraiba-Catfish-930x530_c.png&f=1&nofb=1&ipt=0f9e6c094c9412e76b18d66308037bd233f9942d65648ee4e8d083f28d6c4a4d",
                type: "freshwater",
                bait: "Peixes grandes, iscas artificiais",
                seasons: ["summer"],
                rarity: "legendary",
                description: "A piraíba é um dos maiores bagres de água doce do mundo, habitando as profundezas dos rios amazônicos. É uma captura lendária entre pescadores.",
                size: "Até 3.6m",
                weight: "Até 200kg"
            }
        ];

        // Elementos DOM
        const fishContainer = document.getElementById('fish-container');
        const searchInput = document.getElementById('search');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const modal = document.getElementById('fish-modal');
        const closeModal = document.getElementById('close-modal');
        const modalBody = document.getElementById('modal-body');

        // Filtros ativos
        let activeFilters = {
            type: 'all',
            rarity: 'all'
        };

        // Inicializar partículas
        function initParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 100; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                particlesContainer.appendChild(particle);
            }
        }

        // Renderizar cards de peixes
        function renderFishCards(fishArray) {
            fishContainer.innerHTML = '';
            
            fishArray.forEach(fish => {
                const card = document.createElement('div');
                card.classList.add('fish-card');
                card.setAttribute('data-type', fish.type);
                card.setAttribute('data-rarity', fish.rarity);
                
                card.innerHTML = `
                    <div class="fish-card-inner">
                        <div class="fish-card-front">
                            <div class="led-effect"></div>
                            <div class="card-shine"></div>
                            <img src="${fish.image}" alt="${fish.name}" class="fish-image">
                            <h3 class="fish-name">${fish.name}</h3>
                            <div class="fish-type ${fish.type}">${fish.type === 'freshwater' ? 'Água Doce' : 'Água Salgada'}</div>
                            <div class="fish-rarity ${fish.rarity}">${getRarityText(fish.rarity)}</div>
                        </div>
                        <div class="fish-card-back">
                            <div class="fish-details">
                                <h3 class="fish-name">${fish.name}</h3>
                                <div class="detail-item">
                                    <div class="detail-icon">
                                        <i class="fas fa-water"></i>
                                    </div>
                                    <div>${fish.type === 'freshwater' ? 'Água Doce' : 'Água Salgada'}</div>
                                </div>
                                <div class="detail-item">
                                    <div class="detail-icon">
                                        <i class="fas fa-fish"></i>
                                    </div>
                                    <div>${fish.bait}</div>
                                </div>
                                <div class="detail-item">
                                    <div class="detail-icon">
                                        <i class="fas fa-calendar-alt"></i>
                                    </div>
                                    <div>
                                        ${getSeasonsText(fish.seasons)}
                                        <div class="season-icons">
                                            ${fish.seasons.map(season => `<i class="fas fa-${getSeasonIcon(season)} season-icon ${season}"></i>`).join('')}
                                        </div>
                                    </div>
                                </div>
                                <div class="detail-item">
                                    <div class="detail-icon">
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div>${getRarityText(fish.rarity)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                card.addEventListener('click', () => openFishModal(fish));
                fishContainer.appendChild(card);
            });
        }

        // Obter texto da raridade
        function getRarityText(rarity) {
            const rarityMap = {
                'common': 'Comum',
                'uncommon': 'Incomum',
                'rare': 'Raro',
                'legendary': 'Lendário'
            };
            return rarityMap[rarity];
        }

        // Obter texto das estações
        function getSeasonsText(seasons) {
            const seasonMap = {
                'spring': 'Primavera',
                'summer': 'Verão',
                'autumn': 'Outono',
                'winter': 'Inverno'
            };
            return seasons.map(season => seasonMap[season]).join(', ');
        }

        // Obter ícone da estação
        function getSeasonIcon(season) {
            const iconMap = {
                'spring': 'leaf',
                'summer': 'sun',
                'autumn': 'tree',
                'winter': 'snowflake'
            };
            return iconMap[season];
        }

        // Abrir modal com detalhes do peixe
        function openFishModal(fish) {
            modalBody.innerHTML = `
                <h2 class="modal-title">${fish.name}</h2>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${fish.image}" alt="${fish.name}">
                    </div>
                    <div class="modal-details">
                        <div class="detail-row">
                            <div class="detail-label">
                                <i class="fas fa-signature"></i> Nome Científico:
                            </div>
                            <div class="detail-value">${fish.scientificName}</div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-label">
                                <i class="fas fa-water"></i> Tipo de Água:
                            </div>
                            <div class="detail-value">${fish.type === 'freshwater' ? 'Água Doce' : 'Água Salgada'}</div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-label">
                                <i class="fas fa-fish"></i> Isca:
                            </div>
                            <div class="detail-value">${fish.bait}</div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-label">
                                <i class="fas fa-calendar-alt"></i> Estações:
                            </div>
                            <div class="detail-value">
                                ${getSeasonsText(fish.seasons)}
                                <div class="season-icons">
                                    ${fish.seasons.map(season => `<i class="fas fa-${getSeasonIcon(season)} season-icon ${season}"></i>`).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-label">
                                <i class="fas fa-star"></i> Raridade:
                            </div>
                            <div class="detail-value">${getRarityText(fish.rarity)}</div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-label">
                                <i class="fas fa-ruler"></i> Tamanho:
                            </div>
                            <div class="detail-value">${fish.size}</div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-label">
                                <i class="fas fa-weight-hanging"></i> Peso:
                            </div>
                            <div class="detail-value">${fish.weight}</div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-label">
                                <i class="fas fa-info-circle"></i> Descrição:
                            </div>
                            <div class="detail-value">${fish.description}</div>
                        </div>
                    </div>
                </div>
            `;
            
            modal.style.display = 'flex';
        }

        // Filtragem de peixes
        function filterFish() {
            const searchTerm = searchInput.value.toLowerCase();
            
            let filteredFish = fishData.filter(fish => {
                const matchesSearch = fish.name.toLowerCase().includes(searchTerm) || 
                                     fish.scientificName.toLowerCase().includes(searchTerm);
                
                const matchesType = activeFilters.type === 'all' || fish.type === activeFilters.type;
                const matchesRarity = activeFilters.rarity === 'all' || fish.rarity === activeFilters.rarity;
                
                return matchesSearch && matchesType && matchesRarity;
            });
            
            renderFishCards(filteredFish);
        }

        // Inicializar eventos
        function initEvents() {
            searchInput.addEventListener('input', filterFish);
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const filter = button.getAttribute('data-filter');
                    
                    if (filter === 'all') {
                        activeFilters.type = 'all';
                        activeFilters.rarity = 'all';
                    } else if (['freshwater', 'saltwater'].includes(filter)) {
                        activeFilters.type = filter;
                    } else {
                        activeFilters.rarity = filter;
                    }
                    
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    
                    filterFish();
                });
            });
            
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }

        // Inicializar aplicação
        function init() {
            initParticles();
            renderFishCards(fishData);
            initEvents();
        }

        // Iniciar quando o documento estiver carregado
        document.addEventListener('DOMContentLoaded', init);
    