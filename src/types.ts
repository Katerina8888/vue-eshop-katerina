export interface Product {
  id: number
  name: string
  price: number
  picture: string
  //toto nevím, jestli je správný přístup mít definované zde,
  // protože mi nepřichází z dat z .json, ale vytvářím se mi
  // až následně v košíku
  quantity?: number | undefined
}

export interface Order {
  id: number
  products: Product[]
}
