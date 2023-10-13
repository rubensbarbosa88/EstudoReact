import './App.css'

function App() {

  return (
    <>
      <h2> O conteudo desta seção é bem simples.</h2>
      <p> 
        Primeiro sobre o css global que esta no index.css, la tem as classes de dfinições do projeto <br />
        Como por exemplo a mudança de cor do bakground deste projeto.
      </p>
      <p> 
        Depois tem os arquivos .css que são importados nos componentes, dessa maneira: <br />
        <pre>import 'arquivo.css'</pre> <br />
        Assim todas as tags com determinada classe irão pegar os estilos definidos, mas pode vazar css para outros comonentes filhos.
      </p>
      <p> 
        Por ultimos temos os css modules, que são classes em um arquivo css, porem importados de forma diferente: <br />
        <pre> import styles from 'arquivo.module.css'</pre>
        Assim cada classe vira um objeto unico para aquela tag, se tornando um css scoped: <br />
        <pre>{'<h1 className={styles.algumaClasse}> Hello, world!</h1>'}</pre>
      </p>
    </>
  )
}

export default App
