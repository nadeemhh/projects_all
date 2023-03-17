mongoose.connect('mongodb+srv://virtual-trading:hkiyygh68tfgcfhs586@cluster0.ohx5a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')


const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true },
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subjects: [subjectSchema],
});

const Student = mongoose.model('Student', studentSchema);

const mixed = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  data: {
    type: mongoose.Schema.Types.Mixed
  }
});

const mixedata = mongoose.model('mixed', mixed);

//// addd
// const akash = new mixedata({
//   name: 'akash',
//   data: {array1:[
//     { name: 6, level: 9, },
//     { name: 'sst', level: 10, },
//   ]}
// });

// akash.save((err) => {
//   if (err) console.error(err);
//   console.log('Data saved successfully!');
// });


/// add more


mixedata.updateOne({ name: 'ee' }, { $set: { 'data.array1.0.name.2': { u: [6,8,8] }} }, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Student updated successfully!');
    console.log(result);
  }
  mongoose.connection.close();
});

//////////////////////////////////////////////////


let arr=[2,3,5,4,6,8,9,1,10,7,11,16,12,14,19,20,13,15,17,18];
let lowtohigh=[];
let arrlentomatch=arr.length;

function lowesttohigh() {
	

for (let i = 0; i < arr.length; i++) {

let currentvalue=arr[i];
 let lowest=0;

	for (let ii = 0; ii < arr.length; ii++) {

if(currentvalue<arr[ii]){
	lowest++
}
		
if(lowest == arr.length-1){//2

	if(lowtohigh.includes(currentvalue)==false){
		lowtohigh.push(currentvalue)
		arr.splice(arr.indexOf(currentvalue),1)
	}


}

	}

}
}

for (let i = 0; i <= arrlentomatch; i++) {
	lowesttohigh() 
}

console.log(lowtohigh)