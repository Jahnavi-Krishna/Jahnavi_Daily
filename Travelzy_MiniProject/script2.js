var delay_popup=5000;
var feedback = {}
var review;
var reason;

setTimeout("document.getElementById('popup1').style.display='block'",delay_popup);
function feedbackCollect(){
  var name=document.getElementById('fname').value;
  var email=document.getElementById('femail').value;
  var custmor_feedback=document.getElementById('FEEDBACK').value;
  feedback["name"] = name;
  feedback["email"] = email;
  feedback["feedback"] = custmor_feedback;
  feedback["review"] = review;
  feedback["reason"] = reason;

  console.log(feedback);
  document.getElementById('popup4').style.display='none';

  let options = {
    method: 'POST',
    mode: 'cors',
    headers: {
    'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(feedback)
    }


    fetch("http://localhost:3000/feedback/new", options).catch(error => console.log(error))
}
function like(){
  review = true;
  document.getElementById('popup1').style.display='none';
  document.getElementById('popup2').style.display='block';
  // reason = document.getElementById('reason1').value;
}
function dislike(){
  review = false;
  document.getElementById('popup1').style.display='none';
  document.getElementById('popup3').style.display='block';
  // reason = document.getElementById('reason2').value;
}
function userInfo(val){
  reason = val;
  document.getElementById('popup2').style.display='none';
  document.getElementById('popup3').style.display='none';
  document.getElementById('popup4').style.display='block';
}
