function three_matrix(){
    var n=3;
    var m=3;
    var x=3;
    var y=3;
    //1'st Array
    var two_d_array = new Array(n);
    console.log(two_d_array);
    for(var i=0; i<n; i++){
        two_d_array[i] = new Array(m);
        console.log(two_d_array[i]);
    }
    for(var i=0; i<n; i++){
        for(var j=0; j<m; j++){
            two_d_array[i][j] = prompt("enter the value for 1'st matrix:");
        }
    }
    //print the 1'st Matix
    for(var i=0; i<n; i++){
        for(var j=0; j<m; j++){
            document.getElementById('matrix1').innerHTML= document.getElementById('matrix1').innerHTML+two_d_array[i][j]+ "&nbsp"+ "&nbsp";
        }
        document.getElementById('matrix1').innerHTML= document.getElementById('matrix1').innerHTML+"<br>";
    }
    document.getElementById('matrix1').innerHTML= document.getElementById('matrix1').innerHTML+"<br>";


    //2'nd Array
    var two_d_array1 = new Array(x);
    for(var i=0; i<x; i++){
        two_d_array1[i] = new Array(y);
    }
    for(var i=0; i<x; i++){
        for(var j=0; j<y; j++){
            two_d_array1[i][j] = prompt("enter the value for 2'st matrix:");
        }
    }
    //print the 2'st Matix
    for(var i=0; i<x; i++){
        for(var j=0; j<y; j++){
            document.getElementById('matrix2').innerHTML= document.getElementById('matrix2').innerHTML+two_d_array1[i][j]+ "&nbsp"+ "&nbsp";
        }
        document.getElementById('matrix2').innerHTML= document.getElementById('matrix2').innerHTML+"<br>";
    }
    document.getElementById('matrix2').innerHTML= document.getElementById('matrix2').innerHTML+"<br>";


    //Multiplication of array
    var sum = 0;
    var rowlength = n
    console.log(rowlength);
    var columnlength = x
    console.log(columnlength);
    var rowlength2 = y
    console.log(rowlength2)
    for(i=0; i<rowlength; i++){
        for(j=0; j<columnlength; j++){
            for(k=0; k<rowlength2; k++){
                sum = sum + two_d_array[i][k] * two_d_array1[k][j];
                console.log(sum)
            }
            document.getElementById('matrix3').innerHTML= document.getElementById('matrix3').innerHTML+sum+ "&nbsp"+ "&nbsp";
            sum=0;
        }
        document.getElementById('matrix3').innerHTML= document.getElementById('matrix3').innerHTML+"<br>";
    }
}