document.getElementById("ctl00_MainContainer_ddlExpectedGrade").value = "A"
var Theory = "Theory";
var Lab = "Lab";
for(var i = 1; i <= 16; i++){//Change 16 to 12 if you are evaluating a Lab course
 	document.getElementById("ctl00_MainContainer_rbt"+Theory+i+"_0").checked = true;   //Change Theory to Lab if you are evaluating a Lab Course
}
document.getElementById("ctl00_MainContainer_btn"+Theory+"Submit").click();//Change Theory to Lab if you are evaluating a Lab Course
