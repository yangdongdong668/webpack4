document.addEventListener('click',()=>{
    import(/*webpackPrefetch: true, webpackChunkName: 'click' */ './click.js').then(({default:func})=>{
        func();
    })
});