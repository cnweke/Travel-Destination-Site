import React from "react";
import './page2.css';

function Page2() {
  return (
    <body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<div>
<h3><b>Installing React framework for macOS:</b></h3>
<p>Step 1:  Go to <a href="https://nodejs.org/en/">nodejs.org</a>, install the latest pkg for the system highlighted in red </p>
 <p>Step 2: Complete installation of node.js pkg on  system</p>
 <p>Step 3: Open terminal, type the following line-by-line</p>
 <div> 
        <pre>
                <code>
                        node -v
                        npm -v
                        npm install -g create-react-app
                </code>
        </pre>
    </div>
 <p>Step 4: After installation, create your first react app by typing in terminal:</p>
    <div> 
        <pre>
                <code>
                        npx create-react-app my-app
                </code>
        </pre>
    </div>
<p>Upon successful installation, you should see “Happy Hacking” at the bottom of the terminal.</p>
<p>Congratulations, you have created your first react app!</p>
</div>

<div>
    <h3><b>Installing Node.js framework for MacOS:</b></h3>
    <p>Follow steps 1 and 2 of react tutorial.</p>
</div>
</body>
  );
}

export default Page2;