
function ViewPdf() {

    return ( 
        <div className="MyComponent">
            <div className="header">React sample</div>
            <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
        </div>
    );
}

export default ViewPdf;