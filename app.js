
/*var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
   $scope.list = [['a', 'b', 'r'], ['c', 'd']];
}); 1.1*/


var app = angular.module("myApp", ['ngSanitize']);
app.controller("myCtrl", function($scope){
    var shuffleArray = function(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
    
    $scope.arr = [];
    $scope.arr_1 = [];
   $scope.a_1 = "<img src='img/slide_1.jpg'>";
$scope.b_1 = "<img src='img/slide_2.jpg'>";
$scope.c_1 = "<img src='img/slide_3.jpg'>";
$scope.d_1 = "<img src='img/slide_4.jpg'>";
$scope.e_1 = "<img src='img/slide_5.jpg'>";
$scope.f_1 = "<img src='img/slide_6.jpg'>";
$scope.g_1 = "<img src='img/slide_7.jpg'>";
$scope.h_1 = "<img src='img/slide_8.jpg'>";
$scope.i_1 = "<img src='img/slide_9.jpg'>";
$scope.j_1 = "<img src='img/slide_10.jpg'>";
$scope.k_1 = "<img src='img/slide_11.jpg'>";
$scope.l_1 = "<img src='img/slide_12.jpg'>";
$scope.m_1 = "<img src='img/slide_13.jpg'>";
$scope.n_1 = "<img src='img/slide_14.jpg'>";
$scope.o_1 = "<img src='img/slide_15.jpg'>";
$scope.p_1 = "<img src='img/slide_16.jpg'>";
    
     $scope.a = "<img src='img/slid_1.jpg'>";
$scope.b = "<img src='img/slid_2.jpg'>";
$scope.c = "<img src='img/slid_3.jpg'>";
$scope.d = "<img src='img/slid_4.jpg'>";
$scope.e = "<img src='img/slid_5.jpg'>";
$scope.f = "<img src='img/slid_6.jpg'>";
$scope.g = "<img src='img/slid_7.jpg'>";
$scope.h = "<img src='img/slid_8.jpg'>";
$scope.i = "<img src='img/slid_9.jpg'>";
      $scope.fortofor = false;
    $scope.threetothree = true;
    $scope.three_click= function(){
        if($scope.a == "<img src='img/slid_1.jpg'>"){
            $scope.dis = "asa";
            $scope.red = false;
        }
       if($scope.a == "<img src='img/side_1.jpg'>"){
            $scope.red = "asa";
           $scope.dis = false;
        }
        
       
    $scope.threetothree = true;
    $scope.fortofor = false;
        
    };
    $scope.for_click= function(){
        if($scope.a_1 == "<img src='img/slide_1.jpg'>"){
            $scope.dis = "asa";
            $scope.red = false;
        }
       if($scope.a_1 == "<img src='img/aside_1.jpg'>"){
            $scope.red = "asa";
           $scope.dis = false;
        }
    $scope.threetothree = false;
    $scope.fortofor = true;
        
    };
    var count_1 = 0;
    var count_2 = 0;
    var count_3 = 0;
    var count_4 = 0;
   $scope.dis = "asa"; $scope.arr.push($scope.a,$scope.b,$scope.c,$scope.d,$scope.e,$scope.f,$scope.g,$scope.h,$scope.i);
    shuffleArray($scope.arr);
    $scope.shuffle = function(){
        count_1 = 0;
    count_2 = 0;
    count_3 = 0;
    count_4 = 0;
        shuffleArray($scope.arr);
        $scope.one = $scope.arr[0];
       $scope.two = $scope.arr[1];
       $scope.three = $scope.arr[2];
       $scope.for = $scope.arr[3];
       $scope.five = $scope.arr[4];
       $scope.six = $scope.arr[5];
       $scope.seven = $scope.arr[6];
       $scope.eight = $scope.arr[7];
        $scope.nine = "";
        
        shuffleArray($scope.arr_1);
    $scope.ein = $scope.arr_1[0];
   $scope.zwei = $scope.arr_1[1];
   $scope.drei = $scope.arr_1[2];
   $scope.fier = $scope.arr_1[3];
   $scope.funf = $scope.arr_1[4];
   $scope.sex = $scope.arr_1[5];
   $scope.sieben = $scope.arr_1[6];
   $scope.acht = $scope.arr_1[7];
    $scope.neun = $scope.arr_1[8];
   $scope.zehn = $scope.arr_1[9];
   $scope.elf = $scope.arr_1[10];
   $scope.zweolf = $scope.arr_1[11];
   $scope.dreizehn = $scope.arr_1[12];
   $scope.fierzehn = $scope.arr_1[13];
   $scope.funfzehn = $scope.arr_1[14];
   $scope.sexzehn = "";
    };
    $scope.one = $scope.arr[0];
   $scope.two = $scope.arr[1];
   $scope.three = $scope.arr[2];
   $scope.for = $scope.arr[3];
   $scope.five = $scope.arr[4];
   $scope.six = $scope.arr[5];
   $scope.seven = $scope.arr[6];
   $scope.eight = $scope.arr[7];
    $scope.nine = "";
   
    $scope.photo_js = function(){
        
            $scope.red = "asa";
            $scope.dis = false;
            
        
       
        if($scope.threetothree == true){
            
          count_1++;
          count_3 = 0;
          $scope.arr = [];
            $scope.a = "<img src='img/side_1.jpg'>";
            $scope.b = "<img src='img/side_2.jpg'>";
            $scope.c = "<img src='img/side_3.jpg'>";
            $scope.d = "<img src='img/side_4.jpg'>";
            $scope.e = "<img src='img/side_5.jpg'>";
            $scope.f = "<img src='img/side_6.jpg'>";
            $scope.g = "<img src='img/side_7.jpg'>";
            $scope.h = "<img src='img/side_8.jpg'>";
            $scope.i = "<img src='img/side_9.jpg'>";
            $scope.arr.push($scope.a,$scope.b,$scope.c,$scope.d,$scope.e,$scope.f,$scope.g,$scope.h,$scope.i);
          if(count_1<2){
            shuffleArray($scope.arr);

            $scope.nine = "";
          }
          else{
            $scope.nine = $scope.arr[8];

          }

            $scope.one = $scope.arr[0];
           $scope.two = $scope.arr[1];
           $scope.three = $scope.arr[2];
           $scope.for = $scope.arr[3];
           $scope.five = $scope.arr[4];
           $scope.six = $scope.arr[5];
           $scope.seven = $scope.arr[6];
           $scope.eight = $scope.arr[7];
        
        }
        if($scope.fortofor == true){
            count_3++;
            count_1 = 0;
            $scope.arr_1 = [];
             $scope.a_1 = "<img src='img/aside_1.jpg'>";
            $scope.b_1 = "<img src='img/aside_2.jpg'>";
            $scope.c_1 = "<img src='img/aside_3.jpg'>";
            $scope.d_1 = "<img src='img/aside_4.jpg'>";
            $scope.e_1 = "<img src='img/aside_5.jpg'>";
            $scope.f_1 = "<img src='img/aside_6.jpg'>";
            $scope.g_1 = "<img src='img/aside_7.jpg'>";
            $scope.h_1 = "<img src='img/aside_8.jpg'>";
            $scope.i_1 = "<img src='img/aside_9.jpg'>";
            $scope.j_1 = "<img src='img/aside_10.jpg'>";
            $scope.k_1 = "<img src='img/aside_11.jpg'>";
            $scope.l_1 = "<img src='img/aside_12.jpg'>";
            $scope.m_1 = "<img src='img/aside_13.jpg'>";
            $scope.n_1 = "<img src='img/aside_14.jpg'>";
            $scope.o_1 = "<img src='img/aside_15.jpg'>";
            $scope.p_1 = "<img src='img/aside_16.jpg'>";
            $scope.arr_1.push($scope.a_1,$scope.b_1,$scope.c_1,$scope.d_1,$scope.e_1,$scope.f_1,$scope.g_1,$scope.h_1,$scope.i_1, $scope.j_1, $scope.k_1, $scope.l_1, $scope.m_1, $scope.n_1, $scope.o_1, $scope.p_1);
            if(count_3<2){
            shuffleArray($scope.arr_1);

            $scope.sexzehn = "";
          }
          else{
            $scope.sexzehn = $scope.arr_1[15];

          }
            //shuffleArray($scope.arr_1);
            $scope.ein = $scope.arr_1[0];
           $scope.zwei = $scope.arr_1[1];
           $scope.drei = $scope.arr_1[2];
           $scope.fier = $scope.arr_1[3];
           $scope.funf = $scope.arr_1[4];
           $scope.sex = $scope.arr_1[5];
           $scope.sieben = $scope.arr_1[6];
           $scope.acht = $scope.arr_1[7];
            $scope.neun = $scope.arr_1[8];
           $scope.zehn = $scope.arr_1[9];
           $scope.elf = $scope.arr_1[10];
           $scope.zweolf = $scope.arr_1[11];
           $scope.dreizehn = $scope.arr_1[12];
           $scope.fierzehn = $scope.arr_1[13];
           $scope.funfzehn = $scope.arr_1[14];
          
        }
        
  };
    $scope.photo_ang = function(){
        
            $scope.dis = "asa";
            $scope.red = false;
            
        
        if($scope.threetothree == true){
        
      count_2++;
        count_4 = 0;
      $scope.arr = [];
        $scope.a = "<img src='img/slid_1.jpg'>";
        $scope.b = "<img src='img/slid_2.jpg'>";
        $scope.c = "<img src='img/slid_3.jpg'>";
        $scope.d = "<img src='img/slid_4.jpg'>";
        $scope.e = "<img src='img/slid_5.jpg'>";
        $scope.f = "<img src='img/slid_6.jpg'>";
        $scope.g = "<img src='img/slid_7.jpg'>";
        $scope.h = "<img src='img/slid_8.jpg'>";
        $scope.i = "<img src='img/slid_9.jpg'>";
        $scope.arr.push($scope.a,$scope.b,$scope.c,$scope.d,$scope.e,$scope.f,$scope.g,$scope.h,$scope.i);
      if(count_2<2){
        shuffleArray($scope.arr);
          
        $scope.nine = "";
      }
      else{
        $scope.nine = $scope.arr[8];
           
       
          
      }
      
        $scope.one = $scope.arr[0];
       $scope.two = $scope.arr[1];
       $scope.three = $scope.arr[2];
       $scope.for = $scope.arr[3];
       $scope.five = $scope.arr[4];
       $scope.six = $scope.arr[5];
       $scope.seven = $scope.arr[6];
       $scope.eight = $scope.arr[7];
        }
        if($scope.fortofor == true){
            
            count_4++;
            count_2 = 0;
            $scope.arr_1 = [];
             $scope.a_1 = "<img src='img/slide_1.jpg'>";
            $scope.b_1 = "<img src='img/slide_2.jpg'>";
            $scope.c_1 = "<img src='img/slide_3.jpg'>";
            $scope.d_1 = "<img src='img/slide_4.jpg'>";
            $scope.e_1 = "<img src='img/slide_5.jpg'>";
            $scope.f_1 = "<img src='img/slide_6.jpg'>";
            $scope.g_1 = "<img src='img/slide_7.jpg'>";
            $scope.h_1 = "<img src='img/slide_8.jpg'>";
            $scope.i_1 = "<img src='img/slide_9.jpg'>";
            $scope.j_1 = "<img src='img/slide_10.jpg'>";
            $scope.k_1 = "<img src='img/slide_11.jpg'>";
            $scope.l_1 = "<img src='img/slide_12.jpg'>";
            $scope.m_1 = "<img src='img/slide_13.jpg'>";
            $scope.n_1 = "<img src='img/slide_14.jpg'>";
            $scope.o_1 = "<img src='img/slide_15.jpg'>";
            $scope.p_1 = "<img src='img/slide_16.jpg'>";
            $scope.arr_1.push($scope.a_1,$scope.b_1,$scope.c_1,$scope.d_1,$scope.e_1,$scope.f_1,$scope.g_1,$scope.h_1,$scope.i_1, $scope.j_1, $scope.k_1, $scope.l_1, $scope.m_1, $scope.n_1, $scope.o_1, $scope.p_1);
            if(count_4<2){
            shuffleArray($scope.arr_1);

            $scope.sexzehn = "";
          }
          else{
            $scope.sexzehn = $scope.arr_1[15];

          }
            //shuffleArray($scope.arr_1);
            $scope.ein = $scope.arr_1[0];
           $scope.zwei = $scope.arr_1[1];
           $scope.drei = $scope.arr_1[2];
           $scope.fier = $scope.arr_1[3];
           $scope.funf = $scope.arr_1[4];
           $scope.sex = $scope.arr_1[5];
           $scope.sieben = $scope.arr_1[6];
           $scope.acht = $scope.arr_1[7];
            $scope.neun = $scope.arr_1[8];
           $scope.zehn = $scope.arr_1[9];
           $scope.elf = $scope.arr_1[10];
           $scope.zweolf = $scope.arr_1[11];
           $scope.dreizehn = $scope.arr_1[12];
           $scope.fierzehn = $scope.arr_1[13];
           $scope.funfzehn = $scope.arr_1[14];
          
        }
  };
    $scope.arr_1.push($scope.a_1,$scope.b_1,$scope.c_1,$scope.d_1,$scope.e_1,$scope.f_1,$scope.g_1,$scope.h_1,$scope.i_1, $scope.j_1, $scope.k_1, $scope.l_1, $scope.m_1, $scope.n_1, $scope.o_1, $scope.p_1);
    shuffleArray($scope.arr_1);
    $scope.ein = $scope.arr_1[0];
   $scope.zwei = $scope.arr_1[1];
   $scope.drei = $scope.arr_1[2];
   $scope.fier = $scope.arr_1[3];
   $scope.funf = $scope.arr_1[4];
   $scope.sex = $scope.arr_1[5];
   $scope.sieben = $scope.arr_1[6];
   $scope.acht = $scope.arr_1[7];
    $scope.neun = $scope.arr_1[8];
   $scope.zehn = $scope.arr_1[9];
   $scope.elf = $scope.arr_1[10];
   $scope.zweolf = $scope.arr_1[11];
   $scope.dreizehn = $scope.arr_1[12];
   $scope.fierzehn = $scope.arr_1[13];
   $scope.funfzehn = $scope.arr_1[14];
   $scope.sexzehn = "";
   //$scope.sexzehn = $scope.arr_1[15];
    
 
   //$scope.nine = $scope.arr[8];
   
   $scope.keydown = function($event){
       if($scope.threetothree == true){
           if($scope.one == $scope.a && $scope.two == $scope.b && $scope.three == $scope.c && $scope.for == $scope.d && $scope.five == $scope.e && $scope.six == $scope.f && $scope.seven == $scope.g && $scope.eight == $scope.h){
                alert("Դուք հաղթեցիք...\n Հարգանքներով Արթուր");
               if($scope.one == ""){
               $scope.one = $scope.arr[8];
               }
               if($scope.two == ""){
               $scope.two = $scope.arr[8];
               }
               if($scope.three == ""){
               $scope.three = $scope.arr[8];
               }
               if($scope.for == ""){
               $scope.for = $scope.arr[8];
               }
               if($scope.five == ""){
               $scope.five = $scope.arr[8];
               }
               if($scope.six == ""){
               $scope.six = $scope.arr[8];
               }
               if($scope.seven == ""){
               $scope.seven = $scope.arr[8];
               }
               if($scope.eight == ""){
               $scope.eight = $scope.arr[8];
               }
               if($scope.nine == ""){
               $scope.nine = $scope.arr[8];
               }
               
            }
           
           if($scope.nine == ""){
              if ($event.keyCode == 39) {
                    $scope.nine = $scope.eight;
                    $scope.eight = "";
              }

             else if ($event.keyCode == 40) {
                    $scope.nine = $scope.six;
                    $scope.six = "";
              }
           }
           else if($scope.six == ""){
              if ($event.keyCode == 39) {
                    $scope.six = $scope.five;
                    $scope.five = "";
              }

              else if ($event.keyCode == 40) {
                    $scope.six = $scope.three;
                    $scope.three = "";
              }
               else if ($event.keyCode == 38) {
                    $scope.six = $scope.nine;
                    $scope.nine = "";
              }
           }
            else if($scope.three == ""){
              if ($event.keyCode == 39) {
                    $scope.three = $scope.two;
                    $scope.two = "";
              }

              else if ($event.keyCode == 38) {
                    $scope.three = $scope.six;
                    $scope.six = "";
              }
           }
           else if($scope.two == ""){
              if ($event.keyCode == 39) {
                    $scope.two = $scope.one;
                    $scope.one = "";
              }

              else if ($event.keyCode == 38) {
                    $scope.two = $scope.five;
                    $scope.five = "";
              }
               else if ($event.keyCode == 37) {
                    $scope.two = $scope.three;
                    $scope.three = "";
              }
           }
            else if($scope.one == ""){
              if ($event.keyCode == 38) {
                    $scope.one = $scope.for;
                    $scope.for = "";
              }

              else if ($event.keyCode == 37) {
                    $scope.one = $scope.two;
                    $scope.two = "";
              }
           }
            else if($scope.for == ""){
              if ($event.keyCode == 37) {
                    $scope.for = $scope.five;
                    $scope.five = "";
              }

              else if ($event.keyCode == 38) {
                    $scope.for = $scope.seven;
                    $scope.seven = "";
              }
               else if ($event.keyCode == 40) {
                    $scope.for = $scope.one;
                    $scope.one = "";
              }
           }
           else if($scope.five == ""){
              if ($event.keyCode == 37) {
                    $scope.five = $scope.six;
                    $scope.six = "";
              }

              else if ($event.keyCode == 38) {
                    $scope.five= $scope.eight;
                    $scope.eight = "";
              }
               else if ($event.keyCode == 39) {
                    $scope.five = $scope.for;
                    $scope.for = "";
              }
               else if ($event.keyCode == 40) {
                    $scope.five = $scope.two;
                    $scope.two = "";
              }
           }
            else if($scope.seven == ""){
              if ($event.keyCode == 37) {
                    $scope.seven = $scope.eight;
                    $scope.eight = "";
              }
               else if ($event.keyCode == 40) {
                    $scope.seven = $scope.for;
                    $scope.for = "";
              }
           }
            else if($scope.eight == ""){
              if ($event.keyCode == 37) {
                    $scope.eight = $scope.nine;
                    $scope.nine = "";
              }

              else if ($event.keyCode == 39) {
                    $scope.eight = $scope.seven;
                    $scope.seven = "";
              }
               else if ($event.keyCode == 40) {
                    $scope.eight = $scope.five;
                    $scope.five = "";
              }
           }
       };
       if($scope.fortofor == true){
           if($scope.ein == $scope.a_1 && $scope.zwei == $scope.b_1 && $scope.drei == $scope.c_1 && $scope.fier == $scope.d_1 && $scope.funf == $scope.e_1 && $scope.sex == $scope.f_1 && $scope.sieben == $scope.g_1 && $scope.acht == $scope.h_1 && $scope.neun == $scope.i_1 && $scope.zehn == $scope.j_1 && $scope.elf == $scope.k_1 &&  $scope.zweolf == $scope.l_1 &&  $scope.dreizehn == $scope.m_1 && $scope.fierzehn == $scope.n_1 && $scope.funfzehn == $scope.o_1 && $scope.sexzehn == $scope.p_1){
               alert("Դուք հաղթեցիք... \n Հարգանքներով Արթուր");
               if( $scope.ein == ""){ 
               $scope.ein = $scope.arr_1[15]
               }
               if( $scope.zwei == ""){ 
               $scope.zwei = $scope.arr_1[15]
               }
               if( $scope.drei == ""){ 
               $scope.drei = $scope.arr_1[15]
               } 
               if( $scope.fier == ""){ 
               $scope.fier = $scope.arr_1[15]
               }
               if( $scope.funf == ""){ 
               $scope.funf = $scope.arr_1[15]
               }
               if( $scope.sex == ""){ 
               $scope.sex = $scope.arr_1[15]
               }
               if( $scope.sieben == ""){ 
               $scope.sieben = $scope.arr_1[15]
               }
               if( $scope.acht == ""){ 
               $scope.acht = $scope.arr_1[15]
               }
               if( $scope.neun == ""){ 
               $scope.neun = $scope.arr_1[15]
               }
               if( $scope.zehn == ""){ 
               $scope.zehn = $scope.arr_1[15]
               }
               if( $scope.elf == ""){ 
               $scope.elf = $scope.arr_1[15]
               }
               if( $scope.zweolf == ""){ 
               $scope.zweolf = $scope.arr_1[15]
               }
               if( $scope.dreizehn == ""){ 
               $scope.dreizehn = $scope.arr_1[15]
               } 
               if( $scope.fierzehn == ""){ 
               $scope.fierzehn = $scope.arr_1[15]
               }
               if( $scope.funfzehn == ""){ 
               $scope.funfzehn = $scope.arr_1[15]
               }
               if( $scope.sexzehn == ""){ 
               $scope.sexzehn = $scope.arr_1[15]
               }
              
           };
          if($scope.sexzehn == ""){
              if ($event.keyCode == 39) {
                    $scope.sexzehn = $scope.funfzehn;
                    $scope.funfzehn = "";
              }

             else if ($event.keyCode == 40) {
                    $scope.sexzehn = $scope.zweolf;
                    $scope.zweolf = "";
              }
              
           }
           else if($scope.funfzehn == ""){
              if ($event.keyCode == 39) {
                    $scope.funfzehn = $scope.fierzehn;
                    $scope.fierzehn = "";
              }

             else if ($event.keyCode == 40) {
                    $scope.funfzehn = $scope.elf;
                    $scope.elf = "";
              }
              else if ($event.keyCode == 37) {
                    $scope.funfzehn = $scope.sexzehn;
                    $scope.sexzehn = "";
              }
           }
            else if($scope.fierzehn == ""){
              if ($event.keyCode == 39) {
                    $scope.fierzehn = $scope.dreizehn;
                    $scope.dreizehn = "";
              }

             else if ($event.keyCode == 40) {
                    $scope.fierzehn = $scope.zehn;
                    $scope.zehn = "";
              }
              else if ($event.keyCode == 37) {
                    $scope.fierzehn = $scope.funfzehn;
                    $scope.funfzehn = "";
              }
           }
           else if($scope.dreizehn == ""){

             if ($event.keyCode == 40) {
                    $scope.dreizehn = $scope.neun;
                    $scope.neun = "";
              }
              else if ($event.keyCode == 37) {
                    $scope.dreizehn = $scope.fierzehn;
                    $scope.fierzehn = "";
              }
           }
           else if($scope.zweolf == ""){
              if ($event.keyCode == 39) {
                    $scope.zweolf = $scope.elf;
                    $scope.elf = "";
              }

             else if ($event.keyCode == 40) {
                    $scope.zweolf = $scope.acht;
                    $scope.acht = "";
              }
              else if ($event.keyCode == 38) {
                    $scope.zweolf = $scope.sexzehn;
                    $scope.sexzehn = "";
              }
           }
           else if($scope.elf == ""){
              if ($event.keyCode == 39) {
                    $scope.elf = $scope.zehn;
                    $scope.zehn = "";
              }

             else if ($event.keyCode == 40) {
                    $scope.elf = $scope.sieben;
                    $scope.sieben = "";
              }
              else if ($event.keyCode == 38) {
                    $scope.elf = $scope.funfzehn;
                    $scope.funfzehn = "";
              }
               else if ($event.keyCode == 37) {
                    $scope.elf = $scope.zweolf;
                    $scope.zweolf = "";
              }
           }
            else if($scope.zehn == ""){
              if ($event.keyCode == 39) {
                    $scope.zehn = $scope.neun;
                    $scope.neun = "";
              }

             else if ($event.keyCode == 40) {
                    $scope.zehn = $scope.sex;
                    $scope.sex = "";
              }
              else if ($event.keyCode == 38) {
                    $scope.zehn = $scope.fierzehn;
                    $scope.fierzehn = "";
              }
               else if ($event.keyCode == 37) {
                    $scope.zehn = $scope.elf;
                    $scope.elf = "";
              }
           }
           else if($scope.neun == ""){
              if ($event.keyCode == 37) {
                    $scope.neun = $scope.zehn;
                    $scope.zehn = "";
              }

             else if ($event.keyCode == 40) {
                    $scope.neun = $scope.funf;
                    $scope.funf = "";
              }
              else if ($event.keyCode == 38) {
                    $scope.neun = $scope.dreizehn;
                    $scope.dreizehn = "";
              }
               
           }
           else if($scope.acht == ""){
              if ($event.keyCode == 39) {
                    $scope.acht = $scope.sieben;
                    $scope.sieben = "";
              }

             else if ($event.keyCode == 40) {
                    $scope.acht = $scope.fier;
                    $scope.fier = "";
              }
              else if ($event.keyCode == 38) {
                    $scope.acht = $scope.zweolf;
                    $scope.zweolf = "";
              }
               
           }
           else if($scope.sieben == ""){
              if ($event.keyCode == 39) {
                    $scope.sieben = $scope.sex;
                    $scope.sex = "";
              }

             else if ($event.keyCode == 40) {
                    $scope.sieben = $scope.drei;
                    $scope.drei = "";
              }
              else if ($event.keyCode == 38) {
                    $scope.sieben = $scope.elf;
                    $scope.elf = "";
              }
               else if ($event.keyCode == 37) {
                    $scope.sieben = $scope.acht;
                    $scope.acht = "";
              }
           }
           else if($scope.sex == ""){
              if ($event.keyCode == 39) {
                    $scope.sex = $scope.funf;
                    $scope.funf = "";
              }

             else if ($event.keyCode == 40) {
                    $scope.sex = $scope.zwei;
                    $scope.zwei = "";
              }
              else if ($event.keyCode == 38) {
                    $scope.sex = $scope.zehn;
                    $scope.zehn = "";
              }
               else if ($event.keyCode == 37) {
                    $scope.sex = $scope.sieben;
                    $scope.sieben = "";
              }
           }
           else if($scope.funf == ""){
              if ($event.keyCode == 37) {
                    $scope.funf = $scope.sex;
                    $scope.sex = "";
              }

             else if ($event.keyCode == 40) {
                    $scope.funf = $scope.ein;
                    $scope.ein = "";
              }
              else if ($event.keyCode == 38) {
                    $scope.funf = $scope.neun;
                    $scope.neun = "";
              }
               
           }
           else if($scope.fier == ""){
              if ($event.keyCode == 39) {
                    $scope.fier = $scope.drei;
                    $scope.drei = "";
              }

             else if ($event.keyCode == 38) {
                    $scope.fier = $scope.acht;
                    $scope.acht = "";
              }
               
           }
           else if($scope.drei == ""){
              if ($event.keyCode == 37) {
                    $scope.drei = $scope.fier;
                    $scope.fier = "";
              }

             else if ($event.keyCode == 39) {
                    $scope.drei = $scope.zwei;
                    $scope.zwei = "";
              }
              else if ($event.keyCode == 38) {
                    $scope.drei = $scope.sieben;
                    $scope.sieben = "";
              }
               
           }
           else if($scope.zwei == ""){
              if ($event.keyCode == 37) {
                    $scope.zwei = $scope.drei;
                    $scope.drei = "";
              }

             else if ($event.keyCode == 38) {
                    $scope.zwei = $scope.sex;
                    $scope.sex = "";
              }
              else if ($event.keyCode == 39) {
                    $scope.zwei = $scope.ein;
                    $scope.ein = "";
              }
               
           }
           else if($scope.ein == ""){
              if ($event.keyCode == 37) {
                    $scope.ein = $scope.zwei;
                    $scope.zwei = "";
              }

             else if ($event.keyCode == 38) {
                    $scope.ein = $scope.funf;
                    $scope.funf = "";
              }
               
           }
       }
   };
});