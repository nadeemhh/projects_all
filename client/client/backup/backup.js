document.querySelector(`.take-backup`).addEventListener('click',function () {
    document.querySelector('body').style.cursor = 'progress';
    Promise.all([entries(store), entries(store2), entries(store3),entries(store4),entries(store5),entries(store6)])
    .then(([data1, data2, data3,data4, data5, data6]) => {
  
      console.log(data1, data2, data3,data4, data5, data6);

      const zip = new JSZip();

// create a couple of JSON files
const json1 = JSON.stringify(data1);
const json2 = JSON.stringify(data2);
const json3 = JSON.stringify(data3);
const json4 = JSON.stringify(data4);
const json5 = JSON.stringify(data5);
const json6 = JSON.stringify(data6);
// add the JSON files to the zip archive
zip.file("file1.json", JSON.stringify(json1));
zip.file("file2.json", JSON.stringify(json2));
zip.file("file3.json", JSON.stringify(json3));
zip.file("file4.json", JSON.stringify(json4));
zip.file("file5.json", JSON.stringify(json5));
zip.file("file6.json", JSON.stringify(json6));
// generate a blob containing the zip archive
zip.generateAsync({ type: "blob" }).then(function (blob) {
  // create a URL for the blob
  const url = URL.createObjectURL(blob);

  // create a link element for downloading the zip file
  const link = document.createElement("a");
  link.href = url;
  link.download = "database2.zip";

  // add the link to the page and click it to trigger the download
  document.body.appendChild(link);
  link.click();

  // clean up the URL object
  URL.revokeObjectURL(url);
  document.querySelector('body').style.cursor = 'auto';
});

  
    })
    .catch((error) => {
      console.error(error);
    });

})


