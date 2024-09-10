import React from 'react';

function TopicsPage() {
    return (
        <>
            <h2>Topics</h2>
            <nav className="local">
                <a href="#servers">Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#images">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#stylesheets">Cascading Stylesheets</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javascript">JavaScript</a>
            </nav>
            <article id="servers">
                <h3>Web Servers</h3>
                <p>
                    A designated home page is the initial landing page, or <strong>index</strong> page, of a website,
                    given that the <strong>URL</strong> does not contain any <strong>routing</strong> to another specific page on the website. URLs typically start with a <strong>protocol</strong>, such as <strong>HTTP</strong> or <strong>HTTPS</strong>.
                    It is common for an <strong>index.html</strong> file to be the home page of a website, ensuring that web <strong>servers</strong> can locate the home page. In web development, <strong>HTML</strong>
                    provides the content and structure, <strong>CSS</strong> provides the styling, structure, and content, and <strong>JavaScript</strong>
                    adds asynchronous events to add dynamic attributes such as clickable buttons.
                </p>

                <p>
                    In the browser inspector's Network tab, we can see the resources, or files, that are being requested to be displayed. There are some differences when inspecting from the Oregon state file storage compared to inspecting from my local machine.
                    One difference is the name of the <strong>request URL</strong>; in the web server, it is requesting from "https://web.engr.oregonstate.edu/~ilejaym/", but on my local machine it is requesting from "file:///Volumes/ilejaym/public_html/index.html". Both
                    were successfully retrieved with status codes of 200. Also, the web server has a <strong>remote address (IP)</strong> listed, while my local machine doesn't. The console lists the <strong>GET errors</strong> differently, too. On the web server, it logs a 404 error,
                    meaning the server could not find the requested files. Locally, it just says "ERR_FILE_NOT_FOUND". This is because 404 indicates a server is being used, which there is.
                </p>

                <p>
                    The favicon.ico file has a status of 200 because it is provided, by default, from the server. Therefore, it was found, and returned a status of 200. However, the main.css and main.js files were not found. They are <strong>referenced</strong>
                    in the code via "href=", but I did not create those files, hence the 404 error.
                </p>

                <p>
                    The <strong>scheme</strong> of the web server URL is "https", which means Hypertext Transfer Protocol Secure, which is an encrypted connection.
                    The <strong>subdomain</strong> is "web.engr", which is a section of the main website. The <strong>host domain</strong> is "oregonstate.edu", and this is the
                    main address of the website. The section "/~ilejaym/a1-ilejaym" refers to a <strong>path</strong> to a page, or in this case, my files.
                </p>
            </article>
            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>
                    Frontend design involves crafting an optimal user experience. This includes the visual design of the page, 
                    the <strong>graphical user interface (GUI)</strong>, and the interactive elements. Good visual 
                    design includes a <strong>consistent color palette, appropriate font and typography choices</strong>, and a <strong>
                        cohesive approach to photography, icons, and illustrations</strong>, as well as proper navigation systems.
                </p>
                <dl>
                    <dt>Effective</dt>
                    <dd>Ensures that user can achieve their objectives in a reasonable manner.</dd>
                    <dt>Efficient</dt>
                    <dd>This means that users can perform tasks with a minimal amount of effort.</dd>
                    <dt>Easy to navigate</dt>
                    <dd>This means that users, especially those that have never used the program before, will immediately understand how to
                        locate their goal by searching or clicking.
                    </dd>
                    <dt>Error-free</dt>
                    <dd>This means that the program prevents issues that affect the accessibility and availability of the user experience.</dd>
                    <dt>Enjoyable</dt>
                    <dd>This means that the program creates an engaging experience tailored to the audience's specific needs and preferences.</dd>
                </dl>
                <p>
                    The <strong>header</strong> tag defines the introductory section or heading of a page, often containing navigation links or introductory content. 
                    The <strong>nav</strong> tag is used to define a block of navigation links. The <strong>section</strong>
                    tag represents a standalone section of content within a page, 
                    typically with its own heading. The <strong>article</strong>
                    tag is used to enclose a self-contained piece of content, such as a blog post or news article.
                    The <strong>main</strong> tag denotes the primary block that holds content, such as stories, galleries, tutorials, etc.
                    The <strong>footer</strong> tag resides below the main tag and typically holds legal information, contact information, and links to critical pages.
                    <ol>
                        <li>To link to <strong>external</strong> websites or resources, anchors use the <strong>href</strong> attribute with an absolute URL.</li>
                        <li>To link to specific <strong>sections</strong> within the same HTML document, anchors use the <strong>href</strong> attribute with a hashtag followed by the <strong>ID</strong> of the target element.</li>
                        <li>To link from one page to another within the same website, anchors use the <strong>href</strong> attribute with a <strong>relative URL</strong>.</li>
                    </ol>
                </p>
            </article> 
            <article id="images">
                <h3>Optimizing Images</h3>
                <p>
                    There are six major image optimization specifications. First is the descriptive <strong>file name</strong>, which includes the who, what, 
                    where, when, and why of the image. Second is the <strong>file size</strong>, which should be reduced to as small as possible for the fastest load time; images
                    can be <strong>compressed</strong> resulting in <strong>lossy</strong> (results in pixelation) or <strong>lossless</strong> (does not degrade quality) compression. Third is <strong>dimensions</strong>,
                    which should be cropped to reduce the images to fit the allotted space within the web page. Fourth is <strong>file format</strong>; photos are usually JPG, line-art is usually GIF and sometimes PNG.
                    Fifth is <strong>reduced resolution</strong>, as providing multiple image sizes for each resolution is becoming a standard. Last is <strong>color mode</strong>, as RGB is used for PNG, JPG, SVG, and WebP, and Indexed
                    is used for GIF (and sometimes PNG).
                    <br />
                    The file formats most suitable for <strong>photos</strong> are usually JPG, WebP, and PNG files. The file types most suitable for <strong>line-art</strong> are GIF and PNG files (if the compression is done well).
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    Browsers and devices use <strong>favicons</strong> to visually represent a website or app. They are seen in areas such as <strong>browser tabs</strong>, bookmarks, home screens, and search engine results. Favicons are small icons saved in file formats like <strong>PNG, ICO, and SVG</strong>, optimized for different sizes and devices. They are typically specified in the HTML head section using <strong>head tags</strong> to properly display them on different devices.
                </p>
            </article>
            <article id="stylesheets">
                <h3>Cascading Stylesheets</h3>
                <p>
                    Incorporating stylesheets allows us to give <strong>custom styling</strong> to the content and structure of the HTML components. This ultimately improves the <strong>user experience</strong> by enhancing the <strong>usability</strong>, <strong>readability</strong>,
                    <strong>legibility</strong>, and adherence to the product requirements. Separating content from design also makes it easier for developers to read and digest code, as the content can be modified without impacting the presentation.
                </p>
            </article>
            <article id="forms">
                <h3>Forms</h3>
                <p>
                    Forms provide a mechanism for users to send data to the server for processing or feedback. The <strong>form tag</strong> encompasses the entire form and defines attributes such as <strong>method</strong> and <strong>action</strong> to specify how and where the data should be sent. Each input field within the form is defined using <strong>input</strong>, <strong>textarea</strong>, or <strong>select</strong> elements, with each field's <strong>name</strong> and <strong>value</strong> attributes specifying the data to be captured. The <strong>label</strong> tag associates a text description with an input field, improving accessibility and usability.
                </p>
            </article>
            <article id="express">
                <h3>Express</h3>
                <p>
                    Express is a web application framework for Node.js designed to build web applications and APIs. It provides robust features for routing, middleware, and handling HTTP requests and responses. Using Express, developers can manage server-side logic, handle requests and responses, and implement RESTful APIs with ease.
                </p>
            </article>
            <article id="javascript">
                <h3>JavaScript</h3>
                <p>
                    JavaScript is a versatile programming language used for creating dynamic and interactive web content. It is integral to frontend development for adding functionality to websites, manipulating the DOM, and handling events. JavaScript can also be used on the server side with environments like Node.js. Its event-driven, non-blocking I/O model makes it suitable for building scalable and responsive applications.
                </p>
            </article>
        </>
    );
}

export default TopicsPage;
