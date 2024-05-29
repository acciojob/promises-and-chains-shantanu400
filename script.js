//your JS code here. If required.
document.getElementById("btn").addEventListener('click',function(event){
	event.preventDefault();
	var name=document.getElementById('name').value;
	var age=document.getElementById('age').value;
	myPromise(name,age).then((data)=>{
		alert(data);
	}).catch((err)=>{
		alert(err);
	});
	
})
function myPromise(name,age){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve(`Welcome, ${name}. You can vote.`);
				
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000);
	});

	
}