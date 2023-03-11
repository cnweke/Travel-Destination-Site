import React from "react";

function Page1() {
  return (
    <div>
    <div>
<h3><b>Frontend Framework: React JS</b></h3>
<p>React js is a javascript component library for creating user interfaces for websites and applications.</p>
</div>
<div>
    <h3><b>Strengths:</b></h3>
 <ul>
     <li>Fast performance: React works very quickly for both small and large projects.</li>
     <li> Clean programming: You get easy-to-read and reusable code by creating viewers in react. </li>
     <li>Strong community: React has built a strong community such that it has a wide breadth of packages available for easy installation and use.</li>
     <li>Smooth learning curve: A smooth understanding of HTML and CSS is enough to carry over to react and facilitate a smooth learning curve.</li>
 </ul>
</div>
  
        <div>
        <h3><b>Who uses React:</b></h3>
        <ul>
            <li>Many Large or small projects use it. Up to 10,150 companies reportedly use react in their tech stacks including Uber, Netflix, Airbnb, Facebook and 97,452 developers on stack share say they use React. </li>
            <img src="/images/Image 2021-11-18 at 1.12 PM.JPG" alt="Tech Companies who use React"></img>
        </ul>
        </div>



<div>
        <h3><b>Popularity:</b></h3>
        <p>React js is one of the most popular Javascript frontend frameworks which ranks #2 in most popular according to StackOverflow surveys.</p>
        {/* <img src="/Users/emeka/Desktop/Ryerson 3rd Year/Fall semester/CPS530/Assignment/Term_project/Images/React popularity.JPEG" alt="React popularity"> */}


</div>

<div>
        <h3><b>Backend Framework: Node.js</b></h3>
        <p>Node.js is a server-side Javascript runtime environment that is used for traditional websites and back-end API services.</p>
</div>
<div>
        <h3><b>Strengths:</b></h3>
        <ul>
            <li>Modern Architecture and scalability: Node.js propels communication between API’s making it faster. It also enables apps to scale without decreasing performance or speed.</li>
            <li>Open-source community: Node.js is an open-source technology, so it is not only free but has the collaboration of highly creative and engaged developers from all around the world.</li>
            <li>Faster time to market: Node.js has 700,000 modules on NPM using already made modules instead of reinventing the wheel increases development time, productivity and contributes to faster release of products.</li>
        </ul>
        <h3><b>Weaknesses:</b></h3>
        <p>Node.js being single-threaded, which may be a bad choice for web servers that double as computational servers because heavy computation will block server responses.</p>
</div>

<div>
        <h3><b>Who uses Node.JS:</b></h3>
        <ul>
            <li>Websites that get heavy traffic, such as Paypal, Netflix, and Groupon.</li>
            <li>Popular tech giants such as Microsoft, Netflix, eBay and aliexpress among others use Node.js</li>
          {/* <img src="/Users/emeka/Desktop/Ryerson 3rd Year/Fall semester/CPS530/Assignment/Term_project/Images/Companies Using Node.js.png">  */}
          <img src="/images/Companies Using Node.js.png" alt="Companies using Node.js"/>
        </ul>
        
</div>
<div>
        <h3><b>Popularity:</b></h3>
        <ul>
            <li>As of early 2020, more than 50% of developers use Node.js in their projects.</li>
            <li>More than 28,000 websites are built using Node.js.</li>
            <li>On Github, a provider of internet hosting for software development and version control, Node.js has 75.9k stars, 19k forks, and 3k watchers.</li>
            <img src="/images/www.statista.com.jpg" alt="Node.js popularity"/>
            {/* <img src="/Users/emeka/Desktop/Ryerson 3rd Year/Fall semester/CPS530/Assignment/Term_project/Images/www.statista.com.jpg" alt="node js users"> */}
        </ul>
</div>
</div>
  );
}

export default Page1;