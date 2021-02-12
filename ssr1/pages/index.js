import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>APP com NEXT.JS</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" / >
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
      </Head>

      <body>
          <div>
              <div className="container-fluid">
              <h1>COSMOELETRO</h1>
              </div>

              <center><h2>fale conosco</h2></center>
              <hr/>
              
              <table border = "" width="100%" cellPadding="20%">
                  <thead>
                      <td width="50%" align="center">
                      <img src= "./imagens/whatsappico1.png"width="40px" />
                      (11) 99999-9999
                      </td>

                      <td width="50%" align="center">
                      <img src="./imagens/ico email.png" width="40px" />
                        cosmoeletro.com
                      </td>
                  </thead>

              </table>

              <form>
                  <div className="form-group">
                      <label forhtml="nome">Seu nome</label>
                      <input type="text" name="nome" className="form-control" id="nome" aria-describedby="emailHelp"
                      placeholder="Digite seu nome" />
                  </div>
                  <div className="form-group">
                      <label forhtml="email">Email</label>
                      <input type="text" name="email" className="form-control" id="email" aria-describedby="emailHelp"
                      placeholder="Digite seu email" />
                  </div>
                  <div className="form-group">
                      <label forhtml="mensagem">Digite sua mensagem</label>
                      <textarea className="form-control"  id="exampleFormControlTextarea1" rows="3" name="mensagem" className="form-control" id="email" aria-describedby="emailHelp"
                      placeholder="Digite sua mensagem" />
                  </div>
                  <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
              
          </div>
      </body>

        </div>
  
  )
}
