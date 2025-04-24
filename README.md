# 💳 PagBank Card Encryption Demo

This project provides a simple and responsive web interface for testing credit card encryption using the [PagBank JavaScript SDK](https://developer.pagbank.com.br/reference/sdks#javascript). It is ideal for developers working with PagBank recurring payment solutions.

## 🚀 Try It Online

Access the live encryption test page here:

👉 **[https://jamacio.github.io/pagbank-encrypt-demo/](https://jamacio.github.io/pagbank-encrypt-demo/)**

## 🔐 Features

- Paste your **public key** from the PagBank API
- Use real sandbox **test card numbers** from PagBank
- Encrypt card data in real time using PagBank's SDK
- Copy the encrypted hash to clipboard
- Dark mode support

## 🧪 How to Use

1. Generate your public key:

   ```bash
   curl -X PUT https://sandbox.api.assinaturas.pagseguro.com/public-keys \
   -H "Authorization: Bearer YOUR_TOKEN"
   ```

2. Retrieve your public key:

   ```bash
   curl -X GET https://sandbox.api.assinaturas.pagseguro.com/public-keys \
   -H "Authorization: Bearer YOUR_TOKEN"
   ```

3. Copy the `publicKey` from the JSON response.

4. Paste it into the **Public Key** field on the [demo page](https://jamacio.github.io/pagbank-encrypt-demo/).

5. Select or fill in the test card data, then click **Encrypt** to generate the encrypted value.

6. Use the **Copy** button to copy the encrypted result.

## 📎 References

- [PagBank Docs – Create Public Key](https://developer.pagbank.com.br/reference/criar-chave-publica-pagamento-recorrente)
- [PagBank Docs – Test Cards](https://developer.pagbank.com.br/docs/cartoes-de-teste)

---

Made with ❤️ by [@jamacio](https://github.com/jamacio)
