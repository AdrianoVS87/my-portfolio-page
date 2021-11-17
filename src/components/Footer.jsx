import { AiOutlineMail, AiFillGithub, AiOutlineLinkedin} from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer id="footer" className="d-flex flex-wrap justify-content-center">
    <div className="container">
      <p><a href="mailto:adrianovs.info@gmail.com" id="button" className="btn  btn-dark">E-mail <AiOutlineMail/></a>
      <a href="https://www.github.com/AdrianoVS87" id="button" className="btn btn-dark">GitHub <AiFillGithub/></a>
      <a href="https://www.linkedin.com/in/adriano-viera-dos-santos-b5825b163/?originalSubdomain=br" id="button" className="btn btn-dark">LinkedIn <AiOutlineLinkedin/></a>
      </p>
      <h5> AVS Corp. - Todos os direitos reservados 1987 - 2021.</h5>
    </div>
  </footer>
  )
}
