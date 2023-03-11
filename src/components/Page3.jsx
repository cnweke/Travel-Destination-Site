import React from "react";
import './page3.css';

function Page3() {
  return (
    <body>
       
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <div>
           <div>
                <h3><b>Tutorial on how to create great looking pages with react:</b></h3>
            <ul>
                <li>In page 2 we learnt how to successfully install Node.js and create React application using Node.js</li>
                <li> upon react application creation we can start the app, it will open the React application we created in our browser window with port address 3000 so: https://localhost:3000 </li>
            </ul>
           </div>

           <div>
                <h3><b>Install React-Router-Dom</b></h3>
                <p> We built a react web application with multiple routes that require package react-router-dom</p>
                <ul>
                    <li>
                        open another terminal tab and run command below:
                        <pre>
                                <code>
                                        npm i react-router-dom
                                </code>
                        </pre>
                    </li>
                    <li>This will install latest version react-router-dom version 6 in our app.</li>
                    <li>Open preferred code editor and open project directory</li>
                </ul>
           </div>

           <div> 
                <h3><b>Use Bootstrap CDN</b></h3>
                <p>In project we are to use Bootstrap CSS file to set up view, we can add in our react app with CDN.</p>
                <ul>
                    <li>Open index.html located in public directory and add between head tag 

                            <pre>
                                    <code>
                                            < link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/ >
                                    </code>
                            </pre>
                    </li>
                </ul>
           </div>
        
           <div> 
                <h3><b>Building components</b></h3> 
                <p>create "components" directory inside src so all components would be coded inside.</p>
                <p>What components you might ask?</p>
                <p>In the project we build 8 components:</p>
                <ul>
                    <li>navigation and Footer.jsx which will be common for all pages</li>
                    <li>Pages 1,2,3,4,5,6 which are the routes</li>
                </ul>
           </div>

           <div> 
                <h3><b>Navigation.jsx</b></h3> 
                <p>This is the topmost bar on our page that deals with navigation betweenpages. Clicking each link routes to the path described</p>
                <ul>
                    <li>We use &lt;NavLink&gt; in .jsx page to route to pages described e.g:</li>
                    <pre>
                            <code>
                                    &lt;NavLink to="/"&gt;Page 1&lt;/NavLink&gt; - To route to starting page (Page 1) which is http://localhost:3000

                                    &lt;NavLink to="/page2"&gt; 2&lt;/NavLink&gt; - To route to page 2(Page 2) which is http://localhost:3000/Page2
                            </code>
                    </pre>
                </ul>

                <h3><b>Page1.jsx</b></h3> 
                <ul>
                    <li>
                        Create HTML and internal CSS for page in between .jsx page function.
                        <pre>
                                <code>
                                        import React from “react”;

                                        function Home() {
                                        // `return (`
                                        //       `input html and inline css code here`
                                        //      `);`
                                        }
                                        Export default Home;     
                                </code>
                        </pre>
                    </li>
                </ul>
           </div>
           
           <h3><b>Repeat Page1.jsx process for pages 2 through 6</b></h3>
        <p></p>
        <p></p>
        <p></p>

           <div> 
                <h3><b>Export all components from index.js file</b></h3>
                <img src="/images/Export comp.png" alt="Exported components" width="500" height="200"/>
                <p></p>
                <p></p>
                <p></p>
                <h3><b>Declare routes in index.js</b></h3>  
                <img src="/images/Declare routes.JPG" alt="Declare routes" width="500" height="700"/>
                <p>Congrats! you've finished your react application and you're looking at what it's supposed to look like right now!</p>
           </div>
          
           
    </div>
</body>
  );
}

export default Page3;