
let testInfo={
    'cbc':{heading:'Complete Blood Count (CBC)', comment:[`comment:`,`null`]},
    'kft':{heading:'Kidney Function Test (KFT)', comment:[`comment:`,`null`]},
    'lft':{heading:'Liver Function Test (LFT)', comment:[`comment:`,`null`]},
    'Blood-Group-&-Rh':{heading:'Blood Group & Rh', comment:[`comment:`,`null`]},
    'HIV-I-&-II-Serology-(Rapid)':{heading:'HIV I & II Serology (Rapid)', comment:[`comment:`,`*	It is a rapid screening procedure which cannot be used as a sole criteria for diagnosis of HIV infection.<br>
    *	A non reactive result implies that no anti HIV I or anti HIV II antibodies have been detected in sample by this      method.<br>
    This means that either the patient has not been exposed to HIV-I or HIV-II infection or the sample has been tested during WINDOW PHASE (before the development of detectable level of antibodies).<br>
    *	A reactive result suggests the possibility of HIV I-II,All positive cases are advised a repeat tests using another methodology. Suppemental test like Western Blot and confirmation by molecular technique (RT-PCR) is mandatory   before pronouncing the patient positive for HIV I/II
    *	Rarely false negativity or positivity may occur.<br>
    *	All results to be read in conjunction with clinical findings and all positive patients should be counselled.<br>
    *	The test has been performed on rapid test kit; confirmation using other technique is highly recommented.<br>
    `]},
    'thyroidprofile':{heading:'thyroid profile', comment:[`comment:`,`Total T3 :- Increased levels are seen in hyperthyroidism and decreased levels are seen in hypothyroidism.
    Total T4:- Increased levels are seen in graves disease under of thyroid as symptoms of hyperthyroidism.Low levels are seen in hypothyroidism whose symptoms are my oxyedema hashmito disease and pituitary disorders.
    TSH :- A high TSH result often means an underactive thyroid gland caused by failure of the gland (hypothyroidism). A low TSH result can indicate an overactive thyroid gland (hyperthyroidism) or damage to the pituitary gland that prevents it from producing TSH.
    <br><br>Below mentioned are the guidelines for age reference ranges for T3, T4, TSH results.`]},
    'Widal':{heading:'Widal Test ( Slide Method) *', comment:[`comment:`,`null`]},
    'LipidProfile':{heading:'Lipid Profile', comment:[`comment:`,`null`]},
    'Dengue-Serology-IgG-&-IgM-(Rapid)':{heading:'Dengue Serology IgG & IgM (Rapid)', comment:[`comment:`,`null`]},
    'Salmonella-Typhi-Dot-IgG-IgM':{heading:'Salmonella Typhi Dot IgG-IgM', comment:[`comment:`,`null`]},
    'UrineR/M(UrineAnalysis)':{heading:'Urine R/M (Urine Analysis)', comment:[`comment:`,`null`]}
};

console.log(testInfo)
let availableTest={departments:{
    HAEMATOLOGY:[{
        testName:'Haemoglobin',
        shortName:'hb',
        unit:'gm/dL',
        normalRange:['M - 13.0 - 17.0','F - 12.0 - 15.0'],
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
            testName:'RBC',
            shortName:'rbc',
            unit:'10^6/uL',
            normalRange:['4.5 - 5.5'],
            Partof:'cbc',
            department:'HAEMATOLOGY',
            value:'0.0',
            Specimen:'WB-EDTA'
            },{
                testName:'PCV',
                shortName:'pcv',
                unit:'%',
                normalRange:['40.0 - 50.0'],
                Partof:'cbc',
                department:'HAEMATOLOGY',
                value:'0.0',
                Specimen:'WB-EDTA'
                },{
        testName:'MCV',
        shortName:'mcv',
        unit:'fL',
        normalRange:['76.0 - 96.0'],
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
        testName:'MCH',
        shortName:'mch',
        unit:'pg',
        normalRange:['27.0 - 33.0'],
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
        testName:'MCHC',
        shortName:'mchc',
        unit:'g/dL',
        normalRange:['30.0 - 35.0'],
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
        testName:'RDW',
        shortName:'rdw',
        unit:'%',
        normalRange:['11.6 - 14.0'],
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
        testName:'MPV',
        shortName:'mpv',
        unit:'%',
        normalRange:['6.0 - 9.0'],
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
        testName:'Platelet Count',
        shortName:'pl',
        unit:'x10^3/uL',
        normalRange:['150 - 410'],
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
        testName:'TLC (Total Leukocyte Count)',
        shortName:'tlc',
        unit:'X10^3uL',
        normalRange:['4.00 - 10.00'],
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
        testName:'Neutrophil',
        shortName:'Neutrophil',
        heading:'DLC (Differential Leukocyte Count)',
        unit:'%',
        normalRange:['50 - 70'],
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
        testName:'Lymphocyte',
        shortName:'Lymphocyte',
        heading:'DLC (Differential Leukocyte Count)',
        unit:'%',
        normalRange:['25 - 40'],
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
        testName:'Eosinophil',
        shortName:'Eosinophil',
        heading:'DLC (Differential Leukocyte Count)',
        unit:'%',
        normalRange:['02 - 04'],
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
        testName:'Monocyte',
        shortName:'Monocyte',
        heading:'DLC (Differential Leukocyte Count)',
        unit:'%',
        normalRange:['02 - 08'],
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
        testName:'Basophil',
        shortName:'Basophil',
        heading:'DLC (Differential Leukocyte Count)',
        unit:'%',
        normalRange:['00 - 01'],
        Partof:'cbc',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
        testName:'MP ',
        shortName:'mp',
        unit:'',
        normalRange:[''],
        Partof:'none',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
        testName:'ESR',
        shortName:'esr',
        unit:'mm/hr',
        normalRange:['00 - 19'],
        Partof:'none',
        department:'HAEMATOLOGY',
        value:'0.0',
        Specimen:'WB-EDTA'
        },{
            testName:'AEC',
            shortName:'',
            unit:'Cells/cumm',
            normalRange:['40 - 440'],
            Partof:'none',
            department:'HAEMATOLOGY',
            value:'0.0',
            Specimen:'WB-EDTA'
            },{
                testName:'Blood Group ABO *',
                shortName:'',
                unit:'',
                normalRange:[''],
                Partof:'Blood-Group-&-Rh',
                department:'HAEMATOLOGY',
                value:"'A'",
                Specimen:'WB-EDTA'
                },{
                    testName:'Rh Typing *',
                    shortName:'',
                    unit:'',
                    normalRange:[''],
                    Partof:'Blood-Group-&-Rh',
                    department:'HAEMATOLOGY',
                    value:'Positive',
                    Specimen:'WB-EDTA'
                    }],
    BIOCHEMISTRY:[{
        testName:'Bilirubin-Total',
        shortName:'',
        unit:'mg/dL',
        normalRange:['0.1 - 1.2'],
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0',
        Specimen:'Serum'
        },{
        testName:'Bilirubin- Direct',
        shortName:'',
        unit:'mg/dL',
        normalRange:['0.00 - 0.82'],
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0',
        Specimen:'Serum'
        },{
        testName:'Bilirubin-Indirect',
        shortName:'',
        unit:'mg/dl',
        normalRange:['0.20 - 0.70'],
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0',
        Specimen:'Serum'
        },{
        testName:'SGOT',
        shortName:'',
        unit:'U/L',
        normalRange:['0 - 32'],
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0',
        Specimen:'Serum'
        },{
        testName:'SGPT',
        shortName:'',
        unit:'U/L',
        normalRange:['0 - 33'],
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0',
        Specimen:'Serum'
        },{
        testName:'Alkaline Phosphatase',
        shortName:'alp',
        unit:'U/L',
        normalRange:['35 - 104'],
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0',
        Specimen:'Serum'
        },{
        testName:'Protein - Total',
        shortName:'',
        unit:'g/dl',
        normalRange:['6.6 - 8.8'],
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0',
        Specimen:'Serum'
        },{
        testName:'Albumin',
        shortName:'',
        unit:'g/dL',
        normalRange:['3.5 - 5.5'],
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0',
        Specimen:'Serum'
        },{
        testName:'Globulin',
        shortName:'',
        unit:'gm/dl',
        normalRange:['2.30 - 3.60'],
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0',
        Specimen:'Serum'
        },{
        testName:'Albumin Globulin Ratio',
        shortName:'agr',
        unit:'',
        normalRange:['1.0 - 2.3'],
        Partof:'lft',
        department:'BIOCHEMISTRY',
        value:'0.0',
        Specimen:'Serum'
        },{
    testName:'Urea',
    shortName:'Urea',
    unit:'mg/dl',
    normalRange:['16.6 - 48.5'],
    Partof:'kft',
    department:'BIOCHEMISTRY',
    value:'0.0',
        Specimen:'Serum'
    },{
    testName:'Creatinine',
    shortName:'Creatinine',
    unit:'mg/dl',
    normalRange:['0.70 - 1.10'],
    Partof:'kft',
    department:'BIOCHEMISTRY',
    value:'0.0',
        Specimen:'Serum'
    },{
    testName:'Uric Acid',
    shortName:'',
    unit:'mg/dl',
    normalRange:['2.4 - 5.7'],
    Partof:'kft',
    department:'BIOCHEMISTRY',
    value:'0.0',
        Specimen:'Serum'
    },{
    testName:'Calcium Total',
    shortName:'',
    unit:'mg/dl',
    normalRange:['8.8 - 10.0'],
    Partof:'kft',
    department:'BIOCHEMISTRY',
    value:'0.0',
        Specimen:'Serum'
    },{
    testName:'Phosphorus',
    shortName:'',
    unit:'mg/dl',
    normalRange:['2.5 - 4.5'],
    Partof:'kft',
    department:'BIOCHEMISTRY',
    value:'0.0',
        Specimen:'Serum'
    },{
    testName:'Sodium',
    shortName:'',
    unit:'mmol/L',
    normalRange:['135 - 155'],
    Partof:'kft',
    department:'BIOCHEMISTRY',
    value:'0.0',
        Specimen:'Serum'
    },{
    testName:'Potassium',
    shortName:'',
    unit:'mmol/L',
    normalRange:['3.5 - 5.5'],
    Partof:'kft',
    department:'BIOCHEMISTRY',
    value:'0.0',
        Specimen:'Serum'
    },{
        testName:'Blood Sugar Fasting',
        shortName:'',
        unit:'mg/dL',
        normalRange:['74 - 106'],
        Partof:'none',
        department:'BIOCHEMISTRY',
        value:'0.0',
            Specimen:'Serum'
        },{
            testName:'Glucose Post Prandial',
            shortName:'',
            unit:'mg/dL',
            normalRange:['80 - 140'],
            Partof:'none',
            department:'BIOCHEMISTRY',
            value:'0.0',
                Specimen:'Serum'
            },{
                testName:'Blood Sugar Random',
                shortName:'',
                unit:'mg/dL',
                normalRange:['80 - 120'],
                Partof:'none',
                department:'BIOCHEMISTRY',
                value:'0.0',
                    Specimen:'Serum'
                },{
                    testName:'C Reactive Protein (CRP) Quantitative',
                    shortName:'',
                    unit:'mg/L',
                    normalRange:['0.0 - 8.0'],
                    Partof:'none',
                    newPage:true,
                    department:'BIOCHEMISTRY',
                    value:'0.0',
                    Specimen:'Serum',
                    comment:[`comment:`,`C-reactive    protein    (CRP)    is     a     normal     serum     constituent     present     in healthy     individuals     in     very low concentrations. Invasive bacterial   infection and extensive tissue damage cause    CRP levels     to     increase. CRP levels rise rapidly and increased values can be detected within 6 to 12 hours after an inflammatory process has begun. Measurement of CRP concentration provides valuable information for the diagnosis of bacterial infections specially in neonates. The CRP concentration has been reported to be a sensitive indicator for use when monitoring the efficacy of antimicrobial therapy, for the follow up of bacterial infections,   and   for   controlling   and monitoring post-operative infections. Monitoring CRP levels may contribute to the early recognition of intercurrent complications occuring after myocardial infarction.`]
                    },{
        testName:'Cholesterol Total',
        shortName:'',
        unit:'mg/dL',
        normalRange:['92 - 234'],
        Partof:'LipidProfile',
        department:'BIOCHEMISTRY',
        value:'0.0',
        Specimen:'Serum'
        },{
        testName:'Triglycerides (TG)',
        shortName:'3.5 - 5.5',
        unit:'mg/dL',
        normalRange:['Desirable <150','Borderline high 150-199','High 200-499',
        'Very High > or = 500'],
        Partof:'LipidProfile',
        department:'BIOCHEMISTRY',
        value:'0.0',
        Specimen:'Serum'
        },{
            testName:'Cholesterol HDL',
            shortName:'',
            unit:'mg/dL',
            normalRange:['> 65	No Risk','45 - 65 Moderate Risk','< 45 High Risk'],
            Partof:'LipidProfile',
            department:'BIOCHEMISTRY',
            value:'0.0',
            Specimen:'Serum'
            },{
            testName:'Cholesterol LDL',
            shortName:'',
            unit:'mg/dL',
            normalRange:['100 - 170'],
            Partof:'LipidProfile',
            department:'BIOCHEMISTRY',
            value:'0.0',
             Specimen:'Serum'
            },{
                testName:'VLDL Cholesterol',
                shortName:'',
                unit:'mg/dL',
                normalRange:['20 - 45'],
                Partof:'LipidProfile',
                department:'BIOCHEMISTRY',
                value:'0.0',
                Specimen:'Serum'
                },{
                testName:'Cholesterol Total / HDL Ratio',
                shortName:'',
                unit:'',
                normalRange:['0.00 - 4.97'],
                Partof:'LipidProfile',
                department:'BIOCHEMISTRY',
                value:'0.0',
                Specimen:'Serum'
                },{
                    testName:'Cholesterol LDL / HDL Ratio',
                    shortName:'',
                    unit:'',
                    normalRange:['0.0 - 3.6'],
                    Partof:'LipidProfile',
                    department:'BIOCHEMISTRY',
                    value:'0.0',
                    Specimen:'Serum'
                    },{
                        testName:'Vitamin D',
                        shortName:'',
                        unit:'ng/mL',
                        normalRange:['20 - 75'],
                        Partof:'none',
                        department:'BIOCHEMISTRY',
                        value:'0.0',
                        Specimen:'Serum',
                        newPage:true,
                        comment:[`comment:`,`This test is used to determine the levels of 25-hydroxyvitamin D and is used to determine if bone weakness, bone malformation,  or  abnormal metabolism of calcium is occuring as a result of a deficiency or excess of vitamin D. Since vitamin D is a fat-soluble vitamin and is absorbed from the intestine like fat, Vitamin D is also a used to monitor individuals with diseases that interfere with fat absorption, such as cystic fibrosis and Crohn's disease, and in patients who have had gastric bypass surgery and may not be able to absorb enough Vitamin D. Vitamin D is also used to determine effectiveness of treatment when vitamin D, calcium, phosphours, and/or magnesium supplementation is prescribed. Modest 25-OH-VitD deficiency is common, in institutionalized elderly, its prevalence may be >50%. Although such less common,severe dificiency is not rare either.
                        Reasons for suboptimal 25-OH-VitD levels include lack of sunshine exposure, inadequate intake;  malabsorption  eg,  due  to  Celiac  disease); depressed hepatic vitamin D 25-hydroxylase activity, secondary to advanced liver disease; and  enzyme-inducing  durgs,  in  particular  many antiepileptic drugs, including phenytoin, phenobarbital, and carbamazepine,  that  increase  25-OH-VitD  metabolism.  In  contrast  to  the  high precalence of 25-OH-VitD deficiency, hypervitaminosis D is rare, and is only seen after prolonged exposure to extremely high doses of vitamin D. When it occurs, it can result in severe hypercalcemia and hyperphosphatemia.
                        `]
                        },{testName:'Vitamin B12',
                        shortName:'',
                        unit:'pg/ml',
                        normalRange:['187 - 883'],
                        Partof:'none',
                        department:'BIOCHEMISTRY',
                        value:'0.0',
                        Specimen:'Serum',
                        newPage:true,
                        comment:[`comment:`,`Vitamin B12 (cobalamin) is an important water-soluble vitamin. In contrast to other water-soluble vitamins it is not excreted quickly in the urine, but rather accumulates and is stored in the liver, kidney and other body tissues. Humans obtain Vitamin B12 exclusively from animal dietary sources, such as meat, eggs and milk. As a result, a vitamin B12 deficiency may not manifest itself until after 5 or 6 years of a diet supplying inadequate amounts. Vitamin B12 functions as a methyl & donor and works with folic acid in the synthesis of DNA and red blood cells and is vitally important in maintaining the health of the insulation sheath (myelin sheath) that surrounds nerve cells.

                        Preservatives such as fluorides & ascorbic acid interfere with this assay. Excessive exposure of the specimen light may alter Vitamin B12 result.
                        `]
                            }],
    IMMUNOLOGYCHEMI:[{
        testName:'T3',
        shortName:'t3',
        unit:'ng/dL',
        normalRange:['80.0 - 200.0'],
        Partof:'thyroidprofile',
        department:'IMMUNOLOGY-CHEMI',
        value:'0.0',
        Specimen:'Serum'
        },{
        testName:'T4',
        shortName:'t4',
        unit:'ug/dL',
        normalRange:['4.6 - 12.0'],
        Partof:'thyroidprofile',
        department:'IMMUNOLOGY-CHEMI',
        value:'0.0',
        Specimen:'Serum'
        },{
        testName:'TSH',
        shortName:'tsh',
        unit:'uIU/mL',
        normalRange:['0.27 - 5.50'],
        Partof:'thyroidprofile',
        department:'IMMUNOLOGY-CHEMI',
        value:'0.0',
        Specimen:'Serum'
        },{testName:'Dengue Ns1 Antigen (Rapid)',
        shortName:'',
        unit:'',
        normalRange:['Negative'],
        Partof:'none',
        department:'IMMUNOLOGY-CHEMI',
        value:'Negative',
        Specimen:'Serum',
        heading:'Dengue Ns1 Antigen (Rapid)', 
        newPage:true,
        comment:[`RESULT INTERPRETATION:`,`Dengue viruses, transmitted by the mosquito, Aedes aegypti and Aedes albopictus mosquitoes, are widely distributed
        throughtout the tropical and subtropical areas of the world. There are four known distinct serotypes (dengue virus 1,2,3   and 4). In children, infection is often subclinical or causes a self -limited febrile disease. However, if the patient is infected a second time with a different serotype, a more severe disease,dengue hemorrhagic fever or dengue shock syndrome, is more likely to occur. Dengue is considered to be the most important arthoropod -borne viral disease due to the human morbidity and mortality it causes.
        NS1 is a  highly-conserved glycoprotein that is present at high concentrations in the sera of Dengue-infected patients  during the early clinical phase of the disease. NS1  antigen is found from the first day and upto 9 days after onset of fever   in sample of primary or secondary Dengue NS1 antigen. Usually IgM does not become detectable until 5 to 10 days after the onset of illness in cases of primary Dengue infection and until 4 to 5 days after onset of illness in  secondary   infections. In primary infections, IgG appears the 14th day and persist for life. Secondary infections show that IgGs rise within 1 - 2 days after the onset of symptoms and induce IgM response after 20 days of infection.`]
            }],
    SEROLOGY:[
        {
        testName:'HBsAg',
        shortName:'HBsAg',
        unit:'',
        normalRange:['Negative'],
        Partof:'none',
        department:'SEROLOGY',
        value:'0.0',
        Specimen:'Serum'
        },{
            testName:'Dengue Serology IgM (Rapid) *',
            shortName:'',
            unit:'',
            normalRange:['Negative'],
            Partof:'Dengue-Serology-IgG-&-IgM-(Rapid)',
            department:'SEROLOGY',
            value:'0.0',
            Specimen:'Serum'
            },{
                testName:'Dengue Serology IgG (Rapid) *',
                shortName:'',
                unit:'',
                normalRange:['Negative'],
                Partof:'Dengue-Serology-IgG-&-IgM-(Rapid)',
                department:'SEROLOGY',
                value:'0.0',
                Specimen:'Serum'
                },{
                    testName:'Salmonella Typhi Dot - IgM *',
                    shortName:'',
                    unit:'',
                    normalRange:['Negative'],
                    Partof:'Salmonella-Typhi-Dot-IgG-IgM',
                    department:'SEROLOGY',
                    value:'0.0',
                    Specimen:'Serum'
                    },{
                        testName:'Salmonella Typhi Dot - IgG *',
                        shortName:'',
                        unit:'',
                        normalRange:['Negative'],
                        Partof:'Salmonella-Typhi-Dot-IgG-IgM',
                        department:'SEROLOGY',
                        value:'0.0',
                        Specimen:'Serum'
                        },{
            testName:'Anti HCV (Rapid)',
            shortName:'hcv',
            unit:'',
            normalRange:['Negative'],
            Partof:'none',
            department:'SEROLOGY',
            value:'0.0',
            Specimen:'Serum'
            },{
                testName:'Widal',
                shortName:'Widal',
                Partof:'none',
                RESULT:'NEGATIVE',
                Specimen:'Serum',
                department:'SEROLOGY',  
                newPage:true, 
                heading:'Widal Test ( Slide Method) *',       
                values:{
                    O:'+,+,-,-,-',
                    H:'+,+,-,-,-',
                    AH:'-,-,-,-,-',
                    BH:'-,-,-,-,-',
                },
                comment:`In non vaccinated persons the titre as high as 1:80 between7th or 10th day of fever is of diagnostic value and the same titre increases gradually during subsequent period. In vaccinated persons the question of anamnestic response should always be borne in mind and 'H' titre should not be taken into account for the purpose of diagnosis unless there is a rising titre of 'H' in subsequent period.`,
                },{
                    testName:'HIV I *',
                    shortName:'',
                    unit:'',
                    normalRange:['Negative'],
                    Partof:'HIV-I-&-II-Serology-(Rapid)',
                    department:'SEROLOGY',
                    value:'Negative',
                    Specimen:'Serum',
                    },{
                        testName:'HIV II *',
                        shortName:'',
                        unit:'',
                        normalRange:['Negative'],
                        Partof:'HIV-I-&-II-Serology-(Rapid)',
                        department:'SEROLOGY',
                        value:'Negative',
                        Specimen:'Serum',

                        },{
                            testName:'VDRL Test (RPR)',
                            shortName:'',
                            unit:'',
                            normalRange:['Negative'],
                            Partof:'none',
                            department:'SEROLOGY',
                            value:'Negative',
                            Specimen:'Serum',
    
                            }],
                CLINICALPATHOLOGY:[
                {
                testName:'Colour',
                shortName:'',
                unit:'',
                normalRange:['Pale Yellow'],
                Partof:'UrineR/M(UrineAnalysis)',
                department:'CLINICALPATHOLOGY',
                value:'Pale Yellow',
                Specimen:'Urine',
                heading:'Physical Examination'
                },{
                    testName:'Transparency',
                    shortName:'',
                    unit:'',
                    normalRange:['Clear'],
                    Partof:'UrineR/M(UrineAnalysis)',
                    department:'CLINICALPATHOLOGY',
                    value:'Clear',
                    Specimen:'Urine',
                    heading:'Physical Examination'
                    },{
                        testName:'pH',
                        shortName:'',
                        unit:'',
                        normalRange:['6.5'],
                        Partof:'UrineR/M(UrineAnalysis)',
                        department:'CLINICALPATHOLOGY',
                        value:'6.5',
                        Specimen:'Urine',
                        heading:'Chemical Examination'
                        },{
                            testName:'Specific Gravity',
                            shortName:'',
                            unit:'',
                            normalRange:['1.005 - 1.030'],
                            Partof:'UrineR/M(UrineAnalysis)',
                            department:'CLINICALPATHOLOGY',
                            value:'1.010',
                            Specimen:'Urine',
                            heading:'Chemical Examination'
                            }, {
                                testName:'Urine Sugar',
                                shortName:'',
                                unit:'',
                                normalRange:['Not Detected'],
                                Partof:'UrineR/M(UrineAnalysis)',
                                department:'CLINICALPATHOLOGY',
                                value:'Not Detected',
                                Specimen:'Urine',
                                heading:'Chemical Examination'
                                },{
                 testName:'Urine Protein',
                 shortName:'',
                 unit:'',
                 normalRange:['Not Detected'],
                 Partof:'UrineR/M(UrineAnalysis)',
                 department:'CLINICALPATHOLOGY',
                 value:'Not Detected',
                 Specimen:'Urine',
                 heading:'Chemical Examination'
                 },{
                     testName:'Urine Bilirubin',
                     shortName:'',
                     unit:'',
                     normalRange:['Not Detected'],
                     Partof:'UrineR/M(UrineAnalysis)',
                     department:'CLINICALPATHOLOGY',
                     value:'Not Detected',
                     Specimen:'Urine',
                     heading:'Chemical Examination'
                     },{
                         testName:'Ketones',
                         shortName:'',
                         unit:'',
                         normalRange:['Not Detected'],
                         Partof:'UrineR/M(UrineAnalysis)',
                         department:'CLINICALPATHOLOGY',
                         value:'Not Detected',
                         Specimen:'Urine',
                         heading:'Chemical Examination'
                         },{
                             testName:'Urobilinogen',
                             shortName:'',
                             unit:'',
                             normalRange:['Normal'],
                             Partof:'UrineR/M(UrineAnalysis)',
                             department:'CLINICALPATHOLOGY',
                             value:'Normal',
                             Specimen:'Urine',
                             heading:'Chemical Examination'
                             },{
                                 testName:'Nitrite',
                                 shortName:'',
                                 unit:'',
                                 normalRange:['Not Detected'],
                                 Partof:'UrineR/M(UrineAnalysis)',
                                 department:'CLINICALPATHOLOGY',
                                 value:'Not Detected',
                                 Specimen:'Urine',
                                 heading:'Chemical Examination'
                                 },{
                  testName:'Pus Cells',
                  shortName:'',
                  unit:'/HPF',
                  normalRange:['0 - 2'],
                  Partof:'UrineR/M(UrineAnalysis)',
                  department:'CLINICALPATHOLOGY',
                  value:'1-2',
                  Specimen:'Urine',
                  heading:'Microscopy Examination'
                  },{
                      testName:'Epithelial Cells',
                      shortName:'',
                      unit:'/HPF',
                      normalRange:['3 - 5'],
                      Partof:'UrineR/M(UrineAnalysis)',
                      department:'CLINICALPATHOLOGY',
                      value:'3-4',
                      Specimen:'Urine',
                      heading:'Microscopy Examination'
                      }, {
                          testName:"RBC's",
                          shortName:'',
                          unit:'',
                          normalRange:['Nil'],
                          Partof:'UrineR/M(UrineAnalysis)',
                          department:'CLINICALPATHOLOGY',
                          value:'Nil',
                          Specimen:'Urine',
                          heading:'Microscopy Examination'
                          },{
                              testName:'Casts',
                              shortName:'',
                              unit:'',
                              normalRange:['Nil'],
                              Partof:'UrineR/M(UrineAnalysis)',
                              department:'CLINICALPATHOLOGY',
                              value:'Nil',
                              Specimen:'Urine',
                              heading:'Microscopy Examination'
                              },{
               testName:'Crystals',
               shortName:'',
               unit:'',
               normalRange:['Nil'],
               Partof:'UrineR/M(UrineAnalysis)',
               department:'CLINICALPATHOLOGY',
               value:'Nil',
               Specimen:'Urine',
               heading:'Microscopy Examination'
               },{
                   testName:'Amorphous Sediments * ',
                   shortName:'',
                   unit:'',
                   normalRange:['Nil'],
                   Partof:'UrineR/M(UrineAnalysis)',
                   department:'CLINICALPATHOLOGY',
                   value:'Nil',
                   Specimen:'Urine',
                   heading:'Microscopy Examination'
                   },{
 testName:'Yeast Cells',
 shortName:'',
 unit:'',
 normalRange:['Nil'],
 Partof:'UrineR/M(UrineAnalysis)',
 department:'CLINICALPATHOLOGY',
 value:'Nil',
 Specimen:'Urine',
 heading:'Microscopy Examination'
 },{
     testName:'Bacteria',
     shortName:'',
     unit:'',
     normalRange:['Not Seen'],
     Partof:'UrineR/M(UrineAnalysis)',
     department:'CLINICALPATHOLOGY',
     value:'Not Seen',
     Specimen:'Urine',
     heading:'Microscopy Examination'
     },]

}}