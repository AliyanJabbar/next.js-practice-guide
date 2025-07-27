// here marketing folder is a route group as it contains about and blog routes. Although it does not effect our route because marketing is written inside a "()" means we don't have to write http://localhost:3000/marketing/about. Instead we can simply write http://localhost:3000/about

const About = ()=>{
    
    return (
        <div>
            <h3>About Page</h3>
        </div>
    )

}

export default About