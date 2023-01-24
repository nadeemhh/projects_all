const express = require('express')
const path = require('path')
var fs = require('fs');
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
let cors = require('cors')
app.use(cors())
var nodemailer = require('nodemailer');
const publicDirectoryPath = path.join(__dirname, './client')
app.use(express.static(publicDirectoryPath))
const port = process.env.PORT || 3600

let availableTest=[{departments:{
    HAEMATOLOGY:[{cbc:[{
        testName:'Haemoglobin',
        shortName:'hb',
        unit:'gm/dL',
        normalRange:'13.0 - 17.0',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
            testName:'Red Blood Cells',
            shortName:'rbc',
            unit:'10^6/uL',
            normalRange:'4.5 - 5.5',
            Partof:'cbc',
            department:'HAEMATOLOGY',
            value:'0.0'
            },{
                testName:'PCV (Packed Cell Volume)',
                shortName:'pcv',
                unit:'%',
                normalRange:'40.0 - 50.0',
                Partof:'cbc',
                department:'HAEMATOLOGY',
                value:'0.0'
                },{
        testName:'MCV (Mean Corpuscular Volume)',
        shortName:'mcv',
        unit:'fL',
        normalRange:'76.0 - 96.0',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
        testName:'MCH (Mean Corpuscular Hemoglobin)',
        shortName:'mch',
        unit:'pg',
        normalRange:'27.0 - 33.0',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
        testName:'MCHC (Mean Corpuscular  Concentration)',
        shortName:'mchc',
        unit:'g/dL',
        normalRange:'30.0 - 35.0',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
        testName:'RDW(Red Cell Distribution Width)',
        shortName:'rdw',
        unit:'%',
        normalRange:'11.6 - 14.0',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
        testName:'MPV (Mean Platelet Volume)',
        shortName:'mpv',
        unit:'%',
        normalRange:'6.0 - 9.0',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
        testName:'Platelet Count',
        shortName:'pl',
        unit:'x10^3/uL',
        normalRange:'150 - 410',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
        testName:'TLC (Total Leukocyte Count)',
        shortName:'tlc',
        unit:'X10^3uL',
        normalRange:'4.00 - 10.00',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
        testName:'Neutrophil',
        shortName:'Neutrophil',
        unit:'%',
        normalRange:'50 - 70',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
        testName:'Lymphocyte',
        shortName:'Lymphocyte',
        unit:'%',
        normalRange:'25 - 40',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
        testName:'Eosinophil',
        shortName:'Eosinophil',
        unit:'%',
        normalRange:'02 - 04',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
        testName:'Monocyte',
        shortName:'Monocyte',
        unit:'%',
        normalRange:'02 - 08',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
        testName:'Basophil',
        shortName:'Basophil',
        unit:'%',
        normalRange:'00 - 01',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
        testName:'MP ',
        shortName:'mp',
        unit:'',
        normalRange:'',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        },{
        testName:'Erythrocyte Sedimentation Rate (ESR)',
        shortName:'esr',
        unit:'mm/hr',
        normalRange:'00 - 19',
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0'
        }],
        newPage:true}],
    BIOCHEMISTRY:[{lft:[{
        testName:'Bilirubin-Total',
        shortName:'',
        unit:'mg/dL',
        normalRange:'0.1 - 1.2',
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0'
        },{
        testName:'Bilirubin- Direct',
        shortName:'',
        unit:'mg/dL',
        normalRange:'0.00 - 0.82',
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0'
        },{
        testName:'Bilirubin-Indirect',
        shortName:'',
        unit:'mg/dl',
        normalRange:'0.20 - 0.70',
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0'
        },{
        testName:'SGOT',
        shortName:'',
        unit:'U/L',
        normalRange:'0 - 32',
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0'
        },{
        testName:'SGPT',
        shortName:'',
        unit:'U/L',
        normalRange:'0 - 33',
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0'
        },{
        testName:'Alkaline Phosphatase',
        shortName:'alp',
        unit:'U/L',
        normalRange:'35 - 104',
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0'
        },{
        testName:'Protein - Total',
        shortName:'',
        unit:'g/dl',
        normalRange:'6.6 - 8.8',
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0'
        },{
        testName:'Albumin',
        shortName:'',
        unit:'g/dL',
        normalRange:'3.5 - 5.5',
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0'
        },{
        testName:'Globulin',
        shortName:'',
        unit:'gm/dl',
        normalRange:'2.30 - 3.60',
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0'
        },{
        testName:'Albumin Globulin Ratio',
        shortName:'agr',
        unit:'',
        normalRange:'1.0 - 2.3',
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0'
        }],
   newPage:true},{ kft:[{
    testName:'Urea',
    shortName:'Urea',
    unit:'mg/dl',
    normalRange:'16.6 - 48.5',
    Partof:'KFT',
    department:'BIOCHEMISTRY',
    value:'0.0'
    },{
    testName:'Creatinine',
    shortName:'Creatinine',
    unit:'mg/dl',
    normalRange:'0.70 - 1.10',
    Partof:'KFT',
    department:'BIOCHEMISTRY',
    value:'0.0'
    },{
    testName:'Uric Acid',
    shortName:'',
    unit:'mg/dl',
    normalRange:'2.4 - 5.7',
    Partof:'KFT',
    department:'BIOCHEMISTRY',
    value:'0.0'
    },{
    testName:'Calcium Total',
    shortName:'',
    unit:'mg/dl',
    normalRange:'8.8 - 10.0',
    Partof:'KFT',
    department:'BIOCHEMISTRY',
    value:'0.0'
    },{
    testName:'Phosphorus',
    shortName:'',
    unit:'mg/dl',
    normalRange:'2.5 - 4.5',
    Partof:'KFT',
    department:'BIOCHEMISTRY',
    value:'0.0'
    },{
    testName:'Sodium',
    shortName:'',
    unit:'mmol/L',
    normalRange:'135 - 155',
    Partof:'KFT',
    department:'BIOCHEMISTRY',
    value:'0.0'
    },{
    testName:'Potassium',
    shortName:'3.5 - 5.5',
    unit:'mmol/L',
    normalRange:'13.0 - 17.0',
    Partof:'KFT',
    department:'BIOCHEMISTRY',
    value:'0.0'
    }],
    newPage:true}],
    IMMUNOLOGYCHEMI:[{thyroidprofile:[{
        testName:'T3 (Trilodothyronine)',
        shortName:'t3',
        unit:'ng/dL',
        normalRange:'80.0 - 200.0',
        Partof:'thyroid profile',
        department:'IMMUNOLOGY - CHEMI',
        value:'0.0'
        },{
        testName:'T4 (Thyroxine)',
        shortName:'t4',
        unit:'ug/dL',
        normalRange:'4.6 - 12.0',
        Partof:'thyroid profile',
        department:'IMMUNOLOGY - CHEMI',
        value:'0.0'
        },{
        testName:'TSH (Thyroid Stimulating Hormone) ',
        shortName:'tsh',
        unit:'uIU/mL',
        normalRange:'0.27 - 5.50',
        Partof:'thyroid profile',
        department:'IMMUNOLOGY - CHEMI',
        value:'0.0'
        }],
        newPage:true}],
    SEROLOGY:[{HBsAg:{
        testName:'HBsAg',
        shortName:'HBsAg',
        unit:'',
        normalRange:'Negative',
        Partof:'none',
        department:'SEROLOGY',
        value:'0.0'
        },
        newPage:true},
        {hcv:{
            testName:'Anti HCV (Rapid) ',
            shortName:'hcv',
            unit:'',
            normalRange:'Negative',
            Partof:'none',
            department:'SEROLOGY',
            value:'0.0'
            },
            newPage:true}]
}}]

app.get('/changedata', async (req, res) => {
    availableTest[0].departments.BIOCHEMISTRY[0].newPage=false;

    fs.writeFile('data.json', JSON.stringify(availableTest), function (err) {
        if (err) throw err;
        console.log('Replaced!');
      });


      const dataBuffer = fs.readFileSync('data.json')
const dataJSON = dataBuffer.toString()
const tests = JSON.parse(dataJSON)
 res.send(tests)
     })



app.listen(port)

