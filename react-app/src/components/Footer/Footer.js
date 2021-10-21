import './Footer.css'

function Footer() {
    return (
      <div className="footer-container">
        <a href="https://github.com/Ckessler30" target="_blank">
          <div
            className="footer-logos"
            style={{
              backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFQQUnNGFvzOpaV2bTVmfgKdbdPJhM2JhmA&usqp=CAU")`,
            }}
          ></div>
        </a>
        <a href="https://www.linkedin.com/in/chase-kessler-97a135221/" target="_blank">
            <div
            className="footer-logos"
            style={{
                backgroundImage: `url("https://diversity.ncsu.edu/wp-content/uploads/2020/09/linkedin.png")`,
            }}
            ></div>
        </a>
      </div>
    );
}

export default Footer
