import './index.css'


const HomePage = ()=>{
    return(
     <div>
     
      <div className="navBar">
      <div>
         <img src="/images/logokolezza-removebg-preview.png" alt="logo" className='logo'/>
         </div>
         <div id='nav'>
            <a>Video</a>
            <a>Blog</a>
            <a>Podcast</a>
            <a>Resume Portifolio</a>
            </div>
      </div>
      <div className="body">
        <div id="helloSection">
          <h1>Hell<span id='o'>o</span><br></br>Pe<span id='o'>o</span>ple</h1>
          <h1></h1>
          <b>__________________________________</b>
          <p>Welcome to Kolezza group's website</p>
          <p>We believe that with Tech much more light was thrown onto the world with problem solving.</p>
          <button className='button'>Get Started</button>
        </div>
        <img src="/images/brain-lightbulb.avif" className='img'/>
      </div>

     </div>
    )
}
export default HomePage;