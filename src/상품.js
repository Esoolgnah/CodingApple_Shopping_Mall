function 상품(props) {
  return (
    <div className='col-md-4' key={props.id}>
      <img src={props.image} width='100%' />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p>{props.price}</p>
    </div>
  );
}
export default 상품;
