button.addEventListener('click',function(){
    $.ajax({
        url:'http://frank.com:8889/xxx',
        method:'POST',
        body:'xxxx'
    }).then(
        (resolve)=>{console.log(resolve)},
        (reject)=>{console.log(reject.status)})
})
window.jQuery = function(){}
window.$ = window.jQuery
window.jQuery.ajax = function({url,method,body}){
    return new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
                    console.log(xhr.responseText)
                    resolve.call(undefined,xhr)
                }else if(xhr.status >= 400){
                    reject.call(undefined,xhr)
                }
            }
        }
        console.log(xhr)
        xhr.open(method,url)
        xhr.send(body)
    })
}

