import './index.css'

const CardItem = props => {
  const {cardsList} = props
  console.log('this is', cardsList)
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`${className} card`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img className="img" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
