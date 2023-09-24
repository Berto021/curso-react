

const Container = ({children,mValue}) => {
  return (
    <div>
        <h1>Esse é o título do container</h1>
        <p>{children}</p>
        <p>{mValue}</p>
    </div>
  )
}

export default Container