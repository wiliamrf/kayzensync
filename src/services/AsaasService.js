const API_KEY = "6f60536b-7729-439c-b711-ad5f612a964f";
const BASE_URL = "https://sandbox.asaas.com/api/v3";
const DEFAULT_CITY_ID = "3543402"; // Ribeirão Preto

const headers = {
  "Content-Type": "application/json",
  "access_token": API_KEY,
};

const AsaasService = {
  async criarCliente({ nome, email, cpfCnpj, celular }) {
    const body = {
      name: nome,
      email,
      cpfCnpj,
      phone: celular,
      city: DEFAULT_CITY_ID,
    };

    const response = await fetch(`${BASE_URL}/customers`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.errors?.[0]?.description || "Erro ao criar cliente no Asaas");
    }

    const data = await response.json();
    return data.id; // Retorna o customerId
  },

  async verificarPagamentos(customerId) {
    const res = await fetch(`${BASE_URL}/payments?customer=${customerId}`, {
      headers,
    });
    const json = await res.json();
    return json.data || [];
  },

  async criarCobranca({ customerId, valor, vencimento, descricao }) {
    const body = {
      customer: customerId,
      billingType: "UNDEFINED",
      value: valor,
      dueDate: vencimento,
      description: descricao,
    };

    const response = await fetch(`${BASE_URL}/payments`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.errors?.[0]?.description || "Erro ao criar cobrança no Asaas");
    }

    const data = await response.json();
    return data;
  },

  listarPlanos() {
    return [
      { id: "plano30", nome: "Mensal (30 dias)", dias: 30, valor: 49.9 },
      { id: "plano60", nome: "Bimestral (60 dias)", dias: 60, valor: 89.9 },
      { id: "plano90", nome: "Trimestral (90 dias)", dias: 90, valor: 129.9 },
      { id: "planoAnual", nome: "Anual (365 dias)", dias: 365, valor: 399.9 },
    ];
  },
};

export default AsaasService;
