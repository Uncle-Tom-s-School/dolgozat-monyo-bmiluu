export type Beer = {
    image:string,
    name:string,
    abv:string,
    volume:string,
    price:number,
    available:boolean
  }

const BeerCard = (props:Beer) => {
  return (
    <div className='beerCard'>
      <img src={props.image} alt="" />
      <h4>{props.name} {props.abv} {props.volume}</h4>
      <p>{props.price}Ft</p>
      <strong className={props.available ? "available" : "notAvailable"}>{props.available ? "Raktáron" : "Nincs raktáron"}</strong>
    </div>
  )
}

export default BeerCard