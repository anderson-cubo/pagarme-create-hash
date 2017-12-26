```
import generate from 'pagarme-create-hash'
const hash = await generate({
  encryption_key: 'EK',
  card_number: '00000000',
  card_holder_name: 'John Travolta',
  card_expiration_date: 1210,
  card_cvv: 123
})
```