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

