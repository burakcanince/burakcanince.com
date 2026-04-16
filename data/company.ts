export type Company = {
  id: string
  name: string
  link?: string
}

export const COMPANIES: Company[] = [
  {
    name: 'Featuremind',
    id: 'company1',
    link: 'https://featuremind.com'
  },
  {
    name: 'Lacivert Bilişim',
    id: 'company2',
    link: 'https://lacivert.net/'
  },
  {
    name: 'Akıllı Ticaret Yazılım',
    id: 'company3',
    link: 'https://akilliticaret.com/'
  },
  {
    name: 'Karşıyaka Yapım',
    id: 'company5',
    link: 'https://www.facebook.com/karsiyakayapim/'
  },
  {
    name: 'Bilset Bilgisayar',
    id: 'company7',
    link: 'https://www.bilset.com.tr/'
  },
  {
    name: 'Bursa Büyükşehir Belediyesi',
    id: 'company6',
  },
  {
    name: 'TMT Bilişim',
    id: 'company4',
  }
]
