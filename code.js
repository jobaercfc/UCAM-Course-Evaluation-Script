document.getElementById("ctl00_MainContainer_ddlExpectedGrade").value = "A"; //Set your expected Grade Here.
var Theory = "Theory";
var Lab = "Lab";
for(var i = 1; i <= 16; i++){//Change 16 to 12 if you are evaluating a Lab course
 
 // 0 = Strongly Agree, 1 = Agree, 2 = Neither Agree nor Disagree, 3 = Disagree , 4 = Strongly Disagree.
 //Change the value below based on your opinion.
 	document.getElementById("ctl00_MainContainer_rbt"+Theory+i+"_0").checked = true;//Change Theory to Lab if you are evaluating a Lab Course
}
document.getElementById("ctl00_MainContainer_btn"+Theory+"Submit").click();//Change Theory to Lab if you are evaluating a Lab Course
