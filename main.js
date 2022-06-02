var name_array =[];
function submit (){
    var name_1= document.getElementById("name1").value;
    var name_2= document.getElementById("name2").value;
    var name_3= document.getElementById("name3").value;
    var name_4= document.getElementById("name4").value;
name_array.push(name_1);
name_array.push(name_2);
name_array.push(name_3);
name_array.push(name_4);
console.log(name_array);
document.getElementById("display_name").innerHTML=name_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";


}
function sort() {
name_array.sort();
console.log(name_array);
document.getElementById("display_name").innerHTML=name_array;
}