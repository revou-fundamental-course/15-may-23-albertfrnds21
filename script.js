function luas() {
    var s = document.getElementById('s').value ;
    
    var luas = s*s; 
    
    document.getElementById('output-luas').innerHTML = luas
    
    }
    
    function keliling() {
        var s = document.getElementById('s').value ;
        
        var keliling = s*s*s*s; 
        
        document.getElementById('output-keliling').innerHTML = keliling
        
        }
    
        function reset() {
            var s = document.getElementById('s').value = '';
            var s = document.getElementById('output-keliling').innerHTML = '';
            var s = document.getElementById('output-luas').innerHTML = '';
           }