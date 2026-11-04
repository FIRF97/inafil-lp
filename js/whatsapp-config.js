/**
 * CONFIGURAÇÃO CENTRALIZADA DO WHATSAPP — INAFIL
 * ==============================================
 * 
 * Para alterar o número de WhatsApp da loja:
 * 1. Altere a propriedade 'phoneNumber' para o número pretendido (apenas dígitos).
 * 2. O indicativo de Angola padrão é '244' (configurável em 'countryCode').
 * 3. O formato final será: https://wa.me/244XXXXXXXXX?text=MENSAGEM
 */

const WhatsAppConfig = {
    // Indicativo internacional padrão (Angola: 244)
    countryCode: "244",

    // Número de telefone do WhatsApp da Inafil fornecido pelo cliente
    // Formato sem espaços: "950590135" -> Link final: https://wa.me/244950590135
    phoneNumber: "950590135",

    // Nome da loja para as mensagens
    storeName: "Inafil - Loja Dentária",

    /**
     * Retorna o número completo sanitizado (apenas dígitos)
     * Formato internacional sem '+' ou espaços: ex. 244923000000
     */
    getFullNumber() {
        const cleanCountry = this.countryCode.replace(/\D/g, "");
        const cleanPhone = this.phoneNumber.replace(/\D/g, "");
        return `${cleanCountry}${cleanPhone}`;
    },

    /**
     * Retorna o número formatado para exibição visual amigável
     * Exemplo: +244 923 000 000
     */
    getFormattedDisplayNumber() {
        const clean = this.phoneNumber.replace(/\D/g, "");
        if (clean.length === 9) {
            return `+${this.countryCode} ${clean.slice(0, 3)} ${clean.slice(3, 6)} ${clean.slice(6)}`;
        }
        return `+${this.countryCode} ${this.phoneNumber}`;
    },

    /**
     * Modelos de mensagens pré-configuradas
     */
    templates: {
        // Mensagem de contacto geral
        general: () => {
            return "Olá! Gostaria de obter informações sobre os materiais e equipamentos odontológicos disponíveis na Inafil.";
        },

        // Mensagem de encomenda / cotação de um produto específico
        productOrder: (product) => {
            return `Olá! Tenho interesse no material odontológico "${product.name}" [Ref: ${product.id}]. Podem informar o valor atual, a disponibilidade e as condições de entrega para a minha clínica?`;
        },

        // Mensagem de pedido de informação sobre um produto
        productInquiry: (product) => {
            return `Olá! Gostaria de obter mais informações técnicas e prazos de entrega sobre o produto "${product.name}" [Ref: ${product.id}].`;
        },

        // Mensagem de pedido de orçamento geral ou para clínica
        quoteRequest: (details = {}) => {
            const clinicName = details.clinicName ? ` para a clínica ${details.clinicName}` : "";
            const location = details.city ? ` em ${details.city}` : "";
            const items = details.items ? `\nItens pretendidos: ${details.items}` : "";
            
            return `Olá! Gostaria de solicitar um orçamento de materiais odontológicos${clinicName}${location}.${items}\nAguardo o vosso contacto. Obrigado!`;
        },

        // Mensagem de apoio consultor especializado
        consultant: () => {
            return "Olá! Gostaria de falar com um consultor da Inafil para receber apoio na escolha dos materiais adequados para a minha clínica dentária.";
        }
    },

    /**
     * Gera a URL completa oficial do WhatsApp com a mensagem codificada
     * @param {'general' | 'productOrder' | 'productInquiry' | 'quoteRequest' | 'consultant'} type 
     * @param {Object} data 
     * @returns {string} URL no formato https://wa.me/244XXXXXXXXX?text=...
     */
    generateUrl(type = 'general', data = null) {
        let text = "";
        
        switch (type) {
            case 'productOrder':
                text = this.templates.productOrder(data);
                break;
            case 'productInquiry':
                text = this.templates.productInquiry(data);
                break;
            case 'quoteRequest':
                text = this.templates.quoteRequest(data || {});
                break;
            case 'consultant':
                text = this.templates.consultant();
                break;
            case 'general':
            default:
                text = this.templates.general();
                break;
        }

        const fullNumber = this.getFullNumber();
        const encodedText = encodeURIComponent(text);
        return `https://wa.me/${fullNumber}?text=${encodedText}`;
    },

    /**
     * Abre o WhatsApp numa nova aba/janela ou app nativa
     * @param {'general' | 'productOrder' | 'productInquiry' | 'quoteRequest' | 'consultant'} type 
     * @param {Object} data 
     */
    open(type = 'general', data = null) {
        const url = this.generateUrl(type, data);
        window.open(url, '_blank', 'noopener,noreferrer');
    }
};

// Expor globalmente para uso na aplicação
window.WhatsAppConfig = WhatsAppConfig;
