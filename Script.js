// var $slideLink = $("#slide-link"),
//     slideLinkText = $slideLink.find("span")[0];
//
// $slideLink.on("mouseenter", linkOver);
//
// function linkOver() {
//   TweenLite.to(slideLinkText, 0.3, {y: -25, ease: Cubic.easeIn, onComplete: function() {
//     TweenLite.fromTo(slideLinkText, 0.3, {y: 25}, {y: 0, ease: Cubic.easeOut})
//   }});
// }
//
// // Import data
// // Using d3js
// d3.json('repartition_francais.json', function(err, data) {
//   $('#cacao-data-1').text(JSON.stringify(data, null, 2));
// })
//
// function showBlock(imageId) {
//   document.getElementById(imageId).style.display = "block";
//
// }
//
// // Clicks on buttons by id
// $("#button4").click(function(){
//     $("#answer4").toggle();
// });
//
// $("#button2").click(function(){
//     $("#answer2").toggle();
// });
//
// $("#button3").click(function(){
//     $("#answer3").toggle();
// });

function showBlock_intro(imageId) {
   document.getElementById(imageId).style.display = "block";
}
function showBlock(imageId1,bt1,bt2,right_answer) {
   document.getElementById(imageId1).style.display = 'block'; // show answer
   document.getElementById(bt1).disabled=true; // desactivate other buttons
   document.getElementById(bt2).disabled=true;
   //document.getElementById(right_answer).background = #009933; // essayer de mettre en vert le bouton de la vraie réponse
 }

 function showMap(answer1,answer2,answer3,answer4){
   document.getElementById(answer1).style.display = 'block';// show map
   document.getElementById(answer2).style.display = 'none';// hide map2
   document.getElementById(answer3).style.display = 'none';
   document.getElementById(answer4).style.display = 'none';
 }
