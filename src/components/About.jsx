import React from "react";

export const About = () => (
    <div style={{marginLeft: '2vh', marginRight: '2vh', fontSize: '70%', paddingBottom: '10px'}}>
        <p style={{color: 'red'}}>&nbsp;&nbsp;&nbsp;&nbsp;Unfortunately, if you run this application from a non-local server, most of the functionality will not work. 
        This is due to the policy of the third-party API service used here.</p>
        <br />&nbsp;&nbsp;&nbsp;&nbsp;To view the installation of the application, follow the link to GitHub:
            <br /><a style={{fontSize: '70%'}} href="https://github.com/HelloBro89/news-site-react-redux-API">https://github.com/HelloBro89/news-site-react-redux-API</a>
        <p style={{marginBottom: '0px'}}>&nbsp;&nbsp;&nbsp;&nbsp;This application is used for keyword searches. In the SEARCH field, enter a word or several keywords and click SEARCH. 
            You can also sort the found material by relevance, popularity and publication date.
         &nbsp;&nbsp;&nbsp;&nbsp;Below you can enter the page number of the result in the search output.</p>
    </div>
)