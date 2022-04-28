export default {
	css: `body{
        background:#36404a;
        width:100%;
        height:100%;
    }
    .blend{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
    }
    h3{
        color:#fff;
    }
    p{
        color:rgba(255,255,255,0.75);
    }`,
	html: `<div id="root"></div>`,
	javascript: `function App() {
        const imgs = 'https://media0.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif';
        console.log('Hello insider');
        console.info('github.com/mertcanaltin');

        return (
            <div className="blend">
                <h3>Editor</h3>
                <img src={imgs} alt="BigCo Inc. logo"/>
                <p>a simple code editor</p>
            </div>
        );
    }
    ReactDOM.render(<App />, document.getElementById("root"));
`,
};
