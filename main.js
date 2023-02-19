marked.setOptions({
    breaks: true
});

const renderer = new marked.Renderer();

function App(){
    const [text, setText] = React.useState("# Welcome to my React Markdown Previewer!\n _______\n ## This is a sub-heading... \n _______\n ### And here's some other cool stuff: \n Heres some code, `<div></div>`, between 2 backticks. \n ``` \n // this is multi-line code: \n\n function anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```'){\nreturn multiLineCode;\n}}\n```\n\n You can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](http://www.donothingfor2minutes.com/), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\n Wild Header | Crazy Header | Another Header? \n ------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![The floofy-est cows](https://kilts-n-stuff.com/wp-content/uploads/AdobeStock_336644580.jpeg#cow)");

    return(
        <div className="text-center px-4">
            <h1 className="p-4">My Markdown Previewer</h1>
            <h3>Editor</h3>
            <textarea 
            name="text" 
            id="editor" 
            rows="10" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="textarea" 
            placeholder="Enter a markdown..."
            > 
            </textarea>
            <h3 className="mt-3">Previewer</h3>
            <Preview markdown={text} />
        </div>
         
    );
}

function Preview({markdown}) {
    return(
        <div
        dangerouslySetInnerHTML={{
            __html: marked(markdown, { renderer: renderer }),
        }}
    id="preview"
        >
        </div>
    );
    
}

ReactDOM.render(<App/>, document.getElementById("root"))

