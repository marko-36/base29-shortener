const c=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '2', '3', '4', '5', '6', '7', '8', '9']; //Characters for encoding

function to29(i){
    var sLen = Math.floor(Math.log(i)/Math.log(c.length)) +1;
    var s = '';
    for(ex=sLen-1; ex>-1; --ex){
        s += c[Math.floor(i / Math.pow(c.length,ex))];
        i = [i % Math.pow(c.length,ex)];
    }
    return s;
}

function from29(s){
    var i = 0;
    for (ex=0; ex<s.length; ++ex){
        i += c.indexOf(s.substring(ex,ex+1))*Math.pow(c.length,s.length-1-ex);
    }
    return i;
}