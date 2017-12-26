import qs from 'qs'
import NodeRSA from 'node-rsa'

export default async ({
  encryption_key,
  card_number,
  card_holder_name,
  card_expiration_date,
  card_cvv
}) => {
  const { public_key: publicKey, id } = await (fetch(`https://api.pagar.me/1/transactions/card_hash_key?encryption_key=${encryption_key}`).then(r => r.json()))

  const cardString = qs.stringify({
    card_number,
    card_holder_name,
    card_expiration_date,
    card_cvv
  })

  const key = new NodeRSA(publicKey, {
    encryptionScheme: 'pkcs1'
  })
  const encrypted = key.encrypt(cardString, 'base64')
  const cardHash = `${id}_${encrypted}`
  return cardHash
}
