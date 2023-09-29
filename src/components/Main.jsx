import { useEffect, useState } from "react"

const Main = () => {
  const [dado, setDado] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then(res => res.json())
      .then(data => setDado(data))
  }, [])

  return (
    <main className=''>
      <h1>PRAIA</h1>
      <div className="division"></div>
      <div className="container-item">
        {dado.map(data => (
          <div className="item" key={data._id}>
            <img src={data.image} alt={data.name} />
            <div className="item-content">
                <div className="item-price">
                  <p>
                    <strong>{data.name}</strong>
                    <br/>
                      R${data.price},99
                      {/* <p>Quantidade: {data.quantity}</p> */}  
                  </p>
                </div>
                <div className="button">
                <button className="card-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                </button>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </main>
  )
}

export default Main